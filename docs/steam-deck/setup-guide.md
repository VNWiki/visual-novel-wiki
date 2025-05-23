---
title : 'Visual Novel Setup Guide'
---

This works as a summary guide to set up your Steam Deck to run Non-Steam Japanese Visual Novels using [Lutris](/linux/lutris).
For more in depth details check the other referenced pages in the wiki.

1. Install Software
    - Go to Desktop Mode
    - Open Discover and install: **Lutris**, **ProtonUp-Qt** ![](https://i.imgur.com/hyfuGmy.png)
    - Download [Windows Japanese Fonts Pack](https://drive.google.com/file/d/1OiBgAmt3vPRu08gPpxFfzrtDgarBGszK/view)
2. Open **Lutris**, wait for it to finish all downloads in the bottom left if there's any. Close it
3. Enable [Lutris JP Locale](/all-platforms/jp-locale):
    - Run these commands in the **Konsole** (Terminal application).

        ```bash
        flatpak config --system --set languages 'en;ja'
        flatpak config --user --set languages 'en;ja'
        flatpak update
        ```
4. Open [**ProtonUp-Qt**](/linux/protonup)
    4.1. Install Wine versions
        - Select Lutris
        - Add version
        - Select Kron4ek Wine-Builds Vanilla Version 10.X (Latest version available)
        - Press Install and wait to finish
    4.2. Install Proton-Ge versions
        - Select Steam
        - Add Version
        - Select GE-Proton Version 10.X (Latest version available)
        - Press Install and wait to finish
5. Create folders for prefixes:
    - Go to your **Documents** Folder
    - Make a new folder called **wine_prefixes**, enter the folder. 
    - Inside make two new folders **protonge** and **vanilla**
6. Create the prefixes folder in **Lutris** 
    - Open again **Lutris**
    - Click the **+** in the top left, select **Add locally installed game**
7. Vanilla Prefix:
    - Game info:
        - Name: vanilla
        - Runner: Wine
    - Game options:
        - Executable: Your Visual Novel executable. ex: **/home/deck/games/WHITE ALBUM2/WA2.exe** 
        - Wine prefix: **/home/deck/Documents/wine_prefixes/vanilla/**
        - Prefix architecture: 64-bit
    - Runner options:
        - Wine version: wine-10.1-amd64-wow64 (Choose the latest version you installed earlier)
        - Enable DXVK: Disable (Can try to enable it if you have rendering issues).
    - System Options:
        - Scroll Down in **Locale** select **Japanese**. This is usually not neccesary for official localizations, but always needed for FanTLs. Doesn't hurt to enable it either way.
    - Click Save at the top, Select vanilla entry and click on **Open Bash terminal**. ![](https://i.imgur.com/hAqNIPB.png)
    - run command:
    ```bash
    WINEARCH=win64 wineboot
    ```
    - When it finishes close terminal.
8. Proton Prefix:
    - Game info:
        - Name: proton-ge
        - Runner: Wine
    - Game options:
        - Executable: Your Visual Novel executable. ex: **/home/deck/games/WHITE ALBUM2/WA2.exe** 
        - Wine prefix: **/home/deck/Documents/wine_prefixes/protonge**
        - Prefix architecture: 64-bit
    - Runner options:
        - Wine version: GE-Proton 10.3 (Choose the latest version you installed earlier)
        - Enable DXVK: Enable (Can try to disable it if you have rendering issues).
    - System Options:
        - Environment options
            - Key: PROTON_VERB
            - Value: waitforexitandrun
        - Scroll Down in **Locale** select **Japanese**. This is usually not neccesary for official localizations, but always needed for FanTLs. Doesn't hurt to enable it either way.
    - Click Play the create the prefix and open the game.
9. Copy fonts to prefixes
    - From the fonts downloaded in the first step copy paste them into both prefixes:
    - /home/deck/Documents/wine_prefixes/vanilla/drive_c/windows/Fonts/
    - /home/deck/Documents/wine_prefixes/protonge/drive_c/windows/Fonts/
10. Test the Visual Novel you want to play, usually **proton-ge** is better at running recently released Visual Novels and **vanilla** for olders, but nothing is guaranteed.
11. Add it to Steam Gaming Mode:
    - Once you get the game running in Desktop Mode.
    - Right-click an entry in Lutris, select **Duplicate** and write the name of the Visual Novel you want to run.
    - Right-click the new entry and select **Create desktop shortcut**.
    - Restart Steam and return to Gaming Mode.

> [!info] 
> You can check the [compatibility list](/visual-novel-compatibility-list) to search for your games (or same engine/developer) and [wineprefix guide](/linux/wineprefixes) to create more prefixes for specific games.

        
