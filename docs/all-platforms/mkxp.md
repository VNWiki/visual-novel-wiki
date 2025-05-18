---
title: 'MKXP'
---

# MKXP

[mkxp](https://github.com/Ancurio/mkxp) is a project that seeks to provide a fully open source implementation of the Ruby Game Scripting System (RGSS) interface used in the popular game creation software "RPG Maker XP", "RPG Maker VX" and "RPG Maker VX Ace" (trademark by Enterbrain, Inc.), with focus on Linux. The goal is to be able to run games created with the above software natively without changing a single file.

Basically, it can be seen as an [EasyRPG Player](https://github.com/EasyRPG/Player) equivalent for "RPG Maker XP", "RPG Maker VX" and "RPG Maker VX Ace".

## Usage

Run the executable from the file manager, a launcher or from a terminal emulator with `mkxp --gameFolder="game"`. You can change the settings using the `--<option>=<value>` syntax and by checking the options list inside [mkxp.conf.sample](https://github.com/Ancurio/mkxp/blob/master/mkxp.conf.sample).

### MIDI support

mkxp also supports MIDI playback. Download a sound font and start mkxp with `mkxp --gameFolder="game" --midi.soundFont=/path/to/soundfont.sf2`.

## Fork(s)

[mkxp-z](https://github.com/mkxp-z/mkxp-z) is a fork of mkxp with more features.