---
title = 'Bishoujo Mangekyou -Norowareshi Densetsu no Shoujo-'
---

# Bishoujo Mangekyou -Norowareshi Densetsu no Shoujo-
## Installation

> [!info] Information
> Unzip the game to whichever folder you would like it to be in.

### Linux

> [!info] Information
> Tested with [Lutris-GE-Proton 7-35](/linux/adding-wine-versions).

#### Lutris

1. Download the [translation patch](https://arcadeotic.wixsite.com/euphemictl/single-post/2018/10/09/Bishoujo-Mangekyou-A-Girls-Cursed-Legend) and rename the Japanese named executables to something else.

2. Add locally installed game with these settings:

   * In "Game info", select "Wine" for "Runner"
   * In "Game options", select "visualnoveengine" prefix directory for "Wine prefix" and the translated game binary for "Executable"
   * In "System options", set up Japanese locales with this environment variable: `LC_ALL=ja_JP.utf8`
  
3. Change the save location. Go to the game directory, into `SaveData` and edit "savePath.txt". It should look something like that:
`SavePath=\home\your_user\Games\BishoujoMangekyou-NorowareshiDensetsunoShoujo-\SaveData\`

> [!warning] Warning
> Since we're using Wine to run the game, you have to put backslashes in the save path, just like on Windows.

## Links

* [VNDB](https://vndb.org/v8038)
