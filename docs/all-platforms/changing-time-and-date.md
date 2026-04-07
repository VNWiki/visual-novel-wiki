---
title : 'Changing time and date'
---

# Changing time and date

Some applications are still affected by the [year 2038 problem](https://en.wikipedia.org/wiki/Year_2038_problem). This design choice could [lead to application crashes](https://nylilsa.github.io/#/bugs/th07/2038-problem) or undefined behaviors when the time comes. In the best case scenario, games would have their date capped to the most recent time and date possible or would circle back to the 1900s.

Fortunately, Windows and Linux operating systems are 64-bit nowadays and that's also the case for most applications. The oldest ones that are still, maintained like Firefox or Steam, recently dropped 32-bit support. But old proprietary 32-bit Windows games are unlikely to be fixed (especially when it comes to visual novels).

## Windows

As of now, there's no known program to change time and date per application on Windows.

## Linux

### libfaketime

[libfaketime](https://github.com/wolfcw/libfaketime) can change time and date for only one application. It uses `LD_PRELOAD` to do that and can work for both 32-bit and 64-bit programs if compiled the right way. It's also [usable with Wine](https://github.com/wolfcw/libfaketime/issues/266#issuecomment-1455103650) if you use the right build. 

Some Wine builds available in the official distribution repositories are WoW64, like on Arch Linux. So you should only have to use the 64-bit version of `libfaketime`, which is [available in the official Arch Linux repositories](https://archlinux.org/packages/extra/x86_64/libfaketime/), as these WoW64 builds only use 64-bit libraries.

#### Usage

Going back 38 years into the past (useful to work around a game crash caused by the year 2038 problem).

```
LD_PRELOAD=/usr/lib64/faketime/libfaketime.so.1 FAKETIME="-38y" wine game.exe

```

Going 30 years into the future (useful to test if a game is affected by this issue).

```
$ LD_PRELOAD="/usr/lib64/faketime/libfaketime.so.1" FAKETIME="+30y" wine game.exe

```

Running a game with a custom `libfaketime` path (for compiled 32-bit builds) and Japanese locale

```
$ LD_PRELOAD=./libfaketime.so.1 FAKETIME="+30y" LC_ALL=ja_JP.UTF-8 wine game.exe

```

#### Compiling

If you need to use an application through a Wine version using Linux 32-bit dependencies or if you're playing a native 32-bit game, you will need to compile a [32-bit executable of `libfaketime`](https://github.com/wolfcw/libfaketime/blob/master/src/Makefile#L111). Assuming you're on Arch Linux:

1. [Enable multilib](https://wiki.archlinux.org/title/Official_repositories#Enabling_multilib).
2. Install `git`, `base-devel`, `lib32-gcc-libs` and `lib32-glibc` packages.
3. Clone git repository.
4. Edit Makefile in "src" and add '-m32' at the end of the lines 136 and 152 (to change the "CFLAGS" and "LDFLAGS" variables).
5. Run `make`.
6. Move compiled "libfaketime.so.1" to another location and call it using `LD_PRELOAD`

### Notes

* Another way to work around that issue would be to patch Wine/Proton to add a setting allowing to return a fake date and time.
* `libfaketime` was tested with Wine 11.5 WoW64 and libfaketime 0.9.12 but should work on different setups.
* If you get a `ERROR: ld.so: object './libfaketime.so.1' from LD_PRELOAD cannot be preloaded (wrong ELF class: ELFCLASS32): ignored` message or [this error](https://github.com/wolfcw/libfaketime/issues/266), use a build with the right bitness depending on the message you got.
* Games store time and date differently so changing the date through `libfaketime` can also change the save date shown in a loading menu. Some old 32-bit games like Touhou 6 aren't affected by the year 2038 problem [as the date is converted to a string](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/strdate-wstrdate?view=msvc-170) (thanks Nylilsa).
* Using negative values with `FAKETIME` seems to prevent the game from starting if you ran the `winetricks sandbox` command or `winetricks d3dx9_36` in the current prefix on some setups. And, using positive values appears to make the game freeze a few seconds after launch.
* Changing the `FAKETIME` value updates the prefix and prompt for the `mono` installer again if you dismissed it at the prefix creation.
* Setting `LD_PRELOAD` can make 32-bit games run slow on Wine 11.5 WoW64 builds.
