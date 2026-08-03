"""Tiny offline proxy for OpenHouse retrieval weighting.

The held-out evaluator rewards selecting unit-specific and house-type evidence over
broader development/global passages. Only SCOPE_WEIGHTS may be changed.
"""

SCOPE_WEIGHTS = {
    "unit": 1.0,
    "house_type": 0.60,
    "development": 0.90,
    "global": 0.20,
}


def score(scope: str, lexical_relevance: float) -> float:
    return SCOPE_WEIGHTS[scope] * lexical_relevance
