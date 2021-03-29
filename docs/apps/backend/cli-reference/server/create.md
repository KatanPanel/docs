---
id: create
title: katan server create
---

## Description
Creates a new server.

## Usage
```console
katan server create [OPTIONS] SERVER NAME [COMMAND] [ARG...]
```

## Options
| Name     | Default value                                      | Description                                                         |
| :------- | :------------------------------------------------- | :------------------------------------------------------------------ |
| -g       |                                                    | Target game for the server (described as game name:game version).   |
| -h       | Default host address.                              | Remote server connection host address.                              |
| -p       |                                                    | Remote server connection port.                                      |
| -i       | Default `game` image.                              | Docker image that will be used to build the server.                 |
| -m       | `1024`                                             | Amount of memory to allocate on the server (in MB).                 |
| -w       |                                                    | List of compositions to be applied to the server (comma-separated). |

