---
title : 'Visual Novel Compatibility List'
---


# Visual Novel Compatibility List


| Symbol | Meaning                   |
|--------|---------------------------|
| ✅     | Verified to work           |
| ⚠️     | Playable, with some issues |
| ❓     | Unknown                    |
| ❌     | Broken                     |
| N/A    | Not applicable            |


::: tip
Clicking on a VN with a Note, highlights the note(s) in the section below.
:::

<script setup>
import DataTable from '@components/DataTable.vue'
import ExpandableDataTable from '@components/ExpandableDataTable.vue'


const vnColumns = [
  { field: 'visual novel', header: 'Visual Novel', sortable: true },
  { field: 'windows', header: 'Windows', sortable: true },
  { field: 'mac', header: 'Mac', sortable: true },
  { field: 'linux', header: 'Linux', sortable: true },
  { field: 'steam deck', header: 'Steam Deck', sortable: true },
  { field: 'wineprefix', header: 'Wineprefix', sortable: true, isCode: true},
  { field: 'notes', header: 'Notes' },
  { field: 'game engine', header: 'Game engine', sortable: true },
  { field: 'wine version', header: 'Wine version', isCode: true }
]

function highlightNotes(noteReference) {
  // Remove all previous highlights
  document.querySelectorAll("ol > li.note-highlight").forEach(li => {
    li.classList.remove("note-highlight")
  })

  if (!noteReference) return

  // Parse numbers from the noteReference string (e.g. "1, 3, 5")
  const numbers = noteReference
    .toString()
    .toLowerCase()
    .split(",")
    .map(s => parseInt(s.match(/\d+/)?.[0]))
    .filter(n => !isNaN(n))
    .sort((a,b) => a - b) // sort ascending for efficiency

  if (numbers.length === 0) return

  // Gather all ol elements in document order
  const olElements = Array.from(document.querySelectorAll("ol"))

  // We'll keep track of the global index offset for list items
  let globalIndex = 0
  let currentNumberIndex = 0 // index for numbers array

  for (const ol of olElements) {
    // Calculate the starting index of this ol (default 1)
    const start = parseInt(ol.getAttribute("start") || "1", 10)

    const lis = ol.querySelectorAll("li")
    const olLength = lis.length

    // For each li, the global position is from (globalIndex + (li index + start - 1))
    // But since start defines the starting li number, we can directly map numbers to li indices by offsetting with start.

    // Check if current number(s) fit inside this ol
    while (
      currentNumberIndex < numbers.length &&
      numbers[currentNumberIndex] >= start &&
      numbers[currentNumberIndex] < start + olLength
    ) {
      const liIndex = numbers[currentNumberIndex] - start
      const li = lis[liIndex]
      if (li) li.classList.add("note-highlight")
      currentNumberIndex++
    }

    // Stop early if we've highlighted all requested numbers
    if (currentNumberIndex >= numbers.length) break
  }
}

</script>

<ExpandableDataTable
  jsonPath="vn_list.json"
  :columns="vnColumns"
  sortField="visual novel"
  :sortOrder="1"
/>

<DataTable
  jsonPath="vn_list.json"
  :columns="vnColumns"
  :onHighlight="highlightNotes"
  sortField="visual novel"
  :sortOrder="1"
/>


---

If you are experiencing font issues, be sure to install the Windows Japanese Fonts. Common examples are MS Gothic, Mincho, etc.

## Notes

1. Disable `Esync`
2. Add `WINE_DO_NOT_CREATE_DXGI_DEVICE_MANAGER=1 %command%` in the launch options on Steam
3. Add `GST_PLUGIN_FEATURE_RANK=protonaudioconverterbin:NONE %command%` in the launch options on Steam (fix opening playback)
4. Add `PROTON_USE_WINED3D=1 LANG="ja_JP.UTF-8" %command%` in the launch options on Steam (fix white screen issue during opening playback)
5. Configure Japanese locale
6. Runs a little laggy on Wine 8 but is smoother on Lutris 7.2.2
7. Use the special codec script to install `wmp11`
8. Change Kirikiri settings to use "Layer" in Advanced Settings > Movie Rendering
9. Use `liarsoftengine` prefix or install `mciqtz32` with the special codec script
10. Graphical glitches on default Wine
11. Use `lavfilters` or `ffdshow` prefixes
12. The original japanese release might require deleting some fonts from the Wine prefix as NScripter defaults to a font on its own and there are no options to select one
13. Movies don't play
14. Input lag on some GNU/Linux devices, possible lag when loading an asset
15. Not yet tested
16. Install `xact` with `lavfilters` or `ffdshow`
17. Opening video & audio desync issue can be fixed by limiting the FPS to 30 or running the game with `gamescope --framerate 30 game.exe`
18. Disable DXVK. In steam: PROTON_USE_WINED3D=1 %command%
19. Use `wmp10quartz` or `wmp11quartz` prefix where `wmp11` is installed in the latter through the special codec script
20. Requires special install
21. Override "d3d9.dll" with `n,b` in "Wine Configuration"
22. Movies flicker
23. On the Steam Deck, override the resolution in "Steam Game Properties" to 1920x1080 and limit the framerate to 40 FPS
24. Turn on fullscreen mode and enable compatibility mode in the game settings
25. LÖVE engine required (which has native Windows, macOS and GNU/Linux versions}
26. Set the virtual resolution to 800x600 (fix video cropping)
27. Fullscreen does not work but can be worked around with Gamescope
28. Tested with the "Committee of Zero" patch
29. Read the game-specific guide to see which prefix is needed
30. Use `wmp10quartz` or `wmp11` prefix
31. Font is rendered in low quality on Unix systems
32. Severe frame drops when there're a lot of enemies (Steam Deck)
33. Use `lavfilters` or `wmp10quartz` prefix
34. Use Gamescope or "Game mode" to avoid video flickering
35. Spanish translation works but some characters like “ñ” or letters with accents don't appear
36. Use modified batch script to run the game
37. Override "d2d1.dll" with `n,b` in "Wine Configuration"
38. Make sure patch is up to date
39. Use `wmp10quartz` or `liarsoftengine` prefix
40. Needs a font in the prefix to avoid crash at startup
41. Opening sometimes crashes if not stopped before the end
42. Broken formatting in the textbox on GNU/Linux
43. Interface is in Japanese
44. Install `wmp11` and `quartz_dx` with the special codecs script
45. Install `xact`
46. English fan translation has wordwrapping issues on GNU/Linux but the Japanese one works fine
47. Japanese version requires the `wmp10quartz` prefix (`wmp11quartz` does not work)
48. Install `quartz` manually as the special codecs script does not work here for 32-bit
49. English version should work out of the box on Steam
50. If running the new Unity version in Lutris, make sure to enable DKVX (disable otherwise)
51. The Kirikiri version requires `wmp11quartz_dx` prefix with Lutris 7.2 while the Unity version should work with a Wine GE 8.22 prefix
52. Seems to crash on 32-bit prefixes and some Wine versions
53. need to have the windows scripting host system set up on the prefix (winetricks wsh57).
54. WINEDLLOVERRIDES="jscript=n" being set up otherwise the javascript of srpg studio won't run and it crashes on startup (this may not be needed anymore). 
55. Having certain fonts seem to work but the fakejapanese winetricks package seems to work fine without anything. In case of performance issue delete the content of the font folder of your prefix and try with fewer fonts.
56. Install mf with the special codecs. [Steam thread](https://steamcommunity.com/app/2052410/discussions/0/4034726433726697483/)
57. Run with PULSE_LATENCY_MSEC=120 environment variable if audio crackling
58. Game freezes in auto read scenes in linux; need to read those scenes in windows transfering saves back and forth. Only 1 scene per route has autoread so other than that it works perfectly fine.
59. Install `directshow` and `wmp9`: protontricks/winetricks -q directshow wmp9
60. Some versions like lutris 7.2 and proton-ge 9.9 have audio crackling. 9.13 works fine and plays videos.
61. Can increase font in engine: use [garbro](https://github.com/morkt/GARbro) in Windows, extract init.ini from cfg.pak, make cfg folder, place init.ini into cfg folder, change MsgFontSize

## Game-specific information

* True Remembrance has native GNU/Linux and macOS versions
* Run the Switch version of "Tsukihime -A piece of blue glass moon-" on Ryujinx to avoid sprite lag
* Umineko - When They Cry PS3 version has been ported to Windows, macOS and GNU/Linux thanks to the Umineko Project Team
* Katawa Shoujo has native GNU/Linux and macOS versions
* For Evenicle 1, you must be on the game version 1.04 to do what is described in "Note 24"
* Kara no Shoujo 2 has native GNU/Linux and macOS versions
* The Yu-No edition listed here is the Windows port PC with the optional voice and BGM patch


<style scoped>
.note-highlight {
  padding-left: 0.5em;
  border-radius: 3px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.note-highlight {
  background-color: #fff8dc;      /* soft, warm light yellow */
  border-left: 4px solid #f0c36d; /* gentle golden border */
  color: #4a4a4a;                /* dark gray text for good contrast */
}

.dark .note-highlight {
  background-color: #4a4a2f;     /* richer dark olive */
  border-left: 4px solid #d6b353;
  color: #eee;
}

</style>