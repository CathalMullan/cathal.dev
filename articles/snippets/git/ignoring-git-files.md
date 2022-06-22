---
title: 'Ignoring Git Files'
date: '2022-07-01'
---

# Ignoring Git Files

Prevent files from being commited.

Here's a sample file I use as a starting point for most projects.

Other templates (e.g. [gitignore.io](https://gitignore.io)) are too unwieldy.

```
# MacOS
.DS_Store

# IntelliJ
.idea
*.iml
*.ipr

# Rust
target
*.rs.bk

# Coverage
report
*.profraw

# Dir Env
.direnv

# Nix
result
```
