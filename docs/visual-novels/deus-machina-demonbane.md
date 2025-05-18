---
title = 'Deus Machina Demonbane'
---

# Deus Machina Demonbane
## Installation

### GNU/Linux

#### Lutris

> [!warning] Warning
> This guide is for the JAST version

This guide is a bit different to the other guides, as we will create a specific prefix for Demonbane.

1. Add a locally installed game in Lutris
   * In "Game info", select "Wine" for "Runner"
   * In "Game options", make a new vanilla "Wine prefix" folder named "demonbane", select it, choose "32bit" for "Wine architecture" and "Demonbane_Setup.exe" for "Executable"
   * In "Runner options", disable "DXVK", "Esync", "Fsync" and select "Lutris 7.2" for "Wine version"
   * In "System options", set up Japanese locales, add the following environment variable and its value: `LC_ALL=ja_JP.utf8`

2. Install the game

   Click on Play in Lutris and follow the setup.
   After the installation copy the folder "dx" from inside the Demonbane folder next to the "Demonbane_Setup.exe" to the folder in which you installed the game.
   Change the Executable under "Game options" to "db_usa.exe".

3. Installing the voice patch (Optional)

   Get the [Voice Patch from VNDB](https://vndb.org/r76559) and drag’n’drop the contents of "Download" to your game installation folder and select "Overwrite".

4. Setup the prefix:

    Click on the Wine bottle, and click "Bash Terminal".
    Copy the following command & paste it into each terminal using CTRL + SHIFT + V
    Hit Enter to input the command
    
    ```
    winetricks -q --force lavfilters wmp10
    ```

    Close the terminal.
    Get the [custom quartz files](https://web.archive.org/web/20240126231520mp_/https://www.visualnovelwiki.org/tutorials/wineprefixes/quartz2.zip) The .zip contains: "quartz", "quartz2.dll", "quartz2-win32.reg", "quartz2-win64.reg".

    > [!warning] Warning
    > This zip also comes with "quartz2-win64.reg", which can be used for 64 bit wineprefixes. "quartz2.dll" would also go in `drive_c/Windows/SysWow64` instead of "system32". This wineprefix is using 32bit.

    Find your demonbane folder, and navigate to `demonbane/drive_c/Windows/system32`
    Drag and drop the "quartz2.dll" file in there.
    Click the Wine bottle, then select "Bash Terminal".
    Enter this command to register the "quartz2.dll" file in the wineprefix: `wine regsvr32 quartz2.dll`

    Close the terminal
    Click the Wine bottle again, then select "Wine Registry".
    You’ll get a popup for the Windows registry.
    Click "Registry" in the toolbar then "Import Registry File".
    Find & import the "quartz2-win32.reg" file you downloaded.

## Save Data

### Windows

Put the contents of the ZIP file into the following folder `%userprofile%\AppData/Roaming/`

### Linux / Steam Deck

Put the contents of the ZIP file into the following folders inside of your prefix `drive_c/users/%User%/AppData/Roaming/`

## Links

* [VNDB](https://vndb.org/v231)
* [JAST USA](https://jastusa.com/games/np001)
* [SteamGridDB](https://www.steamgriddb.com/game/21185)
