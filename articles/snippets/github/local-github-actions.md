---
title: 'Running GitHub Actions Locally'
date: '2022-07-01'
---

# Running GitHub Actions Locally

[Act](https://github.com/nektos/act) allows you to run certain GitHub Actions locally, using Docker.

In my experience, it fails to support the majority of workflows that I actually need to debug. Your mileage may vary.

Be wary that Act can require Docker images over 10GB in size in order to replicate CI behaviour.

## Example

To run a CI job named "lint"

```bash
act \
  --job lint \
  --container-architecture linux/amd64 \
  --platform ubuntu-latest=ghcr.io/catthehacker/ubuntu:act-latest
```
