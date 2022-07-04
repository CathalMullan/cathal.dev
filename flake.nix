{
  description = "cathal.dev";

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
          name = "cathal-dev-shell";

          NEXT_TELEMETRY_DISABLED = "1";

          buildInputs = with pkgs; [
            # Node
            nodejs-18_x
            nodePackages.pnpm

            # Nix
            nixpkgs-fmt
            rnix-lsp

            # AWS
            awscli2

            # Terraform
            terraform
            tflint

            # Utility
            git
            jq
            curl
          ];
        };
      });
}
