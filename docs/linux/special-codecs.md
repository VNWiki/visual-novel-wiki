---
title: 'Special Codecs'
---

# Special Codecs

Special thanks to [@fission](https://github.com/b-fission) for writing this modular script. This provides an alternative way to install individual codecs in wineprefixes when needed.

When you see `special: (codec)` on the Visual Novel compatibility page, use this guide to create the appropriate wineprefix.

## Supported Codecs

| Codec | Description |
|-------|-------------|
| `wmp11` | Windows Media Player 11 |
| `lavfilters` | LAV Filters |
| `xaudio29` | XAudio 2.9 |
| `quartz2` | DirectShow Quartz |
| `mf` | Media Foundation |
| `mciqtz32` | MCI QuickTime |
| `quartz_dx` | DirectShow Quartz DirectX |

## Prerequisites

> [!IMPORTANT]
> Before using this script, ensure you have:
> 1. **Downloaded the script**: Get the zip file from the [GitHub repository](https://github.com/b-fission/vn_winestuff/)
> 2. **Extracted the files** to a folder (typically Downloads)
> 3. **Created a wineprefix** if you haven't already ([guide here](/linux/wineprefixes))

## Installation Methods

### Lutris

1. **Open Wine terminal**
   - Click the 🍷 Wine Bottle
   - Select **Bash Terminal**

2. **Navigate to script folder**
   ```bash
   cd <path-to-script-folder>
   # Example: cd ~/Downloads/vn_winestuff
   ```
   > **Tip**: Right-click folder → "Copy Location" to get the correct path

3. **Install codecs**
   ```bash
   sh codec.sh <codec1> <codec2> <codec3>
   ```

### Bottles

1. **Open terminal in script directory**
   ```bash
   cd <path-to-script-folder>
   # Example: cd ~/Downloads/vn_winestuff
   ```

2. **Generate standalone script**
   ```bash
   bottles-cli standalone -b BOTTLE_NAME
   ```
   See [Bottles CLI documentation](https://docs.usebottles.com/advanced/cli) for details.

3. **Move standalone script** to the codec script folder

4. **Run installation**
   ```bash
   ./standalone ./codec.sh <codec1> <codec2>
   ```

### Steam (Proton)

1. **Install protontricks**
   - Desktop: Install via package manager
   - Steam Deck: Available in Discover store

2. **Select your game** in protontricks
   - Non-Steam games show as: `GameName.exe: RandomID`

3. **Choose default wineprefix**

4. **Run commandline shell** (for debugging)

5. **Install codecs**
   ```bash
   sh /path/to/vn_winestuff/codec.sh <codec1> <codec2>
   ```

## Common Codec Combinations

### Leyline Series + Kirikiri VNs
```bash
sh codec.sh wmp11 quartz2
```

### Full Metal Daemon: Muramasa (JAST)
```bash
sh codec.sh mf xaudio29
```

### Artemis Engine VNs (SakuToki, MWA: Badge&Dagger)
```bash
sh codec.sh mf quartz2 lavfilters
```

### Rail-soft / Liar-soft Games
```bash
sh codec.sh mciqtz32
```

## Troubleshooting

- **Path issues**: Use absolute paths if relative paths don't work
- **Permissions**: Ensure the script has execute permissions (`chmod +x codec.sh`)
- **Multiple codecs**: Separate codec names with spaces, not commas

---

## Credits

<script setup> 
import { VPTeamMembers } from 'vitepress/theme'

const developers = [{
  avatar: "https://avatars.githubusercontent.com/u/131207849?v=4",
  name: "b-fission",
  title: "Developer",
  links: [
    { icon: "github", link: "https://github.com/b-fission" }
  ]
}]
</script>

<VPTeamMembers size="small" :members="developers" />