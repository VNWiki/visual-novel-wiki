---
title : 'Gore Screaming Show'
---

# Gore Screaming Show
## Installation

### Linux

#### Lutris

> [!info] Information
> Tested with [Lutris-GE-Proton 7-32](/linux/adding-wine-versions).

Add locally installed game with these settings:

* In "Game info", select "Wine" for "Runner"
* In "Game options", select "lavfilters" prefix directory for "Wine prefix" and `game.exe` for "Executable"
* In "Runner options", set one "DLL override" to fix font issues: `ddraw=n,b`
* In "System options", set up Japanese locales with this environment variable: `LC_ALL=ja_JP.utf8`

> [!info] Information
> Make sure DLL Overrides are saved and play the game in windowed mode as fullscreen can be broken.

#### Steam

In Steam, right click "Gore Screaming Show", select "Properties", visit the "Launch Options" tab and copy paste the following command:

```
WINEDLLOVERRIDES="ddraw.dll=n,b" LANG="ja_JP.utf8" %command%
```

### Steam Deck

Same as Linux.

## Save Data

### Linux / Steam Deck

Overwrite "sysfile.sav" in the sav folder inside of your game install folder. To find it, open Steam, right click "Gore Screaming Show", click "Properties", click "Local Files", then "Browse". This will open up the game folder.

## Links

* [VNDB](https://vndb.org/v933)
* [SteamGridDB](https://www.steamgriddb.com/game/5360985)
* [Steam](https://store.steampowered.com/app/2182690/Gore_Screaming_Show/) (All-Ages / censored)
* [GOG](https://www.gog.com/game/gore_screaming_show) (All-Ages / censored)
* [JAST USA](https://jastusa.com/games/jast051/gore-screaming-show) (18+)
* [+18 patch for Steam version](https://jastusa.com/games/jast051_r18dlc/gore-screaming-show-18+-content-dlc)
* [Walkthrough](https://forums.fuwanovel.net/topic/25726-gore-screaming-show-in-progress/)
