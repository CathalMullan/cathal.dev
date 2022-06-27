---
title: 'Search for Nix Files'
description: 'Find which Nix package contains a given file'
date: '2022-07-01'
tags: ['nix']
---

# Search for Nix Files

[nix-index](https://github.com/bennofs/nix-index) makes it trivial to find which package contains a given file.

```bash
nix-locate 'bin/rustc'

rustup.out                      0 s /nix/store/4xzhwcliwk9s0cpsii2b7hv8hrbqlggq-rustup-1.24.3/bin/rustc
rustc.out                  68,688 x /nix/store/nnzi75q7brdndhd3zcgs816xa0zz011p-rustc-1.60.0/bin/rust
```
