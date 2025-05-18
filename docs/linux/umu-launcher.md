---
title = 'UMU Launcher'
---

# UMU Launcher

[umu-launcher](https://github.com/Open-Wine-Components/umu-launcher) is a CLI tool to run applications with Proton outside Steam. It offers an easy access to a [unified online database](https://umu.openwinecomponents.org/) of game fixes called "protonfixes"

## Usage

Open a terminal emulator and run a command similar to:

```bash
WINEPREFIX=$HOME/Games/epic-games-store GAMEID=umu-dauntless PROTONPATH="$HOME/.steam/steam/compatibilitytools.d/GE-Proton8-28" umu-run "$HOME/Games/epic-games-store/drive_c/Program Files (x86)/Epic Games/Launcher/Portal/Binaries/Win32/EpicGamesLauncher.exe" -opengl -SkipBuildPatchPrereq
```

More examples are available in the [official documentation](https://github.com/Open-Wine-Components/umu-launcher/blob/main/docs/umu.1.scd) and in the [FAQ](https://github.com/Open-Wine-Components/umu-launcher/wiki/Frequently-asked-questions-(FAQ))

If you have erros after updating your system, delete the content ~/.local/share/umu and it umu will reinstall the runtime at launch.

## Lutris
1. In some Distros you will need to install umu-launcher package like Arch or Fedora. On the Steam Deck it shouldn't be needed.
1. Install a Proton or Proton-GE (using ProtonUp-qt) for steam like you would do normally.
2. Make a new empty folder for a new prefix
3. In lutris: \
    Game Options: Select your game and the new prefix folder you just created \
    Runner Options: Select Proton or Proton-GE
4. A lot of the interface options in Lutris like locale do not work so have to be set in Environment Variables.
5. Run the game to create the prefix. Don't create the prefix with WINEARCH command since it can give errors.

To make sure it is running you can check logs and look for some lines mentioning UMU near the start.
