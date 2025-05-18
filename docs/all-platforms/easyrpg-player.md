---
title: 'EasyRPG Player'
---

# EasyRPG Player

[EasyRPG Player](https://github.com/EasyRPG/Player) is a game interpreter to play RPG Maker 2000, 2003 and [EasyRPG](https://easyrpg.org/) games. It can be used to replace the RPG Maker executable to play those on macOS or GNU/Linux natively.

## Usage

Run the `easyrpg-player` executable from a RPG Maker 2000 or 2003 game directory (same place as `RPG_RT.exe`).

### MIDI support

EasyRPG Player support sound font files. According to [this post on Github](https://github.com/EasyRPG/easyrpg.org/issues/55#issuecomment-675758243), you can rename a `.sf2` file to `easyrpg.soundfont` and put it inside the game directory to use it. You can also start EasyRPG Player from the commandline with the `--soundfont` option where and give it a file in SF2 format. More about the CLI usage on the [official wiki](https://wiki.easyrpg.org/user/player/command-line).

As it supports MIDI playback, you don't need to use a software synthesizer like [Timidity++](https://wiki.archlinux.org/title/Timidity).

## Compatibility

EasyRPG player isn't a silver bullet. Check out this [compatibility list](https://community.easyrpg.org/t/compatibility-list/283) to see if it can run your game.