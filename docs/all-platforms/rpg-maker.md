---
title : 'RPG Maker'
---

# RPG Maker

[RPG Maker](https://www.rpgmakerweb.com/) is a series of programs for the development of role-playing video games.

## Windows

Some Japanese games are compatible with [Locale Emulator](https://xupefei.github.io/Locale-Emulator/) but [enabling JP Locale](/all-platforms/jp-locale) may be required.

## Linux

### Native

Many games can be played natively on Linux using EasyRPG Player and mkxp. RPG Maker MV/MZ games can be run through a [local web server](https://rpgmakerofficial.com/product/MV_Help/page/01_11_08.html) and a browser or [NW.js](https://itch.io/blog/484532/how-to-update-nwjs-in-rpg-maker-mv-for-rpg-devs).

### Lutris

> [!info] Information
> Requires to have [JP Locale enabled](/all-platforms/jp-locale).

1. Create a vanilla Wine prefix, install [English](https://www.rpgmakerweb.com/run-time-package) and/or [Japanese](https://rpgmakerofficial.com/support/rtp/) RTPs.
2. Install [Japanese fonts](/linux/wineprefixes).
3. Download [RPG Maker 2003 fonts](https://web.archive.org/web/20201206133232/https://rpgmaker.net/users/kentona/locker/Fonts.rar) and copy them to `drive_c/windows/Fonts`.
4. Set the `LANG="ja_JP.UTF-8"` or `LC_ALL="ja_JP.UTF-8` environment variable if your game is in Japanese and run it through Lutris.
5. (Optional) For RPG Maker MV, you can run `winetricks d3dcompiler_43 corefonts` if you have trouble running some games.

#### Known issues

- Try different RTP installers if you get any errors.
- You might have to change Wine "Compatibility mode" using `winecfg` to run some games.
- Some Wine versions may require to [delete "libEGL.dll"](https://github.com/ValveSoftware/Proton/issues/3694#issuecomment-968034842) from the game directory, [disable "libglesv2.dll"](https://www.reddit.com/r/linux_gaming/comments/p7t05w/comment/j64kvt8/) using `winecfg` or [install "quartz" and "devenum"](https://blog.easyrpg.org/2017/10/running-rpg-maker-games-in-wine/) through Winetricks to run a game.
- Editing "Game.ini" to change the DLL used by a game [might prevent missing DLL errors](https://forums.rpgmakerweb.com/index.php?threads/question-around-rgss102e-dll.107608/#post-958495)
- Use `iconv` and `unzip` commands to fix files with encoding issues in their name or content as they can crash the game.
- For MIDI playback support, run `winetricks directmusic` , install and configure `timidity` or just convert MIDI files to MP3.

### EasyRPG Player

[EasyRPG Player](https://github.com/EasyRPG/Player) is a game interpreter to play RPG Maker 2000, 2003 and [EasyRPG](https://easyrpg.org/) games. It can be used to replace the RPG Maker executable to play those on macOS or GNU/Linux natively.

Run the `easyrpg-player` executable from a RPG Maker 2000 or 2003 game directory (same place as `RPG_RT.exe`).

As it supports MIDI playback, you don't need to use a software synthesizer like [Timidity++](https://wiki.archlinux.org/title/Timidity), only soundfont files. According to [this post on Github](https://github.com/EasyRPG/easyrpg.org/issues/55#issuecomment-675758243), you can rename a `.sf2` file to `easyrpg.soundfont` and put it inside the game directory to use it. You can also start EasyRPG Player from the commandline with the `--soundfont` option where and give it a file in SF2 format. More about the CLI usage on the [official wiki](https://wiki.easyrpg.org/user/player/command-line).

EasyRPG player isn't a silver bullet though. Check out this [compatibility list](https://community.easyrpg.org/t/compatibility-list/283) to see if it can run your game.

### MKXP

[mkxp](https://github.com/Ancurio/mkxp) and [mkxp-z](https://github.com/mkxp-z/mkxp-z) are projects that seek to provide a fully open source implementation of the Ruby Game Scripting System (RGSS) interface used in the popular game creation software "RPG Maker XP", "RPG Maker VX" and "RPG Maker VX Ace" (trademark by Enterbrain, Inc.), with focus on Linux. The goal is to be able to run games created with the above software natively without changing a single file. Basically, it can be seen as an [EasyRPG Player](https://github.com/EasyRPG/Player) equivalent for "RPG Maker XP", "RPG Maker VX" and "RPG Maker VX Ace".

Run the executable from the file manager, a launcher or from a terminal emulator with `mkxp --gameFolder="game"`. You can change the settings using the `--<option>=<value>` syntax and by checking the options list inside [mkxp.conf.sample](https://github.com/Ancurio/mkxp/blob/master/mkxp.conf.sample). mkxp also supports MIDI playback. Download a sound font and start mkxp with `mkxp --gameFolder="game" --midi.soundFont=/path/to/soundfont.sf2`.

### rpgmakermlinux-cicpoffs

[rpgmakermlinux-cicpoffs](https://github.com/bakustarver/rpgmakermlinux-cicpoffs) is a bash script mainly developed to run RPG Maker games (XP, VX, VX Ace, MV, MZ) natively. It also supports TyranoBuilder, Godot, Construct 2/3 and NScripter games.

Most RPG Maker games should work with Wine but some of them have case-sensitive issues. It can also start games from the right-click menu inside your file manager and be added to Steam as a compatibility tool.

> [!warning] Warning
> Do not execute random Bash scripts without checking them first.

Follow the instructions from the [Github page](https://github.com/bakustarver/rpgmakermlinux-cicpoffs) to install rpgmakermlinux-cicpoffs.

> [!info] Information
> To display all possible commands, run `rpgmaker-linux --help`.

You can start a game using the following command:

```
rpgmaker-linux --gamepath /path/to/game/
```

> [!warning] Warning
> Be careful with spaces in the path name, use `""` quotes to surround the path if there is a space

You can also start it from your file manager or Steam.

Right-click on the game executable and select "Open with" then "RPG Maker MV/MZ (cicpoffs mount)"

![](https://i.imgur.com/1R2SrIA.png)

If it's not a Steam game, add it as a non-Steam game first. Then, right-click on the game, go to "Properties" in the "Compatibility" tab and select "RPG Maker MV/MZ (cicpoffs mount) Tool"

![](https://i.imgur.com/RwRFlSU.png)


## Game translations

1. Extract resources from "Game.rgss" using [RGSS Decryptor](https://github.com/usagirei/RGSS-Decryptor).
2. Copy them to the game directory.
3. Extract the patch archive to the same location.
4. Delete "Game.rgss".

Some projects might recommend [RPGMaker Trans](https://rpgmakertrans.bitbucket.io/index.html) instead.

## Controls

- [RPG Maker forums thread](https://forums.rpgmakerweb.com/index.php?threads/rpg-maker-pc-game-controls-mv-vx-ace-vx-xp-2003-2000.140758/)

## Links

- [NW.js Documentation - "Package and Distribute"](https://docs.nwjs.io/For%20Users/Package%20and%20Distribute/)
- [NW.js Documentation - "Command Line Options"](https://docs.nwjs.io/References/Command%20Line%20Options/)
- [NW.js website](https://nwjs.io/)
- [NW.js download](https://dl.nwjs.io/v0.96.0/)
- [kakurasan's Linux blog](https://kakurasan.blogspot.com/)

