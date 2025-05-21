---
title : 'Hoshi Ori Yume Mirai'
---

# Hoshi Ori Yume Mirai
## Installation

### Linux

#### Lutris

> [!info] Information
> Tested with [Lutris-GE-Proton 7-32](/linux/adding-wine-versions).

> [!warning] Warning
> We will be using the Disk installer version (it has two disk images), mount both using [CDEmu](/linux/cdemu).

1. Add locally installed game with these settings:

   * In "Game info", select "Wine" for "Runner"
   * In "Game options", select any prefix directory for "Wine prefix" and `Autorun.exe` for "Executable" (installation only)
   * In "System options", set up Japanese locales with this environment variable: `LC_ALL=ja_JP.utf8`

2. Run "Autorun.exe" and install the game using the first button.
3. Click on the button with a "Y".
4. The installer will wait for the second disk. Instead, stop the installer using Lutris.
5. Locate the `SetupData/gamedata` directory inside the second disk, copy all the content (not the directory) inside the installation folder in your Wine prefix.
6. Replace all the content of the [English patch](https://github.com/hanabiworks/Hoshi-Ori-Yume-Mirai-Perfect-Edition-English-Translation) inside the same directory.
7. Edit the configuration of the game:

   * In "Game options", select `SiglusEngine.exe` for "Executable"

> [!info] Information
> If everything works, HanabiWorks and Tsurezure Scans splash screens should appear.

### Steam Deck

Download version only, [CDEmu](/linux/cdemu) under testing.

## Links

* [VNDB](https://vndb.org/v14265)
* [SteamGridDB](https://www.steamgriddb.com/game/5281426)
* [Walkthrough](https://forums.fuwanovel.net/topic/21841-hoshi-ori-yume-mirai-star-weaving-%E2%98%86-dreaming-of-the-future/)
* [English patch Github repository](https://github.com/hanabiworks/Hoshi-Ori-Yume-Mirai-Perfect-Edition-English-Translation)