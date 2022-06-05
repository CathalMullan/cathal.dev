terraform {
  required_version = "~> 1.0"

  backend "s3" {
    region         = "eu-west-1"
    dynamodb_table = "cmullan-state-lock"
    bucket         = "cmullan-state"
    key            = "prod/cathal.dev/terraform.tfstate"
    encrypt        = true
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }

    http = {
      source  = "hashicorp/http"
      version = "~> 2.0"
    }
  }
}
