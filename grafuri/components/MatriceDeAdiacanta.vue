<script setup lang="ts">
import { computed } from 'vue'
import { Graph } from './types'

const { graph } = defineProps<{
  graph: Graph
}>()

const columns = computed(() => graph.nodes)

const rows = computed(() => {
  const matrix = Array.from({ length: columns.value.length }, () =>
    Array.from({ length: columns.value.length }, () => false),
  )

  graph.edges.forEach(edge => {
    const sourceIndex = columns.value.findIndex(node => node.id === edge.source)
    const targetIndex = columns.value.findIndex(node => node.id === edge.target)

    matrix[sourceIndex][targetIndex] = true
    matrix[targetIndex][sourceIndex] = true
  })

  return matrix
})
</script>

<template>
  <div class="overflow-auto">
    <h2 id="matrice-de-adiacenta" tabindex="-1">
      Matricea de adiacență
      <a class="header-anchor" href="#matrice-de-adiacenta" aria-label='Permalink to "Matricea de adiacență"'>​</a>
    </h2>
    <table class="highlightable no-new-line-in-cell" tabindex="0">
      <thead>
        <tr>
          <th />
          <th v-for="column in columns" :key="column.id">
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <td class="font-bold">{{ columns[rowIndex].label }}</td>
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">
            {{ cell ? 1 : 0 }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
