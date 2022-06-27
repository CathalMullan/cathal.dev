---
title: 'Nix Darwin Setup'
description: 'How to setup Nix Darwin'
date: '2022-07-01'
tags: ['nix', 'nix_darwin']
---

# Nix Darwin Setup

## Install

```bash
nix-build https://github.com/LnL7/nix-darwin/archive/master.tar.gz -A installer
./result/bin/darwin-installer
```

```
Would you like edit the default configuration.nix before starting? [y/n] n
Would you like to manage <darwin> with nix-channel? [y/n] y
Would you like to load darwin configuration in /etc/bashrc? [y/n] y
Would you like to load darwin configuration in /etc/zshrc? [y/n] y
Would you like to create /run? [y/n] y
```

## Uninstall

```bash
nix-build https://github.com/LnL7/nix-darwin/archive/master.tar.gz -A uninstaller
./result/bin/darwin-uninstaller
```
