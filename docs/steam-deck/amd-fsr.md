---
title: 'AMD FSR'
description: 'Learn how to use AMD FidelityFX Super Resolution to improve visual quality in Visual Novels on Steam Deck'
---

# AMD FSR

**AMD FidelityFX™ Super Resolution** (FSR) is a built-in upscaling technology that comes with every Steam Deck. We can leverage this powerful upscaling feature for Visual Novels to improve image quality and reduce font blurriness.

::: info Why Use FSR on Steam Deck?
While some advise against upscaling software on larger displays, this doesn't apply to the Steam Deck. We're working with a compact 7-inch screen at 1280×800 resolution, so upscaling artifacts aren't blown out of proportion.

**We recommend using FSR because it almost always produces better visual quality than native low resolution rendering.**
:::

## Setting Up FSR for Visual Novels

### Step 1: Access Performance Settings

1. Press the **Steam button (…)** to open the quick menu
2. Navigate to the **Performance** tab
3. Configure the following settings:
   - Set **Performance Overlay Level** to **5**
   - Enable **Use per-game profile**

::: tip Performance Overlay
The performance overlay will show an FSR indicator at position **3**, which tells you whether FSR is currently active or inactive.
:::

![FSR Performance Menu Setup](/img/tutorials/fsr/fsr_menu_1_resize.webp)

### Step 2: Configure FSR Settings

1. Scroll down in the Performance menu
2. Set **Scaling Filter** to **FSR**
3. Set **FSR Sharpness** to **5** (maximum sharpness)

![FSR Configuration](/img/tutorials/fsr/fsr_menu_2_resize.webp)

::: warning FSR Activation Requirements
After configuring these settings, FSR can still show as **OFF** in the overlay. This is normal behavior.

**FSR only activates when your game resolution is lower than the Steam Deck's native resolution (1280×800).** You'll need to reduce the in-game resolution to trigger FSR upscaling.
:::

### Step 3: Set Lower Resolution

To activate FSR, you need to run your Visual Novel at a resolution below 1280×800. In most cases, FSR will activate starting at **800×600** resolution.

<ClientOnly>
  <ImageCompare class="shadow-lg rounded-2xl">
    <template v-slot:left>
      <img src="/img/tutorials/fsr/fsr_off.webp" alt="FSR Off" />
    </template>
    <template v-slot:right>
      <img src="/img/tutorials/fsr/fsr_on.webp" alt="FSR On" />
    </template>
  </ImageCompare>
</ClientOnly>

<div class="image-compare-wrapper" style="max-width:600px; margin: auto;">
  <div class="image-compare-captions" aria-label="Image compare captions" role="note">
    <span class="caption-left">Left: FSR Off</span>
    <span class="caption-right">Right: FSR On</span>
  </div>
</div>



*Hover or drag the slider to see FSR changes to image quality and text clarity.*

## Forcing Resolution for Games Without Options

Some Visual Novels don't include built-in resolution settings. For these titles, you can force a specific resolution through Steam's game properties.

### Method: Steam Game Properties

1. In Game Mode, highlight the Visual Novel you want to configure
2. Press the **Steam button (…)** to open the context menu
3. Select **Properties**
4. Scroll down to find **Game Resolution**
5. Choose a resolution lower than **1280×800** (try 800×600 or 960×600)

![Forcing Resolution via Steam Properties](/img/tutorials/fsr/fsr_resolution_change_steam.webp)

::: tip Finding the Right Resolution
You may need to experiment with different resolutions to find the sweet spot where:
- FSR activates (shown in the performance overlay)
- The game displays properly without UI scaling issues
- Visual quality is optimized

Common working resolutions: **800×600**, **960×600**, **1024×576**

:::

## Troubleshooting

**FSR not activating?**
- Ensure game resolution is below 1280×800
- Check that Performance Overlay Level is set to 5
- Verify Scaling Filter is set to FSR (not Linear or Nearest)

**Game looks worse with FSR?**
- Try adjusting FSR Sharpness (values 3-5 work best)
- Some games may look better at different base resolutions
- Very old or pixel-art games might benefit from Integer scaling instead

**UI elements too small?**
- Some games scale UI with resolution - try a higher base resolution like 960×600
- Check if the game has separate UI scaling options

<style>
.image-compare-captions {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-weight: 600;
}

.caption-left,
.caption-right {
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 4px 10px;
  border-radius: 5px;
  user-select: none;
}
</style>
