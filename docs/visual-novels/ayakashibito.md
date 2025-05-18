---
title = 'Ayakashibito'
---

# Ayakashibito
## Installation

### Windows

Use [Locale Emulator](https://xupefei.github.io/Locale-Emulator/), right-click on the game and choose "Run" in the "Locale Emulator" section. Then, run the `aya.bat` included to set the needed registry key.

### Linux/Steam Deck

> [!info] Requirements
> Download [modified aya.bat script](https://www.visualnovelwiki.org/tutorials/liarsoftengine/mciqtz32.zip) for Linux. Tested with Lutris 7.21. The modified `aya.bat` is the exact same file except there is a new line added at the top to use chcp 932, which is SJIS encoding to correctly run the script.

#### Lutris

1. Add locally installed game with these settings:

   * In "Game info", select "Wine" for "Runner"
   * In "Game options", select any prefix directory for "Wine prefix" and `aya.bat` for "Executable" (setup only)
   * In "Runner Options", disable DXVK
   * In "System options", set up Japanese locales with this environment variable: `LC_ALL=ja_JP.utf8`

2. Run the game.
3. Set the game executable to the `game.exe`.

## Save data

### Windows / Linux / Steam Deck

Overwrite the folder contents in `Ayakashibito\save` (game folder).

## Links

* [VNDB](https://vndb.org/v646)
* [SteamGridDB](https://www.steamgriddb.com/game/5356633)
* [Walkthrough](https://forums.fuwanovel.net/topic/4131-ayakashibito/)
