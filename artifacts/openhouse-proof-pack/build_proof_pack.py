from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics

OUT = Path('/Users/samdonworth/GroundZero/artifacts/openhouse-proof-pack/OpenHouse_Longview_Developer_Proof_Pack_2026-08-03.pdf')
OUT.parent.mkdir(parents=True, exist_ok=True)

W, H = A4
CHARCOAL = HexColor('#171918')
CHARCOAL_2 = HexColor('#222522')
GOLD = HexColor('#C9A24B')
GOLD_LIGHT = HexColor('#E0C982')
CREAM = HexColor('#F4F0E7')
PAPER = HexColor('#F8F6F0')
INK = HexColor('#232522')
MUTED = HexColor('#6F746E')
LINE = HexColor('#D9D4C8')
GREEN = HexColor('#315A47')
WHITE = HexColor('#FFFFFF')

# Prefer macOS' clean system font if available.
font_candidates = [
    ('Inter', '/System/Library/Fonts/SFNS.ttf'),
    ('Avenir', '/System/Library/Fonts/Avenir Next.ttc'),
]
BODY = 'Helvetica'
BOLD = 'Helvetica-Bold'
for name, path in font_candidates:
    try:
        if Path(path).exists() and path.endswith('.ttf'):
            pdfmetrics.registerFont(TTFont(name, path))
            BODY = name
            break
    except Exception:
        pass

c = canvas.Canvas(str(OUT), pagesize=A4, pageCompression=1)
c.setTitle('OpenHouse Longview Developer Proof Pack')
c.setAuthor('OpenHouse AI Limited')
c.setSubject('Verified Longview evidence and a measured developer pilot')

M = 46
CONTENT_W = W - 2 * M
page_no = 0


def wrap(text, font, size, width):
    words = text.split()
    lines, current = [], ''
    for word in words:
        trial = word if not current else current + ' ' + word
        if stringWidth(trial, font, size) <= width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def para(text, x, y, width, size=9.2, leading=13.2, color=INK, font=BODY, max_lines=None):
    lines = wrap(text, font, size, width)
    if max_lines:
        lines = lines[:max_lines]
    c.setFont(font, size)
    c.setFillColor(color)
    for line in lines:
        c.drawString(x, y, line)
        y -= leading
    return y


def bullet(text, x, y, width, size=9.0, leading=12.7, color=INK):
    c.setFillColor(GOLD)
    c.circle(x + 3, y + 3, 2.1, fill=1, stroke=0)
    return para(text, x + 14, y + 7, width - 14, size=size, leading=leading, color=color)


def section_label(text, x, y, color=GOLD):
    c.setFont(BOLD, 7.4)
    c.setFillColor(color)
    c.drawString(x, y, text.upper())
    return y - 32


def title(text, x, y, width, size=25, color=INK):
    lines = wrap(text, BOLD, size, width)
    c.setFont(BOLD, size)
    c.setFillColor(color)
    for line in lines:
        c.drawString(x, y, line)
        y -= size * 1.08
    return y


def divider(y):
    c.setStrokeColor(LINE)
    c.setLineWidth(0.6)
    c.line(M, y, W - M, y)


def header():
    c.setFont(BOLD, 9)
    c.setFillColor(INK)
    c.drawString(M, H - 32, 'OPENHOUSE')
    c.setFillColor(GOLD)
    c.circle(M + 77, H - 29, 2.3, fill=1, stroke=0)
    c.setFont(BODY, 7.5)
    c.setFillColor(MUTED)
    c.drawRightString(W - M, H - 32, 'LONGVIEW DEVELOPER PROOF PACK')


def footer(label='Verified evidence. Controlled claims.'):
    c.setStrokeColor(LINE)
    c.setLineWidth(0.5)
    c.line(M, 31, W - M, 31)
    c.setFont(BODY, 6.8)
    c.setFillColor(MUTED)
    c.drawString(M, 19, label)
    c.drawRightString(W - M, 19, f'{page_no:02d}')


def new_page(bg=PAPER, with_header=True, footer_label='Verified evidence. Controlled claims.'):
    global page_no
    if page_no:
        footer(footer_label)
        c.showPage()
    page_no += 1
    c.setFillColor(bg)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    if with_header:
        header()


def metric_card(x, y, w, h, number, label, note=''):
    c.setFillColor(WHITE)
    c.roundRect(x, y, w, h, 10, fill=1, stroke=0)
    c.setStrokeColor(LINE)
    c.setLineWidth(0.5)
    c.roundRect(x, y, w, h, 10, fill=0, stroke=1)
    c.setFillColor(GOLD)
    c.setFont(BOLD, 24)
    c.drawString(x + 16, y + h - 34, number)
    c.setFillColor(INK)
    c.setFont(BOLD, 8)
    label_lines = wrap(label.upper(), BOLD, 8, w - 32)
    ly = y + h - 52
    for line in label_lines:
        c.drawString(x + 16, ly, line)
        ly -= 10
    if note:
        para(note, x + 16, y + 18, w - 32, size=6.9, leading=9.2, color=MUTED)


# Cover
new_page(bg=CHARCOAL, with_header=False, footer_label='OpenHouse AI Limited | 3 August 2026')
c.setFillColor(GOLD)
c.circle(M + 4, H - 54, 4, fill=1, stroke=0)
c.setFont(BOLD, 10)
c.drawString(M + 17, H - 58, 'OPENHOUSE')

y = H - 178
y = section_label('Developer evidence pack', M, y, color=GOLD_LIGHT)
y = title('The home record that keeps working after handover.', M, y, CONTENT_W - 30, size=34, color=CREAM)
y -= 16
y = para('Verified Longview usage, one independently certified exact-home experience, and a measured path to a first developer pilot.', M, y, CONTENT_W - 58, size=13, leading=19, color=CREAM)

# Gold rule and summary block
c.setFillColor(GOLD)
c.rect(M, 218, 58, 3, fill=1, stroke=0)
c.setFont(BOLD, 9)
c.setFillColor(GOLD_LIGHT)
c.drawString(M, 186, 'THE EVIDENCE IN ONE LINE')
para('259 property-specific questions across 79 home contexts in four Longview developments, after excluding one explicitly identifiable internal QA home.', M, 161, CONTENT_W - 80, size=12, leading=17, color=CREAM, font=BOLD)
c.setFillColor(HexColor('#2A2D2A'))
c.roundRect(M, 73, CONTENT_W, 52, 9, fill=1, stroke=0)
para('This pack does not claim answer accuracy, workload reduction, retention, paying customers or independent customer validation.', M + 16, 105, CONTENT_W - 32, size=8.6, leading=12.3, color=HexColor('#D8D5CB'))

# Page 2
new_page()
y = H - 82
y = section_label('01 | Verified Longview evidence', M, y)
y = title('Real use, conservatively counted.', M, y, CONTENT_W, size=27)
y -= 8
y = para('A read-only production audit completed on 30 July 2026 excluded one explicitly identifiable internal QA home before calculating these figures.', M, y, CONTENT_W - 35, size=10, leading=14.5, color=MUTED)

card_gap = 10
card_w = (CONTENT_W - card_gap) / 2
metric_card(M, 475, card_w, 112, '4', 'Longview developments', 'Ardan View, Longview Park, Rathard Lawn and Rathard Park')
metric_card(M + card_w + card_gap, 475, card_w, 112, '79', 'home contexts', 'Qualifying activity after a recorded access agreement')
metric_card(M, 351, card_w, 112, '259', 'property-specific questions', 'With 259 recorded assistant answers in the conservative set')
metric_card(M + card_w + card_gap, 351, card_w, 112, '245', 'typed questions', 'Did not match the product\'s built-in suggestion prompts')

c.setFillColor(CHARCOAL)
c.roundRect(M, 239, CONTENT_W, 82, 10, fill=1, stroke=0)
c.setFillColor(GOLD_LIGHT)
c.setFont(BOLD, 18)
c.drawString(M + 18, 288, '133')
c.setFont(BOLD, 8)
c.drawString(M + 18, 270, 'DISTINCT NORMALISED NON-DEFAULT QUESTIONS')
c.setFillColor(CREAM)
c.setFont(BOLD, 18)
c.drawString(M + 300, 288, '38 days')
c.setFont(BOLD, 8)
c.drawString(M + 300, 270, 'QUALIFYING ACTIVITY')
para('15 January to 29 July 2026', M + 300, 252, 175, size=7.5, color=HexColor('#C8CBC5'))

y = 205
y = section_label('Truth boundary', M, y)
y = para('These are home contexts, not a verified count of unique people, active users, customers or paying accounts.', M, y, CONTENT_W, size=10, leading=14.5, color=INK, font=BOLD)

# Page 3
new_page()
y = H - 82
y = section_label('02 | What the evidence reveals', M, y)
y = title('Homeowners ask about the home, not just the handbook.', M, y, CONTENT_W, size=25)
y -= 8

left_w = 235
c.setFillColor(WHITE)
c.roundRect(M, 312, left_w, 332, 10, fill=1, stroke=0)
c.setStrokeColor(LINE)
c.roundRect(M, 312, left_w, 332, 10, fill=0, stroke=1)
c.setFont(BOLD, 10)
c.setFillColor(INK)
c.drawString(M + 18, 612, 'LEADING NON-DEFAULT TOPICS')
by = 584
for text in [
    'Solar panels and reducing energy costs',
    'Heating systems and EV charging',
    'First-year maintenance',
    'Paint, decoration and upgrades',
    'Room dimensions and layout',
    'Warranties',
    'Utilities, broadband and waste collection',
    'Contacting the developer',
    'Schools and local services',
]:
    by = bullet(text, M + 18, by, left_w - 36, size=8.5, leading=11.8)
    by -= 6

rx = M + left_w + 18
rw = CONTENT_W - left_w - 18
c.setFont(BOLD, 10)
c.setFillColor(INK)
c.drawString(rx, 612, 'THE OPERATING LOOP')
loop = [
    ('01', 'Assemble', 'Unit data, developer documents and system context form the home record.'),
    ('02', 'Answer', 'The homeowner asks against the authorised home context.'),
    ('03', 'Learn', 'Questions become aggregate topics and knowledge-gap signals.'),
    ('04', 'Improve', 'The developer adds the missing FAQ or source evidence.'),
]
ly = 574
for n, h, text in loop:
    c.setFillColor(GOLD)
    c.setFont(BOLD, 8)
    c.drawString(rx, ly, n)
    c.setFillColor(INK)
    c.setFont(BOLD, 10)
    c.drawString(rx + 27, ly, h)
    ly = para(text, rx + 27, ly - 15, rw - 27, size=8.2, leading=11.5, color=MUTED)
    ly -= 18

c.setFillColor(CHARCOAL)
c.roundRect(M, 181, CONTENT_W, 100, 10, fill=1, stroke=0)
c.setFillColor(GOLD_LIGHT)
c.setFont(BOLD, 8)
c.drawString(M + 18, 252, 'WHAT THIS PROVES')
para('OpenHouse is already being used for the fabric and systems of the home, setup, aftercare and everyday homeowner decisions.', M + 18, 226, CONTENT_W - 36, size=13, leading=18, color=CREAM, font=BOLD)

# Page 4
new_page()
y = H - 82
y = section_label('03 | Trust and answer quality', M, y)
y = title('A controlled experience, tested at the data plane.', M, y, CONTENT_W, size=25)
y -= 10

y = para('A sanitised, unoccupied show house at 8 Longview Park was independently certified on 1 August 2026.', M, y, CONTENT_W, size=10, leading=14.5, color=MUTED)

metric_card(M, 463, card_w, 112, '163', 'tables probed', 'Across the direct production REST certification')
metric_card(M + card_w + card_gap, 463, card_w, 112, '326', 'anonymous and reviewer requests', 'Zero non-empty responses and zero unexpected errors')

by = 425
for text in [
    'Exact-home reviewer binding with cross-home access denied.',
    '59 authorised documents and one video in the certified home experience.',
    'A grounded warranty answer from a strict allowlist projection of the home record.',
    'Unknown and private metadata excluded, with a 3,200 UTF-8 byte cap.',
    'Lifecycle tests covering logout, restart, copied foreign URLs, expiry and revocation.',
]:
    by = bullet(text, M, by, CONTENT_W, size=9, leading=12.8)
    by -= 7

c.setFillColor(HexColor('#EFE8D6'))
c.roundRect(M, 148, CONTENT_W, 112, 10, fill=1, stroke=0)
c.setFillColor(GOLD)
c.setFont(BOLD, 8)
c.drawString(M + 18, 231, 'ANSWER-QUALITY CORRECTION')
para('A review found that an amenities guard could replace valid home answers with a generic response. PR #205 corrects the routing and replacement boundary. Exact checkpoint 5d56e3bb passed the independent local gate and exact-SHA remote checks on 3 August 2026. It has not been merged or promoted to production.', M + 18, 207, CONTENT_W - 36, size=9.1, leading=13.1, color=INK)
para('Until a post-fix audit is complete, this pack makes no accuracy, workload-reduction or resolution-rate claim.', M + 18, 167, CONTENT_W - 36, size=8.6, leading=12.2, color=GREEN, font=BOLD)

# Page 5
new_page()
y = H - 82
y = section_label('04 | First measured scheme pilot', M, y)
y = title('One scheme. One owner. Measures agreed before launch.', M, y, CONTENT_W, size=25)
y -= 10

c.setFillColor(CHARCOAL)
c.roundRect(M, 536, CONTENT_W, 90, 10, fill=1, stroke=0)
c.setFont(BOLD, 8)
c.setFillColor(GOLD_LIGHT)
c.drawString(M + 18, 596, 'PILOT PRINCIPLE')
para('Do not start with a portfolio-wide promise. Start with one cohort and prove a visible improvement in handover consistency, trusted homeowner guidance or aftercare visibility.', M + 18, 570, CONTENT_W - 36, size=10.5, leading=15, color=CREAM, font=BOLD)

sx = M
sy = 495
c.setFont(BOLD, 10)
c.setFillColor(INK)
c.drawString(sx, sy, 'SCOPE')
sy -= 26
for text in [
    'Validate the unit and document input for the agreed cohort.',
    'Create an exact-home record for each participating home.',
    'Provide a branded homeowner handover and support experience.',
    'Ground answers in approved home records and source documents.',
    'Surface aggregate topics and information gaps to the developer.',
    'Review a short weekly evidence scorecard with the operational owner.',
]:
    sy = bullet(text, sx, sy, CONTENT_W, size=8.8, leading=12.4)
    sy -= 5

c.setFont(BOLD, 10)
c.setFillColor(INK)
c.drawString(sx, sy - 4, 'MEASURES')
sy -= 31
for text in [
    'Completeness of required handover evidence.',
    'Time from completion evidence to homeowner access.',
    'Question categories, evidence-backed resolution and escalation.',
    'Repeated information gaps corrected during the pilot.',
    'Defined homeowner access and return usage.',
    'Developer time spent on the agreed workflow, measured prospectively.',
]:
    sy = bullet(text, sx, sy, CONTENT_W, size=8.8, leading=12.4)
    sy -= 5

# Page 6
new_page()
y = H - 82
y = section_label('05 | Controlled claims and next conversation', M, y)
y = title('Strong enough to open the door. Honest enough to keep trust.', M, y, CONTENT_W, size=25)
y -= 8

col_gap = 18
col_w = (CONTENT_W - col_gap) / 2
c.setFillColor(HexColor('#E9F0EA'))
c.roundRect(M, 375, col_w, 278, 10, fill=1, stroke=0)
c.setFillColor(GREEN)
c.setFont(BOLD, 9)
c.drawString(M + 16, 625, 'APPROVED')
approved = [
    '259 questions across 79 home contexts in four developments, after excluding the QA home.',
    '245 typed questions rather than built-in prompt selections.',
    'Aggregate topics and knowledge gaps are surfaced to developers.',
    'The exact-home reviewer environment passed the recorded certification.',
    'OpenHouse is designed to improve handover consistency and aftercare evidence.',
]
ay = 598
for text in approved:
    ay = bullet(text, M + 16, ay, col_w - 32, size=8, leading=11.2, color=INK)
    ay -= 8

cx = M + col_w + col_gap
c.setFillColor(HexColor('#F1E8E3'))
c.roundRect(cx, 375, col_w, 278, 10, fill=1, stroke=0)
c.setFillColor(HexColor('#8B4E3B'))
c.setFont(BOLD, 9)
c.drawString(cx + 16, 625, 'NOT APPROVED')
not_approved = [
    '79 unique homeowners, active users or paying customers.',
    'A measured answer-accuracy percentage.',
    'A measured reduction in calls, emails or workload.',
    'Measured retention or homeowner satisfaction.',
    'Independent validation by Longview or Bridgewater.',
    'Portfolio-wide enterprise readiness.',
]
ny = 598
for text in not_approved:
    ny = bullet(text, cx + 16, ny, col_w - 32, size=8, leading=11.2, color=INK)
    ny -= 8

c.setFont(BOLD, 10)
c.setFillColor(INK)
c.drawString(M, 337, 'THE SIX QUESTIONS FOR A WARM INTRODUCTION')
qy = 312
questions = [
    'How is handover information assembled and shared today?',
    'Where do questions, snags, warranty requests and documents live after completion?',
    'Does the workflow stay consistent across schemes?',
    'Which part creates the most avoidable work or customer friction?',
    'Which upcoming scheme is the cleanest place to measure a small pilot?',
    'Who owns implementation and who decides whether the pilot expands?',
]
for i, text in enumerate(questions, 1):
    c.setFillColor(GOLD)
    c.setFont(BOLD, 7.5)
    c.drawString(M, qy, f'{i:02d}')
    qy = para(text, M + 24, qy + 3, CONTENT_W - 24, size=8.4, leading=11.6, color=INK)
    qy -= 6

c.setFillColor(CHARCOAL)
c.roundRect(M, 75, CONTENT_W, 64, 10, fill=1, stroke=0)
c.setFillColor(GOLD_LIGHT)
c.setFont(BOLD, 8)
c.drawString(M + 18, 113, 'NEXT STEP')
para('Use this evidence to earn a discovery conversation, then tailor a one-page pilot around the developer\'s stated workflow and one measurable scheme.', M + 18, 92, CONTENT_W - 36, size=9.3, leading=13, color=CREAM, font=BOLD)

footer('OpenHouse AI Limited | Evidence current to 3 August 2026')
c.save()
print(OUT)
