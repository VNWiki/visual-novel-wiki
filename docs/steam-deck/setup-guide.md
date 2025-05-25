# Visual Novel Setup Guide

This guide will help you set up your Steam Deck to run Non-Steam Japanese Visual Novels using [Lutris](/linux/lutris). For more detailed information, check the other referenced pages in the wiki.

## Prerequisites

::: info Required Software
- **Lutris** (available in Discover)
- **ProtonUp-Qt** (available in Discover)
- [Windows Japanese Fonts Pack](https://drive.google.com/file/d/1OiBgAmt3vPRu08gPpxFfzrtDgarBGszK/view)
:::

## Step 1: Install Software

1. Switch to **Desktop Mode** on your Steam Deck
2. Open **Discover** and install:
   - **Lutris**
   - **ProtonUp-Qt**
   ![discover_store](https://i.imgur.com/hyfuGmy.png)
3. Download the [Windows Japanese Fonts Pack](https://drive.google.com/file/d/1OiBgAmt3vPRu08gPpxFfzrtDgarBGszK/view)

## Step 2: Initial Lutris Setup

Open **Lutris** and wait for it to finish any downloads shown in the bottom left corner. Once complete, close the application.

## Step 3: Enable Japanese Locale

::: warning Important
This step is crucial for proper Japanese text rendering in visual novels.
:::

Enable [Lutris JP Locale](/all-platforms/jp-locale) by running these commands in **Konsole** (Terminal):

```bash
flatpak config --system --set languages 'en;ja'
flatpak config --user --set languages 'en;ja'
flatpak update
```

## Step 4: Install Wine and Proton Versions

### 4.1 Install Wine Versions

1. Open **ProtonUp-Qt**
2. Select **Lutris** from the dropdown
3. Click **Add version**
4. Select **Kron4ek Wine-Builds Vanilla Version 10.X** (latest available)
![protonup_add_kron4ek](https://i.imgur.com/Ns14EDG.png)
5. Press **Install** and wait for completion

### 4.2 Install Proton-GE Versions

1. Select **Steam** from the dropdown
2. Click **Add Version**
3. Select **GE-Proton Version 10.X** (latest available)
![protonup_add_protonGE](https://i.imgur.com/cgOM6m5.png)
4. Press **Install** and wait for completion

## Step 5: Create Prefix Folders

1. Navigate to your **Documents** folder
2. Create a new folder called **wine_prefixes**
3. Inside the **wine_prefixes** folder, create two subfolders:
   - **protonge**
   - **vanilla**

## Step 6: Setup Lutris Prefixes

Open **Lutris** again and click the **+** button in the top left, then select **Add locally installed game**.

### Vanilla Wine Prefix

Configure the following settings:

**Game Info:**
- Name: `vanilla`
- Runner: `Wine`

**Game Options:**
- Executable: Path to your Visual Novel executable  
  Example: `/home/deck/games/WHITE ALBUM2/WA2.exe`
- Wine prefix: `/home/deck/Documents/wine_prefixes/vanilla/`
- Prefix architecture: `64-bit`

**Runner Options:**
- Wine version: `wine-10.1-amd64-wow64` (or latest version installed)
- Enable DXVK: `Disable` (can enable if you have rendering issues)

**System Options:**
- Locale: Select **Japanese**

::: tip Locale Setting
The Japanese locale is usually not necessary for official localizations, but always needed for fan translations. It doesn't hurt to enable it either way.
:::

**Initialize the Prefix:**
1. Click **Save** at the top
2. Select the vanilla entry and click **Open Bash terminal**
![lutris_bash_terminal](https://i.imgur.com/hAqNIPB.png)
3. Run the following command:
   ```bash
   WINEARCH=win64 wineboot
   ```
4. Close the terminal when finished

### Proton-GE Prefix

Configure the following settings:

**Game Info:**
- Name: `proton-ge`
- Runner: `Wine`

**Game Options:**
- Executable: Path to your Visual Novel executable  
  Example: `/home/deck/games/WHITE ALBUM2/WA2.exe`
- Wine prefix: `/home/deck/Documents/wine_prefixes/protonge`
- Prefix architecture: `64-bit`

**Runner Options:**
- Wine version: `GE-Proton 10.3` (or latest version installed)
- Enable DXVK: `Enable` (can disable if you have rendering issues)

**System Options:**
- Environment options:
  - Key: `PROTON_VERB`
  - Value: `waitforexitandrun`
- Locale: Select **Japanese**

Click **Play** to create the prefix and open the game.

## Step 7: Install Japanese Fonts

Copy the Japanese fonts downloaded in Step 1 to both prefixes:

- `/home/deck/Documents/wine_prefixes/vanilla/drive_c/windows/Fonts/`
- `/home/deck/Documents/wine_prefixes/protonge/drive_c/windows/Fonts/`

## Step 8: Test Your Visual Novel

::: tip Compatibility
Generally, **proton-ge** works better for recently released Visual Novels, while **vanilla** Wine is better for older titles. However, results may vary depending on the specific game.
:::

Test your visual novel with both prefixes to see which works better for your specific game.

## Step 9: Add to Steam Gaming Mode

Once you have your game running properly in Desktop Mode:

1. Right-click the working entry in Lutris
2. Select **Duplicate** and rename it to your Visual Novel's title
3. Right-click the new entry and select **Create desktop shortcut**
4. Restart Steam and return to Gaming Mode

::: tip
Use the [SteamGridDB](https://github.com/SteamGridDB/decky-steamgriddb) Decky Loader plugin to conveniently add artwork for your Visual Novel while in Steam Gaming Mode.
:::


::: info Additional Resources
- Check the [compatibility list](/visual-novel-compatibility-list) to search for your games or similar engines/developers
- Review the [wineprefix guide](/linux/wineprefixes) to create more specific prefixes for individual games
:::