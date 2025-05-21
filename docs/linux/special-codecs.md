---
title : 'Special Codecs'
---

# Special Codecs

Special thanks to @fission for writing this modular script. This is an alternative way to installing individual codecs in our wineprefixes when we need them.\
When you see special: (codec) on the Visual Novel compatibility page, then you’re currently on the right page to check how to make that special wineprefix.

> [!info] Info
> At the moment, these are the currently supported special codecs:
> wmp11, lavfilters, xaudio29, quartz2, mf, mciqtz32, quartz_dx

Using the script is simple, and it isn’t any different to how we did things in with the Wineprefixes in Lutris.\
This assumes you already made a Wineprefix folder and already set it to a random game entry you want to get working. Name the Wineprefix whatever you want, like wmp11 if it has only wmp11 inside of it.\
If you don’t know how to generally make a wineprefix, please click [here](/linux/wineprefixes)

To start, download the zip wherever you want (normally Downloads folder) from [this Github repo](https://github.com/b-fission/vn_winestuff/).

## Lutris

1. Click the🍷Wine Bottle, and click **Bash Terminal**.
2. Enter this command so we’re in the script folder.

> [!info] Info
> You can also right click a folder and select Copy Location, which will give you the right path for the cd command.

```
cd <path-to-the-script-folder-you-just-extracted>
# could be like this if in Downloads folder: cd ~/Downloads/vn_winestuff
```

3. Finally, enter in any of the combinations of codecs depending on what you need!

```
sh codec.sh <write-your-codecs-here-with-spaces-between-other-codecs>
```

## Bottles

1. Open the Terminal where the script files are, or manually do it:

```
cd <path-to-the-script-folder-you-just-extracted>
# could be like this if in Downloads folder: cd ~/Downloads/vn_winestuff
```

2. Generate a standalone script for your bottle, like explained [here](https://docs.usebottles.com/advanced/cli)

```
bottles-cli standalone -b BOTTLE
```

3. Move the generated standalone script inside to the script folder (drag and drop, or whatever you prefer)
4. Run the script using this command:

```
./standalone ./codec.sh wmp11 quartz2
```

## Steam

1. Install and open [protontricks](https://github.com/Matoking/protontricks). On the Steam Deck it can be found in the Discover store
2. Select your game. \
    For non-steam games you will see the name of the .exe and a random id: WA2.exe: 2648131855
3. Select the default wineprefix
4. Run a commandline shell (for debugging)
5. Run the codec normally. example: 

```
sh /home/deck/Downloads/vn_winestuff-main/codec.sh wmp11 quartz2
```

## Codec Install Examples

1. Installing the codecs for wmp + quartz2 (leyline series, various kirikiri VNs)

```
sh codec.sh wmp11 quartz2
```

2. Installing the codecs for Full Metal Daemon: Muramasa (jast)

```
sh codec.sh mf xaudio29
```

3. Installing mf + quartz2 + lavfilters (artemis engine VNs like SakuToki and MWA:Badge&Dagger)

```
sh codec.sh mf quartz2 lavfilters
```

4. Installing mciqtz32 (rail-soft / liar-soft games)

```
sh codec.sh mciqtz32
```


# Thank you

<script setup> 
import { VPTeamMembers } from 'vitepress/theme'

const developers = [{
  avatar: "https://avatars.githubusercontent.com/u/131207849?v=4",
  name: "b-fission",
  title: "Developer",
  links: [
    { icon: "github", link: "https://github.com/b-fission" }
  ]
},]

</script>

<VPTeamMembers size="small" :members="developers" />