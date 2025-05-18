---
title = 'Wineprefixes'
---

# Wineprefixes

What is a Wineprefix?\
What is its function?\
What is a “clean” Wineprefix?

These are common questions, and here’s the answers to them

A WINEPREFIX is an environment variable.\
It defines where Wine looks for its configuration and files, in essence where it puts its C: drive.\
A clean prefix has no additional Windows components installed, often referred to as a vanilla wineprefix.

[Source](https://askubuntu.com/questions/956244/what-is-a-wineprefix)

Essentially, you can think of it like a mini Windows container.\
Wine makes a fake Windows container and does the translation between your Linux code & Windows instructions.\
A wine prefix is the folder (or directory, same word) that has the C:\ drive on your Linux system.\
And so, you can have multiple wine prefixes. This is what we’re going to do.

> [!info] Info
> On Linux, we like to have multiple wine prefixes that each do different things, and separate them because we don’t want their internal components to interfere with another, which can sometimes happen.


## How do I make a wineprefix?

### Main wineprefixes

Here are the main wineprefixes we’ll be needing to use for most cases.

- proton_ge
- vanilla

Some other prefixes for less common cases:

- wmp11quartz
- lavfilters
- mciqtz32
- ffdshow
- wmp11
- xact
- quartz_dx
- wmp10quartz

Usually the best course of action is trying to run the VN with proton_ge and vanilla prefixes since there are high chances that it will run fine with one of these two. If you have issues then try the other prefixes.

Make sure to run both [Japanese Locale](../all-platforms/jp-locale) and Fonts in the prefix if you have issues with text display.

### Steps

1. Create an empty folder with the name of every prefix you will be using.
    
    You also can automate folder creation by using the console command (works on Steam Deck), example: 
`mkdir proton_ge wmp11quartz wmp11 xact wmp10quartz vanilla`

2. Next, we’ll setup each folder. 

    In Lutris, visit any game’s config and enter these settings

    Game Options:
    * **Wine prefix**: **path_to_your_wineprefix_folder** (The location of the folder we made in step 1)
    * **Prefix architecture**: **64bit** (**32bit** for wmp10 & wmp10quartz)

    Runner Options:
    * **vanilla** Prefix: **Wine 10**. Install from [protonUp-qt](protonup) Kron4ek Builds
    * **proton_ge** Prefix: **Proton-ge 9.13** (Or newer versions). Install from [protonUp-qt](protonup)
    * **Others**: **Lutris 7.2** (default) (Do not pick Lutris 7.2.2 It has issues with video playback). Disable DXVK for this case.
    

3. For each wineprefix folder, you’ll want these components depending on their name.
* Click the 🍷 wine bottle, and click **Bash Terminal**.
* Copy the command (based on the name of the prefix), paste it into each Terminal using **CTRL + SHIFT + V**
* Hit **Enter** to input the command and wait for them to finish.




* **vanilla** (64bit): Needs Gstreamer libraries for video playback.
    - System Lutris: Make sure you have this libraries installed in your system: `gstreamer gst-plugins-ugly gst-plugins-good gst-plugins-base-libs gst-plugins-base  gst-plugins-bad gst-plugins-bad-libs gst-plugin-pipewire gst-libav lib32-gstreamer lib32-gst-plugins-base-libs`
    - Flatpak Lutris or Steam Deck: Don't need to install anything since they come bundled in.
* **proton_ge** (64bit): Doesn't need any extra components, should work out of the box. 
    - If using it outside of Steam, like in lutris you need to install umu-launcher.
    - Flatpak Lutris does not need umu-launcher, it's bundled in.
    
> [!info] Info
> Go to [Special Codecs](special-codecs.md) and download it in some route like ~/Documents. 
> 
> Make sure to change the path in following commands to where you downloaded it.

* **wmp11quartz** (64bit): `sh ~/Documents/vn_winestuff-main/codec.sh wmp11 quartz2`
* **wmp11** (64bit): `sh ~/Documents/vn_winestuff-main/codec.sh wmp11`
* **wmp10** (32bit): `winetricks -q --force wmp10` (wmp10 install is currently borked, can't be used)
* **wmp10quartz** (32bit): `winetricks -q --force wmp10 && sh ~/Documents/vn_winestuff-main/codec.sh quartz2` (wmp10 install is currently borked, can't be used)
* **quartz_dx** (64bit): `sh ~/Documents/vn_winestuff-main/codec.sh wmp11 quartz_dx`
* **lavfilters** (64bit): `sh ~/Documents/vn_winestuff-main/codec.sh lavfilters`
* **xact** (64bit): `winetricks -q --force xact`
* **mciqtz32** (64bit): `sh ~/Documents/vn_winestuff-main/codec.sh mciqtz32`
* **ffdshow** (64bit): `winetricks ffdshow` (You must manually enable ALL codecs for **ffdshow** (including MPEG-1/2!) when the pop up occurs at the end of the install.)

    > [!warning] Warning
    > If you change the Runner version you NEED to remake the prefix, all components will be overwritten by the defaults of Wine

4. Next, within each wineprefix folder, install the [Windows Japanese Fonts](https://drive.google.com/file/d/1OiBgAmt3vPRu08gPpxFfzrtDgarBGszK/view).\
To install, place your fonts in **your_wineprefix/drive_c/Windows/Fonts**. This ensures your VNs can load the right font.\

    > [!info] Info
    > If you want to save disk space you can symlink the fonts instead of copying them with: \
    `ln -s "~/Desktop/Fonts/" ~/Games/wine_prefixes/wmp11quartz/drive_c/windows/` \
    Make sure to delete the Fonts folder inside the prefix beforehand.
    
Great! All the wineprefixes are now setup

Check [visual novel compatibility list](../visual-novel-compatibility-list) to know what prefixes you need to utilize for each game. If the game is not in the list try prefixes for other games using the same engine or developer. If can't find anything try proton-ge as a good first generic prefix.


## Special tips

> [!info] Info
> Starting from [Wine 9.22](https://gitlab.winehq.org/wine/wine/-/releases/wine-9.22) (staging) and [Wine 10.0](https://gitlab.winehq.org/wine/wine/-/releases/wine-10.0#wayland-driver) (stable), the native Wayland driver is enabled in default configuration. X11 driver still takes precedence if both are available but you can force its use by unsetting `DISPLAY` environment variable: `env -u DISPLAY wine bin.exe`. For Wine 9.21 and older, you need to run the following command to enable the driver: `wine reg add 'HKEY_CURRENT_USER\Software\Wine\Drivers' /v Graphics /t REG_SZ /d 'x11,wayland'`

> [!info] Info
> Starting from Wine 10.0 (stable), [a new opt-in FFmpeg-based backend has been introduced](https://gitlab.winehq.org/wine/wine/-/releases/wine-10.0#multimedia), as an alternative to the GStreamer backend. It can be enabled by setting the value `DisableGstByteStreamHandler=1` in the `HKCU\Software\Wine\MediaFoundation` registry key.

> [!info] Info
> A [list of useful registry keys](https://gitlab.winehq.org/wine/wine/-/wikis/Useful-Registry-Keys) is maintained on the official Wine Gitlab repository.

> [!info] Info
> Do not use lutris 7.2.2 It has video playback issues. Lutris 7-x versions are pretty old at this point so if you want to change to newer versions feel free but it generally works fine and some codecs like mciqtz32 doesn't work with newer versions.

> [!info] Info
> wmp11_quartz can be installed in newer Proton prefixes too.

> [!warning] warning
> If you have any issues with video playback or old VNs lagging make sure DXVK is disabled.

> [!warning] warning
> If you have any issues rendering text in game make sure to have fonts in the prefix and use JP Locale variable `LANG="ja_JP.UTF-8"`.

> [!warning] Warning
> wmp11's 32bit installer is broken, but [we fixed it](https://github.com/Winetricks/winetricks/pull/1990). However, it’ll take some time before it gets downstreamed to a Wine version we can generally use. For now, we have to use a 64bit prefix (as of April 21 2023) with Lutris 7.2.

## Resources

### Windows Fonts

https://drive.google.com/file/d/1OiBgAmt3vPRu08gPpxFfzrtDgarBGszK/view
