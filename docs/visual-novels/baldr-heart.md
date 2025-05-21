---
title : 'BALDR Heart + EXE'
---

# BALDR Heart + EXE
## Installation

> [!info] Information
> To play Baldr Heart in the best possible way it is heavily recommended to update the game to the latest version (1.64). There is an expansion to the game called Baldr Heart EXE which can be linked to the main game to add more weapons to the base game.

### Windows

1. Install Baldr Heart

   The first game comes in two disc.
   Run the installer from the first disc.
   When prompted swap to disc 2 and continue.

2. Update Baldr Heart to the latest version

   Open up the game and click yes to all the auto update windows.
   Once finished the game will open, close it.

3. Install Baldr Heart EXE

   Mount the disc and run the installer.

4. Update Baldr Heart EXE

   Open up the game and click yes to all the auto update windows.
   Once finished the game will open, close it.

5. Link both games

   Open up Baldr Heart again. A message saying both games have been linked should appear if everything went correctly.

### Linux

#### Lutris

> [!warning] Warning
> Both the auto update and manual update does not seem to work correctly in Linux or the Deck. The disc installer for EXE also crashes with [CDEmu](/linux/cdemu).

> [!info] Information
> It is needed to transfer both games from Windows previously installed and updated beforehand. We will use Lutris with the prefix wmp10quartz. It will be needed to import the registry entries of both games into the prefix. Will be needed to use AlphaROMdiE to get past the DRM for physical copies of the game.

1. Create folder structure.

   Nagivate to your wmp10quartz prefix at the following directory `<prefixname>/drive_c/Program Files/`
   Create a folder called GIGA
   Transfer both games ALREADY UPDATED from a Windows installation into that folder with the following name pattern: "BALDRHEART", "BALDRHEARTEXE"
   Copy AlphaROMdiE.exe into both game folders

2. Add a locally installed game with the following settings

   * In "Game info", input "BALDR HEART" for "Name" abd select "Wine" for "Runner"
   * In "Game options", select the wmp10quartz prefix directory for "Wine prefix", "AlphaROMdiE.exe" for "Executable", input "BALDR HEART.exe" with the quotes for "Arguments" and select 32bit for "Wine architecture"
   * In "Runner options", select "Lutris 7.2" for "Wine version", enable "VKD3D", disable "dgvoodoo2" and "DXVK"
   * In "System options", set up Japanese locales, add and environment variables and its value: `LC_ALL=ja_JP.utf8`

3. Install registry files

   Download [BALDR Heart + EXE registry file archive](https://pixeldrain.com/u/9tPKrzFK) and extract it.
   Select "BALDR HEART", click the Wine bottle on the bottom and click "Wine registry".
   Import the registry file we extracted before and click on "Registry" and "Import Registry File".
   Registry keys should have been added to `HKEY_CURRENT_USER/Software/GIGA/BALDRHEART`

4. Check if both games link is successful

   Run BALDR HEART.
   A warning about auto update may appear. Click "Yes" or "No", it does not matter as the game has been already been updated to the latest version.
   If everything went correctly, a message should appear in-game.

> [!info] Information
> EXE is only recommended to play after finishing the base game. To run it in Lutris right click "BALDR HEART" and duplicate. Open up the new one and change the name to "BALDR HEART EXE". In "Game Options", change "Executable" to "AlphaROMdiE.exe" in the "BALDRHEARTEXE" folder and Arguments to "BALDR HEART EXE.exe" with the quotes.

### Steam Deck

Exact same as in Linux.

> [!warning] Warning
> Expect frame drops in fights with a lot of enemies.

## Controller configuration

It can be modified as you want in game settings. Here's a working layout for the Steam Deck with default keyboard controls.

| Keyboard    | In-game control | Steam Deck Button | Combat                       | ADV                    |
|-------------|-----------------|-------------------|------------------------------|------------------------|
| Z           | Button 1        | A                 | Attack 1                     | Advance text           |
| X           | Button 2        | X                 | Attack 2                     | Menu                   |
| C           | Button 3        | C                 | Attack 3                     | N/A                    |
| Space       | Dash            | B                 | Dash                         | Advance text           |
| Mouse       | Mouse movement  | RJoystick         | Mouse movement               | Mouse movement         |
| Arrow Keys  | Arrow keys      | LJoystick         | Movement                     | Menu/backlog           |
| Arrow Keys  | Arrow keys      | DPAD              | Movement                     | Menu/backlog           |
| P           | Pause           | Unbound           | Pause                        | N/A                    |
| V           | FEI action      | L1                | FEI attack                   | N/A                    |
| F2          | Weapon select   | R1                | Weapon Menu (in preparation) | N/A                    |
| Arrow Down  | Backlog down    | L2                | N/A                          | Scroll down backlog    |
| Arrow up    | Backlog up      | R2                | N/A                          | Open backlog/Scroll up |
| F5          | Save            | L4                | Save                         | Save                   |
| F6          | Load            | R4                | Load                         | Load                   |
| Left Click  | Left Click      | L5                | N/A                          | Left Click             |
| Right Click | Right Click     | R5                | N/A                          | Right Click            |
| ESC         | Menu            | Start             | Pause                        | Config                 |

## Save Data

### Windows

Overwrite "Config.dat" in `C:\Users\<yourusername>\Documents\GIGA\BALDRHEART\Save150\`

### Linux / Steam Deck

Overwrite "Config.dat" in `<wineprefix>/drive_c/users/<yourusername>/Documents/GIGA/BALDRHEART/Save150/`

## Links

* [VNDB](https://vndb.org/v18783)
