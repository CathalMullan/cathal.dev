---
title: 'Hiding Git Commits'
date: '2022-07-01'
---

# Hiding Git Commits

If you've got a commit which touches a huge number of files (e.g. from running a formatter), you can ignore it from 'git blame' like so.

Create a top level file called '.git-blame-ignore-revs'.

```
# Since git version 2.23, git-blame has a feature to ignore
# certain commits.
#
# This file contains a list of commits that are not likely what
# you are looking for in `git blame`. You can set this file as
# a default ignore file for blame by running the following
# command.
#
# git config blame.ignoreRevsFile .git-blame-ignore-revs

# Migrate code style to Black
82df48934eba1df9a1ed3be98aaace8eada59e6e
```

Set it as the default ignore file to use on a per-repo level.

```bash
git config blame.ignoreRevsFile .git-blame-ignore-revs
```
