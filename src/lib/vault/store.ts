import type { Brief, Company, DecisionKind, Goal, Item, ItemState, ProjectState } from "./types";
import { LocalVaultStore } from "./local-store";
import { GitHubVaultStore } from "./github-store";

export interface DecisionInput {
  itemId: string;
  decision: DecisionKind;
  reason?: string;
}

// The data layer seam. Reads power the views; writes back the decisions and the
// item state when you act on a card.
export interface VaultStore {
  listItems(): Promise<Item[]>;
  listCompanies(): Promise<Company[]>;
  listGoals(): Promise<Goal[]>;
  listProjectState(): Promise<ProjectState[]>;
  getLatestBrief(): Promise<Brief | null>;

  recordDecision(input: DecisionInput): Promise<void>;
  setItemState(itemId: string, state: ItemState): Promise<void>;
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
    });
  } else {
    cached = new LocalVaultStore(process.env.VAULT_DIR);
  }

  return cached;
}
