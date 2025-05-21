---
title : 'Bottles compatibility list'
---

# Bottles Compatibility List

A brief overview **on what works** for a visual novel. Tested with Bottles following [its guide](index).

* ✅: Verified to work
* ⚠️: Works with some issues
* ❓: Unknown
* ❌: Broken
* N/A: Not applicable

::: tip
Clicking on a VN with a Note, highlights the note(s) in the section below.
:::

<script setup>
import DataTable from '@components/DataTable.vue'
import ExpandableDataTable from '@components/ExpandableDataTable.vue'


const vnBottlesColumns = [
  { field: 'game', header: 'Game', sortable: true },
  { field: 'state', header: 'State', sortable: true },
  { field: 'configuration', header: 'Configuration', sortable: true, isCode: true },
  { field: 'runner', header: 'Runner', sortable: true },
  { field: 'notes', header: 'Notes', sortable: false },
  { field: 'configuration link', header: 'Configuration Link', sortable: false, isLink: true },
  { field: 'game link', header: 'Game Link', sortable: false, isLink: true },
]

function highlightNotes(noteReference) {
  // Clear previous highlights
  document.querySelectorAll(".note-highlight-a, .note-highlight-b, .note-highlight-c")
    .forEach(el => el.classList.remove("note-highlight-a", "note-highlight-b", "note-highlight-c"));

  if (!noteReference) return;

  const highlightClasses = ["note-highlight-a", "note-highlight-b", "note-highlight-c"];
  const types = ["tweak", "workaround", "note"];

  // Split by ' or ' (case insensitive)
  const groups = noteReference
    .toLowerCase()
    .split(/\s+or\s+/)
    .map(g => g.trim());

  groups.forEach((group, groupIndex) => {
    // Assign highlight class for this whole group
    const highlightClass = highlightClasses[groupIndex % highlightClasses.length];

    // Split further by ' and ' to handle multiple sections in one group
    const subgroups = group.split(/\s+and\s+/).map(sg => sg.trim());

    subgroups.forEach((subgroup) => {
      // Find which type(s) are mentioned in this subgroup (should be one)
      const foundType = types.find(type => subgroup.includes(type));
      if (!foundType) return;

      // Extract numbers for this subgroup
      const nums = subgroup.match(/\d+/g);
      if (!nums) return;

      const numbers = nums.map(n => parseInt(n, 10)).filter(n => !isNaN(n));
      if (numbers.length === 0) return;

      // Find the section header h2 with id = foundType + "s"
      const section = document.querySelector(`h2#${foundType}s`);
      if (!section) return;

      let el = section.nextElementSibling;

      // Highlight across all OL siblings until the next H2
      while (el && el.tagName !== "H2") {
        if (el.tagName === "OL") {
          const start = parseInt(el.getAttribute("start") || "1", 10);
          const listItems = el.querySelectorAll("li");

          numbers.forEach(num => {
            const index = num - start;
            if (index >= 0 && index < listItems.length) {
              listItems[index].classList.add(highlightClass);
            }
          });
        }
        el = el.nextElementSibling;
      }
    });
  });
}

</script>

<ExpandableDataTable 
  jsonPath="vn_bottles_list.json" 
  :columns="vnBottlesColumns" 
  sortField="game"
  :sortOrder="1"
/>

<DataTable 
  jsonPath="vn_bottles_list.json" 
  :columns="vnBottlesColumns" 
  :onHighlight="highlightNotes"
  sortField="game"
  :sortOrder="1"
/>

## Tweaks

1. Install [Japanese Fonts](../wineprefixes)
2. Enable "Take Focus" in the bottle display settings if needed
3. Disable "Allow the window manager to decorate the windows" and "Allow the window manager to control the windows" in "winecfg" ("Legacy Wine Tools > Configuration")
4. Change renderer to "GDI" in your bottle settings (under "Display" and "Advanced Display Settings") to avoid black screen when switching to fullscreen mode
5. Enable "Virtual Desktop" if needed (under "Display" and "Advanced Display Settings") and configure it
6. Change the prefix Windows version to "Windows XP", run `wmfdist11.exe` and change it back to "Windows 10"
7. Enable DXVK in the executable shortcut settings
8. Install `quartz` through Bottles or Winetricks
9. Add `taskset -c 0 %command%` as a launch command to only use the first core of your CPU
10. Add these environment variables:

::: tabs
== Nvidia
```bash
LIBGL_ALWAYS_SOFTWARE=1
__GLX_VENDOR_LIBRARY_NAME=mesa
```

== AMD
```bash
LIBGL_ALWAYS_SOFTWARE=1
```

:::
11. Check "DirectSound enabled" in the game top menu and select "DirectSoundWave" in the "Music Setup Menu"
12. For MIDI support, install "Timidity++", a sound font and add `timidity -iA -B2,8 -EFreverb=0 & %command%; pkill -f timidity` as a launch command in your executable shortcut settings. Then select "Music from MIDI source" option in the game menu bar
13. Change in-game graphics settings
14. Install `wmp10`
15. Change initial start-up settings
16. Install `amstream`, `devenum` and `quartz` through Bottles or Winetricks
17. Configure Japanese locale [system wide](../wineprefixes) or for [Flatpak](../wineprefixes) then add `LC_ALL=ja_JP.UTF-8` and `TZ=Asia/Tokyo` as environment variables
18. Add `PULSE_LATENCY_MSEC=60` as an environment variable to fix audio crackling
19. Install Mangohud and add this line as a launch command in your executable shortcut settings if a game runs at a really high framerate:

::: tabs

== Vulkan
```bash
MANGOHUD=1 MANGOHUD_CONFIG=no_display,fps_limit=60 DXVK_HUD=1 %command%
```

== OpenGL
```bash
MANGOHUD_CONFIG=no_display,fps_limit=30,vsync=3,gl_vsync=1 mangohud --dlsym %command%
```

:::

20. Import [this registry file](./bottles-configurations/wine_breeze_theme) using the registry editor (under "Tools", in your bottle settings) to change the Windows theme to a more modern one (runners usually come with a similar theme by default)
21. Change runner/DXVK version
22. Install GPU-related dependencies for your operating system to fix some crashes or performance issues.

::: tabs
== Nvidia
```bash
sudo pacman -S --needed nvidia-dkms nvidia-utils lib32-nvidia-utils nvidia-settings vulkan-icd-loader lib32-vulkan-icd-loader cuda opencl-nvidia lib32-opencl-nvidia
```

== AMD
```bash
sudo pacman -S --needed mesa lib32-mesa vulkan-radeon lib32-vulkan-radeon vulkan-icd-loader lib32-vulkan-icd-loader
```
:::

23. Add `WINEDEBUG=+wgl %command% &> wine.log` as a launch command in your executable shortcut settings (it will create a log file at the executable location)
24. Install `quartz` through Bottles or Winetricks
25. Override `wined3d.dll` to "Native, Builtin"
26. Install `xact` through Bottles or Winetricks
27. Copy `ms-pgothic.ttf` from the patch directory to `Windows/Fonts`
28. Disable `winegstreamer.dll`, `ir50_32.dll` and `wmvcore.dll`
29. Install `lib32-gst-plugins-base`, `lib32-gstreamer` and `gst-plugin-good` through your package manager.

## Workarounds

1. Press Alt+F4 during the movie playblack and keep the focus on the small confirmation window to avoid flickering
2. Back up the content of the `SAVEDATA` directory, delete its content, run the game and restore the files once the main menu appear to avoid a black screen when starting the game
3. When the screen turns black after accessing the game top menu, refresh the screen by hovering in-game menu items
4. If you want to use DXVK, create a bottle using the "Gaming" preset (Wine 5.5), immediately change the Wine version to 8.21 after its creation and install `lavfilters741` and `quartz` dependencies
5. Run the game by changing the desktop resolution during gameplay only:

::: tabs
== Nvidia (Xorg)
```bash
nvidia-settings --assign=CurrentMetaMode="800x600" && bottles-cli run -p game -b 'example' && nvidia-settings --assign=CurrentMetaMode="1920x1080"
```

:::

6. On GNOME, toggle fullscreen mode with a keyboard shortcut (you have to configure it in the GNOME setting) if the game doesn't start in fullscreen
7. Extract audio files from the audio CD, rename and move them into the game directory
8. Use a 32-bit prefix
9. If you get a "Some files didn't install properly" error message when running a game executable, don't put special characters in its installation path
10. After updating Bottles, Bottles "Virtual desktop" settings can conflict with program launch options so you'll have to edit your `bottle.yml` to fix that
11. Revert to the `sdl` package from `sdl12-compat` using your package manager
12. Use an old version of Lutris (like 0.5.9.1) instead
13. Run `touch DPLogViewer.ade` and `touch DPSACT2.ade` from a terminal inside the game directory to avoid slow menu transition while in-game (seems [common for AliceSoft games](https://haniwa.technology/sengoku-wine.html))
14. Use [lavfilters](./bottles-configurations/lavfilters.yml)/[lavfilters-j](./bottles-configurations/lavfilters-j.yml) then switch to [lavfilters-new](./bottles-configurations/lavfilters-new.yml)/[lavfilters-j-new](./bottles-configurations/lavfilters-j-new.yml) if you encounter any issues
15. Rename main executable extension from `.EXE` to `.exe`
16. Backup your saves regularly.
17. Edit "GAMEEXE.INI" and remove `#KOEREPLAYICON.NAME = "koeicon"` if you're using version 1.2 of the patch to avoid getting an error at the start.
18. Disable "Allow the window manager to decorate the windows" and "Allow the window manager to control the windows" in "winecfg" ("Legacy Wine Tools > Configuration"), run the game then reenable these options. It should avoid showing the GNOME bar while allowing for window manipulation.
19. Import [this file](./bottles-configurations/io_r2) through the registry editor once the bottle is created (you might have to change the installation path or rename the directory).
20. Do not change from windowed to fullscreen mode on the main menu (it will crash the game)
21. Change in-game fullscreen mode but don't select the "Hardware interpolation" option as it can crash the game after the opening movie

## Notes

1. Movies don't play
2. Game starts in windowed mode and can crash while going into fullscreen mode or switching windows (restarting the game and trying again should work)
3. No sound during opening playback

## Game-specific information

* "Kanon" was tested with the "Ultimate Voice Patch" 3.0 and the optional 18+ patch applied.
* "One" was tested with [English patch 1.5](https://web.archive.org/web/20140911031019/http://akane.is.moelicious.be/down.htm) (the ["Eternal patch"](https://vndb.org/r75159) needs Mono/.NET to run).
* "AIR" was tested with [Gao Gao Translations' English patch](https://gaogaotranslation.wordpress.com/) 1.0 and 1.2.

## Suggested Wine versions

If you don't know which Wine/Proton version might be the best for a particular game, try these ones:

* [Caffe 7.7](https://github.com/bottlesdevs/wine/releases/tag/caffe-7.7)
* [GE-Proton7-55](https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton7-55)
* [GE-Proton8-6](https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton8-6)
* [GE-Proton9-5](https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton9-5)
* [GE-Proton9-7](https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton9-7)
* [GE-Proton9-9](https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton9-9)
* [GE-Proton9-10](https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton9-10)
* [GE-Proton9-13](https://github.com/GloriousEggroll/proton-ge-custom/releases/tag/GE-Proton9-13)
* [Kron4ek Wine 8.15](https://github.com/Kron4ek/Wine-Builds/releases/tag/8.15)
* [Kron4ek Wine 8.21](https://github.com/Kron4ek/Wine-Builds/releases/tag/8.21)
* [Kron4ek Wine 10.0](https://github.com/Kron4ek/Wine-Builds/releases/tag/10.0)
* [Lutris Wine 6.14-4](https://github.com/lutris/wine/releases/tag/lutris-6.14-4)
* [Lutris Wine 7.2](https://github.com/lutris/wine/releases/tag/lutris-wine-7.2)
* [Proton 5.13-6](https://github.com/ValveSoftware/Proton/releases/tag/proton-5.13-6)
* [UMU-Proton 9.0-2](https://github.com/Open-Wine-Components/umu-proton/releases/tag/UMU-Proton-9.0-2)
* [Wine 5.0](https://gitlab.winehq.org/wine/wine/-/releases/wine-5.0)
* [Wine 5.5](https://gitlab.winehq.org/wine/wine/-/releases/wine-5.5)
* [Wine 5.10](https://gitlab.winehq.org/wine/wine/-/releases/wine-5.10)
* [Wine 6.0.1](https://gitlab.winehq.org/wine/wine/-/releases/wine-6.0.1)
* [Wine 6.3](https://gitlab.winehq.org/wine/wine/-/releases/wine-6.3)
* [Wine 6.21](https://gitlab.winehq.org/wine/wine/-/releases/wine-6.21)
* [Wine 7.1](https://gitlab.winehq.org/wine/wine/-/releases/wine-7.1)
* [Wine 7.2](https://gitlab.winehq.org/wine/wine/-/releases/wine-7.2)
* [Wine 9.14](https://gitlab.winehq.org/wine/wine/-/releases/wine-9.14)
* [Wine 9.18](https://gitlab.winehq.org/wine/wine/-/releases/wine-9.18)
* [Wine 10.0](https://gitlab.winehq.org/wine/wine/-/releases/wine-10.0)
* [Wine-GE-Proton7-43](https://github.com/GloriousEggroll/wine-ge-custom/releases/tag/GE-Proton7-43)
* [Wine-GE-Proton8-5](https://github.com/GloriousEggroll/wine-ge-custom/releases/tag/GE-Proton8-5)
* [Wine-GE-Proton8-13](https://github.com/GloriousEggroll/wine-ge-custom/releases/tag/GE-Proton8-13)

## Suggested dependencies

If you don't know which dependencies might be needed for a particular game, try these ones:

* [d3dx9](https://github.com/bottlesdevs/dependencies/blob/main/Essentials/d3dx9.yml)
* [dirac](https://github.com/bottlesdevs/dependencies/blob/main/Essentials/dirac.yml)
* [dotnet35](https://github.com/bottlesdevs/dependencies/blob/main/Essentials/dotnet35.yml)
* [dotnet40](https://github.com/bottlesdevs/dependencies/blob/main/Essentials/dotnet40.yml)
* [ffdshow](https://github.com/bottlesdevs/dependencies/blob/main/Essentials/ffdshow.yml)
* [lavfilters741](https://github.com/bottlesdevs/dependencies/blob/main/Essentials/lavfilters741.yml)
* [vcredist2005](https://github.com/bottlesdevs/dependencies/blob/main/Essentials/vcredist2005.yml)
* [vcredist2008](https://github.com/bottlesdevs/dependencies/blob/main/Essentials/vcredist2008.yml)

## Suggested packages

Lutris documentation [about drivers](https://github.com/lutris/docs/blob/master/InstallingDrivers.md), [Wine dependencies](https://github.com/lutris/docs/blob/master/WineDependencies.md#archendeavourosmanjaroother-arch-derivatives) and [GloriousEggroll's Blog](https://www.gloriouseggroll.tv/how-to-get-out-of-wine-dependency-hell/).

* alsa-lib
* alsa-plugins
* alsa-utils
* cups
* dosbox
* ffmpeg
* giflib
* gnutls
* gst-devtools-libs
* gst-editing-services
* gst-libavgst-plugins-ugly
* gst-plugin-good
* gst-plugin-gtk
* gst-plugin-pipewire
* gst-plugins-bad
* gst-plugins-bad-libs
* gst-plugins-base
* gst-plugins-base-libs
* gst-plugins-good
* gst-python
* gstreamer
* gtk3
* lib32-alsa-lib
* lib32-alsa-plugins
* lib32-giflib
* lib32-gnutls
* lib32-gst-plugins-base
* lib32-gst-plugins-base-libs
* lib32-gst-plugins-good
* lib32-gstreamer
* lib32-gtk3
* lib32-libgcrypt
* lib32-libgpg-error
* lib32-libjpeg-turbo
* lib32-libldap
* lib32-libpng
* lib32-libpulse
* lib32-libva
* lib32-libxcomposite
* lib32-libxinerama
* lib32-libxslt
* lib32-mpg123
* lib32-ncurses
* lib32-openal
* lib32-opencl-icd-loader
* lib32-sqlite
* lib32-v4l-utils
* lib32-vulkan-icd-loader
* libgcrypt
* libgpg-error
* libjpeg-turbo
* libldap
* libpng
* libpulse
* libva
* libxcomposite
* libxinerama
* libxslt
* mpg123
* ncurses
* openal
* opencl-icd-loader
* pulseaudio
* samba
* sqlite
* v4l-utils
* vulkan-icd-loader
* wine-staging
* winetricks

<style scoped>

.note-highlight-a {
  background-color: rgba(255, 215, 0, 0.3); /* soft gold */
}

.note-highlight-b {
  background-color: rgba(135, 206, 250, 0.3); /* light sky blue */
}

.note-highlight-c {
  background-color: rgba(144, 238, 144, 0.3); /* light green */
}

  </style>