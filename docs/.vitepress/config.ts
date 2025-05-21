// docs/.vitepress/config.ts

import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { sidebar } from './sidebar.js' // Import the auto-generated sidebar
import { fileURLToPath } from 'node:url';

export default defineConfig({
  lang: 'en-US', // Optional: Set the language
  base: '/visual-novel-wiki/',
  title: "Visual Novel Wiki",
  description: "Get your Visual Novels running!",
  head: [
  ['meta', { name: 'author', content: 'Visual Novel Wiki Team' }],
  ['meta', { name: 'keywords', content: 'visual novel, compatibility, game, wiki' }]
  ],

  lastUpdated: true,
  
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
      md.use(footnote)
    }
  },
  
  // Useful for calling components within md, i.e. with use <component> from '@components/<component>.vue'
  // Don't have to type the whole path.
  vite: {
    resolve: {
      alias:  {
        '@components': fileURLToPath(new URL('./theme/components', import.meta.url)),
        '@public' : fileURLToPath(new URL('../public', import.meta.url)),
      }
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/necoarc.png', // Optional: Path to your logo in your `docs/public` directory

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Visual Novel Compatibility List', link: 'visual-novel-compatibility-list' },
      { text: 'Save Files', link: 'save-files' },
      // Example: Add more nav links if needed
      // { text: 'Guide', link: '/guide/introduction' },
      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-a' },
      //     { text: 'Item B', link: '/item-b' }
      //   ]
      // }
    ],

    // Use the imported sidebar from sidebar.js
    sidebar: sidebar,
    
    // Table of Contents (right side on page) nesting
    outline: {
        level: [1,3], // 1,3 means h1 to h3 elements will be nested.
    },

    search: {
      provider: 'local'
    },

    // Optional: Edit link (points to your repo)
    editLink: {
      pattern: 'https://github.com/VNWiki/visual-novel-wiki/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    // Site-wide footer
    footer: {
      message: 'Content is available under the Creative Commons Attribution-NoDerivs License. <br />If anything is missing, check out the <a href="https://web.archive.org/web/20241006061214/https://www.visualnovelwiki.org/" target="_blank" rel="noopener noreferrer">old wiki on archive.org</a> or its <a href="https://github.com/VNWiki/visualnovelwiki_old" target="_blank" rel="noopener noreferrer">GitHub archived repository</a>.',
      copyright: 'by visualnovelwiki' // Or 'Copyright © 2024 visualnovelwiki' if you prefer that format
    },

     socialLinks: [
      // Example: Add your actual social links here
      { icon: 'github', link: 'https://github.com/VNWiki/vnwiki.github.io' },
      { icon: 'discord', link: 'https://discord.gg/dejvpMhWaH' },
      // { icon: 'bluesky', link: 'https://bsky.app/your-handle' }
    ],     

    // Optional: Carbon Ads (if you have an ID)
    // carbonAds: {
    //   code: 'YOUR_CARBON_PLACEMENT_CODE',
    //   placement: 'YOUR_CARBON_PLACEMENT_ID'
    // }

    // Optional: Customize the "Last Updated" text (default is 'Last updated')
    // lastUpdatedText: 'Content Last Updated On:'
  }
})