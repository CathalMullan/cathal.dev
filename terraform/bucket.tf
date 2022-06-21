resource "aws_s3_bucket" "www_cathal_dev" {
  bucket = "www.cathal.dev"

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_s3_bucket_website_configuration" "www_cathal_dev" {
  bucket = aws_s3_bucket.www_cathal_dev.bucket

  index_document {
    suffix = "index"
  }

  error_document {
    key = "404"
  }
}

data "aws_iam_policy_document" "www_cathal_dev_cloudflare_ip_access" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["arn:aws:s3:::www.cathal.dev/*"]

    condition {
      test     = "IpAddress"
      variable = "aws:SourceIp"
      values = concat(
        split("\n", trimspace(data.http.cloudflare_ip4.body)),
        split("\n", trimspace(data.http.cloudflare_ip6.body)),
      )
    }

    principals {
      type        = "*"
      identifiers = ["*"]
    }
  }
}

resource "aws_s3_bucket_policy" "www_cathal_dev" {
  bucket = aws_s3_bucket.www_cathal_dev.id
  policy = data.aws_iam_policy_document.www_cathal_dev_cloudflare_ip_access.json
}
