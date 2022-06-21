#!/usr/bin/env bash
set -euxo pipefail

#
# S3 can't handle requests to `/about` being routed to `/about.html`.
# So we need to manually rename HTML files.
# https://medium.com/@valdozzz/next-js-ssg-clean-deploy-on-aws-9e5ca91a4703
#

# first of all we delete everything from the bucket
aws s3 rm s3://www.cathal.dev --recursive

# push(sync) the _next folder to S3
aws s3 sync ./out/_next/ s3://www.cathal.dev/_next/

# find all .html files and remove their extension
for file in $(find ./out -name "*.html"); do
  mv "$file" "${file%%.html}";
done

# push(sync) all the html files without extension to S3 and set the content type to text/html by excluding file extensions and chunck folder
aws s3 sync \
  --content-type "text/html" \
  --metadata-directive REPLACE \
  ./out/ \
  s3://www.cathal.dev/ \
  --exclude "*.jpg" \
  --exclude "*.png" \
  --exclude "*.jpeg" \
  --exclude "_next/*" \
  --exclude "*.svg"

# push(sync) all other kind of files such as images or SVGs
aws s3 sync ./out/ s3://www.cathal.dev/ \
  --exclude "*.*" \
  --include "*.jpg" \
  --include "*.png" \
  --include "*.jpeg" \
  --include "*.svg"
