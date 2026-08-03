# Synthetic OpenHouse Retrieval Pilot

This fixture contains no OpenHouse production code, documents, credentials or customer data. It exists only to prove the verified-autoresearch mechanics end to end.

The intentionally weak baseline ranks development-level evidence above house-type evidence. The held-out evaluator rewards the expected scope ordering while `guard.py` protects fixed invariants. The local model sees only `src/retrieval.py`; it cannot see or edit the evaluator or guard.

A successful result proves that the model can propose a structured edit and that the runner can validate, score, commit or revert it. It does not prove a real OpenHouse answer-quality improvement.
