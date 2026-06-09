import type { Brief, Company, Decision, DecisionKind, Domain, Effort, Goal, Item, ItemState, ProjectState } from "./types";
import { LocalVaultStore } from "./local-store";
import { GitHubVaultStore } from "./github-store";

export interface DecisionInput {
  itemId: string;
  decision: DecisionKind;
  reason?: string;
}

export interface NewItem {
  companyId: string;
  domain?: Domain;
  title: string;
  rationale?: string;
  councilNote?: string;
  effort?: Effort;
  impact: number;
  isOneThing?: boolean;
  state?: ItemState;
  source?: string;
  runDate?: string;
}

export interface NewBrief {
  date: string;
  heartbeat?: string;
  summary?: string;
}

// The data layer seam. Reads power the views; the app writes decisions and item
// state when you act on a card; Hermes writes items and the brief when the
// council runs.
export interface VaultStore {
  listItems(): Promise<Item[]>;
  listCompanies(): Promise<Company[]>;
  listGoals(): Promise<Goal[]>;
  listProjectState(): Promise<ProjectState[]>;
  getLatestBrief(): Promise<Brief | null>;
  listDecisions(): Promise<Decision[]>;

  recordDecision(input: DecisionInput): Promise<void>;
  setItemState(itemId: string, state: ItemState): Promise<void>;

  createItem(item: NewItem): Promise<string>;
  upsertBrief(brief: NewBrief): Promise<void>;
  upsertPlan(itemId: string, content: string): Promise<void>;
  getPlan(itemId: string): Promise<string | null>;
}

let cached: VaultStore | null = null;

// Returns the active store. When GITHUB_VAULT_REPO and a token are set we read
// and write the vault repo over the GitHub API, entirely server side. Otherwise
// we use the local markdown vault, which is the development default.
export function getStore(): VaultStore {
  if (cached) return cached;

  const repo = process.env.GITHUB_VAULT_REPO;
  const token = process.env.GITHUB_VAULT_TOKEN;

  if (repo && token) {
    cached = new GitHubVaultStore({
      repo,
      token,
      branch: process.env.GITHUB_VAULT_BRANCH || "main",
      base: process.env.GITHUB_VAULT_BASE,
    });
  } else {
    cached = new LocalVaultStore(process.env.VAULT_DIR);
  }

  return cached;
}
