<script setup lang="ts">
import type { Graph } from '../types'

const graph = defineModel<Graph>({ required: true })

async function exportGraph() {
  const result = await window.showSaveFilePicker({
    suggestedName: 'graph',
    types: [
      {
        description: 'Graph file',
        accept: { 'application/json': ['.json'] },
      },
    ],
  })

  const writable = await result.createWritable()
  await writable.write(JSON.stringify(graph.value))
  await writable.close()
}

async function importGraph() {
  const [fileHandle] = await window.showOpenFilePicker({
    types: [
      {
        description: 'Graph file',
        accept: { 'application/json': ['.json'] },
      },
    ],
  })

  const file = await fileHandle.getFile()
  const text = await file.text()

  graph.value = JSON.parse(text)
}
</script>

<template>
  <div class="flex flex-row gap-2">
    <button
      class="cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      @click="exportGraph"
    >
      Exportează
    </button>
    <button
      class="cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      @click="importGraph"
    >
      Importează
    </button>
  </div>
</template>
