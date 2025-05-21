---
title : 'rpgmakermlinux-cicpoffs'
---

# rpgmakermlinux-cicpoffs

[rpgmakermlinux-cicpoffs](https://github.com/bakustarver/rpgmakermlinux-cicpoffs) is a bash script mainly developed to run RPG Maker games (XP, VX, VX Ace, MV, MZ) natively. It also supports TyranoBuilder, Godot, Construct 2/3 and NScripter games.

Most RPG Maker games should work with Wine but some of them have case-sensitive issues. It can also start games from the right-click menu inside your file manager and be added to Steam as a compatibility tool.

## Installation

> [!warning] Warning
> Do not execute random Bash scripts without checking them first.

Follow the instructions from the [Github page](https://github.com/bakustarver/rpgmakermlinux-cicpoffs).

> [!info] Information
> To display all possible commands, run `rpgmaker-linux --help`.

## Usage

### Terminal

You can start a game using the following command:

```
rpgmaker-linux --gamepath /path/to/game/
```

> [!warning] Warning
> Be careful with spaces in the path name, use `""` quotes to surround the path if there is a space

### File manager

Right-click on the game executable and select "Open with" then "RPG Maker MV/MZ (cicpoffs mount)"

![](https://i.imgur.com/1R2SrIA.png)

### Steam

If it's not a Steam game, add it as a non-Steam game first. Then, right-click on the game, go to "Properties" in the "Compatibility" tab and select "RPG Maker MV/MZ (cicpoffs mount) Tool"

![](https://i.imgur.com/RwRFlSU.png)
