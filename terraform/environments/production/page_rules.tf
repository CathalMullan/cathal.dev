resource "cloudflare_page_rule" "cathal_dev_domain_cache_all" {
  zone_id = cloudflare_zone.cathal_dev.id

  target   = "cathal.dev/*"
  status   = "active"
  priority = 1

  actions {
    cache_level = "cache_everything"
  }
}

resource "cloudflare_page_rule" "cathal_dev_subdomains_cache_all" {
  zone_id = cloudflare_zone.cathal_dev.id

  target   = "*.cathal.dev/*"
  status   = "active"
  priority = 2

  actions {
    cache_level = "cache_everything"
  }
}
