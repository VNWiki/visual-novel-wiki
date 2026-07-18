---
title: "White Album 2"
---

# White Album 2

This page covers the Extended Edition of the game.

# Installation

## Windows

Follow the Windows guide to [set up Japanese locales](/all-platforms/jp-locale).

## Linux / Steam Deck

The disc installer bricks itself in wine so I recommend to get it fully working in a Windows PC and then transfer it over to the other PC. Or grab the DL version from DMM.

### English translation

If you are running the game through the existing Todokanai fanTL follow the steps:

1. Get the game with the patch installed into the Steam Deck or Linux PC.
2. Download <https://github.com/Binary-Eater/WhiteAlbum2-Proton-patch-scripts/blob/trunk/wa2-proton-gstreamer-patch.sh> (credits to <https://github.com/Binary-Eater/WhiteAlbum2-Proton-patch-scripts> for the script and research).
3. Open a terminal and run the script pointing to where you have the game installed:

```
sh wa2-proton-gstreamer-patch.sh "/media/HDD/STRED4TB/VNs/White Album 2/"
```

Make sure to replace "/media/HDD/STRED4TB/VNs/White Album 2/" for the path where your copy is installed. The script will go to all subfolders modiying the videos to an encode that runs with proton. So don't run it at the root of your drive very important. Takes a while to finish depending on cpu power.

4. Run the game in a proton-ge prefix. But it should work with any version (tested with proton-ge10.25 and normal wine 10.4).

5. In Lutris:

- In "Game info", select "Wine" for "Runner"
- In "Game options", select the proton-ge prefix directory for "Wine prefix" and `WA2.exe` for "Executable"
- In "Runner options", disable "DXVK" and add this DLL overrride: `d3d9=n,b`
- In "System options", set up Japanese locales, add the following environment variable and its value: `LC_ALL=ja_JP.utf8`

### Japanese

If you are running the game in japanese without the translation patch you can simply use proton-ge 10.25 it will run the game and videos correctly.
Still needs japanese locale.

> [!NOTE]
> For Steam Deck users use fullscreen ingame, when you open the game in gaming mode you may have to press the steam button and change window if its showing the settings bar instead of the game.

# Links

- [VNDB](https://vndb.org/v7771)
- [AppDB](https://appdb.winehq.org/objectManager.php?sClass=version&iId=29024)
- [SteamGridDB](https://www.steamgriddb.com/game/5263443)
- [Walkthrough](https://forums.fuwanovel.net/topic/25667-white-album-2-fan-translation-walkthrough/)
- [Todokanai FanTL patch](https://github.com/TodokanaiTL/WA2EnglishPatch/releases)
- [Script to reencode english videos](https://github.com/Binary-Eater/WhiteAlbum2-Proton-patch-scripts/blob/trunk/wa2-proton-gstreamer-patch.sh)
