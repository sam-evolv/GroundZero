import Anthropic from "@anthropic-ai/sdk";

export interface ModelCall {
  system: string;
  user: string;
}

// Calls the configured model and returns its text, or null when no provider is
// set (which puts Hermes into dry-run). NVIDIA is the free default: its API is
// OpenAI compatible, so we call it over raw HTTP. Anthropic is also supported.
export async function callModel({ system, user }: ModelCall): Promise<string | null> {
  if (process.env.NVIDIA_API_KEY) return callNvidia(system, user);
  if (process.env.ANTHROPIC_API_KEY) return callAnthropic(system, user);
  return null;
}

function hermesModel(): string {
  if (process.env.HERMES_MODEL) return process.env.HERMES_MODEL;
  if (process.env.NVIDIA_API_KEY) return "nvidia/nemotron-3-super-120b-a12b";
  return "claude-opus-4-8";
}

async function callNvidia(system: string, user: string): Promise<string> {
  const baseUrl = process.env.NVIDIA_BASE_URL || "https://integrate.api.nvidia.com/v1";
  const res = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${process.env.NVIDIA_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: hermesModel(),
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      temperature: 0.4,
      max_tokens: 4000,
      response_format: { type: "json_object" },
    }),
  });
  if (!res.ok) {
    throw new Error(`NVIDIA API ${res.status}: ${await res.text()}`);
  }
  const json = (await res.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  return json.choices?.[0]?.message?.content ?? "";
}

async function callAnthropic(system: string, user: string): Promise<string> {
  const client = new Anthropic();
  const response = await client.messages.create({
    model: hermesModel(),
    max_tokens: 16000,
    thinking: { type: "adaptive" },
    output_config: { effort: "high" },
    system: [{ type: "text", text: system, cache_control: { type: "ephemeral" } }],
    messages: [{ role: "user", content: user }],
  });
  const block = response.content.find((b) => b.type === "text");
  return block && block.type === "text" ? block.text : "";
}

// Extracts the JSON object from a model response, tolerating stray prose or code
// fences by taking the outermost braces.
export function extractJson<T>(text: string): T | null {
  if (!text) return null;
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1 || end < start) return null;
  try {
    return JSON.parse(text.slice(start, end + 1)) as T;
  } catch {
    return null;
  }
}
