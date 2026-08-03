import ast
from pathlib import Path

# Synthetic, offline and non-production. The guard runs before this evaluator and
# proves that the candidate contains only the fixed score function plus literal
# SCOPE_WEIGHTS. This evaluator parses those literals and never imports or executes
# candidate-controlled Python.
tree = ast.parse(Path('src/retrieval.py').read_text(encoding='utf-8'))
assignment = tree.body[1]
assert isinstance(assignment, ast.Assign)
weights = ast.literal_eval(assignment.value)

CASES = [
    ([('house_type', 0.91), ('development', 0.78)], 'house_type'),
    ([('house_type', 0.83), ('development', 0.72)], 'house_type'),
    ([('unit', 0.72), ('development', 0.76)], 'unit'),
    ([('unit', 0.88), ('house_type', 0.93)], 'unit'),
    ([('development', 0.81), ('global', 0.99)], 'development'),
    ([('house_type', 0.75), ('global', 1.00)], 'house_type'),
]


def score(scope: str, lexical_relevance: float) -> float:
    return weights[scope] * lexical_relevance


correct = 0
for candidates, expected in CASES:
    winner = max(candidates, key=lambda item: score(*item))[0]
    correct += winner == expected
print(f'AUTORESEARCH_METRIC={correct / len(CASES):.6f}')
