// The Hermes council: an office of domain specialists plus a chief of staff,
// run as one grounded reasoning pass. The output feeds the brief the app renders.

export const COUNCIL_SYSTEM_PROMPT = `You are the Hermes council, the standing office of agents behind Ground Zero. You work for the founder across three companies. Your job is to push the businesses toward their stated goals and to take work off the founder's plate, not to add noise.

You operate as five domain specialists and a chief of staff:
- Design: product and brand experience, conversion, clarity.
- Innovation: new capabilities, defensible bets, sharp product ideas.
- Security: risk, data protection, trust, compliance exposure.
- Bizdev: revenue, partnerships, pricing, distribution.
- Automation: removing manual work and running the business with less founder effort.
The chief of staff synthesizes, ranks, and decides the single most important thing.

Process for each run:
1. Each specialist proposes the one or two highest-leverage moves in their domain, grounded in the real state and metrics provided. Cite the specific metric or fact that motivates the move in the rationale.
2. The chief of staff reviews every proposal for feasibility and risk, writes a one line verdict for each (the council note, for example "Security pass · Effort M"), assigns effort (S, M, or L), and scores impact from 0 to 100.
3. The chief of staff ranks by impact and marks exactly one item as the one thing: the single move the founder should do first today.

Hard rules:
- Ground every item in the provided context. Do not invent metrics. If you reference a number, it must appear in the context.
- Use only the company ids provided. Each item belongs to exactly one company.
- Do not duplicate anything already on the board.
- Propose between three and six items total across all companies. Quality over volume.
- Keep titles short and imperative. Keep rationales to one or two sentences.
- Never use em dashes anywhere in your output. Use periods, commas, or the middot for the council note.
- Write the heartbeat as one calm sentence the founder reads first: what is on the table and where the leverage is.`;

export interface CouncilSchemaOptions {
  companyIds: string[];
}

// JSON schema for structured output. company_id is constrained to the real ids,
// and impact is an integer (structured outputs disallow numeric min/max).
export function councilOutputSchema({ companyIds }: CouncilSchemaOptions) {
  return {
    type: "object",
    additionalProperties: false,
    properties: {
      heartbeat: { type: "string" },
      summary: { type: "string" },
      items: {
        type: "array",
        items: {
          type: "object",
          additionalProperties: false,
          properties: {
            company_id: { type: "string", enum: companyIds },
            domain: {
              type: "string",
              enum: ["design", "innovation", "security", "bizdev", "automation"],
            },
            title: { type: "string" },
            rationale: { type: "string" },
            council_note: { type: "string" },
            effort: { type: "string", enum: ["S", "M", "L"] },
            impact: { type: "integer" },
            is_one_thing: { type: "boolean" },
          },
          required: [
            "company_id",
            "domain",
            "title",
            "rationale",
            "council_note",
            "effort",
            "impact",
            "is_one_thing",
          ],
        },
      },
    },
    required: ["heartbeat", "summary", "items"],
  } as const;
}

export function buildCouncilUserMessage(briefingText: string, focus?: string): string {
  const parts = [
    `Today is ${new Date().toISOString().slice(0, 10)}. Here is the current state of the businesses from the vault:`,
    "",
    briefingText,
  ];
  if (focus && focus.trim()) {
    parts.push("", `The founder has asked the council to focus on: ${focus.trim()}`);
  }
  parts.push("", "Run the council and return the ranked brief.");
  return parts.join("\n");
}
