<!--
  Minimal DataTable component for displaying JSON data.
  
  Usage:
  <VNList 
    jsonPath="vn_list.json" 
    :columns="[
      { field: 'visual novel', header: 'Visual Novel', sortable: true },
      { field: 'windows', header: 'Windows', sortable: true },
      { field: 'mac', header: 'Mac', sortable: true }
    ]"
  />
-->

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { FilterMatchMode } from '@primevue/core/api'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dialog from 'primevue/dialog'
import { searchQuery, tableStats } from '../dashboardStore'

const props = defineProps({
  jsonPath: {
    type: String,
    required: true
  },
  columns: {
    type: Array,
    required: true
  },
  sortField: {
    type: String,
    default: null
  },
  sortOrder: {
    type: Number,
    default: null
  },
  filterField: {
    type: String,
    default: 'visual novel'
  },
  notesPath: {
    type: String,
    default: 'notes.json'
  }
})

const items = ref([])
const notes = ref({})
const showNotesDialog = ref(false)
const selectedNotes = ref([])
const selectedVN = ref('')
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS }
})

// Parse notes from text like "[4]" or "[5], [18]" or "[5],[38]" or just "18" or "5, 18"
function parseNoteReferences(text) {
  if (!text) return []
  
  // First try to extract bracketed numbers like [4], [18]
  const bracketMatches = text.match(/\[(\d+)\]/g)
  if (bracketMatches) {
    return bracketMatches.map(m => m.replace(/[\[\]]/g, ''))
  }
  
  // If no brackets, try to extract plain numbers separated by commas, spaces, etc
  const plainMatches = text.match(/\d+/g)
  if (plainMatches) {
    return plainMatches
  }
  
  return []
}

// Open notes modal
function openNotesDialog(noteRefs, vnName) {
  const noteIds = parseNoteReferences(noteRefs)
  selectedVN.value = vnName || 'Visual Novel'
  selectedNotes.value = noteIds.map(id => ({
    id,
    text: notes.value[id] || `Note ${id} not found`
  }))
  showNotesDialog.value = true
}

// Sync searchQuery from store to filters
watch(searchQuery, (newValue) => {
  filters.value.global.value = newValue
})

// Update table stats
const filteredItems = computed(() => {
  if (!filters.value.global.value) return items.value
  const query = filters.value.global.value.toLowerCase()
  return items.value.filter(item => 
    String(item[props.filterField] || '').toLowerCase().includes(query)
  )
})

watch([items, filteredItems], () => {
  tableStats.value.total = items.value.length
  tableStats.value.filtered = filteredItems.value.length
}, { immediate: true })

function keysToLowerCase(obj) {
  if (typeof obj !== 'object' || obj === null) return obj
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
  )
}

onMounted(async () => {
  // Load VN data
  const fullPath = `${import.meta.env.BASE_URL}${props.jsonPath.startsWith('/') ? props.jsonPath.substring(1) : props.jsonPath}`
  
  try {
    const res = await fetch(fullPath)
    if (!res.ok) {
      throw new Error(`Failed to load JSON from ${fullPath}`)
    }
    const data = await res.json()
    items.value = data.map((item, index) => ({
      ...keysToLowerCase(item),
      id: index
    }))
  } catch (err) {
    console.error('VNList: Error loading JSON:', err)
    items.value = []
  }
  
  // Load notes
  try {
    const notesPath = `${import.meta.env.BASE_URL}${props.notesPath.startsWith('/') ? props.notesPath.substring(1) : props.notesPath}`
    const notesRes = await fetch(notesPath)
    if (notesRes.ok) {
      notes.value = await notesRes.json()
    }
  } catch (err) {
    console.error('VNList: Error loading notes:', err)
  }
})
</script>

<template>
  <div class="vn-list-wrapper">
    <DataTable
      :value="filteredItems"
      :sortField="sortField"
      :sortOrder="sortOrder"
      scrollable
      scrollHeight="flex"
      dataKey="id"
    >
      <template #empty>
        No visual novels found.
      </template>
      <Column
        v-for="col in columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
        :sortable="col.sortable ?? false"
      >
        <template #body="slotProps">
          <template v-if="col.field === 'notes' && slotProps.data[col.field]">
            <button 
              class="notes-button" 
              @click="openNotesDialog(slotProps.data[col.field], slotProps.data['visual novel'])"
              :title="slotProps.data[col.field]"
            >
              <i class="pi pi-info-circle"></i>
            </button>
          </template>
          <template v-else-if="col.withLink && slotProps.data[col.withLink]">
            <a :href="slotProps.data[col.withLink]" target="_blank" rel="noopener noreferrer">
              {{ slotProps.data[col.field] }}
            </a>
          </template>
          <template v-else-if="col.isCode">
            <code>{{ slotProps.data[col.field] }}</code>
          </template>
          <template v-else>
            {{ slotProps.data[col.field] }}
          </template>
        </template>
      </Column>
    </DataTable>
    
    <Dialog 
      v-model:visible="showNotesDialog" 
      modal 
      dismissableMask
      header="Notes" 
      :style="{ width: '50rem' }"
      :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    >
      <template #header>
        <div class="dialog-header">
          <h3>{{ selectedVN }}</h3>
          <p class="vn-subtitle">Notes</p>
        </div>
      </template>
      <div class="notes-content">
        <div v-for="note in selectedNotes" :key="note.id" class="note-item">
          <span class="note-number">[{{ note.id }}]</span>
          <span class="note-text" v-html="note.text"></span>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<style scoped>
.vn-list-wrapper {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.vn-list-wrapper :deep(.p-datatable) {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.vn-list-wrapper :deep(.p-datatable-wrapper) {
  flex: 1;
  min-height: 0;
  overflow: auto;
}

.vn-list-wrapper :deep(.p-datatable-thead) {
  position: sticky;
  top: 0;
  z-index: 1;
}

.notes-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  cursor: pointer;
  color: var(--vp-c-brand-1);
  transition: all 0.2s;
}

.notes-button:hover {
  background: var(--vp-c-brand-1);
  color: white;
}

.notes-button i {
  font-size: 1rem;
}

.dialog-header {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.dialog-header h3 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.vn-subtitle {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.notes-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.note-item {
  display: flex;
  gap: 0.75rem;
  padding: 0.75rem;
  background: var(--vp-c-bg-soft);
  border-radius: 4px;
  border-left: 3px solid var(--vp-c-brand-1);
}

.note-number {
  font-weight: 600;
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.note-text {
  flex: 1;
  line-height: 1.6;
}

.note-text :deep(code) {
  background: var(--vp-c-bg);
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-size: 0.9em;
}

.note-text :deep(a) {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
}

a {
    color: var(--vp-c-brand-1);
    text-decoration: underline;
}

a:hover {
    color: var(--vp-c-brand-2);
}
</style>
