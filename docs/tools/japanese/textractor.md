---
title : 'Textractor'
---

# Textractor

[Textractor](https://github.com/Artikash/Textractor) (a.k.a. NextHooker) is an open-source x86/x64 video game text hooker for Windows 7+ (and Wine) based off of ITHVNR.

::: tip
Extracts out text from visual novel, so you can use it with Yomitan (a browser extension), and pair with Anki to memorise those words!
:::

## Download

1. Download the zip version from github: https://github.com/Artikash/Textractor/releases/tag/v5.2.0
2. Unzip it in some location.
3. Update the dll from the alpha version for better compatibility: https://github.com/Artikash/Textractor/issues/868#issuecomment-1249146885
4. Alternatively, you can use Chenx221 fork instead of replacing dlls from alpha version: https://github.com/Chenx221/Textractor/releases It should have most if not all of alpha builds merged already.

## Linux 

Texthooking in Linux through wine is possible, it requires to run the texthooker software in the same wine prefix that the game.

### Lutris

1. Once you have your game running in Lutris the simplest way to run it is to right click the Lutris entry and click `Duplicate`
2. Change the name to identify it better.
3. Open the entry go to `Game Options` in Executable change to the textractor .exe ej: /home/user/Downloads/Textractor/x86/Textractor.exe
4. Run both the game and textractor, when clicking attach the game should appear normally.
5. If using clipboard For Firefox [this extension](https://addons.mozilla.org/en-US/firefox/addon/lap-clipboard-inserter/) still works, can use together with this [texthooker page](https://anacreondjt.gitlab.io/docs/texthooker/). But Manifest V2 extensions in some browsers like Chrome and Edge do no longer work, so using Websocket is recommended.

#### Websocket
Optional, but recommended:
1. Install the [websocket extension](https://github.com/kuroahna/textractor_websocket/releases/tag/0.2.0) in Textractor. copy the dll to both x64 and x86 textractor folders respectively.
2. Open textractor extension menu and drag the .dll file to add it, remove copy to clipboard extension too.
3. The text will be available in `ws://localhost:6677`. You will need a client to listen to it, this webpage is ready for it https://renji-xd.github.io/texthooker-ui/

Here is the original guide at TheMoeWay for Windows, but the steps are about the same https://learnjapanese.moe/vn/#playing-visual-novels-to-learn-japanese

> [!warning] Architecture
> The architecture x86 or x64 depends on what the game is running. When you try to attach it will either give an error message or crash if using wrong architecture.  
>
> It has no relation whatsoever with the wineprefix architecture. You can still hook 32 bit games in a 64 bit prefix.

> [!warning] Proton
> You have to use **Wine runners**, can't use proton with umu-launcher to texthook since they have extra containerized layer that blocks textractor from seeing other applications.
>
> As a workaround you can use [protonhax](https://github.com/Will40/protonhax/), it's extremely hacky though (you probably want to make a new Lutris entry with linux runner and run protonhax command)

> [!info] Gamescope
> If you wish to run the game with gamescope you will also need to run Textractor with gamescope, the steps are the same just enable gamescope in the new lutris entry for textractor, both should be run in fullscreen to avoid weird behaviour.
>
> Need to use Wayland and Wayland backend with gamescope (should be default already)
>
> For now you will need to use Websocket to transfer the text to other programs, forwarding clipboard to the host was released [very recently](https://github.com/ValveSoftware/gamescope/pull/1685) (tested with 3.16.3), but pasting text into Firefox still crashes gamescope seems like, at least until [this issue is merged and released](https://github.com/ValveSoftware/gamescope/issues/1816).
