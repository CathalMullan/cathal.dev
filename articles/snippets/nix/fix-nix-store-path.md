---
title: 'Fix Nix Store Path'
date: '2022-07-01'
tags: ['nix']
---

# Fix Nix Store Path

```bash
sudo rm -rf /nix/store/.links
sudo nix-store --verify --repair --check-contents
```
