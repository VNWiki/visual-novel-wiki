---
title: 'Adding Wine Versions'
---

# Adding Wine Versions

Wine is open-source software that translates Windows code to Linux-readable code, allowing you to run Windows applications on Linux (or Mac via CrossOver). Because it's open-source, there are many different "flavors" or forks of Wine, each with their own versions and optimizations.

## Wine Flavors Overview

| Wine Flavor | Developer | Description | Best For |
|-------------|-----------|-------------|----------|
| **Vanilla Wine** | WineHQ Team | Original Wine source code | General Windows applications |
| **Proton** | Valve | Valve's gaming-focused Wine fork | Steam games (official) |
| **Proton GE** | GloriousEggroll | Community Proton with extra codecs/fixes | Games requiring additional codecs |

### Which Wine Flavor to Use?

> [!TIP]
> For Visual Novels, we primarily recommend:
> - **Proton GE** - Most compatible with VNs due to included codecs and patches
> - **Lutris Wine** - Alternative option with VN-specific optimizations

**Why Proton GE?**
- Includes Windows codecs that Valve can't legally distribute
- Community-maintained with gaming-specific fixes
- Better compatibility with multimedia content in VNs

## Installation Methods

### Method 1: ProtonUP-QT (Recommended)

> [!IMPORTANT]
> [ProtonUP-QT](protonup) is the easiest way to manage Wine versions across different launchers.

**Installation:**
1. **Install via Flatpak** (platform-agnostic)
   - Visit [Flathub - ProtonUP-QT](https://flathub.org/apps/details/net.davidotek.pupgui2)
   - Or run: `flatpak install flathub net.davidotek.pupgui2`

**Usage:**
1. **Launch ProtonUP-QT**
2. **Select target program** (Steam, Lutris, Bottles, etc.)
3. **Click "Add Version"**
4. **Choose Wine flavor and version** from the dropdown
5. **Click "Install"**

> [!NOTE]
> ProtonUP-QT works with Steam, Lutris, Bottles, and other Wine frontends.

### Method 2: Manual Installation

**Kron4ek Builds:**
- Download from [Github releases](https://github.com/Kron4ek/Wine-Builds/releases)
- Extract to appropriate directory based on your launcher
- Has a lot of useful Wine builds precompiled

**Proton GE:**
- Download from [GitHub releases](https://github.com/GloriousEggroll/proton-ge-custom/releases)
- Extract to appropriate directory based on your launcher

**Vanilla Wine:**
- Download from [WineHQ](https://wiki.winehq.org/Download)
- Follow distribution-specific installation instructions


## Launcher-Specific Setup

### Steam
- Wine versions appear in: **Steam Settings > Compatibility > Run other titles**
- Select installed Proton version per-game

### Lutris
- Wine versions appear in: **Preferences > Runners > Wine**
- Select version when creating new game configurations
- Runners are located at: `~/.local/share/lutris/runners/` or `~/.var/app/net.lutris.Lutris/data/lutris/runners/`

### Bottles
- Wine versions appear in bottle creation/settings
- Can switch versions per-bottle

## Troubleshooting

**Common Issues:**
- **Version not appearing**: Restart your launcher after installation
- **Installation fails**: Check available disk space and permissions
- **Game won't launch**: Try different Wine versions (newer isn't always better)

**Wine Version Selection Tips:**
- Start with latest Proton GE for new VNs
- Use older versions for legacy VNs if newer ones cause issues
- Check VN compatibility lists for recommended versions
