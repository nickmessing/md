<script setup lang="ts">
import { computed } from 'vue'
import { Graph } from './types'

const { graph } = defineProps<{ graph: Graph }>()

const nodes = computed(() => graph.nodes)
const n = computed(() => nodes.value.length)

const adjacency = computed(() => {
  const matrix = Array.from({ length: n.value }, () => Array.from({ length: n.value }, () => 0))
  graph.edges.forEach(edge => {
    const i = nodes.value.findIndex(node => node.id === edge.source)
    const j = nodes.value.findIndex(node => node.id === edge.target)

    matrix[i][j] = 1
    matrix[j][i] = 1
  })
  return matrix
})

const kirchhoff = computed(() => {
  const matrix = Array.from({ length: n.value }, () => Array.from({ length: n.value }, () => 0))
  for (let i = 0; i < n.value; i++) {
    const degree = adjacency.value[i].reduce((sum, val) => sum + val, 0)
    matrix[i][i] = degree
    for (let j = 0; j < n.value; j++) {
      if (i !== j) {
        matrix[i][j] = adjacency.value[i][j] ? -1 : 0
      }
    }
  }
  return matrix
})
</script>

<template>
  <div class="overflow-auto">
    <h2 id="kirchhoff" tabindex="-1">
      Matricea Kirchhoff
      <a class="header-anchor" href="#kirchhoff" aria-label="Link la Matricea Kirchhoff">​</a>
    </h2>
    <table class="highlightable no-new-line-in-cell" tabindex="0">
      <thead>
        <tr>
          <th />
          <th v-for="node in nodes" :key="node.id">
            {{ node.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in kirchhoff" :key="i">
          <td class="font-bold">{{ nodes[i].label }}</td>
          <td v-for="(value, j) in row" :key="j">
            {{ value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
