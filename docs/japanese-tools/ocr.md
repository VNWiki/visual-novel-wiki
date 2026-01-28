---
title : 'OCR'
---

# OCR

[OCR](https://en.wikipedia.org/wiki/Optical_character_recognition) is the electronic or mechanical conversion of images of typed, handwritten or printed text into machine-encoded text. In this case useful to extract text from Visual Novels when a [Texthooker](/japanese-tools/textractor) is not available.


## OwOCR
[OwOCR](https://github.com/AuroraWright/owocr) is a multiplatform Command line client for several Japanese OCR

### Installation

Install through pip or pipx according to your system:
```bash
pip install owocr
```

Or

```bash
pipx install owocr
```

> [!NOTE]
> Requires Python 3.11, 3.12 or 3.13.

### Providers
You need OCR providers to recognize the text, as of right now the best one is google lens, but you can install a few of them and test for yourself, some of them are offline too in case there is no access to internet. Check de OwOCR github for the latest info

Local:
1. Manga OCR: install with pip install owocr[mangaocr] ("m" key)
2. EasyOCR: install with pip install owocr[easyocr] ("e" key)
3. RapidOCR: install with pip install owocr[rapidocr] ("r" key)
4. MeikiOCR: install with pip install "owocr[meikiocr]" ("k" key) This is the best one from all the current local providers, but doesn't support vertical writing.

Cloud:
1. Google Lens: Google Vision in disguise (no need for API keys!), install with pip install owocr[lens] ("l" key)
2. Bing: Azure in disguise (no need for API keys!) ("b" key)

> [!NOTE]
> To install with `pipx` use the command: `pipx inject owocr [name]`  
> Example `pipx inject owocr manga-ocr easyocr rapidocr-onnxruntime betterproto pyjson5 google-cloud-vision`
> I recommend to install Google Lens for online and Meiki for offline: `pipx inject owocr meikiocr google-cloud-vision`

### Usage
To run it open a terminal and run `owocr`. Once it is running it will automatically read images from your clipboard, any read text will be shown in the window and copied back to the clipboard.
Once open you can press a key to change the provider. you can also open it already configured

![owocr preview](/img/tutorials/ocr/owocr_run.webp)

### Setup
To optimize the usage there is a couple of shortcuts that can be useful

1. Start OwOCR:
```owocr_start.sh
#!/bin/bash

# Configuration
OWOCR_DIR="/tmp/owocr"

# Create directory if it doesn't exist
if [ ! -d "$OWOCR_DIR" ]; then
    mkdir -p "$OWOCR_DIR"
    echo "Created directory: $OWOCR_DIR"
fi

# -d deletes image
# -n enables notification
# -es adds second local provider

owocr -r "/tmp/owocr" -w clipboard -e glens -d -n -es=meikiocr
```

2. Take screenshots (Using spectacle)
```screenshot.sh
#!/bin/bash

# Configuration
OWOCR_DIR="/tmp/owocr"

# Create directory if it doesn't exist
if [ ! -d "$OWOCR_DIR" ]; then
    mkdir -p "$OWOCR_DIR"
    echo "Created directory: $OWOCR_DIR"
fi

# Generate filename with current date and time
FILENAME="$(date +%Y%m%d_%H%M%S).png"
OUTPUT_FILE="$OWOCR_DIR/$FILENAME"

# Take screenshot
spectacle --region --background --nonotify --output "$OUTPUT_FILE"
```

Instead of filling the clipboard which can be annoying and buggy:

1. Will create a tmp folder where your screenshots will be stored.
2. OwOCR will start with google lens and scanning the folder for changes.
3. Once a picture has been found it will scan the text from the picture.
4. It will copy the text to the clipboard, delete the image and give a notification.

To use it:
1. run owocr_start.sh in a terminal.
2. Make a shortcut for screenshot.sh.
3. Use the shortcut to take specific screenshots that will be OCR.

> [!NOTE]
> These are prototype scripts, feel free to modify according to your Desktop Environment and needs.

Preview:
![owocr gif](/img/tutorials/ocr/owocr_gif.webp)


### Screencapture
Since version 1.22 now you can use screencapture if you are using Wayland to monitor the textbox of your VN for example and it will automatically detect changes. You can run it with: `owocr -e glens -r screencapture -w clipboard -es=meikiocr`. Here it is recommended to use both online and offline providers for better accuracy and speed.

![owocr screencapture preview](/img/tutorials/ocr/owocr_screencapture.webp)

## GameSentenceMiner

[GSM](https://github.com/bpwhelan/GameSentenceMiner) is a full GUI application to optimize OCR with Anki integration.  

GSM will use OwOCR with OBS to manually detect text changes on the screen and automatically OCR the text without the need of manually taking screenshots.

### Setup

1. Download latest appimage from the [GitHub releases page](https://github.com/bpwhelan/GameSentenceMiner/releases)
2. Install [OBS](https://obsproject.com/) through your package system, flatpak, etc.
3. Make sure the OBS websocket is activated on port 7274.   
Tools -> WebSocket Server Settings
   ![obs](/img/tutorials/ocr/obs-ws.webp)
   
> [!NOTE]
> The websocket plugin is included by default in latest versions of OBS  
> If you don't see the option you may need the optional dependency `qrcodegencpp-cmake` to enable WebSocket support.

4. Video tutorial: https://www.youtube.com/watch?v=Y0BnL4TUzn8

### Anki
TO-DO
