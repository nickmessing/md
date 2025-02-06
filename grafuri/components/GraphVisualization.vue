<script setup lang="ts">
import type { BiDimensionalCoordinates, DraggingState, Graph, GraphNode } from './types'
import { useElementSize, useEventListener } from '@vueuse/core'
import { computed, nextTick, shallowRef, useTemplateRef, watch } from 'vue'
import * as d3 from 'd3'
import { notEmpty } from './utils'
import { getColorClass } from './colors'

const NODE_RADIUS = 20

const { graph } = defineProps<{ graph: Graph }>()

const svg = useTemplateRef<SVGSVGElement>('svgElement')

const { width, height } = useElementSize(svg)

type Datum = d3.SimulationNodeDatum & { meta: GraphNode }

function createLinkForce() {
  return d3
    .forceLink<Datum, d3.SimulationLinkDatum<Datum>>([
      ...graph.edges.map(edge => ({ source: edge.source, target: edge.target })),
    ])
    .id(d => d.meta.id)
    .distance(120)
    .strength(0.1)
}

const simulation = d3
  .forceSimulation<Datum>(
    graph.nodes.map((node, index) => ({ index, meta: node, x: width.value / 2, y: height.value / 2, vx: 0, vy: 0 })),
  )
  .force('collide', d3.forceCollide(NODE_RADIUS + 10).strength(0.3))
  .force('link', createLinkForce())
  .force('box', () => {
    for (const node of simulation.nodes()) {
      node.x = Math.max(NODE_RADIUS, Math.min(width.value - NODE_RADIUS, node.x ?? 0))
      node.y = Math.max(NODE_RADIUS, Math.min(height.value - NODE_RADIUS, node.y ?? 0))
    }
  })
  .force('center', d3.forceCenter(width.value / 2, height.value / 2).strength(0.1))
  .on('tick', ticked)

watch([width, height], () => {
  simulation.force('box', () => {
    for (const node of simulation.nodes()) {
      node.x = Math.max(NODE_RADIUS, Math.min(width.value - NODE_RADIUS, node.x ?? 0))
      node.y = Math.max(NODE_RADIUS, Math.min(height.value - NODE_RADIUS, node.y ?? 0))
    }
  })
  simulation.force('center', d3.forceCenter(width.value / 2, height.value / 2).strength(0.1))
  simulation.force('link', createLinkForce())
  simulation.alpha(1).restart()
})

const nodesToRender = shallowRef<Datum[]>(simulation.nodes())

const mappedNodes = computed(() => new Map(nodesToRender.value.map(node => [node.meta.id, node])))

const linksToRender = computed(() =>
  graph.edges.map(edge => {
    const source = mappedNodes.value.get(edge.source)
    const target = mappedNodes.value.get(edge.target)

    if (!source || !target) {
      throw new Error('Invalid edge ${edge.source} -> ${edge.target}')
    }
    return { source, target }
  }),
)

function ticked() {
  nodesToRender.value = [...simulation.nodes()]
}

watch(
  () => graph.edges,
  async () => {
    await nextTick()
    simulation.force('link', createLinkForce())
    simulation.alpha(1).restart()
  },
  { deep: true },
)

watch(
  () => graph.nodes,
  nodesList => {
    const existingNodes = simulation.nodes()
    const nodesToAdd = nodesList.filter(node => !existingNodes.some(n => n.meta.id === node.id))
    const nodesToStay = existingNodes
      .map(n => {
        const existingNode = nodesList.find(node => n.meta.id === node.id)
        return existingNode
          ? {
              ...n,
              meta: existingNode,
            }
          : undefined
      })
      .filter(notEmpty)

    simulation.nodes([
      ...nodesToStay,
      ...nodesToAdd.map((node, index) => ({
        index: nodesToStay.length + index,
        meta: node,
        x: width.value / 2 + (Math.random() * 30 - 15),
        y: height.value / 2 + (Math.random() * 30 - 15),
        vx: 0,
        vy: 0,
      })),
    ])
    simulation.force('link', createLinkForce())
    simulation.alpha(1).restart()
  },
)

const draggingElement = shallowRef<DraggingState>()

function handleMouseDown(event: MouseEvent, node: GraphNode) {
  const target = event.target as SVGElement
  const nodeGroup = target.closest('g')
  if (!nodeGroup || !svg.value) {
    return
  }

  event.preventDefault()

  const boundingClientRect = nodeGroup.getBoundingClientRect()

  const cursorX = event.clientX - boundingClientRect.left
  const cursorY = event.clientY - boundingClientRect.top

  const cursorOffset: BiDimensionalCoordinates = {
    x: cursorX - NODE_RADIUS,
    y: cursorY - NODE_RADIUS,
  }

  draggingElement.value = {
    node,
    cursorOffset,
  }
  simulation.stop()
}

function handleMouseUp() {
  if (!draggingElement.value) {
    return
  }
  draggingElement.value = undefined

  simulation.alpha(1).restart()
}

useEventListener('mouseup', handleMouseUp)

function handleMouseMove(event: MouseEvent) {
  if (!draggingElement.value || !svg.value) {
    return
  }

  const { node, cursorOffset } = draggingElement.value

  const svgRect = svg.value.getBoundingClientRect()

  const x = event.clientX - svgRect.left - cursorOffset.x
  const y = event.clientY - svgRect.top - cursorOffset.y

  const nodesArray = simulation.nodes()
  const nodeInSimulation = nodesArray.find(n => n.meta.id === node.id)

  if (!nodeInSimulation) {
    return
  }

  nodeInSimulation.x = x
  nodeInSimulation.y = y

  nodesToRender.value = [...nodesArray]
}
</script>

<template>
  <svg ref="svgElement" class="h-full w-full bg-gray-50 rounded-xl" @mousemove="handleMouseMove">
    <g>
      <line
        v-for="(link, index) in linksToRender"
        :key="index"
        :x1="link.source.x"
        :y1="link.source.y"
        :x2="link.target.x"
        :y2="link.target.y"
        stroke="black"
        stroke-width="2"
      />
    </g>
    <g
      v-for="(node, index) in nodesToRender"
      :key="index"
      class="cursor-move"
      @mousedown="handleMouseDown($event, node.meta)"
    >
      <circle
        :cx="node.x"
        :cy="node.y"
        :r="NODE_RADIUS"
        fill="white"
        stroke-width="2"
        :class="getColorClass(index).strokeClass"
      />
      <text :x="node.x" :y="node.y" text-anchor="middle" dominant-baseline="middle">
        {{ node.meta.label }}
      </text>
    </g>
  </svg>
</template>
