---
title : 'Carnival'
---

<script setup> 
import DownloadButton from '@components/DownloadButton.vue'
</script>


# Carnival
## Installation

Tested with the Download Version of the game from DMM

### GNU/Linux

#### Lutris

Use `vanilla` [wineprefix](/linux/wineprefixes) with runner `wine-10.4-amd64-wow64`:

1. Unzip the downloaded content from DMM, search for `ijam_0006.exe` right click, copy location.
2. In Lutris select Vanilla Prefix. Go to "Game options" "Executable", paste the location of the `ijam_0006.exe`.
3. Run the installer, you can install it outside of the prefix too.
4. Download softdenchi unwrap:

<DownloadButton filePath="tools/DenchiUnwrap.zip" />


5. Unzip it, copy `DenchiUnwrap.exe` into the installed game folder (/../CARNIVAL/program files/S.M.L/carnival/) alongside `carexec.exe`.
6. Open Terminal and run: `wine DenchiUnwrap.exe carexec.exe`.
7. Right click on the newly created `carexec_unwrapped.exe` and copy location.
8. Back to Lutris select Vanilla Prefix again. Go to "Game options" "Executable", paste the location of the `carexec_unwrapped.exe`.
9. Run the game, the opening video should play at the start to confirm everything works.

> [!INFO]
> Right click the Vanilla Prefix in Lutris, click Duplicate name it `Carnival` to have a specific entry for the game!

### Steam Deck

Same as Linux.

## Links

* [VNDB](https://vndb.org/v1001)
* [DLsite](https://www.dlsite.com/pro/work/=/product_id/VJ001614.html)
* [DMM](https://dlsoft.dmm.co.jp/detail/ijam_0006/)
