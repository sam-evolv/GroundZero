import matter from "gray-matter";
import type { VaultStore, DecisionInput, NewBrief, NewItem } from "./store";
import type { Brief, Company, Goal, Item, ItemState, ProjectState } from "./types";
import { mapBrief, mapCompany, mapGoal, mapItem, mapProjectState, type RawDoc } from "./map";
import {
  applyStateToRaw,
  buildBriefFile,
  buildDecisionFile,
  buildItemFile,
  buildPlanFile,
  proposedItemId,
} from "./serialize";

interface GitHubEntry {
  name: string;
  path: string;
  type: string;
  sha: string;
}

// Reads and writes the vault repo over the GitHub Contents API, entirely from
// server routes. The token never reaches the client. Each write is a commit, so
// the decision history is an audit log.
export class GitHubVaultStore implements VaultStore {
  private readonly repo: string;
  private readonly branch: string;
  private readonly token: string;
  private readonly base: string;

  constructor(options: { repo: string; token: string; branch: string; base?: string }) {
    this.repo = options.repo;
    this.token = options.token;
    this.branch = options.branch;
    this.base = options.base ?? "vault";
  }

  private async gh(pathname: string, init?: RequestInit): Promise<Response> {
    return fetch(`https://api.github.com/repos/${this.repo}/${pathname}`, {
      ...init,
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        ...(init?.headers ?? {}),
      },
    });
  }

  private async listDir(sub: string): Promise<GitHubEntry[]> {
    const res = await this.gh(`contents/${this.base}/${sub}?ref=${this.branch}`);
    if (res.status === 404) return [];
    if (!res.ok) throw new Error(`GitHub list ${sub} failed: ${res.status}`);
    const json = (await res.json()) as GitHubEntry[];
    if (!Array.isArray(json)) return [];
    return json.filter(
      (e) =>
        e.type === "file" &&
        e.name.endsWith(".md") &&
        !e.name.startsWith("_") &&
        e.name.toLowerCase() !== "readme.md"
    );
  }

  private async getFile(filePath: string): Promise<{ content: string; sha: string } | null> {
    const res = await this.gh(`contents/${filePath}?ref=${this.branch}`);
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`GitHub get ${filePath} failed: ${res.status}`);
    const json = (await res.json()) as { content: string; sha: string };
    return {
      content: Buffer.from(json.content, "base64").toString("utf8"),
      sha: json.sha,
    };
  }

  private async putFile(
    filePath: string,
    content: string,
    message: string,
    sha?: string
  ): Promise<void> {
    const res = await this.gh(`contents/${filePath}`, {
      method: "PUT",
      body: JSON.stringify({
        message,
        content: Buffer.from(content, "utf8").toString("base64"),
        branch: this.branch,
        sha,
      }),
    });
    if (!res.ok) {
      throw new Error(`GitHub put ${filePath} failed: ${res.status} ${await res.text()}`);
    }
  }

  private async readCollection(sub: string): Promise<RawDoc[]> {
    const entries = await this.listDir(sub);
    return Promise.all(
      entries.map(async (entry) => {
        const file = await this.getFile(entry.path);
        const parsed = matter(file?.content ?? "");
        return {
          data: parsed.data as Record<string, unknown>,
          content: parsed.content.trim(),
          slug: entry.name.replace(/\.md$/, ""),
        };
      })
    );
  }

  async listItems(): Promise<Item[]> {
    return (await this.readCollection("items")).map(mapItem);
  }

  async listCompanies(): Promise<Company[]> {
    return (await this.readCollection("companies")).map(mapCompany);
  }

  async listGoals(): Promise<Goal[]> {
    return (await this.readCollection("goals")).map(mapGoal);
  }

  async listProjectState(): Promise<ProjectState[]> {
    return (await this.readCollection("project_state")).map(mapProjectState);
  }

  async getLatestBrief(): Promise<Brief | null> {
    const docs = await this.readCollection("briefs");
    if (docs.length === 0) return null;
    return docs
      .map(mapBrief)
      .sort((a, b) => (b.ranAt ?? b.date).localeCompare(a.ranAt ?? a.date))[0];
  }

  async createItem(item: NewItem): Promise<string> {
    const now = new Date().toISOString();
    const runDate = item.runDate ?? now.slice(0, 10);
    const id = proposedItemId(runDate, item.title);
    const filePath = `${this.base}/items/${id}.md`;
    const raw = buildItemFile({
      id,
      companyId: item.companyId,
      domain: item.domain,
      title: item.title,
      rationale: item.rationale,
      councilNote: item.councilNote,
      effort: item.effort,
      impact: item.impact,
      state: item.state ?? "proposed",
      isOneThing: item.isOneThing ?? false,
      source: item.source,
      runDate,
      createdAt: now,
      updatedAt: now,
    });
    const existing = await this.getFile(filePath);
    await this.putFile(filePath, raw, `item: ${id}`, existing?.sha);
    return id;
  }

  async upsertBrief(brief: NewBrief): Promise<void> {
    const filePath = `${this.base}/briefs/${brief.date}.md`;
    const existing = await this.getFile(filePath);
    const raw = buildBriefFile({
      date: brief.date,
      ranAt: new Date().toISOString(),
      heartbeat: brief.heartbeat,
      summary: brief.summary,
    });
    await this.putFile(filePath, raw, `brief: ${brief.date}`, existing?.sha);
  }

  async upsertPlan(itemId: string, content: string): Promise<void> {
    const filePath = `${this.base}/plans/${itemId}.md`;
    const existing = await this.getFile(filePath);
    const raw = buildPlanFile({ itemId, createdAt: new Date().toISOString(), content });
    await this.putFile(filePath, raw, `plan: ${itemId}`, existing?.sha);
  }

  async getPlan(itemId: string): Promise<string | null> {
    const file = await this.getFile(`${this.base}/plans/${itemId}.md`);
    if (!file) return null;
    return matter(file.content).content.trim() || null;
  }

  async recordDecision(input: DecisionInput): Promise<void> {
    const id = `${Date.now()}-${input.itemId}`;
    const raw = buildDecisionFile({
      id,
      itemId: input.itemId,
      decision: input.decision,
      reason: input.reason,
      createdAt: new Date().toISOString(),
    });
    await this.putFile(
      `${this.base}/decisions/${id}.md`,
      raw,
      `decision: ${input.decision} ${input.itemId}`
    );
  }

  async setItemState(itemId: string, state: ItemState): Promise<void> {
    const filePath = await this.findItemPath(itemId);
    const existing = await this.getFile(filePath);
    if (!existing) throw new Error(`Item not found: ${itemId}`);
    const raw = applyStateToRaw(existing.content, state, new Date().toISOString());
    await this.putFile(filePath, raw, `state: ${itemId} to ${state}`, existing.sha);
  }

  private async findItemPath(itemId: string): Promise<string> {
    const direct = `${this.base}/items/${itemId}.md`;
    const res = await this.gh(`contents/${direct}?ref=${this.branch}`);
    if (res.ok) return direct;

    for (const entry of await this.listDir("items")) {
      const file = await this.getFile(entry.path);
      const { data } = matter(file?.content ?? "");
      const id = typeof data.id === "string" ? data.id : entry.name.replace(/\.md$/, "");
      if (id === itemId) return entry.path;
    }
    throw new Error(`Item not found: ${itemId}`);
  }
}
