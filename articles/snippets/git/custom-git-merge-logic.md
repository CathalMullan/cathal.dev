---
title: 'Custom Git Merge Logic'
date: '2022-07-01'
---

# Custom Git Merge Logic

'Merge Drivers' in Git are scripts which help resolve conflicts in files.

They take the following parameters:

- %A: tmp filepath to our version of the conflicted file
- %O: tmp filepath to the base version of the file
- %B: tmp filepath to the other branches' version of the file
- %P: placeholder / real file name
- %L: conflict marker size

To register a custom driver, you need to run the following commands.

```bash
git config merge.custom.name "Custom Merge Driver"
git config merge.custom.driver "./custom-merge-driver.sh %A %O %B %P %L"
```

You can then use the driver on a per file basis, configured through the ".gitattributes" file.

```
path/to/file.txt merge=custom
```
