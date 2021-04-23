---
id: docker-compose
title: Using Docker Compose
sidebar_position: 3
---

[Docker Compose](https://docs.docker.com/compose/) is one of the possible forms of installations using Docker.

Compose is a tool for defining and running multi-container Docker applications and can be used 
to install Katan.

## Requirements
Docker Compose relies on Docker Engine for any meaningful work, so make sure you
have Docker Engine installed either locally or remote, depending on your setup, so you'll need 
to have installed:
* [Docker](https://docs.docker.com/get-docker/)
* [Docker Compose](https://docs.docker.com/compose/)

See [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/) for 
more details.

## Installation steps
To install using Docker Compose, we need a file with the definition of its services.
If you don't know what the compose file is, see its 
[reference](https://docs.docker.com/compose/compose-file/).

### Step 1: Compose File
Wherever you want, create a compose file.

```yaml reference
https://github.com/KatanPanel/Katan/blob/dev/docker-compose.yml
```

### Step 2: Build
[docker-compose up](https://docs.docker.com/compose/reference/up/) is a Docker Compose command that we need to use to build what was declared in our compose file, the Katan server.

The `--detach` flag makes the server start in the background.
```bash
docker-compose up --detach
```

### Step 3: Health check
After performing the second step, wait a few seconds and visit your machine's
address and Katan's port to see if it is running.

Example, you are running locally:
```
http://localhost:8080
```

If the installation was successful, you will see a:
```
Hello from Katan!
```