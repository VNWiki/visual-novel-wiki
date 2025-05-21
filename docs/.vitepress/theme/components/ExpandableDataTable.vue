<script setup>
import { ref, onMounted, watch, nextTick, computed } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';

const props = defineProps({
  jsonPath: {
    type: String,
    required: true
  },
  columns: {
    type: Array,
    required: true
  },
  onHighlight: Function,
  sortField: {
    type: String,
    default: null
  },
  sortOrder: {
    type: Number, // 1 for asc, -1 for desc
    default: null
  }
});

// --- Reactive State ---
const items = ref([]);
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS }
});
const selectedRow = ref(null);
const dialogVisible = ref(false);

// Helper: lowercase all keys in an object (recursive for nested objects if any)
function keysToLowerCase(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;
  if (Array.isArray(obj)) return obj.map(keysToLowerCase);
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k.toLowerCase(), keysToLowerCase(v)])
  );
}

async function onRowClick(event) {
  if (event.data) {
    selectedRow.value = event.data;
    if (props.onHighlight) {
      await nextTick();
      const noteReference = event.data.notes || event.data.note || '';
      props.onHighlight(noteReference);
    }
  }
}

function clearFilters() {
  filters.value.global.value = null;
}

// No longer need to watch filters to reset pagination,
// but filtering itself will still work.

onMounted(async () => {
  const fullPath = `${import.meta.env.BASE_URL}${props.jsonPath.startsWith('/') ? props.jsonPath.substring(1) : props.jsonPath}`;
  console.log('DataTable: Fetching from constructed fullPath:', fullPath);

  try {
    const res = await fetch(fullPath);
    if (!res.ok) {
      console.error('DataTable: Fetch response status:', res.status, 'for URL:', res.url);
      throw new Error(`Failed to load JSON from ${fullPath}: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    if (!Array.isArray(data)) {
      console.error('DataTable: Fetched data is not an array. Path:', fullPath, 'Data:', data);
      throw new Error('Fetched data is not an array.');
    }
    items.value = data.map((item, index) => ({
      ...keysToLowerCase(item),
      id: item.id || item.Id || item.ID || index
    }));
  } catch (err) {
    console.error('DataTable: Error loading or processing JSON:', err);
    items.value = [];
  }
});

// Computed property for global filter fields, ensuring they are lowercase
const globalFilterFields = computed(() => {
  return props.columns.map(c => c.field.toLowerCase());
});

</script>

<template>
  <Button label="Expand Table" icon="pi pi-table" @click="dialogVisible = true" class="expand-table"/>

  <Dialog
    v-model:visible="dialogVisible"
    header="Data Table"
    :style="{ width: '80vw' }"
    maximizable
    modal
    :contentStyle="{ height: '80vh' }"
  >
    <div class="mb-3 flex flex-wrap items-center justify-between gap-3">
      <span class="p-input-icon-left">
        <i class="pi pi-search" aria-hidden="true" />
        <InputText
          v-model="filters.global.value"
          placeholder="Search..."
          aria-label="Search table"
          class="w-full sm:w-auto"
        />
      </span>
      <Button
        icon="pi pi-filter-slash"
        label="Clear"
        outlined
        @click="clearFilters"
        aria-label="Clear search filters"
        class="clear-filters-btn"
      />
    </div>

    <DataTable
      :value="items"
      :filters="filters"
      :globalFilterFields="globalFilterFields"
      scrollable
      scrollHeight="flex"
      responsiveLayout="scroll"
      dataKey="id"
      selectionMode="single"
      v-model:selection="selectedRow"
      @row-click="onRowClick"
      :sortField="props.sortField ? props.sortField.toLowerCase() : null"
      :sortOrder="props.sortOrder"
      removableSort
      stripedRows
      size="small"
      :virtualScrollerOptions="{ itemSize: 50, scrollDirection: 'both' }"
      tableStyle="min-width: 50rem"
      columnResizeMode="fit"
    >
      <template #empty>
        No data found.
      </template>
      <template #loading>
        Loading data. Please wait.
      </template>

      <Column
        v-for="col in columns"
        :key="col.field.toLowerCase()"
        :field="col.field.toLowerCase()"
        :header="col.header"
        :sortable="col.sortable ?? false"
        style="min-width: 150px; whiteSpace:nowrap"
      >
        <template #body="slotProps">
          <!-- START MODIFIED SECTION FOR col.withLink -->
          <template v-if="col.withLink">
            <template v-if="slotProps.data && slotProps.data[col.withLink]">
              <!-- URL from col.withLink exists, render the link -->
              <a
                :href="slotProps.data[col.withLink]"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 hover:underline"
              >
                <!-- Link text: main field's value, or column header as fallback -->
                {{ slotProps.data[col.field.toLowerCase()] !== undefined ? slotProps.data[col.field.toLowerCase()] : col.header }}
              </a>
            </template>
            <template v-else>
              <!-- col.withLink is defined, but the URL (slotProps.data[col.withLink]) is missing or falsy. -->
              <!-- Fallback to displaying the main field's content (col.field) as text/code, or N/A if that's also undefined. -->
              <template v-if="slotProps.data && slotProps.data[col.field.toLowerCase()] !== undefined">
                <template v-if="col.isCode">
                  <code class="bg-gray-200 dark:bg-gray-700 px-1.5 py-1 rounded text-xs">
                    {{ slotProps.data[col.field.toLowerCase()] }}
                  </code>
                </template>
                <template v-else>
                  {{ slotProps.data[col.field.toLowerCase()] }}
                </template>
              </template>
              <template v-else>
                N/A
              </template>
            </template>
          </template>
          <!-- END MODIFIED SECTION FOR col.withLink -->

          <!-- ELSE (col.withLink is NOT defined), use existing logic of this component -->
          <template v-else>
            <template v-if="slotProps.data && slotProps.data[col.field.toLowerCase()] !== undefined">
              <template v-if="col.isLink">
                <a
                  :href="slotProps.data[col.field.toLowerCase()]"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-600 hover:underline"
                >
                  {{ slotProps.data[col.field.toLowerCase()] }}
                </a>
              </template>
              <template v-else-if="col.isCode">
                <code class="bg-gray-200 dark:bg-gray-700 px-1.5 py-1 rounded text-xs">
                  {{ slotProps.data[col.field.toLowerCase()] }}
                </code>
              </template>
              <template v-else>
                {{ slotProps.data[col.field.toLowerCase()] }}
              </template>
            </template>
            <template v-else>
              N/A
            </template>
          </template>
        </template>
      </Column>
    </DataTable>
    <template #footer>
        <Button label="Close" icon="pi pi-times" @click="dialogVisible = false" text />
    </template>
  </Dialog>
</template>

<style scoped>
:deep(.p-datatable .p-datatable-tbody > tr > td) {
  padding: 0.5rem 0.75rem;
}
:deep(.p-datatable .p-datatable-thead > tr > th) {
  padding: 0.5rem 0.75rem;
}

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

.expand-table {
  margin: 16px 0; /* same as .vp-doc margins*/
}

/* inherit .vp-docs style (vitepress default theme-ing) */
a {
    font-weight: 500;
    color: var(--vp-c-brand-1);
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color 0.25s,
    opacity 0.25s;
}

:not(pre) > code {
    border-radius: 4px;
    padding: 3px 6px;
    background-color: var(--vp-code-bg);
    transition: color 0.25s,
    background-color 0.5s;
}

:not(pre, h1, h2, h3, h4, h5, h6) > code {
    font-size: var(--vp-code-font-size);
    color: var(--vp-code-color);
}

pre, code, kbd, samp {
    font-family: var(--vp-font-family-mono);
}

</style>