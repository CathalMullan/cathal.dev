---
title: 'Cleanup GitHub Workflows'
description: 'Wipe all workflow runs in a repository using the GitHub CLI'
date: '2022-07-01'
tags: ['github', 'github_actions']
---

# Cleanup GitHub Workflows

Wipe all workflow runs in a repository using the GitHub CLI.

```bash
export USER="abc"
export REPO="123"

gh api "repos/${USER}/${REPO}/actions/runs" \
  --paginate -q '.workflow_runs[] | "\(.id)"' | \
  xargs -n1 -I % gh api --silent "repos/${USER}/${REPO}/actions/runs/%" -X DELETE
```
