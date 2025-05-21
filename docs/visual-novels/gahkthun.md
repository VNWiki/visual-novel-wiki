---
title : 'Gahkthun of the Golden Lightning -What a Radiant Brave-'
---

# Gahkthun of the Golden Lightning -What a Radiant Brave-
## Installation

### Windows

Use [Locale Emulator](https://xupefei.github.io/Locale-Emulator/), right-click on the game and choose "Run" in the "Locale Emulator" section.

## Linux

> [!info] Information
> Tested with [Lutris 7.21](/linux/adding-wine-versions).

### Lutris

1. Add locally installed game with these settings:

   * In "Game info", select "Wine" for "Runner"
   * In "Game options", select "liarsoftengine" prefix directory for "Wine prefix" and "game.exe" for "Executable"
   * In "Runner Options", disable DXVK
   * In "System Options", set up Japanese locales with `LC_ALL=ja_JP.utf8` and install Japanese fonts

2. Run the game once so the "drive_c" folder is generated inside the "liarsoftengine" then close it.
3. Install "mciqtz32" with the [special codecs script](/linux/special-codecs): `sh codec.sh mciqtz32`
4. Go back to Lutris, click on the Wine bottle and "Wine Configuration".
5. Go to the "Libraries" tab and check if a new override called "mciqtz32" has been registered as "Native"
6. Finally, run the game.

## Save Data

### Windows / Linux

Save are located inside the "save" folder, in the game directory.

## Links

* [VNDB](https://vndb.org/v11033)
* [SteamgridDB](https://www.steamgriddb.com/game/11363)
* [Walkthrough](https://forums.fuwanovel.net/topic/13445-gahkthun-of-the-golden-lightning/)
