---
title : 'RPG Maker'
---

# RPG Maker

[RPG Maker](https://www.rpgmakerweb.com/) is a series of programs for the development of role-playing video games.

## Windows

Some Japanese games are compatible with [Locale Emulator](https://xupefei.github.io/Locale-Emulator/) but [enabling JP Locale](/all-platforms/jp-locale) may be required.

## Linux

### Lutris

> [!info] Information
> Requires to have [JP Locale enabled](/all-platforms/jp-locale).

1. Install [English](https://www.rpgmakerweb.com/run-time-package) and/or [Japanese](https://rpgmakerofficial.com/support/rtp/) RTPs.
2. Install [Japanese fonts](/linux/wineprefixes).
3. Download [RPG Maker 2003 fonts](https://web.archive.org/web/20201206133232/https://rpgmaker.net/users/kentona/locker/Fonts.rar) and copy them to `drive_c/windows/Fonts`.

## Known issues

- Try different RTP installers if you get any errors.
- You might have to change Wine "Compatibility mode" using `winecfg` to run some games.
- Some Wine versions may require to [delete "libEGL.dll"](https://github.com/ValveSoftware/Proton/issues/3694#issuecomment-968034842) from the game directory,[disable "libglesv2.dll"](https://www.reddit.com/r/linux_gaming/comments/p7t05w/comment/j64kvt8/) using `winecfg` or [install "quartz" and "devenum"](https://blog.easyrpg.org/2017/10/running-rpg-maker-games-in-wine/) through Winetricks to run a game.
- Editing "Game.ini" to change the DLL used by a game [might prevent missing DLL errors](https://forums.rpgmakerweb.com/index.php?threads/question-around-rgss102e-dll.107608/#post-958495)
- RPG Maker MV/MZ games can be run natively through a [local web server](https://rpgmakerofficial.com/product/MV_Help/page/01_11_08.html).

## Game translations

1. Extract resources from "Game.rgss" using [RGSS Decryptor](https://github.com/usagirei/RGSS-Decryptor).
2. Copy them to the game directory.
3. Extract the patch archive to the same location.
4. Delete "Game.rgss".

Some projects might recommend [RPGMaker Trans](https://rpgmakertrans.bitbucket.io/index.html) instead.

## Controls

[RPG Maker forums thread](https://forums.rpgmakerweb.com/index.php?threads/rpg-maker-pc-game-controls-mv-vx-ace-vx-xp-2003-2000.140758/)
