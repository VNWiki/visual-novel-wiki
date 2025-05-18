---
title = 'Sakura no Toki'
---

# Sakura no Toki
## Installation

### Linux

> [!info] Requirements
> Download [mf-install](https://github.com/z0z0z/mf-install/archive/refs/heads/master.zip) and [these libraries](https://www.visualnovelwiki.org/tutorials/v20431/w7-x86.zip) (contains quartz2.dll, evr.dll, dxva2.dll). Tested with Lutris 7.2, new prefix needed.

#### Lutris

1. Add locally installed game with these settings:

   * In "Game info", select "Wine" for "Runner"
   * In "Game options", create and/or select "artemisengine" prefix directory for "Wine prefix" and `sakuranotoki.exe` for "Executable"
   * In "System options", set up Japanese locales with this environment variable: `LC_ALL=ja_JP.utf8`
   * In "Runner Options", disable DXVK, Esync and Fsync

2. Disable "winegstreamer" in "winecfg".
3. Uncompress the [mf-install](https://github.com/z0z0z/mf-install/archive/refs/heads/master.zip) archive downloaded.
4. Go into the folder and right click `mf-install.sh` and click on "Copy Location".
5. In Lutris, select "artemisengine", click the Wine bottle at the bottom and click "Bash Terminal".
6. Paste your clipboard in the terminal.
7. In the Bash terminal, run the following command to install "LAVFilters" `winetricks -q lavfilters`.
8. Uncompress `w7-x86.zip` downloaded.
9. Copy the three files inside (`quartz2.dll`, `evr.dll`, `dxva2.dll`).
10. Paste the three files into `drive_c/windows/syswow64`, inside "artemisengine" prefix directory
11. Register DLLs by running the following commands in the Bash terminal:

   ```
   wine regsvr32 quartz2.dll
   wine regsvr32 evr.dll
   wine reg add "HKEY_CLASSES_ROOT\\CLSID\\{79376820-07D0-11CF-A24D-0020AFD79767}\\InprocServer32" /f /t REG_SZ /d c:\\windows\\system32\\quartz.dll
   wine reg add "HKEY_CURRENT_USER\\Software\\LAV\\Audio\\Formats" /f /t REG_DWORD /v wmalossless /d 1
   wine reg add "HKCU\\Software\\LAV\\Video\\Output" /f /t REG_DWORD /v yuy2 /d 0
   ```

> [!warning] Warning
> Running the game with Gamescope is recommended to avoid video flickering and bugged always on top fullscreen the game has by default.

#### Steam

Right-click on the Lutris entry and select "Create Steam shortcut".

### Steam Deck

Same as Linux.

> [!warning] Warning
> Run in game mode to avoid video flickering.

## Save Data

### Windows

Overwrite the folder contents in `C:\users\<username>\AppData\Roaming\枕\サクラノ刻`.

## Links

* [VNDB](https://vndb.org/v20431)