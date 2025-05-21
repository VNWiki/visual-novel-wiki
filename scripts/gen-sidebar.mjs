// scripts/gen-sidebar.mjs

// This script generates an sidebar object contained in sidebar.js
// which is imported for use within docs/.vitepress/config.ts

// The (left) sidebar is built with all of the .md markdown files in docs/
// Directory names within docs/ are used as headers,
// while .md files within those folders are placed underneath the header.

// the index.md file within the folder is used as a page for the header itself.
// If there is no index.md within that directory, then that header will not be clickable (because it doesn't exist as a page itself.)

// As an example:

// Visual Novel Wiki
// ---
// About (about.md)
// Contributors (contributors.md)
// Getting Started (getting-started.md)
// Save Files (save-files.md)
// Visual Novel Compatibility List (visual-novel-compatibility-list.md)
// ---
// All platforms (index.md within all-platforms/) (collapsible)
// EasyRPG Player (easyrpg-player.md)

// The script sorts markdown entries alphabetically and supports nested folders.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url'; // For robustly getting script filename
import matter from 'gray-matter'; // For reading frontmatter

// --- Configuration ---
const docsRoot = path.resolve(process.cwd(), 'docs');
const excludedDirs = ['.vitepress', 'public']; // Directories to ignore at any level
const topLevelExcludedFiles = ['index.md']; // Files to ignore at the root of /docs ; index.html is the homepage, so it's not included.

// Define the desired order for top-level sections (directory names).
// Directories listed here will appear first, in this order.
// Directories not listed here will appear after, sorted alphabetically.
// 'visual-novels' can be placed anywhere in this list or omitted.

const TOP_LEVEL_SECTION_ORDER = [
  'tools',
  'all-platforms',
  'linux',
  'steam-deck',
  'windows',
  'android',
  'visual-novels', // <-- This is placed at the bottom and pre-collapsed, because it contains a huge chunk of VN entries.
  // Add other top-level directory names here in your preferred order
];

// Sections to be collapsed by default (top-level directory names).
// This applies whether they are in TOP_LEVEL_SECTION_ORDER or not.
const COLLAPSED_SECTIONS_BY_DEFAULT = ['visual-novels'];

// --- Helper Functions ---

/**
 * Converts a string (like a filename or directory name) to Title Case.
 * e.g., "my-example-file" -> "My Example File"
 */
function nameToTitleCase(str) {
  if (!str) return '';
  return str
    .replace(/\.md$/, '') // Remove .md extension
    .replace(/[-_]/g, ' ') // Replace hyphens/underscores with spaces
    .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()); // Capitalize each word
}

/**
 * Safely reads a file and parses its frontmatter to get the title.
 * @param {string} filePath - Absolute path to the Markdown file.
 * @returns {string|null} The title from frontmatter (preserving original casing), or null if not found or error.
 */
function getFrontmatterTitle(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    // Handle non-standard frontmatter format with "=" sign
    let processedContent = fileContent;
    
    // Check if we have frontmatter with equal signs instead of colons
    const frontmatterMatch = fileContent.match(/^---\s*\n([\s\S]*?)\n---/);
    if (frontmatterMatch) {
      const frontmatterContent = frontmatterMatch[1];
      if (frontmatterContent.includes('=') && !frontmatterContent.includes(':')) {
        // Replace equals signs with colons in the frontmatter section
        const fixedFrontmatter = frontmatterContent.replace(/(\w+)\s*=\s*(['"])(.*?)\2/g, '$1: $2$3$2');
        processedContent = fileContent.replace(frontmatterMatch[1], fixedFrontmatter);
      }
    }
    
    // Parse frontmatter
    const { data } = matter(processedContent);
    
    // Ensure title exists and is a string. Return it as is, preserving casing.
    return (data.title && typeof data.title === 'string') ? data.title : null;
  } catch (e) {
    console.warn(`Warning: Could not read or parse frontmatter for ${filePath}: ${e.message}`);
    return null;
  }
}

/**
 * Generates the text and link for a sidebar item (page or group).
 * Links generated are root-relative (e.g., /guide/page) and VitePress
 * will handle prepending any `base` path automatically.
 * @param {string} filePath - Absolute path to the Markdown file.
 * @param {string} baseLinkPath - The base URL path for this item's directory (e.g., /guide or /).
 * @param {boolean} isIndexFileForGroup - True if this file defines a group (e.g., index.md).
 * @param {string} dirNameForIndexFallback - Directory name, used as fallback title for index files.
 * @returns {{text: string, link: string}}
 */
function getPageItemConfig(filePath, baseLinkPath, isIndexFileForGroup = false, dirNameForIndexFallback = '') {
  const titleFromFrontmatter = getFrontmatterTitle(filePath);
  const fileNameWithoutExtension = path.basename(filePath).replace(/\.md$/, '');
  let text, link;
  let fallbackTextSource;

  if (isIndexFileForGroup) {
    fallbackTextSource = dirNameForIndexFallback;
    // For directory index files, link should end with a slash (e.g., /guide/)
    link = `${baseLinkPath}/`;
  } else {
    fallbackTextSource = fileNameWithoutExtension;
    // For regular pages, link is base + filename (e.g., /guide/page or /page for root files)
    link = path.posix.join(baseLinkPath, fileNameWithoutExtension);
  }

  if (titleFromFrontmatter !== null) {
    // If a title is found in frontmatter, use it directly, preserving its original casing.
    text = titleFromFrontmatter;
  } else {
    // Otherwise, generate a title by converting the filename or directory name to Title Case.
    text = nameToTitleCase(fallbackTextSource);
  }

  return { text, link };
}

/**
 * Recursively builds sidebar items for a given directory.
 * @param {string} currentDirPath - Absolute path to the current directory being processed.
 * @param {string} currentBaseLinkPath - The base URL path for items in this directory (e.g., /section).
 * @param {string} currentDirName - The name of the current directory.
 * @returns {object|null} A sidebar group object or null if the directory is empty/irrelevant.
 */
function buildSidebarItemsRecursive(currentDirPath, currentBaseLinkPath, currentDirName) {
  const childItems = [];
  let groupText = nameToTitleCase(currentDirName); // Default text for the group
  let groupLink; // Link for the group itself (if index.md is present)

  // Read and sort directory entries (files and subdirectories)
  const entries = fs.readdirSync(currentDirPath, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically

  // Check for an index file (_index.md or index.md) to define the group's text and link
  // NOTE: vitepress only supports `index.md` and NOT '_index.md'
  const indexFileEntry = entries.find(e => e.isFile() && (e.name === '_index.md' || e.name === 'index.md'));
  if (indexFileEntry) {
    const indexConfig = getPageItemConfig(
      path.join(currentDirPath, indexFileEntry.name),
      currentBaseLinkPath, // The link path for the group itself (e.g., /section)
      true, // This is an index file defining the group
      currentDirName // Fallback text is the directory name
    );
    groupText = indexConfig.text;
    groupLink = indexConfig.link; // Will be /section/
  }

  // Process regular Markdown files (pages), excluding index files already handled
  entries
    .filter(entry => entry.isFile() && entry.name.endsWith('.md') && !['index.md', '_index.md'].includes(entry.name))
    .forEach(fileEntry => {
      childItems.push(getPageItemConfig(
        path.join(currentDirPath, fileEntry.name),
        currentBaseLinkPath, // Files are relative to the current directory's base link (e.g. /section)
        false
      ));
    });

  // Process subdirectories recursively
  entries
    .filter(entry => entry.isDirectory() && !excludedDirs.includes(entry.name))
    .forEach(dirEntry => {
      const subDirPath = path.join(currentDirPath, dirEntry.name);
      // Construct the base link path for the subdirectory, ensuring forward slashes
      const subDirLinkPath = path.posix.join(currentBaseLinkPath, dirEntry.name);
      const subGroup = buildSidebarItemsRecursive(subDirPath, subDirLinkPath, dirEntry.name);
      if (subGroup) { // Only add if the subgroup is valid (has content or an index)
        childItems.push(subGroup);
      }
    });

  // If the group has a direct link (from index.md) or has child items, create the group object
  if (groupLink || childItems.length > 0) {
    const pathSegments = currentBaseLinkPath.split('/').filter(Boolean);
    return {
      text: groupText,
      link: groupLink, // Undefined if no index file created a link for the group
      items: childItems.length > 0 ? childItems : undefined,
      collapsible: childItems.length > 0 ? true : undefined, // Groups with items are collapsible
      // Collapse sub-sections by default (depth > 1).
      // e.g. /docs/section/ (depth 1) -> not collapsed by this rule
      //      /docs/section/subsection/ (depth 2) -> collapsed by this rule
      collapsed: pathSegments.length > 1,
    };
  }
  return null; // This directory doesn't form a sidebar group (no index, no children)
}

// --- Main Sidebar Generation Logic ---
function generateSidebar() {
  const sidebar = [];
  const rootEntries = fs.readdirSync(docsRoot, { withFileTypes: true });

  // 1. Add top-level Markdown files first (sorted alphabetically)
  rootEntries
    .filter(entry => entry.isFile() && entry.name.endsWith('.md') && !topLevelExcludedFiles.includes(entry.name))
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach(fileEntry => {
      sidebar.push(getPageItemConfig(
        path.join(docsRoot, fileEntry.name),
        '/', // Base link path for root files is '/'
        false
      ));
    });

  // 2. Process top-level directories to form sections/groups
  const allDirEntries = rootEntries.filter(entry => entry.isDirectory() && !excludedDirs.includes(entry.name));

  const orderedDirGroups = [];
  const unorderedDirGroups = [];

  // Use a Map to easily track processed directories and separate ordered from unordered
  const dirEntryMap = new Map(allDirEntries.map(entry => [entry.name, entry]));

  // Add directories based on TOP_LEVEL_SECTION_ORDER
  TOP_LEVEL_SECTION_ORDER.forEach(dirName => {
    if (dirEntryMap.has(dirName)) {
      orderedDirGroups.push(dirEntryMap.get(dirName));
      dirEntryMap.delete(dirName); // Remove from map to prevent re-processing
    }
  });

  // Any remaining directories in the map are unordered; sort them alphabetically
  // Convert map values to an array, then sort.
  const remainingDirs = Array.from(dirEntryMap.values()).sort((a, b) => a.name.localeCompare(b.name));
  unorderedDirGroups.push(...remainingDirs);

  // Combine ordered and unordered directory groups
  const finalDirProcessingOrder = [...orderedDirGroups, ...unorderedDirGroups];

  // Build sidebar groups for each top-level directory
  finalDirProcessingOrder.forEach(dirEntry => {
    const sectionPath = path.join(docsRoot, dirEntry.name);
    // Base link path for a top-level section, e.g., /linux, /android
    const sectionBaseLinkPath = `/${dirEntry.name}`;
    const sectionGroup = buildSidebarItemsRecursive(sectionPath, sectionBaseLinkPath, dirEntry.name);

    if (sectionGroup) {
      // Apply collapsed state for top-level sections based on configuration
      // This overrides the default collapsing behavior from buildSidebarItemsRecursive for these top items.
      if (COLLAPSED_SECTIONS_BY_DEFAULT.includes(dirEntry.name)) {
        sectionGroup.collapsed = true;
      } else if (sectionGroup.items && sectionGroup.items.length > 0) {
        // If not in COLLAPSED_SECTIONS_BY_DEFAULT, ensure it's not collapsed if it has items
        // (unless buildSidebarItemsRecursive already set it based on depth, but for top-level (depth 1) it wouldn't)
        sectionGroup.collapsed = false;
      } else {
        // No items, collapsed state is not strictly relevant but can be false or undefined
        sectionGroup.collapsed = undefined;
      }
      sidebar.push(sectionGroup);
    }
  });

  return sidebar;
}
// --- Script Execution ---
const sidebarConfig = generateSidebar();

// Ensure .vitepress directory exists
const configDir = path.join(docsRoot, '.vitepress');
if (!fs.existsSync(configDir)) {
  fs.mkdirSync(configDir, { recursive: true });
}
// Get the base name of the current script file for the auto-generation comment
const scriptFilename = path.basename(fileURLToPath(import.meta.url));
// Write the sidebar configuration to sidebar.js
const outputPath = path.join(configDir, 'sidebar.js');
const outputContent = `// This file is auto-generated by ${scriptFilename}
// Do not edit this file directly.

export const sidebar = ${JSON.stringify(sidebarConfig, null, 2)};
`;

fs.writeFileSync(outputPath, outputContent);
console.log(`✅ Sidebar configuration generated at ${path.relative(process.cwd(), outputPath)}`);