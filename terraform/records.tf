# MX

resource "cloudflare_record" "cathal_dev_mx_primary" {
  zone_id = cloudflare_zone.cathal_dev.id

  name     = "@"
  value    = "in1-smtp.messagingengine.com"
  type     = "MX"
  priority = 10
  ttl      = 3600
}

resource "cloudflare_record" "cathal_dev_mx_secondary" {
  zone_id = cloudflare_zone.cathal_dev.id

  name     = "@"
  value    = "in2-smtp.messagingengine.com"
  type     = "MX"
  priority = 20
  ttl      = 3600
}

# SPF

resource "cloudflare_record" "cathal_dev_spf" {
  zone_id = cloudflare_zone.cathal_dev.id

  name  = "@"
  value = "v=spf1 include:spf.messagingengine.com ?all"
  type  = "TXT"
  ttl   = 3600
}

# DKIM

resource "cloudflare_record" "cathal_dev_dkim_1" {
  zone_id = cloudflare_zone.cathal_dev.id

  name    = "fm1._domainkey"
  value   = "fm1.cathal.dev.dkim.fmhosted.com"
  type    = "CNAME"
  ttl     = 3600
}

resource "cloudflare_record" "cathal_dev_dkim_2" {
  zone_id = cloudflare_zone.cathal_dev.id

  name    = "fm2._domainkey"
  value   = "fm2.cathal.dev.dkim.fmhosted.com"
  type    = "CNAME"
  ttl     = 3600
}

resource "cloudflare_record" "cathal_dev_dkim_3" {
  zone_id = cloudflare_zone.cathal_dev.id

  name    = "fm3._domainkey"
  value   = "fm3.cathal.dev.dkim.fmhosted.com"
  type    = "CNAME"
  ttl     = 3600
}

# DMARC

resource "cloudflare_record" "cathal_dev_dmarc" {
  zone_id = cloudflare_zone.cathal_dev.id

  name  = "_dmarc"
  value = "v=DMARC1; p=quarantine; rua=mailto:contact@cathal.dev"
  type  = "TXT"
  ttl   = 3600
}

# Website

resource "cloudflare_record" "cathal_dev_website_1" {
  zone_id = cloudflare_zone.cathal_dev.id

  name    = "www"
  value   = "www.cathal.dev.s3-website-eu-west-1.amazonaws.com"
  type    = "CNAME"
  ttl     = 1
  proxied = true
}

resource "cloudflare_record" "cathal_dev_website_2" {
  zone_id = cloudflare_zone.cathal_dev.id

  name    = "cathal.dev"
  value   = "cathal.dev.s3-website-eu-west-1.amazonaws.com"
  type    = "CNAME"
  ttl     = 1
  proxied = true
}
