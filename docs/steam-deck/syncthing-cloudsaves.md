---
title : 'Syncthing - Cloud Saves'
---

Sync your non-Steam Visual Novel saves seamlessly between your Steam Deck and PC using Syncthing.

# Syncthing
Syncthing is a continuous file synchronization program. It synchronizes files between two or more computers in real time.

## Installation

### Steam Deck

1. Install [Decky Loader](https://github.com/SteamDeckHomebrew/decky-loader) in the Steam Deck.
2. Install [Syncthing Plugin](https://github.com/theCapypara/steamdeck-decky-syncthing). Follow Github for the recommended install instructions up to date.
3. Access the Syncthing Web UI
    - Set a port for the Syncthing UI, e.g., 8081.
    - In Desktop Mode, open a browser and navigate to http://127.0.0.1:8081/ to confirm it’s working.
4. Create a Sync Folder
    - Example: **~/Documents/game_savedata**
    - This folder will hold all synced save files.
5. Add the Folder in Syncthing
    - Click + Add Folder in the Syncthing UI and select your **game_savedata** folder. ![](https://i.imgur.com/IbU415M.png)
    - Recommended: Under the Advanced tab, change **Full Rescan Interval (s)** to 10 for faster syncing (you don't risk to not sync it if you close the game and the Steam Deck fast enough.).
6. Organize Game Saves
    - Inside **game_savedata**, create a folder for each game (e.g., **SakuraMusubi**).
7. Locate Save File Location for Each Game, usually:
    - Same folder than the game.
    - Inside the prefix in AppData roaming: **~/wine_prefixes/protonge/drive_c/users/steamuser/AppData/Roaming/**
    - Documents folder inside the prefix: **~/wine_prefixes/protonge/drive_c/users/steamuser/Documents**
8. Syncthing does not sync symlinks, but games can load save files from them. Do the following:
    - Move or copy the game’s save folder into the new sync folder **~/Documents/game_savedata/SakuraMusubi/save**
    - Delete the original save folder.
    - Create a symlink back to the original location. Open Konsole:
        > ```bash
        > ln -s "/home/deck/Documents/game_savedata/SakuraMusubi/save" "/run/media/deck/a0b71cee-7ab4-4859-9352-a377528e4ca2/games/SakuraMusubi/さくらむすび/"
        > ```
    where the first path is the folder in step 5 and the second path is the game folder where the save was located originally. ![](https://i.imgur.com/AL3FWNv.png)
9. Launch the game to ensure it still reads the save correctly.

> [!info] Decky interface 
> From the Decky interface you can check the state of your syncs folder.

> [!info] Add more games
> You only need to repeat Steps 6–9 to add and sync more games.


### PC
Next we will need to do about the same thing in your PC:

1. Install [Syncthing](https://syncthing.net/downloads/) in your PC
2. Open the GUI, if by default: http://127.0.0.1:8384/
3. Pair With Steam Deck
    - Add your Steam Deck as a Remote Device.
    - Share the **game_savedata** folder with it.
4. Repeat Save Sync Setup (Steps 7–9)
    - Locate the save file, move it into the synced folder, and create a symlink (On Windows you can try to use **mklink** to create symlinks)

> [!info] Optional: Cloud Server as Middleman
> You can also use some sort of VPS or cloud server where you can run Syncthing as a middleman between the Steam Deck and your PC that will help to make sure your saves are always updated more reliably, otherwise your PC will always have to be turned in and reachable from your Steam Deck.
> Add the Steam Deck as a remote device on the server. And then add the PC as another remote device on the server. Share the **game_savedata** folder between all three devices.

> [!warning] Wait to Sync before shutting down
> Make sure the Steam Deck and PC always sync the save to the other device before opening the game in the other device to avoid possible save corruption and losing progress. (this is why middleman is good)
