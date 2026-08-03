from pathlib import Path
from pypdf import PdfReader

pdf = Path('/Users/samdonworth/GroundZero/artifacts/openhouse-proof-pack/OpenHouse_Longview_Developer_Proof_Pack_2026-08-03.pdf')
reader = PdfReader(str(pdf))
text = '\n'.join((page.extract_text() or '') for page in reader.pages)
normalized = ' '.join(text.split())
checks = {
    'page_count': len(reader.pages) == 6,
    'usage_metric': '259 property-specific questions' in text,
    'home_contexts': '79 home contexts' in text,
    'typed_metric': '245 typed questions' in text,
    'exact_sha': '5d56e3bb' in text,
    'remote_checks': 'exact-SHA remote checks on 3 August 2026' in normalized,
    'not_merged': 'not been merged or promoted to production' in text,
    'claim_boundary': 'no accuracy, workload-reduction or resolution-rate claim' in text,
}
print(f'bytes={pdf.stat().st_size}')
print(f'pages={len(reader.pages)}')
for key, value in checks.items():
    print(f'{key}={value}')
if not all(checks.values()):
    raise SystemExit(1)
