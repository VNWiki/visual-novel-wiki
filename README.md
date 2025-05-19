<div align="center">

<!-- <img src="./docs/public/logo.png" alt="visual novel wiki logo" title="visual novel wiki logo" width="80"/> -->

# Visual Novel Wiki

A lightweight, community-driven wiki for running visual novels.

## Contributing

[Contributing guide](#contributing)

Have any questions? [Join our Discord server](https://discord.gg/jkujBZ5vjV).


</div>

---

## 🧾 Overview

This is the source for the **Visual Novel Wiki**, a modern static wiki built with [VitePress](https://vitepress.dev/).

The Visual Novel Wiki provides:

- **Guides** on:
  - How to run Visual Novels
  - Where to find Save Files (i.e., 100% CG)
  - Setting up Japanese tools such as Textractor
  - Troubleshooting common issues
  - ... and more!
- **Compatibility List** for Windows, Linux, and Mac
- **Installation Guides** for different platforms

Future content may include:
- Walkthroughs
- VN Cheat guides (i.e., for RPG Maker)
- Translation resources

---

## 🚀 Getting Started

### Prerequisites

- Node.js **v23.11+**
- pnpm **v10.11+**

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/visual-novel-wiki.git
cd visual-novel-wiki

# Install dependencies
pnpm install

# Start local dev server
pnpm dev
```

Then visit [http://localhost:5173](http://localhost:5173) in your browser.

Hot-loading is supported, so every time you make a change to a page (a `.md` file) or modify a component, it will update the page.

---

## Contributing

We welcome contributions from the community! Whether you're fixing a typo, adding a new guide, or improving the site functionality, your help is appreciated.

### Quick Start Guide

Here's where to add different types of content:

| Type of Contribution | Where to Add It |
|----------------------|-----------------|
| VN compatibility entry | Edit `docs/public/vn_list.json` |
| New wiki page | Add `.md` file to `docs/`. Please format as `your-visual-novel.md` (kebab-case) |
| Custom component | Add Vue component to `docs/.vitepress/theme/components/` |
| Static assets | Put files in `docs/public/` |
| Site configuration | Modify `docs/.vitepress/config.js` |

### Referencing Files and Components

When writing content for the wiki, you'll need to reference various files and components:

#### Images and Static Assets
> [!NOTE]
> Images will be converted to `.webp` when merged-- please reference with `<img-name>.webp`

```md
<!-- Reference images from the public directory -->
![Logo](/logo.webp)
![Screenshot](/screenshots/install-guide.webp)

<!-- Link to downloadable files -->
[Download sample config](/configs/textractor-setup.zip)
```

#### Vue Components
Pages can literally embed Vue components, conveniently enough.

```md
<!-- Basic component usage -->
<DataTable jsonPath="'vn_list.json'" />
```

#### Internal Page Links
This uses the relative file path starting from your .md file.

Sometimes you need to go up or down a folder starting from the `.md` page to get to the correct `.md` page.

For example, here's our directory.

```
docs/
├── getting-started.md
├── index.md
├── linux/
│   ├── index.md
│   ├── bottles/
│   │   ├── bottles-compatibility-list.md
│   │   └── index.md
├── android/
│   ├── index.md
│   └── kirikiroid2.md # For example, starting from here.
├── all-platforms/
│   ├── textractor.md # Let's reference this page.
│   └── steam.md
└── visual-novels/
    ├── fate-stay-night.md
    └── steins-gate.md
```

If we started from `docs/android/kirikiroid2.md`, and want to reference `docs/all-platforms/textractor.md` in our page:

```md
docs/android/kirikiroid2.md -> docs/all-platforms/textractor.md

See our [Textractor](../all-platforms/textractor.md) for more details.

```

### Contribution Workflow

1. **Fork the repository** - Create your own copy of the project
2. **Create a branch** - `git checkout -b feature/your-feature-name`
3. **Make your changes** - Add or modify content as needed
4. **Test locally** - Run `pnpm dev` to verify your changes
5. **Commit changes** - Use clear commit messages
6. **Push to your fork** - `git push origin feature/your-feature-name`
7. **Submit a pull request** - Describe your changes in detail

---

## 🧩 Project Structure

This project uses **VitePress** to generate a static site from Markdown files.

```
.
├── docs/
│ ├── .vitepress/
│ │ ├── theme/
│ │ │ ├── index.js
│ │ │ └── components/
│ │ └── config.js
│ ├── public/
│ │ ├── vn_list.json
│ │ └── ...
│ ├── index.md
│ └── ...
├── scripts/
├── package.json
└── README.md
```

| Path | Description |
|------|-------------|
| `docs/` | Main content directory – all `.md` pages go here |
| `docs/.vitepress/` | Site config + theme overrides |
| `docs/.vitepress/config.ts` | Navigation, sidebar, title, etc. |
| `docs/.vitepress/theme/` | Custom Vue theme and components |
| `docs/public/` | Static assets (images, JSON, etc.) |
| `scripts/` | Helper scripts |
| `package.json` | Project dependencies and commands |

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start local development server |
| `pnpm build` | Build production site |
| `pnpm preview` | Preview the built site locally |

---

## 📄 License

Copyright © 2025 vnwiki project

This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/
