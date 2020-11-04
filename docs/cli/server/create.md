---
id: create
title: katan server create
---

## Description
Creates a new server from an image.

## Usage
```console
katan server create [OPTIONS] SERVER NAME [COMMAND] [ARG...]
```

## Options
| Name     | Default value                                      | Description                                                         |
| :------- | :------------------------------------------------- | :------------------------------------------------------------------ |
| --game   |                                                    | Target game for the server.                                         |
| --host   | Default host address.                              | Remote server connection host address.                              |
| --port   |                                                    | Remote server connection port.                                      |
| --image  | Default `game` image.                              | Docker image that will be used to build the server.                 |
| --memory | `1024`                                             | Amount of memory to allocate on the server (in MB).                 |
| --with   |                                                    | List of compositions to be applied to the server (comma-separated). |

