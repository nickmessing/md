<script setup lang="ts">
import { computed } from 'vue'
import { useRouteQuery } from '../../composables/useRouteQuery'
import { Graph, GraphType } from './types'
import GraphEditor from './editor/GraphEditor.vue'
import GraphVisualization from './GraphVisualization.vue'
import { renderToString } from 'katex'
import MatriceDeAdiacanta from './MatriceDeAdiacanta.vue'
import MatriceDeIncidenta from './MatriceDeIncidenta.vue'
import ReprezentareKirchhoff from './ReprezentareKirchhoff.vue'

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

const nodeLabelMap = computed(() => {
  const map = new Map<string, string>()
  graph.value.nodes.forEach(node => map.set(node.id, node.label))
  return map
})

const nodesLatex = computed(() => `X = \\{ ${graph.value.nodes.map(node => node.label).join(', ')} \\}`)
const edgesLatex = computed(
  () =>
    `U = \\{ ${graph.value.edges
      .map(edge => ` ( ${nodeLabelMap.value.get(edge.source)}, ${nodeLabelMap.value.get(edge.target)} ) `)
      .join(', ')} \\}`,
)
const latex = computed(() => `G = (X, U) \\newline ${nodesLatex.value} \\newline ${edgesLatex.value}`)

const katexHtmlString = computed(() => renderToString(latex.value, { displayMode: true }))
</script>

<template>
  <div class="flex flex-col gap-4 pt-6">
    <div class="h-[200px] md:h-[300px]">
      <GraphEditor v-model="graph" />
    </div>
    <div class="h-[200px] md:h-[300px]">
      <GraphVisualization :graph="graph" />
    </div>
    <div>
      <div v-html="katexHtmlString" />
    </div>
    <MatriceDeAdiacanta :graph="graph" />
    <MatriceDeIncidenta :graph="graph" />
    <ReprezentareKirchhoff :graph="graph" />
  </div>
</template>
