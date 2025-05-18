---
title = 'WOLF RPG Editor'
---

# WOLF RPG Editor

[WOLF RPG Editor](https://silversecond.com/WolfRPGEditor/) is an RPG engine like RPG Maker.

## Windows

Some Japanese games are compatible with [Locale Emulator](https://xupefei.github.io/Locale-Emulator/) but [enabling JP Locale](/all-platforms/jp-locale) may be required.

## Linux

### Lutris

> [!info] Information
> Requires to have [JP Locale enabled](/all-platforms/jp-locale).

Install [Japanese Fonts](/linux/wineprefixes).

### Known issues

- Some games might need to have their settings tweaked with "Config.exe" to even start.
- Some Wine versions might require to [disable "xaudio2_8.dll"](https://github.com/iXit/Mesa-3D/issues/65#issuecomment-163955999) using `winecfg` to run a game.

## Game translations

[Follow vgperson's guide](https://www.vgperson.com/posts.php?p=wolfrpgguide) from step 3 to 5, extract the patch archive to the "Data" directory and delete the "Data.wolf" file.
