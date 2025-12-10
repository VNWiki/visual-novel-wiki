---
title : 'Bakappuru Supplement'
---

# Bakappuru Supplement
## Installation

> [!warning] Warning
> If you have the DVD version of the game, mount it using a loopback device. You will only need to mount the disk image once on the first run.

### Windows

Use [Locale Emulator](https://xupefei.github.io/Locale-Emulator/), right-click on the installer and choose "Run" in the "Locale Emulator" section.

### Linux

> [!info] Information
> Tested with [Kron4ek-wine-10.20](/linux/adding-wine-versions). Later versions should work.

> [!info] Information
> Requires to have [JP Locale enabled](/all-platforms/jp-locale).

You can mount the ripped ISO file using the following command:

```
sudo mount -o loop path/to/iso path/to/target
```

#### Lutris

1. Add locally installed game with these settings:

    * In "Game info", select "Wine" for "Runner"
    * In "Game options", select any prefix directory for "Wine prefix" and `Setup.exe` for "Executable"(installation only)
    * In "System options", set up Japanese locales with this environment variable: `LC_ALL=ja_JP.utf8`

2. Run "Setup.exe" and install the game.

> [!warning] Warning
> The target directory should only contain English characters, otherwise installation might fail.

3. Edit the configuration of the game:

   * In "Game options", select `bakaple.exe` for "Executable"

4. Run the game for the first time, it will ask for a disc check. Run it. If everything works, you will see the Marmalade logo.

### Steam Deck

Same as Linux.

## Links

* [VNDB](https://vndb.org/v52031)
