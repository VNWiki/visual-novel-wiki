---
title : 'Install GStreamer libraries'
---

# GStreamer
GStreamer is a library for constructing graphs of media-handling components. Very useful to play opening videos in visual novels.

# Steam Deck Setup

SteamOS already comes with some of them preinstalled, but it's missing a few that are good to play videos in older visual novels with the [Vanilla prefix](/linux/wineprefixes).

Also this is not needed when using Lutris since they already bundle this library in their application.

> [!warning] 
> SteamOS is a read only system, so it will restart all this changes with every major update to the system.

Open konsole and run this commands in the terminal in order to disable readonly and enable pacman to install packages:

```sh
passwd # Use this command only if you've never run the below command.

sudo steamos-readonly disable

sudo pacman-key --init

sudo pacman-key --populate archlinux holo

sudo pacman -Sy archlinux-keyring holo-keyring

sudo pacman-key --refresh-keys # Only if getting signature errors when installing packages, takes a while to complete.

```

After all of them finally install the gstreamer libraries:

```sh
sudo pacman -S gstreamer gst-plugins-ugly gst-plugins-good gst-plugins-base-libs gst-plugins-base gst-plugins-bad gst-plugins-bad-libs gst-plugin-pipewire gst-libav
```

Some of them are already installed by default, but doesn't hurt to update them to be at same version.