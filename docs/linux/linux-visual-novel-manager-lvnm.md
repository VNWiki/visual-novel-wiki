---
title: "Linux Visual Novel Manager"
---

# lvnm

[lvnm](https://github.com/uunniiblog/linux-vn-manager-lvnm) is a visual novel launcher and manager for linux and Steam Deck.

It doesn't really do anything different than other linux game launchers do, but it's focused on making life easier for VNs. Main features:

- Run VNs or any games with proton and wine.
- Download proton-ge and wine (normal and wow64 builds) runners directly from the application.
- Create and manage prefixes with video codecs and winetricks easily from interface.
- Game management to test games easily in all diferent prefixes with useful environment variables for VNs.
- Emulated games for some platforms.
- Real time tracking support to have an accurate play time count.
- VNDB and SteamgridDB api integration to get covers images, hero layouts and direct links.
- Easy texthooking.
- Sync game savedata seamlessly between devices running lvnm.
- Import and export game and prefixes configuration.
- Create Steam shortcuts with covers for the Steam Deck.
- PySide QT 6 interface.

## Installation

Download latest appimage from a tagged release: <https://github.com/uunniiblog/linux-vn-manager-lvnm/releases>

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

Visit the [github wiki](https://github.com/uunniiblog/linux-vn-manager-lvnm/wiki) for detailed instructions of all available options in the launcher.

## Imports

In the games tab, you can import a .json file containing preconfigured game and prefix settings.

There are several `.json` files you can import for popular games and engines in the [repo](https://github.com/uunniiblog/linux-vn-manager-lvnm/tree/main/game_import_jsons).

Once you select the json file in the application a popup will appear where you need to select the name of the game and the location of the .exe of the game to complete the import.

## Screenshots
![Screenshots](https://raw.githubusercontent.com/uunniiblog/linux-vn-manager-lvnm/refs/heads/main/.github/images/lvnm.jpg)
