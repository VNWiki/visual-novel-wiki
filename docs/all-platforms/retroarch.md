---
title = 'RetroArch'
---

# RetroArch

## Installation

Follow [this guide on the Emulation General Wiki](https://emulation.gametechwiki.com/index.php/Using_RetroArch#Installing_RetroArch_on_Linux).

## PC-98

PC-98 games can easily be played through RetroArch thanks to the [np2kai libretro core](https://github.com/AZO234/NP2kai).

### Core installation and configuration

1. Install np2kai.
2. Put the font named "font.rom", "FONT.ROM" or "font.bmp" inside `~/.config/retroarch/system/np2kai/` like [explained in the documentation](https://docs.libretro.com/library/neko_project_ii_kai/#bios).
3. Run RetroArch and [scan the directory](https://docs.libretro.com/guides/import-content/#step-2-scan-and-import) where the games are located.
4. Configure the core like this:

   * for "PC Model", select "PC-9801VX"
   * for "CPU Clock Multiplier", select "42" or more
   * for "RAM Size", select "16"
   * for "CPU Feature", select "80386"
   * for "Sound Board", select "PC9801-86" to play newer games (recommended) and "PC9801-26K" to play older ones
   * for "GDC", select "uPD7220"
   * for "JastSound", select "OFF"
   * for "Floppy Seek Sound", select "OFF"
   * for "Volume Floppy Seek", select "0"
   * for "Volume Beep", select "0"
   * for "Use mouse or touchpanel to input mouse", select "ON" if you want to play games that need a mouse
   * for "Joypad D-pad to Mouse/Keyboard/Joypad Mapping", select "Manual Keyboard"

These settings can be tweaked further if some games require a different configuration. More information can be found in [this guide](https://gang-fight.com/projects/98faq/) and on the [official libretro core documentation](https://docs.libretro.com/library/neko_project_ii_kai/).

> [!warning] Warning
> The following section is for advanced users who want to remap their joystick buttons.

To remap joystick buttons, the "lrjoybtn" setting located in `~/.config/retroarch/system/np2kai/np2kai.cfg` will have to be edited according to the [np2kai core repository documentation](https://github.com/AZO234/NP2kai/blob/master/README.md?plain=1#L569).

Quoting the documentation:

"This value is little endian and 12 values ​​of 16bits(2Bytes) are arranged. Write the key code of RETROK (see libretro.h) to this value. The order is D-UP/DOWN/LEFT/RIGHT/A/B/X/Y/L/R/Select/Start."

So, if you want to bind the "Up" arrow key to "D-UP", you will have to find its code in [libretro.h](https://github.com/AZO234/NP2kai/blob/master/sdl/libretro/libretro-common/include/libretro.h#L312) first (here, "273"), convert it to little-endian hexadecimal ("1101") and put a space between the 2 bytes ("11 01"). Then, repeat the process for each button.

At the end, the line should look like something like this:

```
lrjoybtn = 11 01 12 01 14 01 13 01 78 00 7a 00 20 00 32 01 08 00 2f 01 1b 00 0d 00
```

### Games

This configuration should allow to run most of the translated games (like "Touhou" or "Super Dimension Fortress Macross - Skull Leader"). Here's a brief overview **on what works** with the np2kai core.

* ✅: Verified to work
* ⚠️: Work with some issues
* ❓: Unknown
* ❌: Broken

| Game                                                                            | State |
|---------------------------------------------------------------------------------|-------|
| [Eimmy to Yobanaide](https://vndb.org/r99102)                                   | ✅    |
| [Kindan no Ketsuzoku](https://vndb.org/r112891)                                 | ✅    |
| [Meisou Toshi](https://vndb.org/r98275)                                         | ✅    |
| [Rance - Hikari o Motomete -](https://vndb.org/r114480)                         | ✅    |
| [Rance II - Hangyaku no Shoujo-tachi -](https://vndb.org/r117863)               | ✅    |
| [Rance III - Leazas Kanraku -](https://vndb.org/r121570)                        | ✅    |
| [Rance IV - Kyoudan no Isan -](https://vndb.org/r127999)                        | ✅    |
| [Sakura no Kisetsu](https://vndb.org/r98275)                                    | ✅    |
| [San Shimai](https://vndb.org/r98275)                                           | ✅    |
| [YU-NO](https://vndb.org/r83617)                                                | ✅    |
