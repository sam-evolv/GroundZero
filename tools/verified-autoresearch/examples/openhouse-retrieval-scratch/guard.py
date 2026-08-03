import ast
from pathlib import Path

SOURCE = Path('src/retrieval.py')
EXPECTED_DOCSTRING = (
    'Tiny offline proxy for OpenHouse retrieval weighting.\n\n'
    'The held-out evaluator rewards selecting unit-specific and house-type evidence over\n'
    'broader development/global passages. Only SCOPE_WEIGHTS may be changed.\n'
)
EXPECTED_FUNCTION = ast.parse(
    "def score(scope: str, lexical_relevance: float) -> float:\n"
    "    return SCOPE_WEIGHTS[scope] * lexical_relevance\n"
).body[0]

tree = ast.parse(SOURCE.read_text(encoding='utf-8'))
assert len(tree.body) == 3
assert isinstance(tree.body[0], ast.Expr)
assert isinstance(tree.body[0].value, ast.Constant)
assert tree.body[0].value.value == EXPECTED_DOCSTRING
assignment = tree.body[1]
assert isinstance(assignment, ast.Assign)
assert len(assignment.targets) == 1
assert isinstance(assignment.targets[0], ast.Name)
assert assignment.targets[0].id == 'SCOPE_WEIGHTS'
assert isinstance(assignment.value, ast.Dict)
assert all(isinstance(key, ast.Constant) and isinstance(key.value, str) for key in assignment.value.keys)
assert all(
    isinstance(value, ast.Constant) and isinstance(value.value, (int, float))
    for value in assignment.value.values
)
assert ast.dump(tree.body[2], include_attributes=False) == ast.dump(
    EXPECTED_FUNCTION, include_attributes=False
)

SCOPE_WEIGHTS = ast.literal_eval(assignment.value)
assert set(SCOPE_WEIGHTS) == {'unit', 'house_type', 'development', 'global'}
assert SCOPE_WEIGHTS['unit'] == 1.0
assert 0.0 <= SCOPE_WEIGHTS['global'] <= 0.4
assert all(0.0 <= value <= 1.0 for value in SCOPE_WEIGHTS.values())
assert SCOPE_WEIGHTS['unit'] * 0.5 == 0.5
