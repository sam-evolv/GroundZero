import { promises as fs } from "node:fs";
import path from "node:path";
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

// Reads and writes the Obsidian vault on the local filesystem. This is the
// development store and the schema reference for the GitHub-backed store.
export class LocalVaultStore implements VaultStore {
  private readonly root: string;

  constructor(dir?: string) {
    this.root = dir ? path.resolve(dir) : path.join(process.cwd(), "vault");
  }

  private async readCollection(sub: string): Promise<RawDoc[]> {
    const dir = path.join(this.root, sub);
    let entries: string[];
    try {
      entries = await fs.readdir(dir);
    } catch {
      return [];
    }

    const files = entries.filter(
      (f) => f.endsWith(".md") && !f.startsWith("_") && f.toLowerCase() !== "readme.md"
    );

    return Promise.all(
      files.map(async (file) => {
        const raw = await fs.readFile(path.join(dir, file), "utf8");
        const parsed = matter(raw);
        return {
          data: parsed.data as Record<string, unknown>,
          content: parsed.content.trim(),
          slug: file.replace(/\.md$/, ""),
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
    const dir = path.join(this.root, "items");
    await fs.mkdir(dir, { recursive: true });
    const now = new Date().toISOString();
    const runDate = item.runDate ?? now.slice(0, 10);
    const id = proposedItemId(runDate, item.title);
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
    await fs.writeFile(path.join(dir, `${id}.md`), raw, "utf8");
    return id;
  }

  async upsertBrief(brief: NewBrief): Promise<void> {
    const dir = path.join(this.root, "briefs");
    await fs.mkdir(dir, { recursive: true });
    const raw = buildBriefFile({
      date: brief.date,
      ranAt: new Date().toISOString(),
      heartbeat: brief.heartbeat,
      summary: brief.summary,
    });
    await fs.writeFile(path.join(dir, `${brief.date}.md`), raw, "utf8");
  }

  async upsertPlan(itemId: string, content: string): Promise<void> {
    const dir = path.join(this.root, "plans");
    await fs.mkdir(dir, { recursive: true });
    const raw = buildPlanFile({ itemId, createdAt: new Date().toISOString(), content });
    await fs.writeFile(path.join(dir, `${itemId}.md`), raw, "utf8");
  }

  async getPlan(itemId: string): Promise<string | null> {
    try {
      const raw = await fs.readFile(path.join(this.root, "plans", `${itemId}.md`), "utf8");
      return matter(raw).content.trim() || null;
    } catch {
      return null;
    }
  }

  async recordDecision(input: DecisionInput): Promise<void> {
    const dir = path.join(this.root, "decisions");
    await fs.mkdir(dir, { recursive: true });
    const id = `${Date.now()}-${input.itemId}`;
    const raw = buildDecisionFile({
      id,
      itemId: input.itemId,
      decision: input.decision,
      reason: input.reason,
      createdAt: new Date().toISOString(),
    });
    await fs.writeFile(path.join(dir, `${id}.md`), raw, "utf8");
  }

  async setItemState(itemId: string, state: ItemState): Promise<void> {
    const file = await this.findItemFile(itemId);
    if (!file) throw new Error(`Item not found: ${itemId}`);
    const raw = await fs.readFile(file, "utf8");
    await fs.writeFile(file, applyStateToRaw(raw, state, new Date().toISOString()), "utf8");
  }

  private async findItemFile(itemId: string): Promise<string | null> {
    const dir = path.join(this.root, "items");
    const direct = path.join(dir, `${itemId}.md`);
    try {
      await fs.access(direct);
      return direct;
    } catch {
      // Fall back to scanning by frontmatter id.
    }

    let files: string[];
    try {
      files = await fs.readdir(dir);
    } catch {
      return null;
    }

    for (const file of files.filter((f) => f.endsWith(".md"))) {
      const full = path.join(dir, file);
      const { data } = matter(await fs.readFile(full, "utf8"));
      const id = typeof data.id === "string" ? data.id : file.replace(/\.md$/, "");
      if (id === itemId) return full;
    }
    return null;
  }
}
