---
title: 'GitHub Actions Debug'
date: '2022-07-01'
---

# GitHub Actions Debug

[TMate](https://github.com/marketplace/actions/debugging-with-tmate) allow you to SSH into a GitHub runner.

Place this block after the failure point.

```yaml
- name: Setup tmate session
  if: ${{ failure() }}
  uses: mxschmitt/action-tmate@v3
  with:
    limit-access-to-actor: true
```

You'll be provided an SSH command to execute as part of the action logs.
