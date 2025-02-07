<script setup lang="ts">
import { GraphType, type Graph, type GraphEdge, type GraphEdgePossibility } from '../types'
import { notEmpty } from '../utils'
import { computed } from 'vue'
import GraphEditorSingleEdge from './GraphEditorSingleEdge.vue'

const graph = defineModel<Graph>({ required: true })

const allPossibleEdges = computed<GraphEdgePossibility[]>(() =>
  graph.value.nodes
    .flatMap((node, index) =>
      graph.value.nodes.map((otherNode, otherIndex) => {
        if (node.id === otherNode.id || (graph.value.type === GraphType.Directed ? false : index >= otherIndex)) {
          return null
        }

        const edge = graph.value.edges.find(edge => {
          return graph.value.type === GraphType.Directed
            ? edge.source === node.id && edge.target === otherNode.id
            : (edge.source === node.id && edge.target === otherNode.id) ||
                (edge.source === otherNode.id && edge.target === node.id)
        })

        return {
          source: node.id,
          target: otherNode.id,
          isPresent: !!edge,
        }
      }),
    )
    .filter(notEmpty),
)

const edgesNotInGraph = computed(() =>
  graph.value.type === GraphType.Multi
    ? allPossibleEdges.value
    : allPossibleEdges.value.filter(edge => !edge.isPresent),
)
const isPossibleToAddEdge = computed(() => edgesNotInGraph.value.length > 0)

const mappedNodes = computed(() => new Map(graph.value.nodes.map(node => [node.id, node])))
const nodesIndexMap = computed(() => new Map(graph.value.nodes.map((node, index) => [node.id, index])))

function setEdges(newEdges: GraphEdge[]) {
  graph.value = {
    ...graph.value,
    edges: [...newEdges].sort((a, b) => {
      const aSourceIndex = nodesIndexMap.value.get(a.source) ?? 0
      const aTargetIndex = nodesIndexMap.value.get(a.target) ?? 0
      const bSourceIndex = nodesIndexMap.value.get(b.source) ?? 0
      const bTargetIndex = nodesIndexMap.value.get(b.target) ?? 0

      if (a.source === b.source) {
        return aTargetIndex - bTargetIndex
      } else {
        return aSourceIndex - bSourceIndex
      }
    }),
  }
}

function addEdge() {
  const possibleEdge =
    graph.value.type === GraphType.Multi
      ? allPossibleEdges.value.at(-1)
      : allPossibleEdges.value.find(edge => !edge.isPresent)
  if (!possibleEdge) {
    return
  }

  setEdges([...graph.value.edges, { source: possibleEdge.source, target: possibleEdge.target }])
}

function updateEdge(index: number, newValue: GraphEdge) {
  const newValueSourceIndex = nodesIndexMap.value.get(newValue.source)
  const newValueTargetIndex = nodesIndexMap.value.get(newValue.target)

  if (newValueSourceIndex == undefined || newValueTargetIndex == undefined) {
    return
  }

  setEdges(
    graph.value.edges.map((edge, i) =>
      i === index
        ? newValueSourceIndex > newValueTargetIndex
          ? { source: newValue.target, target: newValue.source }
          : newValue
        : edge,
    ),
  )
}

function removeEdge(index: number) {
  graph.value = {
    ...graph.value,
    edges: graph.value.edges.filter((_, i) => i !== index),
  }
}
</script>

<template>
  <div class="flex flex-col items-start gap-2">
    <div class="w-full pr-2 pl-4">
      <ul class="flex w-full list-disc flex-col items-stretch gap-1">
        <li v-for="(edge, index) in graph.edges" :key="`${edge.source}-${edge.target}`">
          <GraphEditorSingleEdge
            :modelValue="edge"
            :nodes="mappedNodes"
            :possibleEdges="edgesNotInGraph"
            :graphType="graph.type"
            @update:modelValue="updateEdge(index, $event)"
            @removeClick="removeEdge(index)"
          />
        </li>
      </ul>
    </div>
    <button
      v-if="isPossibleToAddEdge"
      class="cursor-pointer rounded-md bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      @click="addEdge"
    >
      Adaugă o muchie
    </button>
  </div>
</template>
