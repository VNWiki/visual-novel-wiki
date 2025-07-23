---
title: 'JP Locale'
---

# Japanese Locale (JP Locale)

Setting up Japanese locale is recommended for running visual novels and other Japanese software on your computer.

[Steam Deck user? Click here to jump to the Steam Deck section.](#steam-deck-setup)

## Why Japanese Locale is Required

::: info Background
Most visual novels are developed in Japan using Japanese character encoding (Shift-JIS or EUC-JP). Without proper locale settings, your system may:
- Display garbled text
- Crash during gameplay
- Fail to install properly
- Be unable to read Japanese filenames
:::

::: tip Cost-Effective Translation Approach
Many official English translations still require JP locale because it's more cost-efficient to:
- Keep the original Japanese encoding
- Include tools like Locale Emulator
- Avoid expensive re-programming work
:::

## Windows Setup

### Method 1: System-Wide Locale (Recommended)

::: warning Important
This is the most reliable method for Japanese games.
:::

1. **Change System Locale**

   ::: tabs

   == Windows 10/11
   1. Open **Control Panel**  
   2. Click **Region**  
   3. Go to the **Administrative** tab  
   4. Click **Change System Locale...**  
   5. Select **Japanese (Japan)** from the dropdown  
   6. Restart your computer

   == Windows 8
   1. Open **Control Panel**  
   2. Click **Clock, Language and Region → Region**  
   3. Go to the **Administrative** tab  
   4. Click **Change System Locale...**  
   5. Select **Japanese (Japan)** from the dropdown  
   6. Restart your computer

   == Windows 7
   1. Open **Control Panel**  
   2. Click **Clock, Language and Region**  
   3. Go to the **Administrative** tab  
   4. Under **Language for non-Unicode programs**, click **Change System Locale...**  
   5. Select **Japanese (Japan)** from the dropdown  
   6. Click **OK** and restart when prompted

   == Windows XP
   1. Open **Control Panel** (have your Windows CD ready)  
   2. Click **Regional and Language Options**  
   3. Go to the **Advanced** tab  
   4. Under **Language for non-Unicode programs**, select **Japanese**  
   5. Click **OK** and follow any installation prompts  
   6. Restart your computer

   :::


2. **Optional: Japanese Language Pack**
   - Open **Settings** → **Time & Language** → **Language**
   - Click **Add a language**
   - Select **日本語 (Japanese)**
   - Check only **Language Pack** (uncheck Text-to-speech, Speech Recognition, Handwriting)
   - Click **Install**

### Method 2: Locale Emulator

::: tip Alternative Solution
Use [Locale Emulator](https://xupefei.github.io/Locale-Emulator/) if you can't change system locale.
Note: May not work with all applications.
:::

## Linux Setup

> [!NOTE]
> [For Steam Deck, see section after Linux.](#steam-deck-setup)

To run Japanese software correctly, your system needs to support Japanese characters — including filenames, UI, and input. Most systems **do not require a full system-wide Japanese locale**, but you should ensure the following:

- Japanese locale (`ja_JP.UTF-8`) is **generated** and available
- Japanese fonts are installed
- Flatpak apps are configured to include Japanese language support
- Optional: Japanese input method (IM) if needed

::: danger Common Issues Without JP Locale
Without Japanese locale support, you may experience:
- Game crashes (especially older or Wine-based titles)
- Garbled or unreadable text
- Inability to delete files with Japanese names
- Compatibility issues with Steam or Lutris
:::

> [!IMPORTANT]
> Flatpak and containerized apps (like Lutris, Steam, or Bottles) usually do **not automatically inherit** your system locale.
>
> You must manually enable language support by setting:
> ```bash
> flatpak config --user --set languages 'en;ja'
> flatpak update
> ```
>
> This ensures Japanese fonts and locale files are available inside the container. Without this, games may crash or show garbled text.




:::tabs
== Arch Linux and similar
On Arch Linux and its derivatives, you'll uncomment the Japanese locale in the configuration file and then generate it.

```bash{7-13}
# Optional: Ensure glibc (which provides locale tools) is up-to-date
# and package signing keys are initialized.
# sudo pacman-key --init
# sudo pacman-key --populate archlinux
# sudo pacman -S glibc

# 1. Uncomment the ja_JP.UTF-8 line in the locale generation file
# This tells the system you want this locale to be available.
sudo sed -i 's/^#[[:blank:]]*\(ja_JP.UTF-8[[:blank:]]*UTF-8\)/\1/' /etc/locale.gen

# 2. Generate the locales
# This creates the necessary locale archive files.
sudo locale-gen
```

== Fedora
Fedora and related distributions (like RHEL, CentOS Stream) typically use language packs. Installing the Japanese language pack is usually sufficient.

```bash
# 1. Install the Japanese language pack
sudo dnf install glibc-langpack-ja
```
*In most cases, this is all you need. If, after this, the locale isn't available (see "Verifying Locale Availability" below), you might need to ensure `glibc-common` is installed and manually generate the locale:*
```bash
# sudo dnf install glibc-common # If locale-gen or /etc/locale.gen is missing
# sudo sed -i 's/^#[[:blank:]]*\(ja_JP.UTF-8[[:blank:]]*UTF-8\)/\1/' /etc/locale.gen
# sudo locale-gen
```

== Debian, Ubuntu, Linux Mint
For Debian, Ubuntu, Linux Mint, and other derivatives, you first ensure the `locales` package is installed, then uncomment `ja_JP.UTF-8` in `/etc/locale.gen`, and finally run `locale-gen`.

```bash
# 1. Ensure the 'locales' package is installed
sudo apt update
sudo apt install locales -y

# 2. Uncomment the ja_JP.UTF-8 line in the locale generation file
sudo sed -i 's/^#[[:blank:]]*\(ja_JP.UTF-8[[:blank:]]*UTF-8\)/\1/' /etc/locale.gen

# 3. Generate the locales
sudo locale-gen
```
**Alternative: `dpkg-reconfigure locales`**

You can also use `sudo dpkg-reconfigure locales`. This opens a text-based interface:
1. Scroll through the list and find `ja_JP.UTF-8 UTF-8`. Select it by pressing `Spacebar`.
2. **Crucially, ensure your current system locale (e.g., `en_US.UTF-8`) also remains selected.**
3. Press `Tab` to highlight `<Ok>` and press `Enter`.
4. On the next screen, you'll be asked to choose the **default locale for the system environment**. **Select your current system locale (e.g., `en_US.UTF-8`), NOT `ja_JP.UTF-8`**, to avoid changing your system's main language.
5. Press `Tab` to highlight `<Ok>` and press `Enter`.

This method achieves the same outcome of making `ja_JP.UTF-8` available.
:::

### Verifying Locale Availability

After running the commands for your distribution, you can verify that the Japanese locale is now available on your system:
```bash
locale -a | grep ja_JP.UTF-8
```
This command should output `ja_JP.UTF-8` (or `ja_jp.utf8`) if it has been successfully generated and is available.


> [!IMPORTANT]
> You do not need to switch your whole system to Japanese; just ensure the locale is available and properly configured. These commands achieve that by making `ja_JP.UTF-8` available for applications to use.


## Steam Deck Setup

> [!IMPORTANT] SteamOS 3.5+ Update
> Recent SteamOS versions include system-wide Japanese locale by default.
>
> **For Lutris/Flatpak apps:** Still need to enable manually for software-level Japanese locale.
> *   **Skip** "Legacy OS-Level Setup" below.
> *   **Go to** [Lutris Configuration](#lutris-configuration) for Flatpak commands.

::: details Legacy Setup (Pre-Steam OS 3.5)

Steam Deck used to require special handling due to its read-only filesystem:

### Manual Setup

```bash
sudo steamos-readonly disable
sudo pacman-key --init
sudo pacman-key --populate archlinux
sudo pacman -S glibc
sudo sed -i 's/^#[[:blank:]]*\(ja_JP.UTF-8[[:blank:]]*UTF-8\)/\1/' /etc/locale.gen
sudo locale-gen

# Re-enable read-only mode (recommended)
sudo steamos-readonly enable
```

### Automated Script Option

::: details Alternative: Automation Script
For Steam Deck users who prefer automation or need to restore settings after system updates:

1. Download [XargonWan's script](https://gist.github.com/XargonWan/cc660daf92c224b7241cbf5a2bf12c47)
2. Place in desired folder
3. Run in terminal:
   ```bash
   sh ./japanese_locale_enabler.sh
   ```

This script performs the same steps as the manual setup above.
:::

### Lutris Configuration

Run these commands in the **Konsole** (Terminal application).

```bash
flatpak config --system --set languages 'en;ja'
flatpak config --user --set languages 'en;ja'
flatpak update
```

**Result:** A new "Locale" dropdown will appear in Lutris game configurations.

### Per-Game Configuration

1. In Lutris, **right-click your visual novel** and select **Configure**
2. Go to **System Options** tab
3. Set **Locale** to `ja_JP.utf8`

::: info Why This Extra Step?
Lutris (especially Flatpak versions) runs in a sandboxed environment and doesn't inherit system locales by default. Flatpak only includes explicitly configured languages to keep download sizes manageable.
:::

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Garbled text in game | Enable system-wide JP locale |
| Can't delete JP files | Install system JP locale |
| Game won't start | Try Locale Emulator (Windows) |
| Lutris no locale option | Run flatpak commands above |
| Steam Deck issues | Use automation script |

## Summary

1. **Windows Users:** Change system locale or use Locale Emulator
2. **Linux Users:** Enable JP locale via terminal commands
3. **Lutris Users:** Configure flatpak languages and set per-game locale
4. **Steam Deck Users:** Out of the box enabled (3.5+) or enable manually or with script

::: tip Success Check
After setup, you should be able to:
- Run Japanese visual novels without crashes
- See proper Japanese text rendering
- Handle files with Japanese names
- Use Lutris locale dropdown (Linux)
:::
