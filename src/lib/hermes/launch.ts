import { buildCouncilContext } from "./context";
import { callModel, extractJson } from "./model";

export interface LaunchBriefResult {
  date: string;
  heartbeat: string;
  summary: string;
  companyId: string;
  title: string;
  thesis: string;
  buyer: string;
  wedge: string;
  offer: string;
  validationTest: string;
  approvalGates: string[];
  signalMetrics: string[];
  nextStep: string;
  landingHeadline: string;
  landingSubhead: string;
  landingPoints: string[];
  landingCta: string;
  outreachMessage: string;
  followUpMessage: string;
  qualificationQuestions: string[];
  signalCapture: string;
  focus?: string;
  mode: "live" | "dry-run";
}

const LAUNCH_SYSTEM_PROMPT = `You are the launch-loop operator inside Ground Zero. Your job is not to brainstorm. Your job is to identify the single highest-leverage near-term business wedge, shape it into a concrete launch brief, and leave behind something the founder can act on immediately.

Rules:
- Ground every claim in the provided vault context.
- Choose exactly one valid company_id from the list provided.
- Optimize for near-term cash, fast learning, and a clear market test.
- Prefer painful, document-heavy, repetitive, or distribution-rich problems.
- approval_gates must include customer-facing publishing, sending, and spending.
- signal_metrics must describe what evidence would tell us the idea is working.
- Respond with only a single JSON object and nothing else.`;

export async function runLaunchLoop(focus?: string): Promise<LaunchBriefResult> {
  const context = await buildCouncilContext();
  const text = await callModel({
    system: LAUNCH_SYSTEM_PROMPT,
    user: buildLaunchUserMessage(context.date, context.companyIds, context.briefingText, focus),
  });

  if (text === null) {
    return dryRunLaunch(context.companyIds, focus);
  }

  const parsed = extractJson<{
    heartbeat?: string;
    summary?: string;
    company_id?: unknown;
    title?: unknown;
    thesis?: unknown;
    buyer?: unknown;
    wedge?: unknown;
    offer?: unknown;
    validation_test?: unknown;
    approval_gates?: unknown;
    signal_metrics?: unknown;
    next_step?: unknown;
    focus?: unknown;
    landing_headline?: unknown;
    landing_subhead?: unknown;
    landing_points?: unknown;
    landing_cta?: unknown;
    outreach_message?: unknown;
    follow_up_message?: unknown;
    qualification_questions?: unknown;
    signal_capture?: unknown;
  }>(text);

  if (!parsed) {
    throw new Error("The launch loop response was not valid JSON");
  }

  const companyId = normalizeCompanyId(parsed.company_id, context.companyIds, focus);
  return {
    date: context.date,
    heartbeat: stringOr(parsed.heartbeat, "Launch brief ready. Approve the smallest useful next move."),
    summary: stringOr(parsed.summary, ""),
    companyId,
    title: stringOr(parsed.title, `Launch ${companyName(companyId)} next wedge`),
    thesis: stringOr(parsed.thesis, ""),
    buyer: stringOr(parsed.buyer, ""),
    wedge: stringOr(parsed.wedge, ""),
    offer: stringOr(parsed.offer, ""),
    validationTest: stringOr(parsed.validation_test, ""),
    approvalGates: listOfStrings(parsed.approval_gates),
    signalMetrics: listOfStrings(parsed.signal_metrics),
    nextStep: stringOr(parsed.next_step, ""),
    landingHeadline: stringOr(parsed.landing_headline, `Get ${companyName(companyId)} more bookings`),
    landingSubhead: stringOr(parsed.landing_subhead, stringOr(parsed.offer, "")),
    landingPoints: listOfStrings(parsed.landing_points),
    landingCta: stringOr(parsed.landing_cta, "Book a call"),
    outreachMessage: stringOr(parsed.outreach_message, ""),
    followUpMessage: stringOr(parsed.follow_up_message, ""),
    qualificationQuestions: listOfStrings(parsed.qualification_questions),
    signalCapture: stringOr(parsed.signal_capture, "Track replies, calls booked, objections, and pilots."),
    focus: stringOr(parsed.focus, focus ?? ""),
    mode: "live",
  };
}

function buildLaunchUserMessage(date: string, companyIds: string[], briefingText: string, focus?: string): string {
  const parts = [
    `Today is ${date}. Current state of the businesses from the vault:`,
    "",
    briefingText,
    "",
    `Valid company ids (use one exact string for company_id): ${companyIds.join(", ")}`,
  ];
  if (focus && focus.trim()) {
    parts.push("", `The founder asked you to focus on: ${focus.trim()}`);
  }
  parts.push(
    "",
    "Return only this JSON object and nothing else:",
    '{"heartbeat":"one calm sentence","summary":"short summary","company_id":"...","title":"...","thesis":"...","buyer":"...","wedge":"...","offer":"...","validation_test":"...","approval_gates":["..."],"signal_metrics":["..."],"next_step":"...","landing_headline":"...","landing_subhead":"...","landing_points":["..."],"landing_cta":"...","outreach_message":"...","follow_up_message":"...","qualification_questions":["..."],"signal_capture":"..."}'
  );
  return parts.join("\n");
}

function dryRunLaunch(companyIds: string[], focus?: string): LaunchBriefResult {
  const companyId = chooseDefaultCompanyId(companyIds, focus);
  const company = companyName(companyId);
  const defaultData = launchDefaults(companyId);
  return {
    date: new Date().toISOString().slice(0, 10),
    heartbeat: "Dry run. Add a model provider key to let the launch loop think for real.",
    summary: "This launch brief was generated in dry-run mode without a live model call.",
    companyId,
    title: `Launch ${company} ${defaultData.wedge}`,
    thesis: defaultData.thesis,
    buyer: defaultData.buyer,
    wedge: defaultData.wedge,
    offer: defaultData.offer,
    validationTest: defaultData.validationTest,
    approvalGates: defaultData.approvalGates,
    signalMetrics: defaultData.signalMetrics,
    nextStep: defaultData.nextStep,
    landingHeadline: defaultData.landingHeadline,
    landingSubhead: defaultData.landingSubhead,
    landingPoints: defaultData.landingPoints,
    landingCta: defaultData.landingCta,
    outreachMessage: defaultData.outreachMessage,
    followUpMessage: defaultData.followUpMessage,
    qualificationQuestions: defaultData.qualificationQuestions,
    signalCapture: defaultData.signalCapture,
    focus,
    mode: "dry-run",
  };
}

function launchDefaults(companyId: string) {
  switch (companyId) {
    case "openhouse-ai":
      return {
        wedge: "handover and aftercare wedge",
        thesis: "OpenHouse can create value faster by turning handover, aftercare, and compliance evidence into a clean operating layer that saves time and proves the work was done.",
        buyer: "Property developers and operations leads",
        offer: "A launchable handover and aftercare workflow that centralises documents, homeowner questions, and evidence in one place.",
        validationTest: "Show the brief to one developer and ask if they would trial it on the next scheme.",
        approvalGates: ["approve page copy", "approve outreach copy", "approve any customer-facing send", "approve any money movement"],
        signalMetrics: ["trial interest", "replies from developers", "handover friction reduced", "documents found faster"],
        nextStep: "Pick one live scheme and draft the smallest pilot offer.",
        landingHeadline: "Reduce handover chaos on the next scheme",
        landingSubhead: "Turn handover, aftercare, and evidence into one clean workflow your team can actually run.",
        landingPoints: ["One place for documents, questions, and evidence", "Less chasing across WhatsApp and email", "A pilot that proves value on the next scheme"],
        landingCta: "Ask for a pilot",
        outreachMessage: "Hi — I’m testing a simple handover and aftercare workflow that reduces the admin and back-and-forth around the next scheme. If I send a 1-page pilot brief, would you tell me if it fits your current process?",
        followUpMessage: "Quick follow-up — if handover admin or homeowner questions are a pain right now, I can tailor the pilot brief to your next live scheme and keep it very small.",
        qualificationQuestions: ["What is the biggest handover/admin bottleneck today?", "Where do questions and documents get lost?", "Would a small pilot on the next scheme be worth testing?"],
        signalCapture: "Track whether developers reply, whether they ask for a pilot, and which handover pain lands most strongly.",
      };
    case "evolv-renewables":
      return {
        wedge: "compliance reporting wedge",
        thesis: "Evolv can create value by turning commissioning, warranty, and reporting admin into a repeatable evidence workflow.",
        buyer: "Operations and delivery managers",
        offer: "A structured aftercare and compliance pack that reduces manual follow-up and support questions.",
        validationTest: "Ask one installer whether this would save them time on the next job.",
        approvalGates: ["approve launch page", "approve customer messaging", "approve any spend", "approve any public commitment"],
        signalMetrics: ["pilot interest", "admin time saved", "fewer repeated support questions", "faster report assembly"],
        nextStep: "Choose the most repetitive reporting workflow and turn it into a pilot.",
        landingHeadline: "Turn commissioning and warranty admin into one clean workflow",
        landingSubhead: "Cut the repetition in reports, support follow-up, and evidence collection.",
        landingPoints: ["Reduce manual follow-up", "Find documents faster", "Ship reports with less admin"],
        landingCta: "Request a pilot pack",
        outreachMessage: "Hi — I’m exploring a lightweight evidence workflow for commissioning and warranty admin. Would a short pilot brief be useful if it could cut the repetitive reporting work?",
        followUpMessage: "Following up — if reporting or support admin is chewing up time, I can tailor a small pilot around the most repetitive part.",
        qualificationQuestions: ["Which reporting/admin task takes the most time?", "What evidence is hardest to gather?", "Would a small pilot be worth testing on the next job?"],
        signalCapture: "Track whether they respond, ask for a pilot, or name a specific admin task as the pain.",
      };
    case "openbook":
    default:
      return {
        wedge: "no-show reduction wedge",
        thesis: "OpenBook can create value fastest by helping small Irish service businesses reduce missed appointments and recover lost bookings.",
        buyer: "Owner-operators of local service businesses",
        offer: "A booking workflow that reduces no-shows with reminders, deposits, and clearer pre-visit expectations.",
        validationTest: "Show the brief to five venues and ask which no-show problem hurts most.",
        approvalGates: ["approve page copy", "approve outbound messages", "approve any customer send", "approve any spend"],
        signalMetrics: ["reply rate", "pilot requests", "reduced no-shows", "revenue recovered"],
        nextStep: "Pick three new local venues and draft a pilot message for them.",
        landingHeadline: "Cut no-shows before they cost you the booking",
        landingSubhead: "A simple booking workflow that reminds, nudges, and protects revenue when customers forget.",
        landingPoints: ["Less lost revenue from missed appointments", "Clearer expectations before the visit", "Simple pilot that proves the lift"],
        landingCta: "Ask for a pilot",
        outreachMessage: "Hi — I’m testing a simple no-show reduction workflow for local service businesses. If I send a short pilot brief, would you tell me if missed appointments are costing you real money?",
        followUpMessage: "Quick follow-up — if no-shows are still hurting, I can tailor a tiny pilot around reminders, deposits, or pre-visit expectations.",
        qualificationQuestions: ["How often do no-shows happen?", "Which reminder or deposit tactic would you actually try?", "Would a small pilot be worth testing this month?"],
        signalCapture: "Track replies, pilot interest, and which no-show fix creates the strongest response.",
      };
  }
}

function chooseDefaultCompanyId(companyIds: string[], focus?: string): string {
  const normalizedFocus = focus?.trim().toLowerCase();
  if (normalizedFocus) {
    const match = companyIds.find((id) => normalizedFocus.includes(id.toLowerCase()));
    if (match) return match;
    if (normalizedFocus.includes("openbook")) return "openbook";
    if (normalizedFocus.includes("openhouse")) return "openhouse-ai";
    if (normalizedFocus.includes("renew")) return "evolv-renewables";
  }
  if (companyIds.includes("openbook")) return "openbook";
  return companyIds[0] ?? "openbook";
}

function normalizeCompanyId(value: unknown, companyIds: string[], focus?: string): string {
  const candidate = typeof value === "string" ? value : "";
  if (companyIds.includes(candidate)) return candidate;
  return chooseDefaultCompanyId(companyIds, focus);
}

function companyName(companyId: string): string {
  switch (companyId) {
    case "openhouse-ai":
      return "OpenHouse";
    case "evolv-renewables":
      return "Evolv Renewables";
    case "openbook":
      return "OpenBook";
    default:
      return companyId;
  }
}

function stringOr(value: unknown, fallback: string): string {
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed || fallback;
  }
  if (value instanceof Date) return value.toISOString();
  return fallback;
}

function listOfStrings(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.map((entry) => String(entry).trim()).filter(Boolean);
}
