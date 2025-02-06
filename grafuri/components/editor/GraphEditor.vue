<script setup lang="ts">
import { type Graph } from '../types'
import { ref } from 'vue'
import AGTabs from '../AGTabs.vue'
import GraphEditorNodes from './GraphEditorNodes.vue'
import GraphEditorEdges from './GraphEditorEdges.vue'
import GraphEditorImportExport from './GraphEditorImportExport.vue'

const graph = defineModel<Graph>({ required: true })

enum ActiveTab {
  Nodes = 'nodes',
  Edges = 'edges',
  ExportImport = 'export-import',
}

const activeTab = ref<ActiveTab>(ActiveTab.Nodes)

const tabs = [
  {
    id: ActiveTab.Nodes,
    label: 'Vârfuri',
  },
  {
    id: ActiveTab.Edges,
    label: 'Muchii',
  },
  {
    id: ActiveTab.ExportImport,
    label: 'Export/Import',
  },
]
</script>

<template>
  <div class="flex flex-col">
    <AGTabs v-model="activeTab" :tabs="tabs" class="shrink-0" />
    <div class="grow overflow-auto p-4">
      <GraphEditorNodes v-if="activeTab === ActiveTab.Nodes" v-model="graph" />
      <GraphEditorEdges v-else-if="activeTab === ActiveTab.Edges" v-model="graph" />
      <GraphEditorImportExport v-else-if="activeTab === ActiveTab.ExportImport" v-model="graph" />
    </div>
  </div>
</template>
