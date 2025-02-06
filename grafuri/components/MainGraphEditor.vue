<script setup lang="ts">
import { computed } from 'vue'
import { useRouteQuery } from '../../composables/useRouteQuery'
import { Graph, GraphType } from './types'
import GraphEditor from './editor/GraphEditor.vue'
import GraphVisualization from './GraphVisualization.vue'

const defaultGraph: Graph = {
  type: GraphType.Simple,
  nodes: [
    { id: '1', label: '1' },
    { id: '2', label: '2' },
    { id: '3', label: '3' },
  ],
  edges: [
    { source: '1', target: '2' },
    { source: '1', target: '3' },
    { source: '2', target: '3' },
  ],
}

const graphString = useRouteQuery('graph', JSON.stringify(defaultGraph))

const graph = computed({
  get: () => JSON.parse(graphString.value) as Graph,
  set: (value: Graph) => {
    graphString.value = JSON.stringify(value)
  },
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="h-[200px] md:h-[300px]">
      <GraphEditor v-model="graph" />
    </div>
    <div class="h-[200px] md:h-[300px]">
      <GraphVisualization :graph="graph" />
    </div>
  </div>
</template>
