<script setup lang="ts">
import { computed } from 'vue'
import { Graph } from './types'

const { graph } = defineProps<{
  graph: Graph
}>()

const nodeLabelMap = computed(() => {
  const map = new Map<string, string>()
  graph.nodes.forEach(node => map.set(node.id, node.label))
  return map
})

const columns = computed(() =>
  graph.edges.map(edge => `(${nodeLabelMap.value.get(edge.source)}, ${nodeLabelMap.value.get(edge.target)})`),
)

const rows = computed(() =>
  graph.nodes.map(node => ({
    node,
    columns: graph.edges.map(edge => (edge.source === node.id || edge.target === node.id ? 1 : 0)),
  })),
)
</script>

<template>
  <div class="overflow-auto">
    <h2 id="matrice-de-incidenta" tabindex="-1">
      Matricea de incidență
      <a class="header-anchor" href="#matrice-de-incidenta" aria-label='Permalink to "Matricea de incidență"'>​</a>
    </h2>
    <table class="highlightable no-new-line-in-cell" tabindex="0">
      <thead>
        <tr>
          <th />
          <th v-for="(column, index) in columns" :key="index">
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <td class="font-bold">{{ row.node.label }}</td>
          <td v-for="(column, columnIndex) in row.columns" :key="columnIndex">
            {{ column }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
