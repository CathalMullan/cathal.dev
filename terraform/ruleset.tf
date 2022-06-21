resource "cloudflare_ruleset" "response_security_headers" {
  zone_id = cloudflare_zone.cathal_dev.id

  name  = "response_security_headers"
  kind  = "zone"
  phase = "http_response_headers_transform"

  rules {
    enabled = true

    action     = "rewrite"
    expression = "true"

    action_parameters {
      # headers {
      #   operation = "set"
      #   name      = "Content-Security-Policy"
      #   value     = "default-src 'self'; script-src 'self'; child-src cathal.dev; style-src 'self' cathal.dev; font-src 'self';"
      # }

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
    }
  }
}
