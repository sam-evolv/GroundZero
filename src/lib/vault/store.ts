import type { Brief, Company, Goal, Item, ProjectState } from "./types";
import { LocalVaultStore } from "./local-store";

// The data layer seam. v1 reads the vault; writes land in the next milestone.
export interface VaultStore {
  listItems(): Promise<Item[]>;
  listCompanies(): Promise<Company[]>;
  listGoals(): Promise<Goal[]>;
  listProjectState(): Promise<ProjectState[]>;
  getLatestBrief(): Promise<Brief | null>;

  // TODO(actions milestone): write methods. Approve / Reject / Snooze / Discuss
  // will append a decision and flip the item state. In production these become
  // commits to the vault repo via the GitHub API.
  //   recordDecision(decision: Omit<Decision, "id" | "createdAt">): Promise<void>;
  //   setItemState(id: string, state: ItemState): Promise<void>;
}

let cached: VaultStore | null = null;

// Returns the active store. Today this is always the local markdown vault.
//
// TODO(prod milestone): when GITHUB_VAULT_REPO is set, return a GitHubVaultStore
// that reads and writes the vault repo via the GitHub API from server routes
// only. The interface above is the seam, so callers do not change.
export function getStore(): VaultStore {
  if (cached) return cached;
  cached = new LocalVaultStore(process.env.VAULT_DIR);
  return cached;
}
