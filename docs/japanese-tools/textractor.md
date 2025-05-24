---
title : 'Textractor'
---

# Textractor

[Textractor](https://github.com/Artikash/Textractor) extracts text from Visual Novels and outputs it to another program. The output is usually sent to a browser, so you can use it with Yomitan for language learning.

::: tip Pair with Anki
Since the browser will display the Visual Novel text, you can use the AnkiConnect feature with Yomitan to make flashcards with Anki.
:::

## Installation

### Download and Setup

1. Download the zip version from the [GitHub releases page](https://github.com/Artikash/Textractor/releases/tag/v5.2.0)
2. Extract the archive to your preferred location
3. **Optional but recommended:** Update the DLL from the alpha version for better compatibility:
   - Follow the instructions in [this GitHub issue](https://github.com/Artikash/Textractor/issues/868#issuecomment-1249146885)

### Alternative: Chenx221 Fork

Instead of manually updating DLLs, you can use the [Chenx221 fork](https://github.com/Chenx221/Textractor/releases) which includes most or all alpha build improvements already merged.

## Linux Usage

Text hooking in Linux through Wine is possible by running Textractor in the same Wine prefix as your game.

::: info Setup Overview
This involves two main steps:
1. **Getting Textractor to hook onto your Visual Novel** (extracting the text)
2. **Setting up text output** to send extracted text to your browser for use with Yomitan
:::

### Step 1: Setup Textractor with Lutris

> [!NOTE]
> For simplicity and general cross-distro usage, we're using [Flatpak Lutris](/linux/lutris).

1. **Create a duplicate entry:**
   - Right-click your working game entry in Lutris
   - Select **Duplicate**
   - Rename it to something like "Game Name - Textractor"

2. **Configure the Textractor entry:**
   - Open the duplicated entry
   - Go to **Game Options**
   - Change the **Executable** path to point to Textractor
   - Example: `/home/user/Downloads/Textractor/x86/Textractor.exe`

3. **Test the text hooking:**
   - Launch your game and get to a point where text is displayed
   - Launch the Textractor entry
   - Click "Attach to game" in Textractor
   - Select your Visual Novel from the process list
   - Textractor should begin extracting text automatically

::: tip Troubleshooting Text Extraction
If Textractor isn't capturing text properly:
- Try different text threads in the Textractor interface
- Some games require manual Hook codes (H-codes) - see our [Hook Codes page](h-codes)
- Make sure you're using the correct architecture (x86 vs x64)
:::

### Step 2: Configure Text Output

#### WebSocket Method (Recommended)

1. **Install the WebSocket extension:**
   - Download the [WebSocket extension DLL](https://github.com/kuroahna/textractor_websocket/releases/tag/0.2.0)
   - Copy the appropriate DLL to both `x64` and `x86` Textractor folders

2. **Configure Textractor:**
   - Open Textractor's extension menu
   - Drag the WebSocket DLL file to add it
   - Remove the "Copy to Clipboard" extension if present

3. **Access extracted text:**
   - Text will be available at `ws://localhost:6677`
   - Use [this web client](https://renji-xd.github.io/texthooker-ui/) to view the text

#### Clipboard Method (Limited Browser Support)

::: warning Browser Compatibility
Manifest V2 extensions no longer work in Chrome and Edge. Firefox still supports them, but WebSocket is the recommended method.
:::

For Firefox users:
- Install the [LAP Clipboard Inserter extension](https://addons.mozilla.org/en-US/firefox/addon/lap-clipboard-inserter/)
- Use it with this [text hooker page](https://anacreondjt.gitlab.io/docs/texthooker/)


## Important Considerations

::: warning Architecture Compatibility
The architecture (x86 or x64) must match what the game is running on:
- Using the wrong architecture will cause error messages or crashes when trying to attach
- This has no relation to your Wine prefix architecture
- You can hook 32-bit games in a 64-bit prefix
:::

::: warning Proton Limitations
Text hooking requires **Wine runners** and cannot use Proton with umu-launcher due to extra containerization that blocks Textractor from seeing other applications.

**Workaround:** Use [protonhax](https://github.com/Will40/protonhax/) (though this is extremely hacky and requires creating a new Lutris entry with a Linux runner).
:::

::: info Gamescope Compatibility
If running your game with Gamescope:
- Textractor must also run with Gamescope
- Enable Gamescope in the Textractor Lutris entry
- Run both applications in fullscreen mode
- Use Wayland backend (should be default)
- Currently requires WebSocket for text transfer due to clipboard limitations
:::

## Additional Resources

For more detailed information about using visual novels for Japanese learning, check out [TheMoeWay's comprehensive guide](https://learnjapanese.moe/vn/#playing-visual-novels-to-learn-japanese). While it focuses on Windows, the core concepts apply to Linux setups as well.