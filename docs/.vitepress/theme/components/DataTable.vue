<!-- DataTable.vue -->
 
<!--
  Use this component to make an interactive table in your .md files. We use JSON as our table data.

  Usage Example:

  <DataTable 
    jsonPath="/data/my-data.json" 
    :columns="[
      { field: 'visual novel', header: 'Visual Novel', sortable: true },
      { field: 'windows', header: 'Windows', sortable: true },
      { field: 'mac', header: 'Mac', sortable: true },
      { field: 'linux', header: 'Linux', sortable: true },
      { field: 'steam deck', header: 'Steam Deck', sortable: true },
      { field: 'wineprefix', header: 'Wineprefix', sortable: true },
      { field: 'notes', header: 'Notes', sortable: true },
      { field: 'game engine', header: 'Game engine', sortable: true },
      { field: 'wine version', header: 'Wine version', sortable: true }
    ]"
  />

  or, declare variables within the <script setup> tag, then pass the props like so:

  <script setup>
  import MyDataTable from '/.vitepress/theme/components/DataTable.vue'
  
  const vnColumns = [
    { field: 'visual novel', header: 'Visual Novel', sortable: true },
    { field: 'windows', header: 'Windows', sortable: true },
     ...more objects here
  ]
  </script>
  
  <MyDataTable jsonPath="/vn_list.json" :columns="vnColumns" />

  Load in the data as JSON within public/*.json. The keys correspond to the field names.

  Expected JSON format example (keys are case-insensitive and will be lowercased automatically), just in case anything screws up casing:

  [
    {
      "Visual Novel": "Example Game",
      "Windows": "Yes",
      "Mac": "No",
      "Linux": "Partial",
      "Steam Deck": "No",
      "Wineprefix": "prefix1",
      "Notes": "1,3",
      "Game engine": "Ren'Py",
      "Wine version": "7.0"
    },
    ...
  ]
-->

<script setup>
import { ref, onMounted, watch } from 'vue'
import { FilterMatchMode } from '@primevue/core/api'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const props = defineProps({
  jsonPath: { // This prop will now expect a path RELATIVE to the public directory, e.g., "vn_list.json"
    type: String,
    required: true
  },
  columns: {
    type: Array,
    required: true
  },
  onHighlight: Function
})

// Reactive state
const items = ref([])
const first = ref(0)
const rows = 6
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS }
})
const selectedRow = ref(null)

// Helper: lowercase all keys in an object
function keysToLowerCase(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
  )
}

// Custom highlight logic called on row click
function onRowClick(event) {
  if (props.onHighlight && event.data) { // Use props.onHighlight
    const noteReference = event.data.notes || ''
    props.onHighlight(noteReference)      // Use props.onHighlight
    selectedRow.value = event.data
  }
}

function clearFilters() {
  filters.value.global.value = null
}

watch(
  () => filters.value.global.value,
  () => {
    first.value = 0
  }
)

// Load JSON data from public folder, with keys lowercased
onMounted(async () => {
  // Construct the full path using import.meta.env.BASE_URL
  // props.jsonPath should be like "vn_list.json" or "data/my_data.json" (relative to public)
  const fullPath = `${import.meta.env.BASE_URL}${props.jsonPath.startsWith('/') ? props.jsonPath.substring(1) : props.jsonPath}`;
  
  console.log('Fetching from constructed fullPath:', fullPath);

  try {
    const res = await fetch(fullPath); // Use the constructed fullPath
    if (!res.ok) {
      console.error('Fetch response status:', res.status, 'for URL:', res.url);
      throw new Error(`Failed to load JSON: ${res.status}`);
    }
    const data = await res.json();
    items.value = data.map((item, index) => ({
      ...keysToLowerCase(item),
      id: index
    }));
  } catch (err) {
    console.error('Error loading JSON:', err);
  }
});
</script>

<template>
  <!-- ... your template remains the same ... -->
  <div class="mb-2 flex items-center gap-3">
    <Button
      icon="pi pi-filter-slash"
      label="Clear"
      outlined
      @click="clearFilters"
      aria-label="Clear search filters"
      class="clear-filters-btn"
    />

    <span class="p-input-icon-left w-64">
      <i class="pi pi-search" aria-hidden="true" />
      <InputText
        v-model="filters.global.value"
        placeholder="Search..."
        aria-label="Search table"
      />
    </span>
  </div>

  <DataTable
    :value="items"
    :filters="filters"
    :globalFilterFields="columns.map(c => c.field)"
    :paginator="true"
    :rows="rows"
    :first="first"
    @page="e => (first.value = e.first)"
    responsiveLayout="scroll"
    dataKey="id"
    selectionMode="single"
    :selection="selectedRow"
    @update:selection="selectedRow = $event"
    @row-click="onRowClick"
  >
    <Column
      v-for="col in columns"
      :key="col.field"
      :field="col.field"
      :header="col.header"
      :sortable="col.sortable ?? false"
    >
      <template #body="slotProps">
        <template v-if="col.isLink">
          <a
            :href="slotProps.data[col.field]"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-600 hover:underline"
          >
            {{ slotProps.data[col.field] }}
          </a>
        </template>
        <template v-else-if="col.isCode">
          <code class="bg-gray-100 px-1 py-0.5 rounded text-sm">
            {{ slotProps.data[col.field] }}
          </code>
        </template>
        <template v-else>
          {{ slotProps.data[col.field] }}
        </template>
      </template>
    </Column>
  </DataTable>
</template>

<!-- ... your style remains the same ... -->
<style scoped>
/* Fix icon inside input */
.p-input-icon-left {
  position: relative;
  display: inline-block;
}

.p-input-icon-left > .pi {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--primary-color, #495057);
}

.p-input-icon-left input {
  padding-left: 2.5rem !important;
  height: 2.5rem; /* consistent height */
  font-size: 1rem;
}

/* Clear Filters button sizing & spacing */
.clear-filters-btn {
  height: 2.5rem; /* same as input height */
  font-size: 1rem;
  padding: 0 0.75rem;
  white-space: nowrap;
  flex-shrink: 0;
}

/* Ensure gap between button and input */
.flex {
    display: flex;
}

.mb-2.flex {
  gap: 1rem; /* more breathing room */
  justify-content: space-between;
  align-items: center;
}

</style>