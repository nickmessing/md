<script setup lang="ts">
import { isBinaryOperation, isUnaryOperation, type OperationNode } from '../utils/ast'
import BinaryOperationRenderer from './BinaryOperationRenderer.vue'
import UnaryOperationRenderer from './UnaryOperationRenderer.vue'

const { node, isRootNode = false } = defineProps<{
  node: OperationNode
  isRootNode?: boolean
}>()
</script>

<template>
  <UnaryOperationRenderer v-if="isUnaryOperation(node.operation)" :operation="node.operation" />
  <BinaryOperationRenderer
    v-else-if="isBinaryOperation(node.operation)"
    :operation="node.operation"
    :isRootNode="isRootNode"
  />
</template>
