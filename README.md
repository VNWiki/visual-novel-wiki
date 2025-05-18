<div align="center">

<!-- <img src="./docs/public/logo.png" alt="visual novel wiki logo" title="visual novel wiki logo" width="80"/> -->

# Visual Novel Wiki

A lightweight, community-driven wiki for visual novels.

</div>

---

## 🧾 Overview

This is the source for the **Visual Novel Wiki**, a modern static wiki built with [VitePress](https://vitepress.dev/).

The Visual Novel Wiki has:

- Guides on:
    - How to run Visual Novels
    - Where to find Save Files (i.e. 100% CG)
    - Setting up Japanese tools such as Textractor
    - ... and more! 
- Compatibility List for Windows, Linux, Mac

Other content possibly supported:
- Walkthroughs
- VN Cheat guides (i.e. for RPG Maker)

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

### 🗂️ What Goes Where?

| Path                        | Description                                      |
| --------------------------- | ------------------------------------------------ |
| `docs/`                     | Main content directory – all `.md` pages go here |
| `docs/.vitepress/`          | Site config + theme overrides                    |
| `docs/.vitepress/config.js` | Navigation, sidebar, title, etc.                 |
| `docs/.vitepress/theme/`    | Custom Vue theme and components                  |
| `docs/public/`              | Static assets (images, JSON, etc.)               |
| `scripts/`                  | Helper scripts                                   |
| `package.json`              | Project dependencies and commands                |

---

## 🚀 Getting Started

### Prerequisites

- Node.js **v23.11+**
- pnpm **v10.11+**

### Install & Run

```bash
# Install dependencies
pnpm install

# Start local dev server
pnpm dev
```

Then visit [http://localhost:5173](http://localhost:5173) in your browser.

Hot-loading is supported, so everytime you make a change to a page (.md) or modify a component, it will update the page.

---

## 🛠️ Local Development

* ✍️ **New Pages**: Add `.md` files to `docs/`
* 🧩 **Components**: Add Vue components in `docs/.vitepress/theme/components/`
* 🖼️ **Assets**: Put static files in `docs/public/` and use them like `/logo.png`
* 🧠 **Config**: Tweak navigation or sidebar in `config.js`

Example usage in Markdown:

```md
![Logo](/logo.png)

<DataTable jsonPath="'/vn_list.json'" />
```

---

## 🤝 Contributing

We welcome contributions of all kinds!

* Fix typos
* Improve structure or navigation
* Add new titles or creators
* Help with design or localization

### How to Contribute

1. Fork the repo
2. Create a feature branch
3. Submit a pull request

---

## 📄 License

Copyright © 2025 vnwiki project This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/
