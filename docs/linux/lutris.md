---
title : 'Lutris'
---

# Lutris

[Lutris](https://lutris.net/) is a video game preservation platform aiming to keep your video game collection up and running for the years to come.
Over the years, video games have gone through many different hardware and software platforms. By offering the best software available to run your games, Lutris makes it easy to run all your games, old and new.

Assets for Lutris are available [here](https://www.steamgriddb.com/game/5267809).


## Installation

### Linux

Visit Lutris’s website ([Downloads Section](https://lutris.net/downloads)) for OS-specific installation.

Runners for Lutris are located at `~/.local/share/lutris/runners/`

### Steam Deck or Flatpak

Get the `flatpak` from the **Discover Store** (pre-installed App Store) or run the command below in the terminal:

Runners for Lutris are located at `~/.var/app/net.lutris.Lutris/data/lutris/runners/`

```sh
flatpak install flathub net.lutris.Lutris
```

#### Enable Konsole terminal in Flatpak or Steam Deck Lutris

Open Kate text editor and write the following lines:

```sh
#!/bin/bash
flatpak-spawn --host /usr/bin/konsole "$@"
```

Save it to somehwere you remember like Desktop or Documents, I named it "host-konsole".

Go to lutris open preferences on the top right:

![lutris preferences](/img/tutorials/lutris/preferences.webp)

Go to the Global options section. Enable "Advanced" at the top right. Scroll down to the text based games section and add the path to the script, for example:
`/home/deck/Desktop/host-konsole`

![lutris terminal](/img/tutorials/lutris/change_emulator.webp)