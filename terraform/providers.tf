provider "aws" {
  region = "eu-west-1"

  default_tags {
    tags = {
      Owner       = "Cathal Mullan"
      Contact     = "contact@cathal.dev"
      Repository  = "https://github.com/CathalMullan/cathal.dev"
      Environment = "prod"
    }
  }
}

provider "namecheap" {
  user_name   = "CathalMullan"
  api_user    = "CathalMullan"
  use_sandbox = false
}

provider "cloudflare" {
  email = "contact@cathal.dev"
}
