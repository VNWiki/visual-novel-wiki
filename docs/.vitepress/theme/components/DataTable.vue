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
import { ref, onMounted, watch, nextTick } from 'vue'; // Added nextTick
import { FilterMatchMode } from '@primevue/core/api';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const props = defineProps({
  jsonPath: {
    type: String,
    required: true
  },
  columns: {
    type: Array,
    required: true
  },
  onHighlight: Function, // Function passed from parent .md to handle highlighting
  sortField: {
    type: String,
    default: null
  },
  sortOrder: {
    type: Number,
    default: null
  }
});

// Reactive state
const items = ref([]);
const first = ref(0);
const rows = ref(5); // Default rows per page

// Initial rowsPerPageOptions. This will be dynamically adjusted.
const rowsPerPageOptions = ref([5, 10, 20, 50, 100]);

// Watcher for items to dynamically update rowsPerPageOptions
watch(items, (newItems) => {
  if (!newItems || newItems.length === 0) {
    rowsPerPageOptions.value = [5]; // Default if no items
    if (rows.value !== 5) rows.value = 5;
    return;
  }

  const minStandardOption = 5;
  let dynamicOptions = [minStandardOption]; // Always include a base small option

  // Add standard options based on item count
  if (newItems.length > minStandardOption) dynamicOptions.push(10);
  if (newItems.length > 10) dynamicOptions.push(20);
  if (newItems.length > 20) dynamicOptions.push(50);
  if (newItems.length > 50) dynamicOptions.push(100);
  
  // Add an option that is the total number of items if it's not too large and not already covered
  const maxItemsOption = Math.min(newItems.length, 100); // Cap at 100 or total items
  if (maxItemsOption > 0 && !dynamicOptions.includes(maxItemsOption)) {
      dynamicOptions.push(maxItemsOption);
  }

  // Filter out options larger than the total number of items,
  // but always keep the smallest option (minStandardOption) if items exist.
  let filteredOptions = dynamicOptions.filter(option => option <= newItems.length);
  if (filteredOptions.length === 0 && newItems.length > 0) {
    filteredOptions = [Math.min(minStandardOption, newItems.length)]; // Ensure at least one valid option
  } else if (!filteredOptions.includes(minStandardOption) && newItems.length >= minStandardOption) {
    // Ensure the base minimum is there if applicable
    // filteredOptions.push(minStandardOption); // This line could add duplicates if not careful
  }
  
  // Ensure unique and sorted
  const finalOptions = [...new Set(filteredOptions)].sort((a, b) => a - b);

  if (finalOptions.length > 0) {
    // Only update if the options actually changed to prevent potential watcher loops
    if (JSON.stringify(rowsPerPageOptions.value) !== JSON.stringify(finalOptions)) {
      rowsPerPageOptions.value = finalOptions;
    }

    // Ensure current `rows.value` is still valid
    if (!finalOptions.includes(rows.value)) {
      // If current `rows` is no longer valid, set to the smallest available option
      // or the largest valid option if `rows` was trying to show more than available.
      if (rows.value > newItems.length) {
          rows.value = Math.max(...finalOptions.filter(opt => opt <= newItems.length), finalOptions[0]);
      } else {
          rows.value = finalOptions[0]; // Default to smallest
      }
    }
  } else if (newItems.length > 0) { // Fallback if finalOptions somehow became empty
      const fallbackOption = Math.min(minStandardOption, newItems.length);
      rowsPerPageOptions.value = [fallbackOption];
      rows.value = fallbackOption;
  }


}, { deep: true, immediate: true }); // immediate: true to run on mount


const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS }
});
const selectedRow = ref(null);

// Helper: lowercase all keys in an object
function keysToLowerCase(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
  );
}

// Custom highlight logic called on row click
async function onRowClick(event) { // Made async
  if (event.data) {
    // Defer the custom logic to allow PrimeVue to handle its UI updates first
    await nextTick(); // Await nextTick

    if (props.onHighlight) {
      const noteReference = event.data.notes || ''; // Assuming 'notes' field holds the reference
      props.onHighlight(noteReference);
    }
    selectedRow.value = event.data; // Update selection after potential UI updates
  }
}

function clearFilters() {
  filters.value.global.value = null;
}

watch(
  () => filters.value.global.value,
  () => {
    first.value = 0; // Reset paginator to first page on global filter change
  }
);

// Load JSON data from public folder, with keys lowercased
onMounted(async () => {
  // props.jsonPath should be like "vn_list.json" or "data/my_data.json" (relative to public)
  // Vite's import.meta.env.BASE_URL handles base path for deployments (e.g. to subfolder)
  const fullPath = `${import.meta.env.BASE_URL}${props.jsonPath.startsWith('/') ? props.jsonPath.substring(1) : props.jsonPath}`;
  
  console.log('DataTable: Fetching from constructed fullPath:', fullPath);

  try {
    const res = await fetch(fullPath);
    if (!res.ok) {
      console.error('DataTable: Fetch response status:', res.status, 'for URL:', res.url);
      throw new Error(`Failed to load JSON from ${fullPath}: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    items.value = data.map((item, index) => ({
      ...keysToLowerCase(item),
      id: index // PrimeVue DataTable needs a unique dataKey for optimal performance and selection
    }));
  } catch (err) {
    console.error('DataTable: Error loading JSON:', err);
    items.value = []; // Set to empty array on error to prevent table issues
  }
});
</script>

<template>
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
    :scrollable="true"
    :scrollHeight="'700px'"
    :paginator="true"
    :first="first"
    :sortField="sortField"
    :sortOrder="sortOrder"
    v-model:rows="rows"
    :rowsPerPageOptions="rowsPerPageOptions"
    @page="e => (first = e.first)"
    responsiveLayout="scroll"
    dataKey="id"
    selectionMode="single"
    :selection="selectedRow"
    @update:selection="selectedRow = $event"
    @row-click="onRowClick"
    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    currentPageReportTemplate="{first} to {last} of {totalRecords}"
  >
    <Column
      v-for="col in columns"
      :key="col.field"
      :field="col.field"
      :header="col.header"
      :sortable="col.sortable ?? false"
    >
      <template #body="slotProps">
        <!-- 1. Check for col.withLink (new feature) -->
        <template v-if="col.withLink">
          <template v-if="slotProps.data[col.withLink]">
            <!-- URL exists, render the link -->
            <a
              :href="slotProps.data[col.withLink]"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 hover:underline"
            >
              {{ slotProps.data[col.field] }}
            </a>
          </template>
          <template v-else>
            <!-- URL from col.withLink is missing or falsy. Render as plain text or code. -->
            <template v-if="col.isCode">
              <code class="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">
                {{ slotProps.data[col.field] }}
              </code>
            </template>
            <template v-else>
              {{ slotProps.data[col.field] }}
            </template>
          </template>
        </template>

        <!-- 2. Else, check for col.isLink (existing feature) -->
        <template v-else-if="col.isLink">
          <a
            :href="slotProps.data[col.field]"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-600 hover:underline"
          >
            {{ slotProps.data[col.field] }}
          </a>
        </template>

        <!-- 3. Else, check for col.isCode (existing feature) -->
        <template v-else-if="col.isCode">
          <code class="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">
            {{ slotProps.data[col.field] }}
          </code>
        </template>

        <!-- 4. Else, render as plain text (default) -->
        <template v-else>
          {{ slotProps.data[col.field] }}
        </template>
      </template>
    </Column>
  </DataTable>
</template>

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
  color: var(--p-text-muted-color, #6c757d); /* PrimeVue variable or fallback */
}

.p-input-icon-left input {
  padding-left: 2.5rem !important;
  height: 2.5rem; /* consistent height */
  font-size: 1rem;
  width: 100%; /* Ensure input takes full width of its span container */
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
  /* justify-content: space-between; -- Removed to allow search to take available space */
  align-items: center;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
}

/* Give search input more flexibility */
.p-input-icon-left.w-64 {
  width: auto; /* Override fixed width */
  flex-grow: 1; /* Allow it to grow */
  min-width: 150px; /* Minimum comfortable width */
}
</style>