from src.retrieval import SCOPE_WEIGHTS, score

assert set(SCOPE_WEIGHTS) == {'unit', 'house_type', 'development', 'global'}
assert SCOPE_WEIGHTS['unit'] == 1.0
assert 0.0 <= SCOPE_WEIGHTS['global'] <= 0.4
assert all(0.0 <= value <= 1.0 for value in SCOPE_WEIGHTS.values())
assert score('unit', 0.5) == 0.5
