---
title: 'JP Locale'
---

# JP Locale

In order to play some visual novels, you need to enable Japanese (JP) locale on your computer.

> [!NOTE] Why do I need a Japanese locale setting?
> Most visual novels are developed in Japan and originally designed to run on Japanese versions of Windows or Linux. Even if the game has been translated into English, the underlying files often use Japanese character encoding (such as Shift-JIS or EUC-JP).
>
> Without setting your system's locale to Japanese, your computer may misinterpret the encoding. This can cause issues like garbled text, crashes, or failed installations. Setting the locale simply tells your computer how to correctly read and run Japanese programs.


> [!TIP] Did you know?
> Some official translations actually do require JP locale or include 'Locale Emulator', free open-source software, because of the programming work required to change from JP encoding to English encoding.
>
> It’s more cost-efficient to stay with JP encoding and include a program like Locale Emulator to emulate the ability to see JP (or English-translated) characters.


## Setting up system-wide JP Locale

### Windows

[Changing system Locale](https://forums.fuwanovel.moe/topic/1704-how-do-i-change-my-computer-to-japanese-system-locale/) is the recommended way to run Japanese games. [Locale Emulator](https://xupefei.github.io/Locale-Emulator/) might work with some applications though.

Optionally, you can also download the JP Language Pack from the Windows System Settings:

1.  Go to "System Settings", "Languages" and click "Add a language".
2.  Select "日本語" and check "Language Pack".
3.  Uncheck "Text-to-speech", "Speech Recognition" and "Handwriting" then click "Install".

### Linux

For Unix systems, you need JP Locale if you want to use any JP files.
If you don’t do this, your games won’t work, and you can have issues deleting JP files because your system can’t read those language files-- this includes Steam Deck.
Follow these steps depending on your OS.
After you’ve finished running these commands, proceed to the Lutris step.


:::tabs
== Arch Linux
Run these commands in the Terminal:
```sh
sudo pacman-key --init
sudo pacman-key --populate archlinux
sudo pacman -S glibc
sudo sed -i "s%#ja_JP.UTF-8 UTF-8%ja_JP.UTF-8 UTF-8%" /etc/locale.gen
sudo locale-gen
```
== Steam Deck
::: warning Warning
After the SteamOS 3.5 update the Japanese locale is installed on the Steam Deck by default, making the following instructions no longer necessary.

Run these commands in the Terminal:

```sh
sudo steamos-readonly disable
sudo pacman-key --init
sudo pacman-key --populate archlinux
sudo pacman -S glibc
sudo sed -i "s%#ja_JP.UTF-8 UTF-8%ja_JP.UTF-8 UTF-8%" /etc/locale.gen
sudo locale-gen
```
and if you don’t plan on modifying your Steam Deck anymore than this, run this as well:

```sh
sudo steamos-readonly enable
```
:::

#### Automatic Script for Steam Deck

Sometimes your JP Locale settings can get reset because of a major Steam Deck update or because you needed to reimage your OS.
You can download [this script](https://gist.github.com/XargonWan/cc660daf92c224b7241cbf5a2bf12c47) from **XargonWan** to automate things.
To run it, open the Terminal in the location of the script, then run this command:

```sh
sh ./japanese_locale_enabler.sh
```

This script does the same thing as the above system-wide commands for the Steam Deck.


## Lutris JP Locale

### Flatpak

::: tip Info
For all platforms that use the flatpak version (including Steam Deck):
Run these commands in the Terminal:
:::

After enabling system-wide JP locale (see above), we’ll also need to setup the [Lutris](../linux/lutris.md) program so it can read JP files & play them.
Thankfully, Lutris has a new locale option! Although, you need to enable it manually.
Type the following commands in the Terminal.

```sh
flatpak config  --system --set languages 'en;ja'
flatpak config  --user --set languages 'en;ja'
flatpak update
```

After, you will see a new Locale Drop Down Menu in the System Options tab in the Lutris game config permanently.
Select `ja_JP.utf8` for all games that require it.

::: warning Warning
This only tells your VN to use JP Locale. If you don’t have system-wide JP Locale enabled, you can’t read/copy/delete files that have JP characters in them, meaning your VN. Please follow the above section first!
:::