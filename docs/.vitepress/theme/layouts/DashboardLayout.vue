<script setup lang="ts">
import { Content } from 'vitepress'
import AppHeader from '../components/DashboardHeader.vue'
</script>

<template>
  <div class="dashboard-container">
    <AppHeader />
    <main class="dashboard-content">
      <Content />
    </main>
  </div>
</template>

<style scoped>
.dashboard-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--vp-c-bg);
}

.dashboard-content {
  flex: 1;
  min-height: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.dashboard-content :deep(.vp-doc) {
  padding: 0 !important;
  max-width: none !important;
}

.dashboard-content :deep(.VPFooter) {
  display: none !important;
}

.dashboard-content :deep(.content-container) {
  max-width: none !important;
}

</style>

<style>
/* Global styles to hide VitePress footer in dashboard */
.VPFooter,
.VPDocFooter,
.pager,
.prev-next,
.vp-doc-footer,
footer,
.VPDoc .container + *,
[class*="footer"],
[class*="Footer"] {
  display: none !important;
}

/* Note highlighting styles for content rendered inside this layout */
.note-highlight {
  padding-left: 0.5em;
  border-radius: 3px;
  transition: background-color 0.3s ease, color 0.3s ease;
  background-color: #fff8dc;
  border-left: 4px solid #f0c36d;
  color: #4a4a4a;
}

.dark .note-highlight {
  background-color: #4a4a2f;
  border-left: 4px solid #d6b353;
  color: #eee;
}

@media (max-width: 959px) {
  .dashboard-container {
    padding-top: 3rem;
  }

}

</style>
