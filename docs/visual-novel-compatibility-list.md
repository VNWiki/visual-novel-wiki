---
title : 'Visual Novel Compatibility List'
layout: dashboard-layout
navbar: false
sidebar: false
outline: false
---

<script setup>
import VNList from '@components/VNList.vue'

const vnColumns = [
  { field: 'visual novel', header: 'Visual Novel', sortable: true, withLink: 'visual novel link' },
  { field: 'windows', header: 'Windows', sortable: true },
  { field: 'mac', header: 'Mac', sortable: true },
  { field: 'linux', header: 'Linux', sortable: true },
  { field: 'steam deck', header: 'Steam Deck', sortable: true },
  { field: 'wineprefix', header: 'Wineprefix', sortable: true, isCode: true},
  { field: 'notes', header: 'Notes' },
  { field: 'game engine', header: 'Game engine', sortable: true },
  { field: 'wine version', header: 'Wine version', isCode: true }
]
</script>

<ClientOnly>
  <VNList 
    jsonPath="vn_list.json" 
    notesPath="vn_list_notes.json"
    :columns="vnColumns"
    sortField="visual novel"
    :sortOrder="1"
    filterField="visual novel"
  />
</ClientOnly>




<style scoped>
.note-highlight {
  padding-left: 0.5em;
  border-radius: 3px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.note-highlight {
  background-color: #fff8dc;      /* soft, warm light yellow */
  border-left: 4px solid #f0c36d; /* gentle golden border */
  color: #4a4a4a;                /* dark gray text for good contrast */
}

.dark .note-highlight {
  background-color: #4a4a2f;     /* richer dark olive */
  border-left: 4px solid #d6b353;
  color: #eee;
}

footer {
  display: none !important;
}
</style>
