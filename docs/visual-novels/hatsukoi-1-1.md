---
title = 'Hatsukoi 1/1'
---

# Hatsukoi 1/1
## Installation

### Linux

> [!info] Information
> Tested with [Lutris-GE-Proton 7-32](/linux/adding-wine-versions).

> [!warning] Warning
> We will be using the disk installer version (it has two disk images), mount it using [CDEmu](/linux/cdemu). You will need to mount the disk image everytime you want to play.

Download [the english patch from Tsurezure Scans](https://tsurezurescans.wordpress.com/2018/09/27/hatsukoi-1-1-full-english-patch-main-game-append-scenarios/).

#### Lutris

1. Add locally installed game with these settings:

   * In "Game info", select "Wine" for "Runner"
   * In "Game options", select any prefix directory for "Wine prefix" and `Autorun.exe` for "Executable" (installation only)
   * In "System options", set up Japanese locales with this environment variable: `LC_ALL=ja_JP.utf8`

2. Run `Autorun.exe` and install the game using the first button
3. Click on the button with "Y".
4. The installer will wait for the second disk. Instead, stop the installer using Lutris.
5. Locate the `setupdata/gamedata` directory inside the second disk, copy all the content (not the directory) inside the installation folder in your Wine prefix.
6. Replace all the content of the patch inside the same directory.
7. Edit the configuration of the game:

   * In "Game options", select `Launcher.exe` for "Executable"

8. Run the game for the first time, leave the first disk mounted and press "OK". If everything works, you should get a message and a confirmation from the Tsurezure Scans' patch.

## Save data

### Windows

Put the "global.sav" file into `C:\Program Files (x86)\toneworks\Hatsukoi\savedata\` directory.

## Links

* [VNDB](https://vndb.org/v9124)
* [SteamGridDB](https://www.steamgriddb.com/game/5353498)
* [Walkthrough](https://forums.fuwanovel.net/topic/17689-hatsukoi-11/)
* [Tsurezure Scans' english patch](https://tsurezurescans.wordpress.com/2018/09/27/hatsukoi-1-1-full-english-patch-main-game-append-scenarios/)
