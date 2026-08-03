import json
from dataclasses import replace

import pytest

from test_runner import make_sandbox
from verified_autoresearch.runner import IterationResult, _append_ledger


def result(iteration: int) -> IterationResult:
    return IterationResult(
        iteration=iteration,
        status="rejected",
        hypothesis="test",
        baseline_metric=1.0,
        candidate_metric=0.0,
        changed_files=("src/score.py",),
        proposal_sha256="a" * 64,
        commit=None,
        error=None,
        timestamp="2026-08-03T00:00:00+00:00",
    )


def test_ledger_is_hash_chained_and_rejects_tampering(tmp_path) -> None:
    root, config = make_sandbox(tmp_path)
    _append_ledger(config, result(1))
    _append_ledger(config, replace(result(1), iteration=2))
    ledger = root.parent / f".{root.name}.autoresearch-state" / "ledger.jsonl"
    records = [json.loads(line) for line in ledger.read_text(encoding="utf-8").splitlines()]

    assert records[0]["sequence"] == 1
    assert records[0]["previous_record_sha256"] == "0" * 64
    assert records[1]["previous_record_sha256"] == records[0]["record_sha256"]

    records[0]["result"]["hypothesis"] = "tampered"
    ledger.write_text("\n".join(json.dumps(row) for row in records) + "\n", encoding="utf-8")
    with pytest.raises(RuntimeError, match="integrity"):
        _append_ledger(config, replace(result(1), iteration=3))
