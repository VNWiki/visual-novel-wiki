---
title : 'Real-Time Upscaler for Linux'
---

# Real-Time Upscaler for Linux

[linux-rt-upscaler](https://github.com/baronsmv/linux-rt-upscaler) is a new desktop upscaling software that uses AI models like CuNNy (Convolutional upscaling Neural Network). Similar to magpie in windows
It is very recent and for now it only works in xwayland application, but looks promising.

The main drawback for now is that mouse events also only properly work in proton 10+. Earlier versions of proton or any version of wine won't correctly forward mouse events to the game. So it makes it very hard to play any VN that requires a wine runner or older proton version.

## Installation

Follow the github installation steps. The application could still have issues running under new python 3.14, if you have issues install it with version 3.13:

```sh
pipx install --python=python3.13 --fetch-missing-python linux-rt-upscaler
```

## Usage

Use `upscale -h` for detailed and up to date usage instructions. 

If you don't use -s parameter it will upscale the currently focused application in 5 seconds. with -s parameter you can choose from the list of xwayland windows running.

You can choose models with -m: `-m, --model {8x32,4x32,4x24,4x16,4x12,3x12,fast,faster,veryfast}`. the heavier models are very taxing and will require a newer powerful GPU to run smoothly.

I recommend making a simple script to run and stop the program. Modify the UPSCALE_MODEL for the one you intend to use.

```sh
#!/usr/bin/env bash

PROCESS_NAME="upscale"
UPSCALE_MODEL="4x16"

UPSCALE_CMD="upscale --target-delay 2 -m $UPSCALE_MODEL"

# Check if process is running by name
if pgrep -x "$PROCESS_NAME" > /dev/null; then
    pkill -x "$PROCESS_NAME"
else
    # Launch detached so it survives the script exiting
    nohup $UPSCALE_CMD > /dev/null 2>&1 &
fi

```

Once upscale is enabled in your game you can also toggle it on and off with Alt+Shift+S shortcut.

There is a detailed config file here where you can parametrize every setting and the shortcut keys: https://github.com/baronsmv/linux-rt-upscaler/blob/main/config-example.yaml.

The file needs to be placed in `~/.config/linux-rt-upscaler/config.yaml`

Comparasion screenshot taken from the github:
![comparasion](https://raw.githubusercontent.com/baronsmv/linux-rt-upscaler/main/docs/comparisons/gurikaji/w40-60_h20-50_4x_comparison.png)

