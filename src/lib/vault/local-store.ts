import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { VaultStore } from "./store";
import type {
  Brief,
  Company,
  Domain,
  Effort,
  Goal,
  Item,
  ItemState,
  ProjectState,
} from "./types";

type Frontmatter = Record<string, unknown>;

interface Doc {
  data: Frontmatter;
  content: string;
  slug: string;
}

// Reads the Obsidian vault from the local filesystem. This is the development
// store and the schema reference for the production GitHub-backed store.
export class LocalVaultStore implements VaultStore {
  private readonly root: string;

  constructor(dir?: string) {
    this.root = dir ? path.resolve(dir) : path.join(process.cwd(), "vault");
  }

  private async readCollection(sub: string): Promise<Doc[]> {
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

    const docs = await Promise.all(
      files.map(async (file) => {
        const raw = await fs.readFile(path.join(dir, file), "utf8");
        const parsed = matter(raw);
        return {
          data: parsed.data as Frontmatter,
          content: parsed.content.trim(),
          slug: file.replace(/\.md$/, ""),
        };
      })
    );

    return docs;
  }

  async listItems(): Promise<Item[]> {
    const docs = await this.readCollection("items");
    return docs.map(({ data, content, slug }) => ({
      id: str(data.id) ?? slug,
      companyId: str(data.company_id) ?? "",
      domain: str(data.domain) as Domain | undefined,
      title: str(data.title) ?? "Untitled",
      rationale: str(data.rationale) ?? (content || undefined),
      councilNote: str(data.council_note),
      effort: str(data.effort) as Effort | undefined,
      impact: num(data.impact) ?? 0,
      state: (str(data.state) as ItemState) ?? "proposed",
      prUrl: str(data.pr_url),
      isOneThing: bool(data.is_one_thing),
      source: str(data.source),
      runDate: str(data.run_date),
      createdAt: str(data.created_at),
      updatedAt: str(data.updated_at),
    }));
  }

  async listCompanies(): Promise<Company[]> {
    const docs = await this.readCollection("companies");
    return docs.map(({ data, slug }) => ({
      id: str(data.id) ?? slug,
      name: str(data.name) ?? slug,
      short: str(data.short),
      sector: str(data.sector),
    }));
  }

  async listGoals(): Promise<Goal[]> {
    const docs = await this.readCollection("goals");
    return docs.map(({ data, content, slug }) => ({
      id: str(data.id) ?? slug,
      companyId: str(data.company_id) ?? "",
      title: str(data.title) ?? "Untitled",
      status: str(data.status) ?? "active",
      period: str(data.period),
      metric: str(data.metric),
      detail: content || undefined,
    }));
  }

  async listProjectState(): Promise<ProjectState[]> {
    const docs = await this.readCollection("project_state");
    return docs.map(({ data, content, slug }) => ({
      id: str(data.id) ?? slug,
      companyId: str(data.company_id) ?? "",
      headline: str(data.headline) ?? (content || "No state recorded"),
      detail: str(data.headline) ? content || undefined : undefined,
      valid: bool(data.valid),
      updatedAt: str(data.updated_at),
    }));
  }

  async getLatestBrief(): Promise<Brief | null> {
    const docs = await this.readCollection("briefs");
    if (docs.length === 0) return null;

    const briefs = docs
      .map(({ data, content, slug }) => ({
        date: str(data.date) ?? slug,
        ranAt: str(data.ran_at),
        heartbeat: str(data.heartbeat),
        summary: content || undefined,
      }))
      .sort((a, b) => (b.ranAt ?? b.date).localeCompare(a.ranAt ?? a.date));

    return briefs[0];
  }
}

// --- frontmatter coercion ---
// YAML can hand back strings, numbers, booleans, or Date objects (unquoted
// dates). Normalize defensively so authored files never crash a render.

function str(value: unknown): string | undefined {
  if (value instanceof Date) return value.toISOString();
  if (typeof value === "number") return String(value);
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed === "" ? undefined : trimmed;
  }
  return undefined;
}

function num(value: unknown): number | undefined {
  if (typeof value === "number") return value;
  if (typeof value === "string" && value.trim() !== "" && !Number.isNaN(Number(value))) {
    return Number(value);
  }
  return undefined;
}

function bool(value: unknown): boolean {
  return value === true || value === "true";
}
