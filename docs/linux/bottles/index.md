---
title : 'Bottles'
---

# Bottles

[Bottles](https://usebottles.com) is free and open source software that uses environments to help you easily manage and run Windows apps on Linux. It's a front-end for Wine to manage Windows environments, called "prefixes" or "bottles", and their dependencies. It also supports [configuration backup](https://docs.usebottles.com/bottles/backups) to easily replicate a Windows environment.

## Installation

If you're on an Arch-based distribution, you can install Bottles from the AUR (this version isn't officially supported by the Bottles developers).

- `yay -S bottles`
- `yay -S bottles-git`

For other distributions, install the Flatpak version with `flatpak install flathub com.usebottles.bottles`.

Wine and its dependencies are recommended as they can help to run some games. On Arch Linux, run `pacman -S wine-staging`. On other distributions, follow the [official instructions](https://gitlab.winehq.org/wine/wine/-/wikis/Download).

## Usage

### First run

Once installed, you should [set up components and create your first bottle](https://docs.usebottles.com/getting-started/first-run). For components, "Caffe 7.7" is recommended as the default runner and "DXVK 2.1" as the default DXVK version. Also, if you installed Wine from your package manager, it will be available as a "system" runner during the bottle creation.

### Importing a custom configuration

Go into the [Bottles menu](https://docs.usebottles.com/bottles/import-from-other-managers) and choose "Import". From there, you can click on the "Configuration" option and choose your YAML configuration file. Once the import has started, cancel the Wine Mono installation, go through installers when prompted and wait for the import to finish. Then, go back to the main menu and go into your bottle. From there, you can change its settings.

Also, don't import a configuration file from the bottle creation menu. It's [broken for now](https://github.com/bottlesdevs/Bottles/issues/2374) as it doesn't keep some metadata (like bottle name, environment variables or selected runner). Only its dependencies seem to be imported.

### Installing games

Once you created your bottle manually or imported a configuration, you can add files to its directory.

For archived games, unzip them into "Program Files", under the "drive_c" directory. Now, go back into your bottle settings, [add a custom program shortcut](https://docs.usebottles.com/bottles/programs#add-sustom-programs) and [add a desktop entry](https://docs.usebottles.com/bottles/programs#add-programs-to-your-desktop). You can also rename the shortcut before doing that.

For games coming with an installer, just copy the executable inside your bottle path and [run it](https://docs.usebottles.com/bottles/run-.exe-.msi-.bat-.lnk-files). For ISO files, you can extract their contents or just run the executable.

If you need to install dependencies, note that [Bottles doesn't use Winetricks](https://docs.usebottles.com/faq/where-is-winetricks). Some of them are missing compared to Winetricks but you can still install them manually or use a [special codec script](https://www.visualnovelwiki.org/en/linux/special-codec#Bottles)

Also, some games might need a special configuration. You can check out [AppDB](https://appdb.winehq.org/) or [ProtonDB](https://www.protondb.com/) and read feedbacks from users. To avoid conflicts between game configurations, you should create one bottle per game.

### Gamescope support

Install [Gamescope](https://repology.org/project/gamescope/versions), go into your bottle settings, enable "Gamescope" option in the "Display" section and configure it. Nvidia users will have to [enable Direct Rendering Manager kernel mode setting](https://wiki.archlinux.org/title/NVIDIA#DRM_kernel_mode_setting) to use it.

### MangoHud support

Install [MangoHud](https://github.com/flightlessmango/MangoHud#installation---pre-packaged-binaries), go into your bottle settings and enable "Monitor Performance" option in the "Performance section".
