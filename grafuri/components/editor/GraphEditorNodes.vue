<script setup lang="ts">
import { nanoid } from 'nanoid'

import { type Graph } from '../types'
import { getColorClass } from '../colors'

const graph = defineModel<Graph>({ required: true })

function updateNodeLabel(id: string, event: Event) {
  const target = event.target as HTMLInputElement
  const label = target.value

  graph.value = {
    ...graph.value,
    nodes: graph.value.nodes.map(node => (node.id === id ? { ...node, label } : node)),
  }
}

function addNode() {
  graph.value = {
    ...graph.value,
    nodes: [...graph.value.nodes, { id: nanoid(), label: String(graph.value.nodes.length + 1) }],
  }
}

function removeNode(id: string) {
  graph.value = {
    ...graph.value,
    nodes: graph.value.nodes.filter(node => node.id !== id),
    edges: graph.value.edges.filter(edge => edge.source !== id && edge.target !== id),
  }
}
</script>

<template>
  <div class="flex flex-col items-start gap-2">
    <div class="w-full px-2">
      <ul class="flex w-full flex-col items-stretch gap-1">
        <li v-for="(node, index) in graph.nodes" :key="node.id">
          <div class="flex w-full flex-row items-center gap-2">
            <div class="h-4 w-4 rounded-full border-2" :class="getColorClass(index).borderClass"></div>
            <input type="text" :value="node.label" @input="updateNodeLabel(node.id, $event)" class="grow" />
            <button @click="removeNode(node.id)">Șterge</button>
          </div>
        </li>
      </ul>
    </div>

    <button
      class="cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      @click="addNode"
    >
      Adaugă un vârf
    </button>
  </div>
</template>
