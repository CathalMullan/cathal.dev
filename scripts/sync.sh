#!/usr/bin/env bash
set -euo pipefail

#
# S3 can't handle requests to `/about` being routed to `/about.html`.
# So we need to manually rename all HTML files before we upload them.
#

# Truncate bucket
aws s3 rm s3://www.cathal.dev --recursive

# Rename HTML files to strip extensiom
for file in $(find out -name "*.html"); do
  mv "$file" "${file%%.html}";
done

# Push renamed HTML files with explicit content type
aws s3 sync out s3://www.cathal.dev \
  --content-type "text/html" \
  --metadata-directive REPLACE \
  --exclude "_next/*" \
  --exclude "*.png" \
  --exclude "*.svg" \
  --exclude "*.ico" \
  --exclude "*.ttf" \
  --exclude "*.txt" \
  --exclude "*.xml" \
  --exclude "*.webmanifest"

# Push remaining files
aws s3 sync out s3://www.cathal.dev \
  --exclude "*" \
  --include "_next/*" \
  --include "*.png" \
  --include "*.svg" \
  --include "*.ico" \
  --include "*.ttf" \
  --include "*.txt" \
  --include "*.xml" \
  --include "*.webmanifest"
