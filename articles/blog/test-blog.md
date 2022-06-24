---
title: 'Test Blog'
date: '2022-07-01'
tags: ['test']
---

# Test Blog

This is a test Markdown document.

## Here is a header

Look, some Rust code!

```rust
use tokio::io::AsyncWriteExt;
use tokio::net::TcpStream;

use std::error::Error;

#[tokio::main]
pub async fn main() -> Result<(), Box<dyn Error>> {
    let mut stream = TcpStream::connect("127.0.0.1:4444").await?;
    println!("created stream");

    let result = stream.write(b"hello world\n").await;
    println!("wrote to stream; success={:?}", result.is_ok());

    Ok(())
}
```

## Here is another header

Look, some Python code!

```python
from constructs import Construct
from cdktf import App, TerraformStack
from imports.aws import AwsProvider
from imports.aws.sns import SnsTopic
from imports.terraform_aws_modules.aws import Vpc
from imports.aws.lambdafunction import LambdaFunction
from imports.aws.iam import IamRole


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        AwsProvider(self, 'Aws', region='eu-central-1')

        Vpc(
            self,
            'CustomVpc',
            name='custom-vpc',
            cidr='10.0.0.0/16',
            azs=["us-east-1a", "us-east-1b"],
            public_subnets=["10.0.1.0/24", "10.0.2.0/24"]
        )

        SnsTopic(self, 'Topic', display_name='my-first-sns-topic')
        role = IamRole(self, 'Role', name='lambda-role', assume_role_policy='{}')

        LambdaFunction(
            self,
            'Lambda',
            function_name='my-first-lambda-function',
            role=role.arn,
            handler='index.handler',
            runtime='python3.6'
        )


app = App()
MyStack(app, "python-aws")
app.synth()
```

## Here is yet another header

Look, some Nix code!

```nix
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

          buildInputs = with pkgs; [
            # Node
            nodejs-18_x
            nodePackages.pnpm
          ];
        };
      });
}
```
