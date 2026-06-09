#!/bin/bash
# Ground Zero Vault Sync
# Pulls latest from GitHub and pushes local changes
# Run this from terminal or set up as a cron/launchd job

set -e
VAULT_DIR="/Users/samdonworth/GroundZero/vault"
REPO_DIR="/Users/samdonworth/GroundZero"

cd "$REPO_DIR"

# Pull latest from GitHub
echo "Pulling latest from GitHub..."
git pull origin claude/gallant-tesla-YJu9m

# Stage any local changes
cd "$VAULT_DIR"
if [ -n "$(git status --porcelain)" ]; then
    echo "Local changes found, committing and pushing..."
    git add -A
    git commit -m "vault sync: $(date '+%Y-%m-%d %H:%M')"
    git push origin claude/gallant-tesla-YJu9m
    echo "Changes pushed."
else
    echo "No local changes. Vault is up to date."
fi
