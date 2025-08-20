// scripts/gen-checksums.mjs

// Generate checksums for files that are downloadable.

import { createHash } from 'node:crypto';
import { readdir, readFile, mkdir, writeFile, stat } from 'node:fs/promises';
import { resolve, join, relative } from 'node:path';

const baseDir = resolve(process.cwd(), 'docs/public');

// Configuration: folders to include checksums from
const foldersToInclude = ['texts', 'dlls', 'tools'];  // add/remove folders as needed

const checksums = {};

/**
 * Recursively processes a folder to calculate checksums for its files.
 * @param {string} currentFolderPath - Absolute path to the current folder being processed.
 * @param {string} pathPrefixForKeys - The prefix to use for keys in the checksums object (e.g., "texts" or "texts/subfolder").
 */
async function processFolder(currentFolderPath, pathPrefixForKeys) {
  let entries;
  try {
    entries = await readdir(currentFolderPath);
  } catch (err) {
    console.warn(`⚠️ Warning: Could not read directory ${currentFolderPath}: ${err.message}. Skipping.`);
    return; // Skip this folder if it can't be read
  }

  for (const entryName of entries) {
    const fullPath = resolve(currentFolderPath, entryName);
    let statInfo;
    try {
      statInfo = await stat(fullPath);
    } catch (err) {
      console.warn(`⚠️ Warning: Could not stat ${fullPath}: ${err.message}. Skipping.`);
      continue; // Skip this entry if stat fails
    }

    if (statInfo.isDirectory()) {
      // Recurse into subfolder, appending the folder name to the key prefix
      // Ensure forward slashes for the key prefix components
      const subfolderKeyPrefix = [pathPrefixForKeys, entryName].join('/');
      await processFolder(fullPath, subfolderKeyPrefix);
    } else {
      try {
        // Read file and hash
        const content = await readFile(fullPath);
        const hash = createHash('sha256').update(content).digest('hex');

        // Store with relative path key, ensuring forward slashes for consistency
        // The key is relative to the initial foldersToInclude (e.g., texts/file.txt)
        const key = [pathPrefixForKeys, entryName].join('/');
        checksums[key] = hash;
      } catch (err) {
        console.warn(`⚠️ Warning: Could not read or hash file ${fullPath}: ${err.message}. Skipping.`);
        // Continue to the next file even if one fails
      }
    }
  }
}

async function main() {
  console.log('🔍 Generating checksums...');
  for (const folderName of foldersToInclude) {
    const folderPath = resolve(baseDir, folderName);
    console.log(`   Processing folder: ${folderName}`);
    // The initial pathPrefixForKeys is just the top-level folder name
    await processFolder(folderPath, folderName);
  }

  if (Object.keys(checksums).length === 0) {
    console.log('ℹ️ No files found to generate checksums for in the specified folders.');
    return;
  }

  const outputDir = resolve(baseDir, 'checksums');
  try {
    await mkdir(outputDir, { recursive: true });
  } catch (err) {
    console.error(`❌ Error creating output directory ${outputDir}: ${err.message}`);
    return;
  }

  const outputFile = resolve(outputDir, 'checksums.json');

  try {
    await writeFile(outputFile, JSON.stringify(checksums, null, 2), 'utf-8');
    // Use path.relative to show a cleaner output path
    console.log(`✅ Checksums written to ${relative(process.cwd(), outputFile)}`);
  } catch (err) {
    console.error(`❌ Error writing checksums file ${outputFile}: ${err.message}`);
  }
}

main().catch(err => {
  console.error('❌ An unexpected error occurred during checksum generation:', err);
  process.exit(1);
});
