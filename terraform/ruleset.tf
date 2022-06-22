resource "cloudflare_ruleset" "response_headers" {
  zone_id = cloudflare_zone.cathal_dev.id

  name  = "response_headers"
  kind  = "zone"
  phase = "http_response_headers_transform"

  rules {
    enabled = true

    action     = "rewrite"
    expression = "true"

    action_parameters {
      // Security
      headers {
        operation = "set"
        name      = "X-Frame-Options"
        value     = "SAMEORIGIN"
      }

      headers {
        operation = "set"
        name      = "Referrer-Policy"
        value     = "strict-origin-when-cross-origin"
      }

      headers {
        operation = "set"
        name      = "Permissions-Policy"
        value     = "camera=(), microphone=(), geolocation=(), interest-cohort=()"
      }

      // Performance
      headers {
        operation = "set"
        name      = "Cache-Control"
        value     = "public, max-age=31536000, immutable"
      }
    }
  }
}
