---
title = 'Gamescope'
---

# Gamescope

Gamescope is a compositor that allows to upscale games with different upscaling methods, similar to [Magpie](/windows/magpie) on **Windows**, but is exactly the same as [FSR on the Steam Deck](/steam-deck/amd-fsr) (Gamescope is built-in Steam Deck).

This is useful if you are playing VNs with lower resolution than your monitor and want to **make the text and images sharper**.

> [!warning] Warning
> Be advised that it could slightly ruin image fidelity going for very high upscales since upscaling in 2D games is not that good (unless it’s Magpie on Windows…).

## How to get Gamescope

Visit the [Github page](https://github.com/Plagman/gamescope) with building instructions.\
Depending on your distro, you can get it from your repo manager like **AUR** or install it as an optional dependency with Lutris.\
When done, to check if it is install correctly enter `gamescope --help` in console. If text shows, it’s installed properly.

## How to upscale VNs with Gamescope in Lutris

Generally, we’ll run our VNs on [Lutris](/linux/lutris). 
To start, go to Lutris and click on configure on the game/prefix you want to, click on System options and Show advanced options on the bottom.\
You will see three fields for Gamescope:

* **Enable Gamescope** (check this field)
* **Gamescope output resolution** (this is the resolution you want the game to display, generally put your monitor resolution here)
* **Gamescape game resolution** (this is the original resolution of the game you are running)

Make sure **MangoHud** is disabled since it is not compatible with Gamescope yet.\
Start up your game, if everything went correctly you will notice it will open in a different window at fullscreen.\
If not working / displaying correctly, make sure the VN is running in fullscreen in the in-game settings.

## Toggling Gamescope Settings

Now you can toggle the different upscaling methods on the fly with shortcuts. **Try to press Super + U to enable FSR**.
You can exit full screen with **Super + F** and resize the game window as you want. Gamescope will keep the original aspect ratio so you don’t have to worry.
Check out the [Github page](https://github.com/Plagman/gamescope) for the most updated shortcut list.

## Shortcut list

- <kbd>Super</kbd> + <kbd>F</kbd>: toggle fullscreen  
- <kbd>Super</kbd> + <kbd>N</kbd>: toggle nearest neighbour filtering  
- <kbd>Super</kbd> + <kbd>U</kbd>: toggle FSR upscaling  
- <kbd>Super</kbd> + <kbd>Y</kbd>: toggle NIS upscaling  
- <kbd>Super</kbd> + <kbd>I</kbd>: increase FSR sharpness by 1  
- <kbd>Super</kbd> + <kbd>O</kbd>: decrease FSR sharpness by 1  
- <kbd>Super</kbd> + <kbd>S</kbd>: take screenshot  


> [!info] Info
> Currently, screenshots taken are stored in `/tmp/gamescope_$DATE.png`

## Known Issues

### Text Hooking
To texthook a VN you need to launch the texthooker in the same prefix than the VN, this is problematic with gamescope,
for now a workaround is to launch both the VN and the texthooker with gamescope enabled and in fullscreen.
If you are using proton or proton-ge it has process isolation so it can't find the VN process, can use [protonhax](https://github.com/Will40/protonhax/) it has Lutris support but it's quite hacky and not recommended unless needed.

### Video playback

If you have issues running videos with gamescope that run well without it try running it without WSI

```
ENABLE_GAMESCOPE_WSI=0 %command%
```

### GNOME Shortcuts

On the Gnome DE, it can be possible that shortcuts do not work, [check this link](https://github.com/Plagman/gamescope/issues/424#issuecomment-1260049969) for workaround.\
As an alternative, you can disable the gamescope check and enable it as a command in Lutris **System Options**, **Command Prefix**
For example, to upscale from 720p to 1440p with FSR and enable fullscreen: `gamescope -h 720 -H 1440 -U -f`
