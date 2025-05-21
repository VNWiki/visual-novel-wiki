---
title : 'Sickly Sister - Koshikiyukashii Byoujaku Imouto'
---

<script setup> 
import DownloadButton from '@components/DownloadButton.vue'
</script>


# Sickly Sister - Koshikiyukashii Byoujaku Imouto
## Installation

### Linux

> [!NOTE] Custom d2d1 Patch by @fission  
> This DLL override is necessary for proper rendering and was specifically made to address krkr2 engine issues under Wine.

> [!IMPORTANT] Wine 10.8+ Compatibility  
> As of **Wine 10.8**, the game no longer crashes due to Direct2D bugs (see [Wine bug #58185](https://bugs.winehq.org/show_bug.cgi?id=58185)).  
> However, **graphical issues persist** without a patched `d2d1.dll`.

> [!WARNING] Visual Bugs Without Patch  
> Even on Wine 10.8+, the game suffers from incorrect **blend mode rendering**, causing:  
> - Broken UI layering  
> - Invisible or glitched **map screen**  
> - Opening video appears as a **white screen**, even with WMP11 installed  
>  
> To fix this, you **must still use the custom `d2d1.dll`** patch.

#### Steps

1. Download the custom [`d2d1.dll`](#d2d1-dll) below.  
   Place it in the same folder as the game `.exe`.

2. In Lutris, create a new entry:

   **Game Options:**
   - **Executable**: Point to the game `.exe`
   - **Wine prefix**: Use the [wmp11 prefix](../linux/wineprefixes.md)

   **Runner Options:**
   - **Wine Version**: Proton-GE or any recent Wine build (tested with Proton-GE 9.26)
   - **DLL overrides**:
     - **Key**: `d2d1`
     - **Value**: `n,b`

## DLL override via winecfg

You can also apply the override manually using `winecfg`:

![](https://github.com/b-fission/vn_winestuff/blob/main/custom-fixes/krkr-d2d1/wine_override.png?raw=true)

> [!info] DLL Compatibility Patch
> This precompiled `d2d1.dll` is offered as-is for older Wine versions.  
> Source code is included in the `.zip` archive below.

## d2d1.dll
<DownloadButton filePath="dlls/d2d1.dll" />

### Source code
<DownloadButton filePath="dlls/d2d1_mini-v2.zip" />

```
d2d1_mini-v2/
├── d2d1.dll
├── shader_hlsl
│   ├── pixel.hlsl
│   └── vertex.hlsl
└── src
    ├── d2d1_bitmap.c
    ├── d2d1_context.c
    ├── d2d1_device.c
    ├── d2d1_factory.c
    ├── d2d1_main.c
    ├── debug.c
    ├── export.def
    ├── mini_d2d1.h
    ├── render_d3d11.cpp
    ├── shaderbin_pixel.h
    ├── shaderbin_vertex.h
    └── zz_guid.c
```

## Links

* [VNDB](https://vndb.org/v48724)
