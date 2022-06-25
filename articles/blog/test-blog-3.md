---
title: 'Test Blog #3'
date: '2022-07-01'
tags: ['test', 'nix']
---

# Test Blog #3

This is a test Markdown document.

## Here is yet another header

Look, some Nix code!

```nix
{
  description = "Nix Project";

  inputs = {
    nixpkgs = {
      url = "github:nixos/nixpkgs/nixos-22.05";
    };

    flake-utils = {
      url = "github:numtide/flake-utils";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        inherit (pkgs) lib mkShell;

        pkgs = import nixpkgs {
          inherit system;
        };
      in
      rec {
        # nix develop
        devShell = mkShell {
          name = "nix-dev-shell";

          buildInputs = with pkgs; [
            # Node
            nodejs-18_x
            nodePackages.pnpm
          ];
        };
      });
}
```
