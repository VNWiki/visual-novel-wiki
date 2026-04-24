---
title : 'Linux Visual Novel Manager'
---

# lvnm

[lvnm](https://github.com/uunniiblog/linux-vn-manager-lvnm) is a visual novel launcher and manager for linux and Steam Deck.

It doesn't really do anything different than other linux game launchers do, but it's focused on making life easier for VNs. Main features:

- Run VNs or any games with proton and wine.
- Download proton-ge and wine (normal and wow64 builds) runners directly from the application.
- Create and manage prefixes with video codecs and winetricks easily from interface.
- Game management to test games easily in all diferent prefixes with useful environment variables for VNs.
- Real time tracking support to have an accurate play time count.
- VNDB api integration to get covers and links.
- Easy texthooking.
- Import and export game and prefixes configuration.
- Create Steam shortcuts with covers for the Steam Deck.
- PySide QT 6 interface.


## Installation

Download latest appimage from a tagged release: https://github.com/uunniiblog/linux-vn-manager-lvnm/releases

It bundles umu and winetricks so it runs smoothly in the Steam Deck.

> [!warning] Steam Deck users
> If you are using the vanilla prefix, you will need to manually install [GStreamer libraries](/steam-deck/install-gstreamer-libraries) for it to play videos correctly.

## How to use

1. In the runners tab download a wine or proton runner
2. In the prefixes tab create a prefix with the downloaded runner and video codecs or winetricks required.
3. In the games tab add a game. Select a name, path to the .exe and the prefix created before, can also add the vndb id to fetch the game cover. You can also select any environment variables needed like Japanese Locale.
4. Click Play

Visit the [wineprefixes guide](/linux/wineprefixes) for a complete detailed guide on what runners and prefixes to install.

In settings you can set folder path with all the Windows fonts to be automatically linked to the prefixes.

Visit the [github readme how to use section](https://github.com/uunniiblog/linux-vn-manager-lvnm#how-to-use) for detailed instructions of all available options in the launcher.

## Imports

In the games tab you can import a .json with preconfigured game and prefix settings that has been exported before.

Below there are a few .json you can download for popular games and engines.

Once you select the json file in the application a popup will appear where you need to select the name of the game and the location of the .exe of the game.

### Kirikiri engine (Atri, Ginka, Sharin, etc)

```json
{
    "game": {
        "name": "Kirikiri",
        "path": "",
        "prefix": "proton1034wmp11quartz2",
        "vndb": "",
        "coverpath": "",
        "last_played": "",
        "ogtitle": "",
        "envvar": {
            "LANG": "ja_JP.UTF-8"
        },
        "dlloverride": {},
        "gamescope": {
            "enabled": "false",
            "parameters": ""
        },
        "update_date": "2026-04-24 10:31:19",
        "label": "",
        "umu-gameid": "umu-default",
        "umu-store": "none"
    },
    "prefix": {
        "name": "proton1034wmp11quartz2",
        "path": "",
        "runner": "GE-Proton10-34",
        "type": "proton",
        "codecs": "quartz2 wmp11",
        "winetricks": "",
        "fonts": true,
        "update_date": "2026-04-24 10:04:02",
        "wayland": false,
        "dpi": false
    }
}
```

### BGI (Kirakira, Sakura no Uta, etc)

This one uses vanilla prefix, requires GStreamer libraries.

```json
{
    "game": {
        "name": "BGI",
        "path": "",
        "prefix": "wine10.4wow64",
        "vndb": "",
        "coverpath": "",
        "last_played": "",
        "ogtitle": "",
        "envvar": {
            "LANG": "ja_JP.UTF-8"
        },
        "dlloverride": {},
        "gamescope": {
            "enabled": "false",
            "parameters": ""
        },
        "update_date": "2026-04-24 10:44:13",
        "label": "",
        "umu-gameid": "umu-default",
        "umu-store": "none"
    },
    "prefix": {
        "name": "wine10.4wow64",
        "path": "",
        "runner": "wine-10.4-amd64-wow64",
        "type": "wine",
        "codecs": "",
        "winetricks": "",
        "fonts": true,
        "update_date": "2026-04-04 11:18:59"
    }
}
```

### Siglus Engine (Key/Visual arts VNs Summer Pockets, Anemoi, etc)

```json
{
    "game": {
        "name": "Siglus",
        "path": "",
        "prefix": "protonwmp11",
        "vndb": "v47937",
        "coverpath": "",
        "last_played": "",
        "ogtitle": "anemoi",
        "envvar": {
            "LANG": "ja_JP.UTF-8",
            "TZ": "Asia/Tokyo"
        },
        "dlloverride": {},
        "gamescope": {
            "enabled": "false",
            "parameters": "-W 3840 -H 2160 -f -r 60"
        },
        "update_date": "2026-04-24 10:48:09",
        "label": "aPlaying",
        "umu-gameid": "umu-default",
        "umu-store": "none"
    },
    "prefix": {
        "name": "protonwmp11",
        "path": "",
        "runner": "GE-Proton10-34",
        "type": "proton",
        "codecs": "wmp11",
        "winetricks": "",
        "fonts": true,
        "update_date": "2026-04-23 20:50:28",
        "wayland": false,
        "dpi": false
    }
}
```

### Nitroplus newer engine (Tokyo Necro, Demonbane remake, Muramasa, etc)

```json
{
    "game": {
        "name": "Nitroplus",
        "path": "",
        "prefix": "NitroplusPrefix",
        "vndb": "",
        "coverpath": "",
        "last_played": "",
        "ogtitle": "",
        "envvar": {
            "LANG": "ja_JP.UTF-8",
            "PROTON_MEDIA_USE_GST": "1"
        },
        "dlloverride": {},
        "gamescope": {
            "enabled": "false",
            "parameters": ""
        },
        "update_date": "2026-04-24 10:55:28",
        "label": "",
        "umu-gameid": "umu-default",
        "umu-store": "none"
    },
    "prefix": {
        "name": "NitroplusPrefix",
        "path": "",
        "runner": "GE-Proton10-25",
        "type": "proton",
        "codecs": "",
        "winetricks": "",
        "fonts": false,
        "update_date": "2026-04-24 10:04:02",
        "wayland": false,
        "dpi": false
    }
}
```

> [!info] Japanese locale
> All this import files have japanese locale enabled, you may not need it for officially localized games.