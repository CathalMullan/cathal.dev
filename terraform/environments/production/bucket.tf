resource "aws_s3_bucket" "www_cathal_dev" {
  bucket = "www.cathal.dev"

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_s3_bucket_website_configuration" "www_cathal_dev" {
  bucket = aws_s3_bucket.www_cathal_dev.bucket

  index_document {
    suffix = "index.html"
  }
}

data "aws_iam_policy_document" "www_cathal_dev_public" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["arn:aws:s3:::www.cathal.dev/*"]

    principals {
      type        = "*"
      identifiers = ["*"]
    }
  }
}

resource "aws_s3_bucket_policy" "www_cathal_dev" {
  bucket = aws_s3_bucket.www_cathal_dev.id
  policy = data.aws_iam_policy_document.www_cathal_dev_public.json
}
