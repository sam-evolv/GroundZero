from src.retrieval import score

# Synthetic, offline and non-production. Each case contains candidate scope/relevance
# pairs and the expected winner. The model never receives this file in its prompt.
CASES = [
    ([('house_type', 0.91), ('development', 0.78)], 'house_type'),
    ([('house_type', 0.83), ('development', 0.72)], 'house_type'),
    ([('unit', 0.72), ('development', 0.76)], 'unit'),
    ([('unit', 0.88), ('house_type', 0.93)], 'unit'),
    ([('development', 0.81), ('global', 0.99)], 'development'),
    ([('house_type', 0.75), ('global', 1.00)], 'house_type'),
]

correct = 0
for candidates, expected in CASES:
    winner = max(candidates, key=lambda item: score(*item))[0]
    correct += winner == expected
print(f'AUTORESEARCH_METRIC={correct / len(CASES):.6f}')
