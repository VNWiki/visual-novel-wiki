---
title : 'RetroArch'
---

# RetroArch

[RetroArch](https://www.retroarch.com/?page=platforms) is a unified graphical front-end for emulators. On Linux, it can be installed [from your package manager](https://emulation.gametechwiki.com/index.php/Using_RetroArch#Installing_RetroArch_on_Linux), Steam, [Flathub](https://www.retroarch.com/index.php?page=linux-instructions) and even Snapcraft.

## Core installation

RetroArch doesn't come with emulators by default. Called "cores" in RetroArch, they're plugins implementing the Libretro API. To install them, you do it [through the online updater](https://www.retroarch.com/?page=cores), directly from RetroArch. You can do it manually by downloading the core you want from [buildbot.libretro.com](https://buildbot.libretro.com/nightly/linux/x86_64/latest/) and extracting it to `~/.config/retroarch/cores/`. 

> [!warning] Warning
> When installed through your Linux package manager, RetroArch online updater might be disabled by default. You'll have to [edit its configuration file](https://wiki.archlinux.org/title/RetroArch#Enabling_the_%22Online_Updater%22) to enable it.

> [!warning] Warning
> On Linux, if you encounter the "No Cores Available" error, you might have to [change the cores path in the RetroArch configuration file](https://wiki.archlinux.org/title/RetroArch#No_cores_found).

## Adding games

The easiest way is to [scan a directory where games from the same system are located](https://docs.libretro.com/guides/import-content/#step-2-scan-and-import). To do that, select "Manual Scan", then a content directory with "Content Directory", set "Default Core" and choose "Start Scan". A new entry should have been added to the RetroArch main menu.

## Systems

### PC-98

PC-98 games can easily be played through RetroArch thanks to the [np2kai libretro core](https://github.com/AZO234/NP2kai).

1. Install [np2kai](https://docs.libretro.com/library/neko_project_ii_kai/) [manually](https://buildbot.libretro.com/nightly/linux/x86_64/latest/np2kai_libretro.so.zip) or from the online updater.
2. Place the font file (`font.rom`, `FONT.ROM`, or `font.bmp`) inside `~/.config/retroarch/system/np2kai/`. Refer to the [official BIOS setup documentation](https://docs.libretro.com/library/neko_project_ii_kai/#bios) for more details.
3. Run RetroArch and [scan the directory](https://docs.libretro.com/guides/import-content/#step-2-scan-and-import) where the games are located.
4. Configure the core with the following settings (it should run most of the translated games).

| Setting                                      | Value                                                                 |
|----------------------------------------------|-----------------------------------------------------------------------|
| **PC Model**                                 | `PC-9801VX`                                                           |
| **CPU Clock Multiplier**                     | `42`                                                                  |
| **RAM Size**                                 | `16`                                                                  |
| **CPU Feature**                              | `80386`                                                               |
| **Sound Board**                              | `PC9801-86`                                                           |
| **GDC**                                      | `uPD7220`                                                             |
| **JastSound**                                | `OFF`                                                                 |
| **Floppy Seek Sound**                        | `OFF`                                                                 |
| **Volume Floppy Seek**                       | `0`                                                                   |
| **Volume Beep**                              | `0`                                                                   |
| **Mouse or Touchpanel Input**                | `ON`                                                                  |
| **D-pad to Mouse/Keyboard/Joypad Mapping**   | `Manual Keyboard`                                                     |


These settings can be tweaked further depending on the game. For more information, check out the [PC-98 Game FAQ](https://gang-fight.com/projects/98faq/) and the [official libretro core docs](https://docs.libretro.com/library/neko_project_ii_kai/).

> [!warning] Advanced Users
> The following section is for advanced users who want to remap their joystick buttons.

To remap joystick buttons, edit the `lrjoybtn` setting in the following file:

```
~/.config/retroarch/system/np2kai/np2kai.cfg
```

Using the [np2kai documentation](https://github.com/AZO234/NP2kai/blob/master/README.md?plain=1#L569):

> "This value is little endian and 12 values ​​of 16bits (2 Bytes) are arranged.
> Write the key code of RETROK (see libretro.h) to this value.
> The order is: D-UP / DOWN / LEFT / RIGHT / A / B / X / Y / L / R / Select / Start."

For example, to bind the **Up Arrow** key to **D-UP**:

- Find the RETROK code in [libretro.h](https://github.com/AZO234/NP2kai/blob/master/sdl/libretro/libretro-common/include/libretro.h#L312) (`273`)
- Convert it to little-endian hexadecimal → `1101`
- Add a space between bytes → `11 01`

Repeat for each button.

A full example line would look like this:

```ini
lrjoybtn = 11 01 12 01 14 01 13 01 78 00 7a 00 20 00 32 01 08 00 2f 01 1b 00 0d 00
```

### DOS

Install [the DOSBox Pure core](https://docs.libretro.com/library/dosbox_pure/) [manually](https://buildbot.libretro.com/nightly/linux/x86_64/latest/dosbox_pure_libretro.so.zip) or from the online updater.

For [some specific games](https://www.scummvm.org/compatibility/), you can also install [the ScummVM core](https://docs.libretro.com/library/scummvm/) [manually](https://buildbot.libretro.com/nightly/linux/x86_64/latest/scummvm_libretro.so.zip) or from the online updater.

## Troubleshooting

* To [reset all RetroArch settings](https://forums.libretro.com/t/how-to-restore-retro-arch-default-settings/2524/3), go to `~/.config/retroarch/` and delete "retroarch.cfg".
* If your GPU is old, you might have to check if "Allow Cores to Switch the Video Driver" in "Core" settings is enabled and change the video driver used by RetroArch from `glcore` to `gl` [in "Video" settings, under the "Output"](https://www.libretro.com/index.php/changing-behavior-of-gl-and-glcore-video-drivers/).
* RetroArch didn't enter in proper fullscreen under [old versions of GNOME X11](https://github.com/libretro/RetroArch/issues/15259) and workarounds included [`devilspie2` scripts](https://github.com/libretro/RetroArch/issues/15259#issuecomment-1575693902), [running RetroArch with Gamescope](https://github.com/libretro/RetroArch/issues/15259#issuecomment-1743577443) and forcing borderless fullscreen windowed mode.
* If you're using GNOME with an NVIDIA GPU, [game frames may flicker](https://github.com/libretro/RetroArch/issues/8976) and persist after exiting a game until the next reboot if you don't have "Show Window Decorations" enabled in "Video" settings, under the "Windowed Mode" menu (it might be [related to buffer-flipping](https://forums.libretro.com/t/vsync-not-working-with-windows-10-1809-newest-update/18443/15) [like mentioned here](https://www.reddit.com/r/linux_gaming/comments/1ai2kel/nvidia_flipping_only_working_on_selected/), [on NVIDIA forums](https://forums.developer.nvidia.com/t/flipping-not-working-in-fullscreen-apps/279865) [or this old thread](https://web.archive.org/web/20201223115540/https://www.nvidia.com/en-us/geforce/forums/discover/285622/when-will-there-be-a-driver-update-to-fix-retroarch-rsquo-s-flashing-flcickiering-black-lines-in-full-screen-mode-/), [NVIDIA G-Sync](https://www.reddit.com/r/RetroArch/comments/10i9l6f/screen_flickering_on_linux_with_nvidia_gsync_on/) or [unredirection being broken](https://gitlab.gnome.org/GNOME/mutter/-/issues/2794</ref><ref>https://gitlab.gnome.org/GNOME/mutter/-/issues/3134)

