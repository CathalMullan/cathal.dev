resource "aws_s3_bucket" "cathal_dev" {
  bucket = "cathal.dev"

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_s3_bucket_website_configuration" "cathal_dev" {
  bucket = aws_s3_bucket.cathal_dev.bucket

  redirect_all_requests_to {
    host_name = "www.cathal.dev"
    protocol  = "https"
  }
}

data "aws_iam_policy_document" "cathal_dev_cloudflare_ip_access" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["arn:aws:s3:::cathal.dev/*"]

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

resource "aws_s3_bucket_policy" "cathal_dev" {
  bucket = aws_s3_bucket.cathal_dev.id
  policy = data.aws_iam_policy_document.cathal_dev_cloudflare_ip_access.json
}
