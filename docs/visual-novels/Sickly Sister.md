---
title = 'Sickly Sister - Koshikiyukashii Byoujaku Imouto'
---

# Sickly Sister - Koshikiyukashii Byoujaku Imouto
## Installation

### Linux

> [!info] Information
> This game uses a borked implementation of Direct2D in Wine, need to to use a [d2d1 wrapper](https://github.com/b-fission/vn_winestuff/raw/refs/heads/main/custom-fixes/krkr-d2d1/d2d1.dll) made specifically for the game (Thanks to @fission)
> Tested with [Proton-ge 9.26+](/linux/adding-wine-versions).


#### Steps

1. Add the downloaded [d2d1 wrapper](https://github.com/b-fission/vn_winestuff/raw/refs/heads/main/custom-fixes/krkr-d2d1/d2d1.dll) to the game folder, at the same level than the .exe to run the game

2. In lutris add a new entry:

* Game options:
    - Executable: Add the executable to the game.exe
    - wine prefix: use [wmp11 prefix](../linux/wineprefixes.md).
* Runner Options:
    - Wine Version: Proton or wine both work, tested with proton-ge 9.26, but any modern version should work.
    - DLL overrides: key: `d2d1` value: `n,b`


You can also do the DLL override accesing winecfg of the prefix:
![](https://github.com/b-fission/vn_winestuff/blob/main/custom-fixes/krkr-d2d1/wine_override.png?raw=true)

> [!info] Source code
> Source code of the .dll [d2d1 wrapper](/dlls/d2d1_mini-v2.zip)

## Links

* [VNDB](https://vndb.org/v48724)
