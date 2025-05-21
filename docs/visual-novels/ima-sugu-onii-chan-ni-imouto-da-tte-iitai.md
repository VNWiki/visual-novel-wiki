---
title : 'Ima Sugu Onii-chan ni Imouto da tte Iitai!'
---

# Ima Sugu Onii-chan ni Imouto da tte Iitai!
## Installation

### Linux

#### Lutris

> [!info] Information
> Tested with [Lutris-GE-Proton 7-32](/linux/adding-wine-versions).

> [!warning] Warning
> If you have the disk version of the game, mount it using [CDEmu](/linux/cdemu). You will need to mount the disk image everytime you want to play.

1. Add locally installed game with these settings:

   * In "Game info", select "Wine" for "Runner"
   * In "Game options", select any prefix directory for "Wine prefix" and `Setup.exe` for "Executable" (installation only)
   * In "System options", set up Japanese locales with this environment variable: `LC_ALL=ja_JP.utf8`

2. Run "Setup.exe" and install the game using the first button. If the installation was successful, you will get a message.
3. Edit the configuration of the game:

   * In "Game options", select `いますぐお兄ちゃんに妹だっていいたい！.exe` for "Executable"

4. Follow the patch "Readme" instructions, basically you need to replace files according to the version you have installed. In the same folder where the executable is located, replace the files with the content of "01. English patch" directory. If you have the disk version, also replace with the content of "02. Disk version" directory.
5. Run the game for the first time, it will ask for a key. Insert it, the game will open it is correct. If everything works, you will see Studio Frisay logo.

### Steam Deck

The same as Linux, but it will only work with the download edition of the game, as [CDEmu](/linux/cdemu) is not supported (or haven’t been tested) for now.

## Save Data

### Windows

Put the BGI.gdb file into `C:\fairys\いますぐお兄ちゃんに妹だっていいたい！\` directory.

## Links

* [VNDB](https://vndb.org/v7766)
* [SteamGridDB](https://www.steamgriddb.com/game/5346059)
* [English patch Fuwanovel thread](https://forums.fuwanovel.net/topic/24866-studio-frisay-imasugu-onii-chan-ni-imouto-datte-iitai-translation-project-released/)