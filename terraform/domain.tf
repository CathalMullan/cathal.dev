resource "namecheap_domain_records" "cathal-dev" {
  domain = "cathal.dev"
  mode   = "OVERWRITE"

  nameservers = [
    "margot.ns.cloudflare.com",
    "mario.ns.cloudflare.com",
  ]
}
