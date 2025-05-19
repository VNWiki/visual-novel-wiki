---
title = 'Sickly Sister - Koshikiyukashii Byoujaku Imouto'
---

# Sickly Sister - Koshikiyukashii Byoujaku Imouto
## Installation

### Linux

> [!IMPORTANT] Wine 10.8+ Support  
> As of **Wine 10.8**, you no longer need `d2d1.dll` (see [Wine bug #58185](https://bugs.winehq.org/show_bug.cgi?id=58185)).  
> Just run the game with **Wine version ≥ 10.8**.

> [!NOTE] Deprecated Workaround
> ~~The game previously required a custom [d2d1 wrapper](https://github.com/b-fission/vn_winestuff/raw/refs/heads/main/custom-fixes/krkr-d2d1/d2d1.dll) due to broken Direct2D in Wine.~~  
> This workaround is **no longer needed**, but was originally developed by **@fission** for earlier Wine versions.

#### Steps

1. (Only if using Wine **older than 10.8**) Download the [d2d1 wrapper](https://github.com/b-fission/vn_winestuff/raw/refs/heads/main/custom-fixes/krkr-d2d1/d2d1.dll) and place it in the game folder, at the same level as the `.exe`.

2. In Lutris, add a new entry:

   **Game Options:**
   - **Executable**: point to the game `.exe`
   - **Wine prefix**: use the [wmp11 prefix](../linux/wineprefixes.md)

   **Runner Options:**
   - **Wine Version**: Proton-GE or any recent Wine build (tested with Proton-GE 9.26)
   - **DLL overrides**:
     - **Key**: `d2d1`
     - **Value**: `n,b`

##### DLL Override via winecfg (Optional)

You can also add the DLL override manually through `winecfg`:

![](https://github.com/b-fission/vn_winestuff/blob/main/custom-fixes/krkr-d2d1/wine_override.png?raw=true)

> [!info] Source Code
> You can download the source code for the `d2d1` wrapper [here](/dlls/d2d1_mini-v2.zip).

## Links

* [VNDB](https://vndb.org/v48724)
