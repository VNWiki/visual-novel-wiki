//gen-file-previews.mjs

// This script generates an .md in /build/<folder-name>
// Specify a <folder-name> in INCLUDED_FOLDERS, which goes through every file in that folder,
// then the script generates a .md containing a Download Button and a preview of the file itself
// (typically, this is code from the file itself)

import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Setup paths
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Config
const INCLUDED_FOLDERS = ['texts', 'test']  // relative to /docs/public/
const INCLUDE_CODE_BLOCK_EXTENSIONS = ['.yml', '.yaml', '.reg']

// Base paths
const ROOT_PUBLIC = path.resolve(__dirname, '../docs/public')
const OUTPUT_ROOT = path.resolve(__dirname, '../build')

// Markdown generator
const generateMarkdown = (folderName, fileName, includeCodeBlock) => {
  return `---
title: ${fileName}
---

# ${fileName}

<script setup>
import DownloadButton from '@components/DownloadButton.vue'
</script>

<DownloadButton filePath="${folderName}/${fileName}" />

${includeCodeBlock ? `<<< @/public/${folderName}/${fileName}` : ''}
`
}

// Main runner
const run = async () => {
  for (const folder of INCLUDED_FOLDERS) {
    const folderPath = path.join(ROOT_PUBLIC, folder)
    const outputFolder = path.join(OUTPUT_ROOT, folder)

    try {
      await fs.mkdir(outputFolder, { recursive: true })
      // Use await fs.readdir() and withFileTypes for efficiency
      const dirents = await fs.readdir(folderPath, { withFileTypes: true });

      // Filter for files and get their full paths
      const filePaths = dirents
        .filter(dirent => dirent.isFile())
        .map(dirent => path.join(folderPath, dirent.name));

      for (const filePath of filePaths) {
        const ext = path.extname(filePath)
        const baseName = path.basename(filePath, ext) // Get filename without extension
        const fileNameWithExt = path.basename(filePath) // Get filename with extension

        const includeCodeBlock = INCLUDE_CODE_BLOCK_EXTENSIONS.includes(ext)

        const mdFilename = baseName + '.md'
        const outputPath = path.join(outputFolder, mdFilename)

        // Pass the relative folder name and the file's actual name (with extension)
        const content = generateMarkdown(folder, fileNameWithExt, includeCodeBlock)
        await fs.writeFile(outputPath, content, 'utf-8')

        console.log(`✅ Created: ${path.relative(__dirname, outputPath)}`)
      }
    } catch (err) {
      console.error(`❌ Failed for folder "${folder}":`, err.message)
      if (err.stack) { // Log stack trace for better debugging
          console.error(err.stack);
      }
    }
  }
}

run()