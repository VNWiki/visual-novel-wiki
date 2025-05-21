---
title : 'Albatross Koukairoku'
---

# Albatross Koukairoku
## Installation

### Windows

Use [Locale Emulator](https://xupefei.github.io/Locale-Emulator/), right-click on the game and choose "Run" in the "Locale Emulator" section.

### Linux/Steam Deck

> [!info] Requirements
> Download [mciqtz32.dll](https://www.visualnovelwiki.org/tutorials/liarsoftengine/mciqtz32.zip). Tested with Lutris 7.21.

#### Lutris

1. Mount the game using [CDEmu](/linux/cdemu) and install wherever you want using the `setup.exe`.
2. Add locally installed game with these settings:

   * In "Game info", select "Wine" for "Runner"
   * In "Game options", select "liarsoftengine" directory for "Wine prefix" and `信天翁航海録.exe` or `game.exe` for "Executable"
   * In "Runner Options", disable DXVK
   * In "System options", set up Japanese locales with this environment variable: `LC_ALL=ja_JP.utf8`

3. Run the game once so the `drive_c` folder is generated inside of the "liarsoftengine" folder you’ve created then close the game.
4. Go to this folder: `liarsoftengine/drive_c/windows/syswow64` then drag and drop the "mciqtz32.dll" you downloaded.
5. Go back to Lutris, and click the Wine Bottle and click "Wine Configuration".
6. When the winecfg window pops up, go to "Libraries", enter a new override called "mciqtz32" and click "Add" and finally click "Apply & OK".

## Links

* [VNDB](https://vndb.org/v3883)