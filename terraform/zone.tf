resource "cloudflare_zone" "cathal_dev" {
  zone = "cathal.dev"
}

# "cannot be set as it is read only"
# This is a strangely flakely resource, removing from state is the "quick fix".
# > terraform state rm cloudflare_zone_settings_override.cathal_dev
resource "cloudflare_zone_settings_override" "cathal_dev" {
  zone_id = cloudflare_zone.cathal_dev.id

  settings {
    always_use_https         = "on"
    automatic_https_rewrites = "on"
    brotli                   = "on"
    early_hints              = "on"
    http3                    = "on"
    ipv6                     = "on"

    // Disabling for now, as this seems to impact CSP adherence
    email_obfuscation        = "off"
    rocket_loader            = "off"

    cache_level     = "aggressive"
    min_tls_version = "1.3"
    security_level  = "low"
    ssl             = "flexible"
    tls_1_3         = "on"

    # https://wiki.mozilla.org/Security/Server_Side_TLS#Modern_compatibility
    # "Cipher suite selections are not supported for a minimum TLS version of 1.3"
    # ciphers = [
    #   "TLS_AES_128_GCM_SHA256",
    #   "TLS_AES_256_GCM_SHA384",
    #   "TLS_CHACHA20_POLY1305_SHA256"
    # ]

    minify {
      html = "on"
      css  = "on"
      js   = "on"
    }

    security_header {
      enabled            = true
      preload            = true
      include_subdomains = true
      nosniff            = true
      max_age            = 63072000 # 2 years
    }
  }
}
