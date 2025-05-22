---
title: Shin Koihime † Musou ~Otome Ryouran ☆ Sangokushi Engi~
---

# Shin Koihime † Musou ~Otome Ryouran ☆ Sangokushi Engi~

## Installation Guide (Linux)

::: tip
This guide uses [Lutris](https://lutris.net/) for installation.
Tested with: [lutris-GE-Proton-7-16](https://www.visualnovelwiki.org/en/linux/wine-versions)  
Patch available via [The SKM Project](https://www.facebook.com/theskmproject/posts/pfbid0WrLE6LsCq4xB6umebUvWdTd37DH5T5XdThMjC39sg45Dsr3gaQpxc2VRTmFfQF3yl)
:::

---

## Step 1: Prepare the Game Files

Mount and merge the contents of the two image disks to a local directory.

![Step 1](/img/tutorials/v1967/v1967-linux-1.webp)

---

## Step 2: Add the Game to Lutris

1. Open Lutris and **Add a locally installed game**.
2. Configure the game with the following options:

### Game Info
- **Runner**: `Wine`

### Game Options
- **Wine prefix**: Set to [lavfilters](../linux/wineprefixes.html#special-purpose-wineprefixes)
- **Executable**: Path to `Launcher.exe`
- **Prefix architecture**: `64-bit`

### System Options
- **Locale**: `ja_JP.UTF-8`

---

## Step 3: Install the Game via Launcher

Run `Launcher.exe` and click the orange button:

![Step 2](/img/tutorials/v1967/v1967-linux-2.webp)

Choose default options unless otherwise stated.

### Select (N)
![Step 3](/img/tutorials/v1967/v1967-linux-3.webp)

### Select (I)
![Step 4](/img/tutorials/v1967/v1967-linux-4.webp)

### Select (F) to Finish
![Step 5](/img/tutorials/v1967/v1967-linux-5.webp)

---

## Step 4: Apply the Official Fix Patch 1.02

1. Run the fix patch and press **(C)**

![Patch Step 1](/img/tutorials/v1967/v1967-linux-6.webp)

2. Press **(Y)** to confirm

![Patch Step 2](/img/tutorials/v1967/v1967-linux-7.webp)

3. Confirm the directory and finish installation.

![Patch Step 3](/img/tutorials/v1967/v1967-linux-8.webp)

---

## Step 5: Apply the English Patch

Extract the contents of the patch into:

```
\$WINEPREFIX/drive\_c/Program Files (x86)/BaseSon/shin\_koihime/
```

---

## Step 6: Final Configuration

Go back to Lutris and update the executable:

- **Executable**: `shin_koihime.exe` (inside your Wine prefix installation directory)

---

## Step 7: Run the Game

If everything is configured correctly, you should see the **BaseSon** logo:

![Success!](/img/tutorials/v1967/v1967-linux-9.webp)

::: tip Done
Enjoy the game!
:::