<script setup lang="ts">
import { GraphType, type GraphEdge, type GraphEdgePossibility, type GraphNode } from '../types'
import { computed } from 'vue'

const { possibleEdges, nodes, graphType } = defineProps<{
  possibleEdges: GraphEdgePossibility[]
  nodes: Map<string, GraphNode>
  graphType: GraphType
}>()

const edge = defineModel<GraphEdge>({ required: true })

const emit = defineEmits<{
  removeClick: []
}>()

const sourceNode = computed(() => nodes.get(edge.value.source))
const targetNode = computed(() => nodes.get(edge.value.target))

const sourceAlternatives = computed(() => [
  ...new Set([
    ...possibleEdges
      .filter(possibleEdge => possibleEdge.target === edge.value.target)
      .map(possibleEdge => possibleEdge.source),
    ...(graphType === GraphType.Directed
      ? []
      : possibleEdges
          .filter(possibleEdge => possibleEdge.source === edge.value.target)
          .map(possibleEdge => possibleEdge.target)),
  ]),
])
const targetAlternatives = computed(() => [
  ...new Set([
    ...(graphType === GraphType.Directed
      ? []
      : possibleEdges
          .filter(possibleEdge => possibleEdge.target === edge.value.source)
          .map(possibleEdge => possibleEdge.source)),
    ...possibleEdges
      .filter(possibleEdge => possibleEdge.source === edge.value.source)
      .map(possibleEdge => possibleEdge.target),
  ]),
])

const source = computed({
  get: () => edge.value.source,
  set: (value: string) => {
    edge.value = { ...edge.value, source: value }
  },
})
const target = computed({
  get: () => edge.value.target,
  set: (value: string) => {
    edge.value = { ...edge.value, target: value }
  },
})
</script>

<template>
  <div class="flex flex-row gap-2">
    <div v-if="sourceNode && targetNode" class="grid grow grid-cols-2 grid-rows-1 gap-2">
      <div>
        <select v-model="source" class="w-full" :disabled="sourceAlternatives.length === 0">
          <option v-if="![GraphType.Multi, GraphType.Pseudo].includes(graphType)" :value="sourceNode.id">
            {{ sourceNode.label }}
          </option>
          <option v-for="nodeId in sourceAlternatives" :key="nodeId" :value="nodeId">
            {{ nodes.get(nodeId)?.label }}
          </option>
        </select>
      </div>
      <div>
        <select v-model="target" class="w-full" :disabled="targetAlternatives.length === 0">
          <option v-if="![GraphType.Multi, GraphType.Pseudo].includes(graphType)" :value="targetNode.id">
            {{ targetNode.label }}
          </option>
          <option v-for="nodeId in targetAlternatives" :key="nodeId" :value="nodeId">
            {{ nodes.get(nodeId)?.label }}
          </option>
        </select>
      </div>
    </div>
    <button class="shrink-0" @click="emit('removeClick')">Șterge</button>
  </div>
</template>
