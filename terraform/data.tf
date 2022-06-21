data "http" "cloudflare_ip4" {
  url = "https://www.cloudflare.com/ips-v4"
}

data "http" "cloudflare_ip6" {
  url = "https://www.cloudflare.com/ips-v6"
}
