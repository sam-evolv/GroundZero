from __future__ import annotations

import fnmatch
import hashlib
import json
import os
import stat
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
from .state import StateStore, workspace_state


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


def _validated_allowed_paths(config: ExperimentConfig) -> tuple[Path, ...]:
    tracked = {
        Path(value)
        for value in _git(config.workspace, "ls-files", "-z").split("\0")
        if value
    }
    tracked_paths = tuple(sorted(tracked))
    _reject_active_git_filters(config.workspace, tracked_paths)
    matched = tuple(sorted(
        path for path in tracked_paths
        if any(fnmatch.fnmatch(path.as_posix(), pattern) for pattern in config.allowed_globs)
    ))
    if not matched:
        raise RuntimeError("allowlist matched no tracked regular files")
    for relative in matched:
        target = config.workspace / relative
        info = os.lstat(target)
        if not stat.S_ISREG(info.st_mode) or info.st_nlink != 1:
            raise RuntimeError("allowlist must contain only tracked regular non-hard-linked files")
        resolved = target.resolve()
        try:
            resolved.relative_to(config.workspace)
        except ValueError as exc:
            raise RuntimeError("allowlisted source escapes workspace") from exc
        parent = target.parent
        while parent != config.workspace:
            if parent.is_symlink():
                raise RuntimeError("allowlisted source has a symlinked parent")
            parent = parent.parent
    return matched


def _context(config: ExperimentConfig, baseline: float, paths: tuple[Path, ...]) -> str:
    parts = [
        f"OBJECTIVE:\n{config.objective}",
        f"CURRENT_BASELINE_METRIC: {baseline}",
        "ALLOWED_GLOBS:\n" + "\n".join(config.allowed_globs),
        "FILES:",
    ]
    total = 0
    for relative_path in paths:
        directory_fd = os.open(
            config.workspace,
            os.O_RDONLY | os.O_DIRECTORY | os.O_NOFOLLOW,
        )
        try:
            for component in relative_path.parts[:-1]:
                next_fd = os.open(
                    component,
                    os.O_RDONLY | os.O_DIRECTORY | os.O_NOFOLLOW,
                    dir_fd=directory_fd,
                )
                os.close(directory_fd)
                directory_fd = next_fd
            descriptor = os.open(
                relative_path.name,
                os.O_RDONLY | os.O_NOFOLLOW,
                dir_fd=directory_fd,
            )
            try:
                info = os.fstat(descriptor)
                if not stat.S_ISREG(info.st_mode) or info.st_nlink != 1:
                    raise RuntimeError("allowlisted source changed during context read")
                content = os.read(descriptor, 60_001).decode("utf-8")
            finally:
                os.close(descriptor)
        finally:
            os.close(directory_fd)
        block = f"\n--- {relative_path.as_posix()} ---\n{content}"
        total += len(block.encode("utf-8"))
        if total > 60_000:
            raise RuntimeError("allowed source context exceeds 60KB; narrow the allowlist")
        parts.append(block)
    return "\n".join(parts)


def _proposal_hash(proposal: Proposal) -> str:
    body = json.dumps(
        {"hypothesis": proposal.hypothesis, "edits": [asdict(edit) for edit in proposal.edits]},
        sort_keys=True, separators=(",", ":"),
    ).encode("utf-8")
    return hashlib.sha256(body).hexdigest()


def _tracked_fingerprint(root: Path) -> str:
    entries = _git(root, "ls-files", "-z", "--stage").split("\0")
    digest = hashlib.sha256()
    total = 0
    for entry in entries:
        if not entry:
            continue
        try:
            metadata, raw_path = entry.split("\t", 1)
            mode = metadata.split(" ", 1)[0]
            relative = Path(raw_path)
        except ValueError as exc:
            raise RuntimeError("Git index contains an invalid path") from exc
        if mode not in {"100644", "100755"}:
            raise RuntimeError(f"tracked path is not a regular file: {relative}")
        directory_fd = os.open(root, os.O_RDONLY | os.O_DIRECTORY | os.O_NOFOLLOW)
        try:
            for component in relative.parts[:-1]:
                next_fd = os.open(
                    component,
                    os.O_RDONLY | os.O_DIRECTORY | os.O_NOFOLLOW,
                    dir_fd=directory_fd,
                )
                os.close(directory_fd)
                directory_fd = next_fd
            descriptor = os.open(
                relative.name,
                os.O_RDONLY | os.O_NOFOLLOW,
                dir_fd=directory_fd,
            )
            try:
                info = os.fstat(descriptor)
                if not stat.S_ISREG(info.st_mode) or info.st_nlink != 1:
                    raise RuntimeError(f"tracked path changed or is linked: {relative}")
                chunks = []
                while True:
                    chunk = os.read(descriptor, 65_536)
                    if not chunk:
                        break
                    total += len(chunk)
                    if total > 50_000_000:
                        raise RuntimeError("tracked workspace exceeds fingerprint size limit")
                    chunks.append(chunk)
            finally:
                os.close(descriptor)
        finally:
            os.close(directory_fd)
        digest.update(mode.encode("ascii") + b"\0")
        digest.update(relative.as_posix().encode("utf-8") + b"\0")
        digest.update(b"".join(chunks))
        digest.update(b"\0")
    return digest.hexdigest()


def _assert_fingerprint(root: Path, expected: str) -> None:
    if _tracked_fingerprint(root) != expected:
        raise RuntimeError("tracked workspace changed during immutable evaluation")


def _append_ledger(
    config: ExperimentConfig,
    result: IterationResult,
    store: Optional[StateStore] = None,
) -> None:
    if store is not None:
        store.append_result(asdict(result))
        return
    with workspace_state(config) as acquired:
        acquired.append_result(asdict(result))


def run_iteration(
    config: ExperimentConfig,
    model: ProposalModel,
    *,
    iteration: int,
    seen_proposals: Optional[Set[str]] = None,
    executor: Optional[Executor] = None,
    _store: Optional[StateStore] = None,
) -> IterationResult:
    if _store is None:
        with workspace_state(config) as store:
            _validated_allowed_paths(config)
            store.recover()
            return run_iteration(
                config,
                model,
                iteration=iteration,
                seen_proposals=seen_proposals,
                executor=executor,
                _store=store,
            )
    allowlisted_paths = _validated_allowed_paths(config)
    _reject_active_git_filters(config.workspace, allowlisted_paths)
    state = verify_sandbox(config.workspace)
    if executor is None:
        executor = ContainerExecutor(config.workspace, config.container_image)
    baseline = run_evaluator(
        config.evaluator, executor, config.command_timeout_seconds
    ).metric
    proposal = model.propose(
        _context(config, baseline, allowlisted_paths),
        timeout_seconds=config.command_timeout_seconds,
    )
    post_proposal_state = verify_sandbox(config.workspace)
    if post_proposal_state.head != state.head:
        raise RuntimeError("workspace HEAD changed while model was proposing")
    digest = _proposal_hash(proposal)
    if seen_proposals is not None and digest in seen_proposals:
        raise RuntimeError("model repeated an earlier proposal")
    if seen_proposals is not None:
        seen_proposals.add(digest)
    _store.begin(state.head, iteration, digest)

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
        candidate_fingerprint = _tracked_fingerprint(config.workspace)
        for guard in config.guards:
            _assert_fingerprint(config.workspace, candidate_fingerprint)
            run_guard(guard, executor, config.command_timeout_seconds)
            _assert_fingerprint(config.workspace, candidate_fingerprint)
        _assert_fingerprint(config.workspace, candidate_fingerprint)
        candidate = run_evaluator(
            config.evaluator, executor, config.command_timeout_seconds
        ).metric
        _assert_fingerprint(config.workspace, candidate_fingerprint)
        if candidate >= baseline + config.min_delta:
            for guard in config.guards:
                _assert_fingerprint(config.workspace, candidate_fingerprint)
                run_guard(guard, executor, config.command_timeout_seconds)
                _assert_fingerprint(config.workspace, candidate_fingerprint)
            _assert_fingerprint(config.workspace, candidate_fingerprint)
            reproduction = run_evaluator(
                config.evaluator, executor, config.command_timeout_seconds
            ).metric
            _assert_fingerprint(config.workspace, candidate_fingerprint)
            if abs(reproduction - candidate) > 1e-12:
                raise RuntimeError("candidate improvement did not reproduce exactly")
            _reject_active_git_filters(config.workspace, changed)
            _assert_fingerprint(config.workspace, candidate_fingerprint)
            _git(config.workspace, "add", "--", *(path.as_posix() for path in changed))
            _git(
                config.workspace, "-c", "core.hooksPath=/dev/null",
                "-c", "commit.gpgSign=false", "commit", "-m",
                f"autoresearch: accept iteration {iteration}: {proposal.hypothesis[:72]}",
            )
            commit = _git(config.workspace, "rev-parse", "HEAD")
            _assert_fingerprint(config.workspace, candidate_fingerprint)
            _store.set_commit(commit)
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
    try:
        _append_ledger(config, result, _store)
        _store.finish()
    except Exception:
        if status == "accepted":
            hard_reset(config.workspace, state.head)
        _store.finish()
        raise
    return result


def run_campaign(
    config: ExperimentConfig,
    model: ProposalModel,
    *,
    executor: Optional[Executor] = None,
) -> list[IterationResult]:
    with workspace_state(config) as store:
        _validated_allowed_paths(config)
        store.recover()
        started = time.monotonic()
        seen: Set[str] = set()
        results: list[IterationResult] = []
        no_progress = 0
        for iteration in range(1, config.max_iterations + 1):
            if time.monotonic() - started >= config.max_minutes * 60:
                break
            result = run_iteration(
                config, model, iteration=iteration, seen_proposals=seen,
                executor=executor, _store=store,
            )
            results.append(result)
            if result.status == "accepted":
                no_progress = 0
            else:
                no_progress += 1
            if no_progress >= 3:
                break
        return results
