<script setup lang="ts">
import { GraphType, type BiDimensionalCoordinates, type DraggingState, type Graph, type GraphNode } from './types'
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

const linksToRender = computed(() => {
  return graph.edges.map(edge => {
    const source = mappedNodes.value.get(edge.source)
    const target = mappedNodes.value.get(edge.target)

    if (!source || !target) {
      throw new Error(`Invalid edge ${edge.source} -> ${edge.target}`)
    }

    const targetX = target.x ?? 0
    const targetY = target.y ?? 0
    const sourceX = source.x ?? 0
    const sourceY = source.y ?? 0

    const dx = targetX - sourceX
    const dy = targetY - sourceY
    const distance = Math.sqrt(dx * dx + dy * dy)

    // Avoid dividing by zero if both nodes share the same position
    if (distance === 0) {
      return {
        x1: sourceX,
        y1: sourceY,
        x2: targetX,
        y2: targetY,
        source,
        target,
      }
    }

    const offsetX = (dx / distance) * NODE_RADIUS
    const offsetY = (dy / distance) * NODE_RADIUS

    const x1 = sourceX + offsetX
    const y1 = sourceY + offsetY
    const x2 = targetX - offsetX
    const y2 = targetY - offsetY

    return { x1, y1, x2, y2, source, target }
  })
})

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

function handleMouseDown(event: MouseEvent | TouchEvent, node: GraphNode) {
  const target = event.target as SVGElement
  const nodeGroup = target.closest('g')
  if (!nodeGroup || !svg.value) {
    return
  }

  event.preventDefault()

  const boundingClientRect = nodeGroup.getBoundingClientRect()

  const clientX = 'clientX' in event ? event.clientX : event.touches[0].clientX
  const clientY = 'clientY' in event ? event.clientY : event.touches[0].clientY

  const cursorX = clientX - boundingClientRect.left
  const cursorY = clientY - boundingClientRect.top

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
useEventListener('touchend', handleMouseUp)

function handleMouseMove(event: MouseEvent | TouchEvent) {
  if (!draggingElement.value || !svg.value) {
    return
  }

  const { node, cursorOffset } = draggingElement.value

  const svgRect = svg.value.getBoundingClientRect()

  const clientX = 'clientX' in event ? event.clientX : event.touches[0].clientX
  const clientY = 'clientY' in event ? event.clientY : event.touches[0].clientY

  const x = clientX - svgRect.left - cursorOffset.x
  const y = clientY - svgRect.top - cursorOffset.y

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
  <svg
    ref="svgElement"
    class="h-full w-full bg-gray-50 rounded-xl"
    @mousemove="handleMouseMove"
    @touchmove.prevent="handleMouseMove"
  >
    <g v-if="graph.type === GraphType.Simple">
      <line
        v-for="(link, index) in linksToRender"
        :key="index"
        :x1="link.x1"
        :y1="link.y1"
        :x2="link.x2"
        :y2="link.y2"
        stroke="black"
        stroke-width="2"
      />
    </g>
    <g v-else-if="graph.type === GraphType.Directed">
      <marker
        id="arrow"
        viewBox="0 0 10 10"
        refX="10"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
      </marker>
      <line
        v-for="(link, index) in linksToRender"
        :key="index"
        :x1="link.x1"
        :y1="link.y1"
        :x2="link.x2"
        :y2="link.y2"
        stroke="black"
        stroke-width="2"
        marker-end="url(#arrow)"
      />
    </g>
    <g
      v-for="(node, index) in nodesToRender"
      :key="index"
      class="cursor-move"
      @mousedown="handleMouseDown($event, node.meta)"
      @touchstart.prevent="handleMouseDown($event, node.meta)"
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
