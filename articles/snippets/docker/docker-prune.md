---
title: 'Docker Spring Cleaning'
date: '2022-07-01'
---

# Docker Spring Cleaning

'Reset' your Docker environment.

I typically save between 60-80 GBs of space.

```
Total reclaimed space: 75.69GB
```

NOTE: This will remove your Docker volumes too.

```bash
# kill all containers
docker stop $(docker ps -a -q) && docker rm $(docker ps -a -q)

# perform wipe
docker system prune --volumes --all --force
```
