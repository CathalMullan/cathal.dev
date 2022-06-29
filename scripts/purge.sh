#!/usr/bin/env bash
set -euo pipefail

# Verify token is valid
curl \
  "https://api.cloudflare.com/client/v4/user/tokens/verify" \
  --silent \
  --request GET \
  --header "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
  --header "Content-Type:application/json" | jq .

# Purge cache
curl \
  "https://api.cloudflare.com/client/v4/zones/cb7dcdd6aa6c657567fdc720b8fe2213/purge_cache" \
  --silent \
  --request POST \
  --header "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{"purge_everything": true}' | jq .
