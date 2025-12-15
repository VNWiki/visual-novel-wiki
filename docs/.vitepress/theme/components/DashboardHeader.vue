<script setup>
import { searchQuery, tableStats } from '../dashboardStore'
import InputText from 'primevue/inputtext'

const legendItems = [
  { symbol: '✅', meaning: 'Verified to work' },
  { symbol: '⚠️', meaning: 'Playable, with some issues' },
  { symbol: '❓', meaning: 'Unknown' },
  { symbol: '❌', meaning: 'Broken' },
  { symbol: 'N/A', meaning: 'Not applicable' }
]
</script>

<template>
  <header class="dashboard-header">
    <div class="header-top">
      <div class="info">
        <h1>Visual Novel Compatibility List</h1>
        <small>
          {{ tableStats.filtered }} / {{ tableStats.total }} entries
        </small>
      </div>
      
      <div class="search-container">
        <InputText 
          v-model="searchQuery" 
          placeholder="Search visual novels..."
          class="search-input"
        />
      </div>
    </div>

    <div class="legend">
      <div v-for="item in legendItems" :key="item.symbol" class="legend-item">
        <span class="symbol">{{ item.symbol }}</span>
        <span class="meaning">{{ item.meaning }}</span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.dashboard-header {
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
  gap: 1rem;
  background: var(--vp-c-bg);
  flex-shrink: 0;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.info {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 250px;
}

.search-container {
  flex-shrink: 0;
}

.search-input {
  width: 300px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  transition: border-color 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}

.info h1 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.2;
}

.info small {
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.legend {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding: 0.75rem 0 0.25rem;
  border-top: 1px solid var(--vp-c-divider-light);
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
}

.legend-item .symbol {
  font-size: 1.1rem;
  font-weight: 500;
}

.legend-item .meaning {
  color: var(--vp-c-text-2);
}

@media (max-width: 768px) {
  .legend {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
