---
title : 'Syncthing - Cloud Saves'
---

# Syncthing
[Syncthing](https://syncthing.net/) syncs your non-Steam Visual Novel save files between your **Steam Deck** and **PC**.

> [!IMPORTANT] Setup Overview
> We are setting up Syncthing on:
> 1. Your Steam Deck
> 2. Your PC

## Steam Deck Setup

### 1. **Install Decky Loader**  
   Decky Loader lets you install custom plugins on the Steam Deck.  
   Get it here: [Decky Loader](https://github.com/SteamDeckHomebrew/decky-loader)

### 2. **Install the Syncthing Plugin**  
   Install the [Syncthing Plugin](https://github.com/theCapypara/steamdeck-decky-syncthing) via Decky Loader.  
   Follow the GitHub page for the latest installation steps.

### 3. **Open Syncthing Web UI**  
   - Set the Syncthing UI port (for example, `8081`).  
   - In Desktop Mode, open a browser and visit `http://127.0.0.1:8081` to access the interface.

### 4. **Create a Sync Folder**  
   Create a folder to hold all your save files, e.g., `~/Documents/game_savedata`.

### 5. **Add the Folder to Syncthing**  
   - In the Syncthing UI, click **+ Add Folder** and select your sync folder.  
   - ![adding_save_folder_to_syncthing_UI](https://i.imgur.com/IbU415M.png)  
   - (Recommended) Under **Advanced**, set **Full Rescan Interval** to 10 seconds for faster syncing.

### 6. **Organize Your Saves**  
   Inside `game_savedata`, create one folder per game, e.g., `SakuraMusubi`.

### 7. **Find Your Game’s Save Location**  
Typical locations include:  
   - The game’s own folder  
   - Proton prefix roaming directory:  
     `~/wine_prefixes/protonge/drive_c/users/steamuser/AppData/Roaming/`  
   - Documents folder inside prefix:  
     `~/wine_prefixes/protonge/drive_c/users/steamuser/Documents`
> [!TIP]
> Generally, saves are within the `drive_c` folder of the wineprefix you used to run the game.

### 8.  **Replace Original Saves with Symlinks**
This step makes your game use the save files from your new Syncthing folder. 

We'll move the actual save files to the new Savething folder, then create a "smart shortcut" (a symbolic link) so the game can still find them.

1.  **Move Save Files to Syncthing Folder:**
    *   Locate your game's original save file/folder (from Step 7).
    *   Move this entire save file/folder into the corresponding subfolder within your main `game_savedata` directory.
        *   *Example:* If saves are in `.../AppData/Roaming/GameName/Saves/`, move the `Saves` folder to `~/Documents/game_savedata/GameName/Saves/`.
2.  **Delete the Original Save Folder (Now Empty or Redundant):**
    *   Go back to the game's original save location.
    *   Delete the folder you just moved the contents from. **Double-check your files were successfully moved to the `game_savedata` folder first!**
3.  **Create the Symbolic Link ("Smart Shortcut"):**
    *   Open **Konsole** (the terminal application in Desktop Mode).
    *   Use the `ln -s` command. This command creates a link at the game's *original* save location that points to the *new* location of your saves (inside the Syncthing folder).
        ```bash
        # Command structure:
        # ln -s "SYNC_SAVE_PATH" "ORIG_SAVE_PATH"
        # Example:
        ln -s "/home/deck/Documents/game_savedata/SakuraMusubi/save_data" "/path/to/original/game/save_location/SakuraMusubi/save_data"
        ```
    *   **SYNC_SAVE_PATH**: The full path to where your save files *now actually live* (e.g., `"/home/deck/Documents/game_savedata/SakuraMusubi/save_data"`).
    *   **ORIG_SAVE_PATH**: The full, exact path where the game *used to* keep its saves, and where the link will now be placed (e.g., `"/home/deck/.steam/steam/steamapps/compatdata/12345/pfx/drive_c/users/steamuser/AppData/Roaming/SakuraMusubi/save_data"`).

![Symbolic link in file manager or terminal output](https://i.imgur.com/AL3FWNv.png)

> [!NOTE]
>  Syncthing does not sync symbolic links.

### 9. **Test Your Game**  
Launch the game to make sure it reads your saves correctly.

> [!info] Decky Plugin  
> You can monitor your sync status directly from Decky’s interface.

> [!tip] Add More Games  
> Repeat steps 6 to 9 for any additional games.

---

## PC Setup

1. **Install Syncthing**  
   Download and install Syncthing from [syncthing.net](https://syncthing.net/downloads/) on your PC.

2. **Open Syncthing GUI**  
   Usually available at: `http://127.0.0.1:8384/`.

3. **Connect Your PC to Steam Deck**  
   - Add your Steam Deck as a remote device.  
   - Share the `game_savedata` folder with it.

4. **Setup Save Sync on PC**  
   Like on the Steam Deck, move your save files into the synced folder and create symlinks back to their original locations. On Windows, use `mklink` to create symlinks.

::: tip Optional: Use a Cloud Server (VPS, NAS...)
For more robust syncing, especially if your PC and Steam Deck aren't always on at the same time, you can set up Syncthing on an "always-on" device like a Virtual Private Server (VPS), a Raspberry Pi, or a Network Attached Storage (NAS) device.

1.  Install Syncthing on this central server.
2.  Add your Steam Deck and PC as remote devices to this server (and vice-versa).
3.  Share the `game_savedata` folder from one device (e.g., Steam Deck) to the central server.
4.  Then, share the same folder from the central server to your other device (e.g., PC).

This configuration allows devices to sync through the central server even if they can't see each other directly online at the same moment.
:::

::: warning Always Wait for Sync!
Before switching between your Steam Deck and PC, or before shutting down either device:

*   **Always ensure Syncthing has finished syncing all changes.** Check the Syncthing Web UI on both devices (or the Decky Plugin on the Steam Deck). The folder status should show "Up to Date" and there should be no pending transfers.
*   Failure to wait can lead to sync conflicts (where Syncthing doesn't know which version of a file is correct), data loss, or corrupted save files.
:::
