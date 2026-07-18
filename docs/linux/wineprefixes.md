---
title: "Wineprefixes"
---

# Wineprefixes

A **WINEPREFIX** is simply a folder that Wine uses as a separate Windows environment on your Linux system. Think of it as a virtual "C: drive" where Windows applications believe they're running in Windows.[^1][^2]

A **clean prefix** (also called a **vanilla wineprefix**) is a fresh Wine environment with nothing extra installed - just the basics.

In simple terms, a wineprefix:

1. Acts like a mini Windows computer inside your Linux system
2. Lets Wine translate Windows programs to work on Linux
3. Keeps all Windows-related files and settings in one place

> [!NOTE] Why This Matters
> It's good practice to use different wineprefixes for different Windows applications. This keeps them separate, like having multiple Windows computers for different tasks. If one application breaks, it won't affect the others.

[^1]: Technically, a wineprefix is controlled by the `WINEPREFIX` environment variable that points to the directory containing the virtual Windows environment. By default, it's located at `~/.wine/` if not specified.
[^2]: Answer from <https://askubuntu.com/questions/956244/what-is-a-wineprefix>

## Types of Wineprefixes

### Main Wineprefixes

These are recommended for most visual novels:

| Prefix      | Purpose               | When to Use                                      |
| ----------- | --------------------- | ------------------------------------------------ |
| `proton_ge` | General compatibility | First choice for newer VNs                       |
| `vanilla`   | Clean Wine setup      | For VNs using older engines like kirikiri or BGI |

### Special-Purpose Wineprefixes

For games with specific codec or component requirements:

| Prefix        | Primary Use Case                     |
| ------------- | ------------------------------------ |
| `wmp11quartz` | Windows Media Player 11 + QuartzCore |
| `lavfilters`  | LAV Video/Audio Filters              |
| `mciqtz32`    | MCI + QuartzCore codecs              |
| `ffdshow`     | FFDShow multimedia codecs            |
| `wmp11`       | Windows Media Player 11              |
| `xact`        | DirectX Audio codecs                 |
| `quartz_dx`   | DirectX + Quartz                     |
| `wmp10quartz` | Windows Media Player 10 + QuartzCore |
| `wmp9`        | Windows Media Player 9               |

### Choosing the Right Prefix

1. Check the [visual novel compatibility list](../visual-novel-compatibility-list) for the recommended prefix.
2. If your game isn't listed:
   - Try prefixes used by games from the same engine or developer.
   - Start with `proton_ge`, as it provides broad compatibility.
   - If that fails, try `vanilla`.
   - For persistent video or audio issues, test the specialized media prefixes above.

> [!TIP]
> In most cases, either `proton_ge` or `vanilla` will work. Start with these before exploring the specialized setups.

> [!WARNING]
> Don't forget to enable [Japanese Locale](../all-platforms/jp-locale) and install appropriate font files inside the prefix if you encounter missing or broken text.

## Creating Wineprefixes

> [!NOTE]
> This assumes you're using [Lutris](lutris), but ignoring this, you can use the command line just as easily to run your applications.

> [!TIP] Recommended wineprefixes
> If starting out, setup the basic wineprefixes only.
>
> If you have any issues, visit the [Visual Novel Compatibility](../visual-novel-compatibility-list) page. Specific details about other wineprefixes are in [this section](#types-of-wineprefixes).

> [!WARNING]
> You only need to make the prefix one time. Do not modify the prefix once created.

### 1. Create prefix folders

Create folders for each prefix you'll need. You can use this command to create them all at once:

#### Basic wineprefixes

```bash
mkdir proton_ge vanilla
```

#### Special-purpose wineprefixes

```bash
mkdir wmp11quartz lavfilters mciqtz32 ffdshow wmp11 xact quartz_dx wmp10quartz
```

### 2. Configure prefix settings

In Lutris, visit any game's config and enter these settings:

**Game Options:**

- **Wine prefix**: _path_to_your_wineprefix_folder_ (The location of the folder created in step 1)
- **Prefix architecture**: **64bit** (**32bit** for `wmp10` & `wmp10quartz`)

### 3. Select Wine version

Based on the prefix type, select the appropriate Wine runner:

| Prefix Type   | Recommended Runner | Installation Source                                                                        | Notes                                                                              |
| ------------- | ------------------ | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| **vanilla**   | Wine 10            | [protonUp-qt](protonup) [Kron4ek Builds](https://github.com/Kron4ek/Wine-Builds/releases/) | It has fullscreen issues with some VNs, can use gamescope as a workaround          |
| **proton_ge** | Proton-GE 10.25    | [protonUp-qt](protonup)                                                                    | -                                                                                  |
| **Others**    | Lutris 7.2         | Default                                                                                    | Do NOT use Lutris 7.2.2 (video playback issues)<br>Disable DXVK for these prefixes |

### 4. Install components (optional)

> [!NOTE]
> Not every visual novel needs extra components.
>
> To know if your visual novel needs extra components, visit the [Visual Novel Compatibility List](../visual-novel-compatibility-list) and search.

For each prefix:

1. Click the 🍷 wine bottle icon (usually on the bottom toolbar), then click **Bash Terminal**
2. Depending on your wineprefix (e.g., `wmp11`, `lavfilters`...), copy the installation command from the Component Installation section below
3. Paste it into the terminal using <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd>
4. Hit <kbd>Enter</kbd> and wait for the installation to complete

#### After this, done! Run your visual novels

## Component Installation

> [!WARNING] Warning
> If you change the Wine version, you **must** remake the prefix, as all components will be overwritten by Wine defaults.

### Basic Prefixes

#### vanilla (64bit)

Needs GStreamer libraries for video playback.

- **System Lutris**: Make sure you have these libraries installed:

  ```bash
  gstreamer gst-plugins-ugly gst-plugins-good gst-plugins-base-libs gst-plugins-base gst-plugins-bad gst-plugins-bad-libs gst-plugin-pipewire gst-libav
  ```

- **Flatpak Lutris or Steam Deck**: No need to install anything as these come bundled in.

#### proton GE (64bit)

No extra video components needed; should work out of the box.

- If using outside Steam (like Lutris), install `umu-launcher`.
- Flatpak/Steam Deck Lutris bundles `umu-launcher` so no need to install it.
- If you have video playback issues try to add Environment variable PROTON_MEDIA_USE_GST=1 (It runs the old proton-ge 9 video playback implementation).

### Media Prefixes

> [!IMPORTANT] Special Codecs
> We use a special helper script to install extra codecs, which have additional patches.
> Download [Special Codecs](https://github.com/b-fission/vn_winestuff/) to a folder like `~/Documents`.
> Update paths in the commands below to where you downloaded them (example, `~/Documents/vn_winestuff-main/codec.sh`).
>
> For more detailed information about the script, see the [Special Codecs](special-codecs.md) page.

These prefixes all use "Windows 10" as the [reported Windows version](https://gitlab.winehq.org/wine/wine/-/wikis/Commands/winecfg#windows-version), unless stated otherwise.

#### wmp11quartz (64bit)

```bash
sh ~/Documents/vn_winestuff-main/codec.sh wmp11 quartz2
```

#### wmp11 (64bit)

```bash
sh ~/Documents/vn_winestuff-main/codec.sh wmp11
```

#### Media Foundation (MF) (64bit)

```bash
sh ~/Documents/vn_winestuff-main/codec.sh mf
```

#### quartz_dx (64bit)

```bash
sh ~/Documents/vn_winestuff-main/codec.sh wmp11 quartz_dx
```

#### lavfilters (64bit)

```bash
sh ~/Documents/vn_winestuff-main/codec.sh lavfilters
```

#### mciqtz32 (64bit)

```bash
sh ~/Documents/vn_winestuff-main/codec.sh mciqtz32
```

#### xact (64bit)

```bash
winetricks -q --force xact
```

#### ffdshow (64bit)

```bash
winetricks ffdshow
```

#### wmp9 (32bit)

```bash
winetricks -q --force wmp9
```

#### lavfiltersquartz (64bit)

```bash
winetricks -q --force d3dx9 amstream d3dcompiler_43 d3dcompiler_47 devenum lavfilters quartz
```

#### devenumquartz (64bit)

```bash
winetricks -q --force amstream devenum quartz
```

#### lavfilterslite (64bit)

```bash
winetricks -q --force d3dx9 dirac lavfilters vcrun2005 vcrun2008
```

#### lavfiltersxlite (64bit)

```bash
winetricks -q --force devenum lavfilters quartz
```

#### lavfiltersplus (64bit)

```bash
winetricks -q --force d3dx9 dirac dotnet35 dotnet40 lavfilters vcrun2005 vcrun2008
```

#### lavfiltersjapanese (64bit)

```bash
winetricks -q --force cjkfonts d3dx9 dirac dotnet35 dotnet40 lavfilters vcrun2005 vcrun2008
```

#### lavfiltersquartzjapanese (64bit)

```bash
winetricks -q --force d3dx9 d3dcompiler_43 d3dcompiler_47 lavfilters quartz
```

#### lavfilterslitejapanese (64bit)

```bash
winetricks -q --force d3dx9 dirac lavfilters vcrun2005 vcrun2008
```

#### lavfiltersvcrun (64bit)

```bash
winetricks -q --force d3dcompiler_47 d3dx9 dirac dotnet35 lavfilters vcrun2005 vcrun2008 vcrun2010 vcrun2012 vcrun2013 vcrun2015 vcrun2019
```

#### lavfiltersquartzlite (64bit)

```bash
winetricks -q --force d3dx9 dirac lavfilters vcrun2005 vcrun2008 quartz
```

#### lavfiltersjapanese32 (32bit)

```bash
winetricks -q --force cjkfonts d3dx9 dirac dotnet35 dotnet40 lavfilters vcrun2005 vcrun2008
```

#### lavfiltersxlitejapanese (64bit)

```bash
winetricks -q --force d3dx9 dirac lavfilters vcrun2005 vcrun2008
```

#### directmusic (64bit)

```bash
winetricks -q --force directmusic gmdls
```

#### d3dcompilerxlite (64bit)

```bash
winetricks -q --force d3dcompiler_47
```

#### d3dcompilerlite (64bit)

```bash
winetricks -q --force cjkfonts d3dcompiler_47 d3dx9
```

#### lavfiltersd3d (64bit)

```bash
winetricks -q --force d3dx9 d3dcompiler_43 d3dcompiler_47 lavfilters quartz
```

#### directmusicquartz (64bit)

```bash
winetricks -q --force directmusic gmdls quartz
```

#### dotnet (64bit)

```bash
winetricks -q --force dotnet35 dotnet40 dotnet45 dotnet452 dotnet46 dotnet461 dotnet462 dotnet472 dotnet48 vcrun2005 vcrun2008
```

#### dotnetvcrunjapanese (64bit)

```bash
winetricks -q --force cjkfonts d3dx9 dotnet40 dotnet45 dotnet46 dotnet461 vcrun2005 vcrun2008 vcrun2010 vcrun2012 vcrun2013 vcrun2015 vcrun2019
```

#### dxvkplus (64bit)

```bash
winetricks -q --force arial courier d3dcompiler_43 d3dcompiler_47 d3dx9 dxvk2010 lavfilters702 msls31 quartz times
```

#### lavfiltersd3djapanese (64bit)

```bash
winetricks -q --force cjkfonts d3dx9 dirac d3dcompiler_43 d3dcompiler_47 lavfilters
```

#### lavfiltersd3dlite (64bit)

```bash
winetricks -q --force d3dx9 d3dcompiler_43 d3dcompiler_47 lavfilters
```

#### dxvkdotnet (64bit)

```bash
winetricks -q --force d3dx9 devenum dirac dotnet35 dotnet40 dxvk2010 lavfilters vcrun2005 vcrun2008
```

> [!IMPORTANT]
> Manually enable ALL codecs for ffdshow (including MPEG-1/2!) when the popup occurs at the end.

### Legacy Prefixes (Currently Broken)

#### wmp10 (32bit)

```bash
winetricks -q --force wmp10
```

#### wmp10quartz (32bit)

```bash
winetricks -q --force wmp10 && sh ~/Documents/vn_winestuff-main/codec.sh quartz2
```

#### general

```bash
winetricks -q --force d3dx9 dotnet35 vcrun2003 vcrun2005 vcrun2008 vcrun2010 vcrun2012 vcrun2013 vcrun2015
```

## Font Installation

### Installing Windows Japanese Fonts

1. Download the [Windows Japanese Fonts Pack](https://drive.google.com/file/d/1OiBgAmt3vPRu08gPpxFfzrtDgarBGszK/view)
2. Extract the fonts
3. Place them in each prefix's fonts directory:

```text
your_wineprefix/drive_c/Windows/Fonts
```

### Saving Disk Space with Symlinks

To avoid duplicating fonts across multiple prefixes:

1. Store fonts in one location (e.g., `~/Desktop/Fonts/`)
2. Remove the existing Fonts folder inside the prefix
3. Create a symbolic link:

```bash
ln -s "~/Desktop/Fonts/" <your-wineprefix-path>/drive_c/windows/
```

## Tips and Troubleshooting

### Common Issues

#### Video Playback Issues

If you have video playback or lag issues in old VNs, make sure **DXVK is disabled**.
If using **vanilla** prefix make sure you have the gstreamer libraries and are using a wow64 build of wine (the name of the wine version ends in wow64) for better compatibility.

#### Text Rendering Issues

For rendering text issues in-game, ensure fonts are in the prefix and use the Japanese locale environment variable:

```bash
LANG="ja_JP.UTF-8"
```

#### Fullscreen Issues

Prefixes not using proton runners usually have issues with fullscreen in Visual Novels that use exclusive fullscreen. As a workaround you can use [Gamescope](gamescope)

<details>
<summary>You can also compile your own version of Wine with the fullscreen fixes from proton in a wow64 build:</summary>

1. Use [wine-tkt-git](https://github.com/Frogging-Family/wine-tkg-git) repository. Read the instructions.

2. Use [wine-tkg-valve-exp.cfg](https://github.com/Frogging-Family/wine-tkg-git/blob/master/wine-tkg-git/wine-tkg-profiles/wine-tkg-valve-exp.cfg) as a template. Add `_NOLIB32="wow64"` at the end to enable wow64 build.

3. Name the .cfg file as `wike-tkg.cfg`. Place it in `~/.config/frogminer/`.

4. Run the compilation .sh script and select 0.

5. Add your build to the Lutris folder: `~/.local/share/lutris/runners/wine/` or `~/.var/app/net.lutris.Lutris/data/lutris/runners/`(flatpak), restart Lutris.

</details>

#### WMP11 32-bit Installation

The 32bit installer for `wmp11` is broken, but [a fix is available](https://github.com/Winetricks/winetricks/pull/1990). For now, use a 64bit prefix (as of April 21, 2023) with Lutris 7.2.

### Wine Configuration Tips

#### Wayland Support

For Wine 9.22+ (staging) or 10.0+ (stable), the native Wayland driver is enabled by default.
The X11 driver still takes precedence if both are available, but you can force Wayland by unsetting the `DISPLAY` variable:

```bash
env -u DISPLAY wine bin.exe
```

For Wine 9.21 and older, enable the driver with:

```bash
wine reg add 'HKEY_CURRENT_USER\Software\Wine\Drivers' /v Graphics /t REG_SZ /d 'x11,wayland'
```

#### FFmpeg Backend

From Wine 10.0 (stable), a new opt-in FFmpeg-based backend is available as an alternative to GStreamer. Enable it by setting:
`DisableGstByteStreamHandler=1` in the `HKCU\Software\Wine\MediaFoundation` registry key.

#### Registry Keys

See the [list of useful registry keys](https://gitlab.winehq.org/wine/wine/-/wikis/Useful-Registry-Keys) maintained by Wine for advanced configuration options.

#### Wine amd64 vs WoW64

[Wine WoW64 versions work on systems without 32-bit libraries](https://github.com/Kron4ek/Wine-Builds?tab=readme-ov-file#architectures) but some [32-bit games can have performance issues on those versions](https://archlinux.org/news/transition-to-the-new-wow64-wine-and-wine-staging/). [Improvements are being made though](https://gitlab.winehq.org/wine/wine/-/releases/wine-10.18)

### Version Compatibility Notes

- Avoid Lutris 7.2.2 due to video playback issues
- Lutris 7.x versions generally work fine
- Some codecs like `mciqtz32` don't work with newer Wine versions
- `wmp11_quartz` can be installed in newer Proton prefixes

## Common Wine versions

If you don't know which Wine/Proton version might be the best for a particular game, try these ones:

- [Caffe 7.7](https://github.com/bottlesdevs/wine/releases/tag/caffe-7.7)
- [GE-Proton7-55](https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton7-55)
- [GE-Proton8-6](https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton8-6)
- [GE-Proton9-5](https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton9-5)
- [GE-Proton9-7](https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton9-7)
- [GE-Proton9-9](https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton9-9)
- [GE-Proton9-10](https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton9-10)
- [GE-Proton9-13](https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton9-13)
- [GE-Proton10-4](https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton10-4)
- [GE-Proton10-8](https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton10-8)
- [GE-Proton10-25](https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton10-25)
- [Kron4ek Wine 8.15](https://github.com/Kron4ek/Wine-Builds/releases/tag/8.15)
- [Kron4ek Wine 8.21](https://github.com/Kron4ek/Wine-Builds/releases/tag/8.21)
- [Kron4ek Wine 10.0](https://github.com/Kron4ek/Wine-Builds/releases/tag/10.0)
- [Lutris Wine 6.14-4](https://github.com/lutris/wine/releases/tag/lutris-6.14-4)
- [Lutris Wine 7.2](https://github.com/lutris/wine/releases/tag/lutris-wine-7.2)
- [Proton 5.13-6](https://github.com/ValveSoftware/Proton/releases/tag/proton-5.13-6)
- [UMU-Proton 9.0-2](https://github.com/Open-Wine-Components/umu-proton/releases/tag/UMU-Proton-9.0-2)
- [UMU-Proton 9.0-4e](https://github.com/Open-Wine-Components/umu-proton/releases/tag/UMU-Proton-9.0-4e)
- [Wine 5.0](https://gitlab.winehq.org/wine/wine/-/releases/wine-5.0)
- [Wine 5.5](https://gitlab.winehq.org/wine/wine/-/releases/wine-5.5)
- [Wine 5.10](https://gitlab.winehq.org/wine/wine/-/releases/wine-5.10)
- [Wine 6.0.1](https://gitlab.winehq.org/wine/wine/-/releases/wine-6.0.1)
- [Wine 6.3](https://gitlab.winehq.org/wine/wine/-/releases/wine-6.3)
- [Wine 6.21](https://gitlab.winehq.org/wine/wine/-/releases/wine-6.21)
- [Wine 7.1](https://gitlab.winehq.org/wine/wine/-/releases/wine-7.1)
- [Wine 7.2](https://gitlab.winehq.org/wine/wine/-/releases/wine-7.2)
- [Wine 9.14](https://gitlab.winehq.org/wine/wine/-/releases/wine-9.14)
- [Wine 9.17 (WoW64)](https://github.com/Kron4ek/Wine-Builds/releases/tag/9.17)
- [Wine 9.18](https://gitlab.winehq.org/wine/wine/-/releases/wine-9.18)
- [Wine 10.0](https://gitlab.winehq.org/wine/wine/-/releases/wine-10.0)
- [Wine 10.0 (WoW64)](https://gitlab.winehq.org/wine/wine/-/releases/wine-10.0)
- [Wine 10.4 (staging)](https://github.com/Kron4ek/Wine-Builds/releases/tag/10.4)
- [Wine 10.4 (staging, WoW64)](https://github.com/Kron4ek/Wine-Builds/releases/tag/10.4)
- [Wine 10.5](https://gitlab.winehq.org/wine/wine/-/releases/wine-10.5)
- [Wine 10.10 (staging, WoW64)](https://github.com/Kron4ek/Wine-Builds/releases/tag/10.10)
- [Wine-GE-Proton7-43](https://github.com/GloriousEggroll/wine-ge-custom/releases/tag/GE-Proton7-43)
- [Wine-GE-Proton8-5](https://github.com/GloriousEggroll/wine-ge-custom/releases/tag/GE-Proton8-5)
- [Wine-GE-Proton8-13](https://github.com/GloriousEggroll/wine-ge-custom/releases/tag/GE-Proton8-13)

## Common system packages

Lutris documentation [about drivers](https://github.com/lutris/docs/blob/master/InstallingDrivers.md), [Wine dependencies](https://github.com/lutris/docs/commit/898ca03715d2d5f170af83e714dfcc549820aa9f) and [GloriousEggroll's Blog](https://www.gloriouseggroll.tv/how-to-get-out-of-wine-dependency-hell/). Arch Linux users can find Wine optional dependencies on the following package pages:

- [umu-launcher](https://archlinux.org/packages/multilib/x86_64/umu-launcher/)
- [wine](https://archlinux.org/packages/extra/x86_64/wine/)
- [wine32](https://aur.archlinux.org/packages/wine32)
- [wine-osu-spectator](https://aur.archlinux.org/packages/wine-osu-spectator)
- [wine-stable](https://aur.archlinux.org/packages/wine-stable)
- [wine-stable-next](https://aur.archlinux.org/packages/wine-stable-next)
- [wine-cachyos](https://aur.archlinux.org/packages/wine-cachyos)
- [proton-cachyos](https://aur.archlinux.org/packages/proton-cachyos)
- [wine-osu-spectator-wow64](https://aur.archlinux.org/packages/wine-osu-spectator-wow64)
- [proton-ge-custom-bin](https://aur.archlinux.org/packages/proton-ge-custom-bin)
- [proton-ge-custom-rtsp-bin](https://aur.archlinux.org/packages/proton-ge-custom-rtsp-bin)
- [proton-xiv-bin](https://aur.archlinux.org/packages/proton-xiv-bin)
- [wine-git](https://aur.archlinux.org/packages/wine-git)
- [wine-staging-git](https://aur.archlinux.org/packages/wine-staging-git)
- [steam-native-runtime](https://aur.archlinux.org/packages/steam-native-runtime)
- [steamrun](https://aur.archlinux.org/packages/steamrun)

### Additional Resources

- [Windows Japanese Fonts Pack](https://drive.google.com/file/d/1OiBgAmt3vPRu08gPpxFfzrtDgarBGszK/view)
- [Wine Registry Keys Guide](https://gitlab.winehq.org/wine/wine/-/wikis/Useful-Registry-Keys)
- [WMP11 32-bit Fix](https://github.com/Winetricks/winetricks/pull/1990)
- [Special Codecs](special-codecs.md)
- [CodeWeavers Knowledge Base](https://support.codeweavers.com/en_US/linux-knowledge-base)
