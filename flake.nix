{
  description = "cathal.dev";

  inputs = {
    nixpkgs = {
      url = "github:nixos/nixpkgs/nixos-unstable";
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

          buildInputs = with pkgs;
            [
              # Node
              nodejs-18_x
              nodePackages.pnpm
            ];
        };
      });
}
