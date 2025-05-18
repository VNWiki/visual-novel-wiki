---
title = 'Steins;Gate'
---

# Steins;Gate
## Installation

### Committee of Zero patch

[Committee of Zero website](http://sonome.dareno.me/projects/sghd.html)

#### Windows

1. Download the installer. You want `SGPatch-v<version>-Setup.zip`, not the source code.
2. Extract the archive somewhere on your hard drive, not in your game directory.
3. Go to the newly created `SGPatch-v<version>-Setup` folder and run "SGPatch-Installer.exe" (be careful, the installer has sound)

> [!warning] Warning
> If the installer quits with an error about "MSVCP140_1.dll", install "Visual C++ Redistributable" (32-bit version, "vc_redist.x86.exe", regardless of your system) and try again.

4. After you click "Finish" and the installer closes, you can delete the `SGPatch-v<version>-Setup` folder.

#### Linux / Steam Deck

1. Download the installer. You want `SGPatch-v<version>-Setup.zip`, not the source code.
2. Extract the archive somewhere on your hard drive, not in your game directory. You’ll get a new folder called `SGPatch-v<version>-Setup`. Memorise this location.
3. Go to Steam, and add a non-Steam game. Navigate to the `SGPatch-v<version>-Setup` folder and add "SGPatch-Installer.exe" as a game.
4. Right-click "SGPatch-Installer.exe", into "Properties" and "Launch Options", and run the following command depending on where you installed Steins;Gate:

```
STEAM_COMPAT_DATA_PATH="/home/deck/.local/share/Steam/steamapps/compatdata/412830" %command%
```

> [!warning] Warning
> You need to change the path between quotes of the command depending on your system. For Steam Deck, you can just copy this command as-is (if installed on Internal Storage)

> [!info] Information
> Normally, this compatdata folder is found in your ".steam" folder; `~/.steam/steam/steamapps/compatdata/412830` where "412830" is the app ID of Steins;Gate on Steam. This path between quotes is Steins;Gate’s compatdata folder – it’ll have a "drive_c" folder inside of it, to make sure you have the right one.

5. Run the installer (be careful, it has sound).

## Save Data

### Windows

Overwrite "SAVEDATA.dat" in `Documents\My Games\mages_steam\STEINS;GATE\eng`

## Links

* [VNDB](https://vndb.org/v2002)
* [SteamGridDB](https://www.steamgriddb.com/game/9557)
* [Steam](https://store.steampowered.com/app/412830/STEINSGATE/) (newer version with HD artwork, compatible with Committee of Zero improvement patch)
* [JAST USA](https://jastusa.com/games/sg001/steinsgate) (older DRM-free version)
* [Walkthrough](https://steamcommunity.com/sharedfiles/filedetails/?id=2600680431)
