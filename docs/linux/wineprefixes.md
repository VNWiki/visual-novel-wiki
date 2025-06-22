---
title: 'Wineprefixes'
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
[^2]: Answer from https://askubuntu.com/questions/956244/what-is-a-wineprefix

## Types of Wineprefixes

### Main Wineprefixes
These are recommended for most visual novels:

| Prefix | Purpose | When to Use |
|--------|---------|-------------|
| `proton_ge` | General compatibility | First choice for newer VNs |
| `vanilla` | Clean Wine setup | For VNs using older engines like kirikiri or BGI |

### Special-Purpose Wineprefixes
For games with specific codec or component requirements:

| Prefix | Primary Use Case |
|--------|-----------------|
| `wmp11quartz` | Windows Media Player 11 + QuartzCore |
| `lavfilters` | LAV Video/Audio Filters |
| `mciqtz32` | MCI + QuartzCore codecs |
| `ffdshow` | FFDShow multimedia codecs |
| `wmp11` | Windows Media Player 11 |
| `xact` | DirectX Audio codecs |
| `quartz_dx` | DirectX + Quartz |
| `wmp10quartz` | Windows Media Player 10 + QuartzCore |
| `wmp9` | Windows Media Player 9 |

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
* **Wine prefix**: *path_to_your_wineprefix_folder* (The location of the folder created in step 1)
* **Prefix architecture**: **64bit** (**32bit** for `wmp10` & `wmp10quartz`)

### 3. Select Wine version

Based on the prefix type, select the appropriate Wine runner:

| Prefix Type | Recommended Runner | Installation Source | Notes |
|-------------|-------------------|---------------------|-------|
| **vanilla** | Wine 10 | [protonUp-qt](protonup) Kron4ek Builds | It has fullscreen issues with some VNs, can use gamescope as a workaround |
| **proton_ge** | Proton-GE 9.27 | [protonUp-qt](protonup) | - |
| **Others** | Lutris 7.2 | Default | Do NOT use Lutris 7.2.2 (video playback issues)<br>Disable DXVK for these prefixes |

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

#### After this, done! Run your visual novels!

## Component Installation

> [!WARNING] Warning
> If you change the Wine version, you **must** remake the prefix, as all components will be overwritten by Wine defaults.

### Basic Prefixes

#### vanilla (64bit)
Needs GStreamer libraries for video playback.

* **System Lutris**: Make sure you have these libraries installed:

  ```bash
  gstreamer gst-plugins-ugly gst-plugins-good gst-plugins-base-libs gst-plugins-base gst-plugins-bad gst-plugins-bad-libs gst-plugin-pipewire gst-libav lib32-gstreamer lib32-gst-plugins-base-libs
  ```

* **Flatpak Lutris or Steam Deck**: No need to install anything as these come bundled in.

#### proton GE (64bit)
No extra components needed; should work out of the box.

* If using outside Steam (like Lutris), install `umu-launcher`.
* Flatpak Lutris bundles `umu-launcher`.
* Can also try Proton-GE 10+ versions if you have issues with 9.27. Make a different prefix for it.

### Media Prefixes

> [!IMPORTANT] Special Codecs
> We use a special helper script to install extra codecs, which have additional patches.
> Download [Special Codecs](https://github.com/b-fission/vn_winestuff/) to a folder like `~/Documents`.
> Update paths in the commands below to where you downloaded them (example, `~/Documents/vn_winestuff-main/codec.sh`).
>
> For more detailed information about the script, see the [Special Codecs](special-codecs.md) page.


#### wmp11quartz (64bit)
```bash
sh ~/Documents/vn_winestuff-main/codec.sh wmp11 quartz2
```

#### wmp11 (64bit)
```bash
sh ~/Documents/vn_winestuff-main/codec.sh wmp11
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

### Version Compatibility Notes

- Avoid Lutris 7.2.2 due to video playback issues
- Lutris 7.x versions generally work fine
- Some codecs like `mciqtz32` don't work with newer Wine versions
- `wmp11_quartz` can be installed in newer Proton prefixes

### Additional Resources

- [Windows Japanese Fonts Pack](https://drive.google.com/file/d/1OiBgAmt3vPRu08gPpxFfzrtDgarBGszK/view)
- [Wine Registry Keys Guide](https://gitlab.winehq.org/wine/wine/-/wikis/Useful-Registry-Keys)
- [WMP11 32-bit Fix](https://github.com/Winetricks/winetricks/pull/1990)
- [Special Codecs](special-codecs.md)
