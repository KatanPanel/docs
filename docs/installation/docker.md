---
id: docker
title: Using Docker
sidebar_position: 2
---

The recommended way to install Katan is using
[Docker](https://www.docker.com/).

First, you need to have Docker installed on your machine and a system capable of running Docker 
containers.
Please follow Docker’s [installation
instructions](https://docs.docker.com/get-docker/).

:::caution
Make sure your Docker version is **v1.40 or higher**, which is the minimum version supported by 
Katan.
:::

## Installation steps
TBD

## Post-installation
### Configure Docker to start on boot
Linux distributions like RHEL, CentOS, Fedora, Debian, Ubuntu 16.04 and higher use `systemd` to 
manage which services start when the system boots.

To automatically start Docker and Containerd on boots, use the commands below:
```shell
systemctl enable docker
systemctl enable containerd
```

:::note
On Debian and Ubuntu, the Docker service is configured to start on boot by default.
:::


### Swap capabilities
Katan provides ways to control how much memory, or CPU a server can use.
Many of these features require your kernel to support Linux capabilities.

To check for support, you can use the 
[`docker info`](https://docs.docker.com/engine/reference/commandline/info/) command.  If a 
capability is disabled in your kernel, you may see a warning at the end of the output like the
following:
```
WARNING: No swap limit support
```
```
WARNING: Your kernel does not support swap limit capabilities
```

:::note
This warning does not occur on RPM-based systems, which enable these capabilities by default.
:::

You can enable these capabilities on Ubuntu or Debian by following these instructions:

#### Step 1: Log in as sudo
Log into the Ubuntu or Debian host as a user with sudo privileges.

#### Step 2: Edit GRUB
Add or edit the `GRUB_CMDLINE_LINUX` line in the grub file to add the following two key-value 
pairs:
```properties title="/etc/default/grub"
GRUB_CMDLINE_LINUX="cgroup_enable=memory swapaccount=1"
```

#### Step 3: Update GRUB
```shell
sudo update-grub
```

The changes take effect when the system is rebooted.