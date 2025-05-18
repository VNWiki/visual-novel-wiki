<!-- DownloadButton.vue -->

<!-- 

  A download button component that provides a link to download a file.
  It also fetches and displays the SHA256 checksum of the file.

-->

<script setup>
import { ref, onMounted, watch, computed } from 'vue'

const props = defineProps({
  filePath: { // e.g., "texts/d3dcompiler.yml" (relative to public)
    type: String,
    required: true,
  },
})

const checksums = ref({})
const error = ref(null)
const loading = ref(true)

// Path to checksums.json RELATIVE TO THE PUBLIC FOLDER
const CHECKSUMS_RELATIVE_PATH = 'checksums/checksums.json'; 

async function loadChecksums() {
  loading.value = true
  error.value = null
  try {
    // Construct the full path using import.meta.env.BASE_URL
    const fullChecksumsPath = `${import.meta.env.BASE_URL}${CHECKSUMS_RELATIVE_PATH}?t=${Date.now()}`;
    console.log('Fetching checksums from:', fullChecksumsPath);

    const res = await fetch(fullChecksumsPath);
    if (!res.ok) {
      console.error('Checksum fetch response status:', res.status, 'for URL:', res.url);
      throw new Error(`Failed to load checksums: ${res.status}`);
    }
    checksums.value = await res.json();
  } catch (e) {
    console.error('Error in loadChecksums:', e);
    error.value = e.message || 'Unknown error during checksum load';
  } finally {
    loading.value = false;
  }
}

onMounted(loadChecksums);

const checksum = computed(() => {
  // props.filePath is like "texts/d3dcompiler.yml"
  // checksums.value keys should also be like "texts/d3dcompiler.yml"
  return checksums.value[props.filePath] || null;
});

const downloadUrl = computed(() => {
  // This part should work correctly with the <base> tag for <a> hrefs
  // props.filePath e.g. "texts/d3dcompiler.yml"
  // VitePress/Vite will ensure paths starting with / in <a> hrefs are base-prefixed
  // So, if props.filePath is "texts/foo.yml", this becomes "/texts/foo.yml"
  // which then becomes "/visual-novel-wiki/texts/foo.yml"
  const path = props.filePath.startsWith('/') ? props.filePath.slice(1) : props.filePath;
  return `${import.meta.env.BASE_URL}${path}`; // Make it fully explicit for robustness
});

const filename = computed(() => {
  const parts = props.filePath.split('/');
  return parts[parts.length - 1] || props.filePath;
});
</script>

<template>
  <div class="download-wrapper">

    <a
      v-if="!loading && !error && checksum"
      :href="downloadUrl" 
      :download="filename"
      class="download-button"
      :aria-label="`Download file ${filename}`"
    >
      <svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12.18 44.465c-1.219 0-2.04.867-2.04 2.086s.821 2.11 2.04 2.11h31.593c1.243 0 2.086-.892 2.086-2.11c0-1.219-.843-2.086-2.086-2.086h-15.28c.398-.117.75-.328 1.077-.68L45.086 28.27c.469-.493.68-1.008.68-1.57c0-1.173-.844-2.063-2.04-2.063a2.2 2.2 0 0 0-1.5.586l-5.25 5.18l-7.054 7.71l.187-5.015V9.426c0-1.219-.89-2.086-2.109-2.086s-2.086.867-2.086 2.086v23.672l.164 5.039l-7.055-7.735l-5.25-5.18c-.375-.374-.937-.585-1.5-.585c-1.171 0-2.039.89-2.039 2.062c0 .563.235 1.078.704 1.57L26.43 43.786a2.4 2.4 0 0 0 1.101.68Z"/></svg>
      <span class="text">Download</span>
    </a>

    <div v-else-if="loading" class="loading-message">
      Loading checksums...
    </div>

    <div v-else-if="error" class="error-message">
      Error loading checksums: {{ error }}
    </div>

    <div v-if="checksum && !loading && !error" class="checksum-container" aria-live="polite">
      <svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M23.664 52.399c2.953 2.976 5.695 2.953 8.649 0l3.609-3.587c.375-.351.703-.492 1.195-.492h5.063c4.195 0 6.14-1.922 6.14-6.14v-5.063c0-.492.141-.82.492-1.195l3.563-3.61c3-2.953 2.976-5.695 0-8.648l-3.563-3.61c-.351-.35-.492-.702-.492-1.171v-5.086c0-4.172-1.922-6.14-6.14-6.14h-5.063c-.492 0-.82-.118-1.195-.47l-3.61-3.585c-2.953-2.977-5.695-2.953-8.648 0l-3.61 3.586c-.35.351-.702.468-1.171.468h-5.086c-4.195 0-6.14 1.922-6.14 6.14v5.087c0 .469-.118.82-.47 1.172l-3.585 3.61c-2.977 2.952-2.953 5.694 0 8.648l3.586 3.609c.351.375.468.703.468 1.195v5.063c0 4.195 1.946 6.14 6.14 6.14h5.087c.469 0 .82.141 1.172.492Zm.375-12.61c-.726 0-1.195-.234-1.547-.633l-7.828-8.695a2.03 2.03 0 0 1-.515-1.336c0-1.102.843-1.922 2.039-1.922c.632 0 1.101.211 1.523.656l6.21 6.868l12.071-16.993c.469-.68.938-.96 1.758-.96c1.148 0 1.969.843 1.969 1.945c0 .398-.164.867-.422 1.242L25.633 39.063c-.352.445-.89.726-1.594.726"/></svg>
      <code id="checksum">SHA256: {{ checksum }}</code>
    </div>

  </div>
</template>

<style scoped>
.download-wrapper {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  margin: 1.25em 0;
  gap: 0.45em;
}

.download-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  width: fit-content;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
  cursor: pointer;
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
  text-decoration: none;
  border-color: var(--vp-button-alt-border);
  color: var(--vp-button-alt-text);
  background-color: var(--vp-button-alt-bg);
}

.download-button:hover {
  border-color: var(--vp-button-alt-hover-border);
  color: var(--vp-button-alt-hover-text);
  background-color: var(--vp-button-alt-hover-bg);
  text-decoration: none !important;
}

.download-button:active {
  border-color: var(--vp-button-alt-active-border);
  color: var(--vp-button-alt-active-text);
  background-color: var(--vp-button-alt-active-bg);
}

.download-button svg {
  width: 16px;
  height: 16px;
  margin-right: 6px;
  flex-shrink: 0;
}

.checksum-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  word-break: break-all;
  user-select: text;
}

.checksum-container svg {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  opacity: 0.7;
}

.checksum-container svg path {
  fill: var(--vp-c-brand-1);
}

.dark .checksum-container svg path {
  fill: var(--vp-c-brand-1);
}

.checksum-container code {
  background-color: var(--vp-c-bg-soft);
  border-radius: 4px;
  padding: 0.25em 0.5em;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.75rem;
  line-height: 1.2;
  border: 1px solid var(--vp-c-divider);
}

.loading-message,
.error-message {
  font-size: 0.875rem;
  color: var(--vp-c-text-3);
}
.error-message {
  color: var(--vp-c-error);
}
</style>