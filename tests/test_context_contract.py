import importlib.util
import json
import unittest
from pathlib import Path


MODULE_PATH = Path(__file__).resolve().parents[1] / "scripts" / "context_contract.py"
SPEC = importlib.util.spec_from_file_location("context_contract", MODULE_PATH)
assert SPEC is not None
context_contract = importlib.util.module_from_spec(SPEC)
assert SPEC.loader is not None
SPEC.loader.exec_module(context_contract)


def event(**overrides):
    value = {
        "event_id": "ctxevt_01",
        "schema_version": 1,
        "owner_id": "owner_01",
        "space": "personal",
        "kind": "declared",
        "subject": "person_sam",
        "field": "communication_style",
        "value": "direct",
        "occurred_at": "2026-08-10T16:00:00+01:00",
        "recorded_at": "2026-08-10T16:01:00+01:00",
        "source_type": "user correction",
        "source_ref": "session_local_01",
        "captured_by": "user",
        "confidence": "confirmed",
        "sensitivity": "ordinary",
        "retention": "durable",
        "supersedes": None,
        "status": "active",
    }
    value.update(overrides)
    return value


class ContextContractTests(unittest.TestCase):
    def test_accepts_valid_event(self):
        self.assertEqual(context_contract.validate_ledger([event()]), [])

    def test_correction_requires_existing_matching_event(self):
        correction = event(
            event_id="ctxevt_02",
            kind="corrected",
            value="concise",
            supersedes="ctxevt_missing",
        )
        errors = context_contract.validate_ledger([correction])
        self.assertTrue(any("supersedes" in error for error in errors), errors)

    def test_accepts_explicit_missing_value(self):
        missing = event(value={"missing": "not_observed"})
        self.assertEqual(context_contract.validate_ledger([missing]), [])

    def test_rejects_implicit_empty_value(self):
        errors = context_contract.validate_ledger([event(value="")])
        self.assertTrue(any("explicit missing-value" in error for error in errors), errors)

    def test_rejects_secret_bearing_value(self):
        errors = context_contract.validate_ledger(
            [event(value={"api_key": "should-never-be-stored"})]
        )
        self.assertTrue(any("secret-bearing key" in error for error in errors), errors)

    def test_rejects_cross_owner_supersession(self):
        original = event()
        correction = event(
            event_id="ctxevt_02",
            owner_id="owner_02",
            kind="corrected",
            supersedes="ctxevt_01",
            value="concise",
        )
        errors = context_contract.validate_ledger([original, correction])
        self.assertTrue(any("same owner" in error for error in errors), errors)

    def test_cli_validates_jsonl(self):
        payload = json.dumps(event()) + "\n"
        parsed = context_contract.parse_jsonl(payload)
        self.assertEqual(parsed, [event()])


if __name__ == "__main__":
    unittest.main()
