---
title = 'Full Metal Daemon: Muramasa'
---

# Full Metal Daemon: Muramasa
## Installation

### Linux

> [!info] Requirements
> Lutris have to be installed and [muramasafiles_lite](https://drive.google.com/file/d/1EF2YSQkTAY6FuIwH-xbSrZF8UNYnYmtA/view?usp=share_link) downloaded.

> [!warning] Warning
> **muramasafiles_lite** is a repackaged version of these files: [mf-install](https://github.com/z0z0z/mf-install), [mf-installcab](https://github.com/z0z0z/mf-installcab) [XAudio2 (x86)](https://www.nuget.org/packages/Microsoft.XAudio2.Redist/). This **XAudio2 .nupkg** should contain **xaudio2_9redist.dll** in **build\native\debug\bin\x86**. It’s been renamed to **xaudio2_8.dll** for Muramasa (and other visual novels that may use it) specifically.

Follow these instructions to make movies play.

1. Unpack muramasafiles_lite

You’ll get a folder called mf-install-muramasa. Right click the **mf-install-muramas**a folder and **Copy Location**.

2. Setting up Lutris settings
Click **+** then **Add locally installed game** with these settings:

* Game info
  * **Runner**, select **Wine**
* Game options
  * **Wine prefix**, make a new vanilla wineprefix folder and set it to that you can name it "muramasaengine" for example
  * **Wine architecture**, select **64bit**.
* Runner options
  * **Wine version**, select the default **Lutris 7.2** version.
  * Turn on DXVK
  * Turn off Fsync and Esync

3. Install mf-install.sh in Bash Terminal

Click the Wine bottle on the bottom and click Bash Terminal. Once it’s open, run these commands.

```
cd <path to the mf-install-muramasa folder>
sh ./mf-install.sh
```

Be sure to replace the path with the **mf-install** folder’s path (the folder you did **Copy Location** on)

### Steam Deck

Same as Linux, but set these settings in-game: 
* **Resolution**: **1024x576**
* Turn on **FSR** and **Sharpness** to **5**

## Controller configuration

* Close: **M**
* Affection Meter: **H**
* Hide Text: **Space**
* Autoplay: **A**
* Skip: **Ctrl**
* Fast Skip: **N**
* Backlog: **B**
* Save/Load Menu: **D**
* Quick Save: **Space**
* Quick Load: **L**
* Toggle Fullscreen: **F**
* Config Menu: **C**
* Title Menu: **T**
* Quit Game: **ESC**

## In-game settings

## Save Data

### Windows

Overwrite the folder contents in `%APPDATA%\Nitroplus\Muramasa\1.00s\`

You can also open the Launcher and click Open Save Folder.

### Linux / Steam Deck

Overwrite the folder contents in `<wineprefixfolder>/drive_c/users/<yourusername>/AppData/Roaming`

## Links

* [VNDB](https://vndb.org/v2016)
* [SteamGridDB](https://www.steamgriddb.com/game/5263067)
* [JAST USA](https://jastusa.com/games/jast037/full-metal-daemon-muramasa) (18+ uncensored)
* [GOG](https://www.gog.com/en/game/full_metal_daemon_muramasa) (All ages censored)
* [Walkthrough](https://forums.fuwanovel.net/topic/25473-full-metal-daemon-muramasa-soukou-akki-muramasa-%E8%A3%85%E7%94%B2%E6%82%AA%E9%AC%BC%E6%9D%91%E6%AD%A3/)