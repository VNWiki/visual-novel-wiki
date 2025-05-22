---
title: 'Linux'
---

# Linux & Steam Deck

## Getting Started

> [!IMPORTANT]
> To run most Visual Novels on Linux, complete these essential steps:

1. **Install [Lutris](lutris#steam-deck)** (recommended) - Frontend launcher (like Steam)
2. **Create and configure a [wineprefix](wineprefixes#creating-wineprefixes)** - Wine environment
3. **Enable** [Japanese Locale](../all-platforms/jp-locale)
   - System-wide configuration
   - Application-specific (Lutris) configuration

After completing these steps, you should be able to run most visual novels.

> [!NOTE]
> Some VNs have specific requirements or quirks. Check the [Visual Novel Compatibility List](../visual-novel-compatibility-list) to verify compatibility before installation.

## Tools & Guides

### Core Tools
| Tool | Description | Use Case |
|------|-------------|----------|
| [Lutris](lutris) | Game launcher and Wine frontend | Primary VN launcher |
| [Bottles](bottles/) | Wine prefix manager | Alternative to Lutris |
| [Wine Prefixes](wineprefixes) | Wine environment setup | Core Wine configuration |

### Wine & Compatibility
| Tool | Description | Use Case |
|------|-------------|----------|
| [Adding Wine Versions](adding-wine-versions) | Wine version management | Custom Wine builds |
| [Wine Environment Manager](wem) | Wine environment control | Advanced Wine setup |
| [Special Codecs](special-codecs) | Codec installation script | VNs requiring specific codecs |
| [ProtonUP](protonup) | Proton version manager | Steam compatibility layer |

### System Integration
| Tool | Description | Use Case |
|------|-------------|----------|
| [Adding Icons on GNOME](adding-icons-on-gnome) | Desktop integration | GNOME desktop shortcuts |
| [Gamescope](gamescope) | Gaming compositor | Display/window management |
| [CDEmu](cdemu) | CD/DVD emulation | Legacy VNs requiring disc images |

### Specialized Tools
| Tool | Description | Use Case |
|------|-------------|----------|
| [RLVM](rlvm) | RealLive engine interpreter | Native RealLive VN support |
| [UMU Launcher](umu-launcher) | Universal game launcher | Alternative launcher solution |

### Compatibility Resources
- [Bottles Compatibility List](bottles/bottles-compatibility-list) - VN compatibility with Bottles
- [Visual Novel Compatibility List](../visual-novel-compatibility-list) - General VN compatibility database