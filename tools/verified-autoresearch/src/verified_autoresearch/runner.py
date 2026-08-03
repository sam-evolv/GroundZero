from __future__ import annotations

import fcntl
import hashlib
import json
import os
import subprocess
import time
from dataclasses import asdict, dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional, Protocol, Set

from .config import ExperimentConfig
from .container import ContainerExecutor, ContainerFailure
from .edits import apply_edits
from .evaluator import CommandFailure, Executor, run_evaluator, run_guard
from .proposal import Proposal
from .sandbox import hard_reset, verify_sandbox


class ProposalModel(Protocol):
    def propose(self, context: str, timeout_seconds: int) -> Proposal:
        ...


@dataclass(frozen=True)
class IterationResult:
    iteration: int
    status: str
    hypothesis: str
    baseline_metric: float
    candidate_metric: Optional[float]
    changed_files: tuple[str, ...]
    proposal_sha256: str
    commit: Optional[str]
    error: Optional[str]
    timestamp: str
    reproduction_metric: Optional[float] = None


def _git(root: Path, *args: str) -> str:
    result = subprocess.run(
        ["/usr/bin/git", *args], cwd=root, text=True, capture_output=True, check=True,
        stdin=subprocess.DEVNULL,
        env={"PATH": "/usr/bin:/bin:/usr/sbin:/sbin"},
    )
    return result.stdout.strip()


def _reject_active_git_filters(root: Path, paths: tuple[Path, ...]) -> None:
    for path in paths:
        output = _git(root, "check-attr", "filter", "--", path.as_posix())
        value = output.rsplit(": ", 1)[-1]
        if value not in {"unspecified", "unset"}:
            raise RuntimeError(f"active Git filter is forbidden for {path.as_posix()}")


def _context(config: ExperimentConfig, baseline: float) -> str:
    parts = [
        f"OBJECTIVE:\n{config.objective}",
        f"CURRENT_BASELINE_METRIC: {baseline}",
        "ALLOWED_GLOBS:\n" + "\n".join(config.allowed_globs),
        "FILES:",
    ]
    total = 0
    for pattern in config.allowed_globs:
        for path in sorted(config.workspace.glob(pattern)):
            if path.is_symlink() or not path.is_file():
                continue
            relative = path.relative_to(config.workspace).as_posix()
            content = path.read_text(encoding="utf-8")
            block = f"\n--- {relative} ---\n{content}"
            total += len(block.encode("utf-8"))
            if total > 60_000:
                raise RuntimeError("allowed source context exceeds 60KB; narrow the allowlist")
            parts.append(block)
    if len(parts) == 4:
        raise RuntimeError("allowlist matched no readable files")
    return "\n".join(parts)


def _proposal_hash(proposal: Proposal) -> str:
    body = json.dumps(
        {"hypothesis": proposal.hypothesis, "edits": [asdict(edit) for edit in proposal.edits]},
        sort_keys=True, separators=(",", ":"),
    ).encode("utf-8")
    return hashlib.sha256(body).hexdigest()


def _append_ledger(config: ExperimentConfig, result: IterationResult) -> None:
    state_dir = config.workspace.parent / f".{config.workspace.name}.autoresearch-state"
    state_dir.mkdir(mode=0o700, parents=True, exist_ok=True)
    ledger = state_dir / "ledger.jsonl"
    with open(
        ledger,
        "a+",
        encoding="utf-8",
        opener=lambda path, flags: os.open(path, flags, 0o600),
    ) as handle:
        fcntl.flock(handle.fileno(), fcntl.LOCK_EX)
        handle.seek(0)
        previous = "0" * 64
        sequence = 0
        for line in handle:
            try:
                record = json.loads(line)
                payload = {
                    "sequence": record["sequence"],
                    "previous_record_sha256": record["previous_record_sha256"],
                    "result": record["result"],
                }
                expected = hashlib.sha256(
                    json.dumps(payload, sort_keys=True, separators=(",", ":")).encode("utf-8")
                ).hexdigest()
                if (
                    set(record) != {*payload, "record_sha256"}
                    or record["sequence"] != sequence + 1
                    or record["previous_record_sha256"] != previous
                    or record["record_sha256"] != expected
                ):
                    raise RuntimeError("ledger integrity check failed")
            except (json.JSONDecodeError, KeyError, TypeError) as exc:
                raise RuntimeError("ledger integrity check failed") from exc
            sequence = record["sequence"]
            previous = record["record_sha256"]
        payload = {
            "sequence": sequence + 1,
            "previous_record_sha256": previous,
            "result": asdict(result),
        }
        digest = hashlib.sha256(
            json.dumps(payload, sort_keys=True, separators=(",", ":")).encode("utf-8")
        ).hexdigest()
        record = {**payload, "record_sha256": digest}
        handle.seek(0, os.SEEK_END)
        handle.write(json.dumps(record, sort_keys=True, separators=(",", ":")) + "\n")
        handle.flush()
        os.fsync(handle.fileno())


def run_iteration(
    config: ExperimentConfig,
    model: ProposalModel,
    *,
    iteration: int,
    seen_proposals: Optional[Set[str]] = None,
    executor: Optional[Executor] = None,
) -> IterationResult:
    allowlisted_paths = tuple(
        path.relative_to(config.workspace)
        for pattern in config.allowed_globs
        for path in sorted(config.workspace.glob(pattern))
        if path.is_file() and not path.is_symlink()
    )
    _reject_active_git_filters(config.workspace, allowlisted_paths)
    state = verify_sandbox(config.workspace)
    if executor is None:
        executor = ContainerExecutor(config.workspace, config.container_image)
    baseline = run_evaluator(
        config.evaluator, executor, config.command_timeout_seconds
    ).metric
    proposal = model.propose(
        _context(config, baseline), timeout_seconds=config.command_timeout_seconds
    )
    post_proposal_state = verify_sandbox(config.workspace)
    if post_proposal_state.head != state.head:
        raise RuntimeError("workspace HEAD changed while model was proposing")
    digest = _proposal_hash(proposal)
    if seen_proposals is not None and digest in seen_proposals:
        raise RuntimeError("model repeated an earlier proposal")
    if seen_proposals is not None:
        seen_proposals.add(digest)

    changed: tuple[Path, ...] = ()
    candidate: Optional[float] = None
    reproduction: Optional[float] = None
    commit: Optional[str] = None
    status = "failed"
    error: Optional[str] = None
    try:
        changed = apply_edits(
            root=config.workspace,
            edits=list(proposal.edits),
            allowed_globs=config.allowed_globs,
            max_files=config.max_files,
            max_total_bytes=config.max_edit_bytes,
        )
        actual = tuple(
            Path(line) for line in _git(config.workspace, "diff", "--name-only").splitlines() if line
        )
        if tuple(sorted(actual)) != tuple(sorted(changed)):
            raise RuntimeError("git diff does not exactly match validated edits")
        for guard in config.guards:
            run_guard(guard, executor, config.command_timeout_seconds)
        candidate = run_evaluator(
            config.evaluator, executor, config.command_timeout_seconds
        ).metric
        if candidate >= baseline + config.min_delta:
            for guard in config.guards:
                run_guard(guard, executor, config.command_timeout_seconds)
            reproduction = run_evaluator(
                config.evaluator, executor, config.command_timeout_seconds
            ).metric
            if abs(reproduction - candidate) > 1e-12:
                raise RuntimeError("candidate improvement did not reproduce exactly")
            _reject_active_git_filters(config.workspace, changed)
            _git(config.workspace, "add", "--", *(path.as_posix() for path in changed))
            _git(
                config.workspace, "-c", "core.hooksPath=/dev/null",
                "-c", "commit.gpgSign=false", "commit", "-m",
                f"autoresearch: accept iteration {iteration}: {proposal.hypothesis[:72]}",
            )
            commit = _git(config.workspace, "rev-parse", "HEAD")
            status = "accepted"
        else:
            status = "rejected"
    except (
        CommandFailure,
        ContainerFailure,
        RuntimeError,
        ValueError,
        subprocess.CalledProcessError,
    ) as exc:
        error = str(exc)
        status = "failed"
    finally:
        if status != "accepted":
            hard_reset(config.workspace, state.head)

    result = IterationResult(
        iteration=iteration,
        status=status,
        hypothesis=proposal.hypothesis,
        baseline_metric=baseline,
        candidate_metric=candidate,
        changed_files=tuple(path.as_posix() for path in changed),
        proposal_sha256=digest,
        commit=commit,
        error=error,
        timestamp=datetime.now(timezone.utc).isoformat(),
        reproduction_metric=reproduction,
    )
    _append_ledger(config, result)
    return result


def run_campaign(
    config: ExperimentConfig,
    model: ProposalModel,
    *,
    executor: Optional[Executor] = None,
) -> list[IterationResult]:
    started = time.monotonic()
    seen: Set[str] = set()
    results: list[IterationResult] = []
    no_progress = 0
    for iteration in range(1, config.max_iterations + 1):
        if time.monotonic() - started >= config.max_minutes * 60:
            break
        try:
            result = run_iteration(
                config, model, iteration=iteration, seen_proposals=seen,
                executor=executor,
            )
        except RuntimeError:
            break
        results.append(result)
        if result.status == "accepted":
            no_progress = 0
        else:
            no_progress += 1
        if no_progress >= 3:
            break
    return results
