<script setup lang="ts">
import { isOperationNode, isValueNode, isVariableNode, type ExpressionNode } from '../utils/ast'
import OperationNodeRenderer from './OperationNodeRenderer.vue'
import ValueNodeRenderer from './ValueNodeRenderer.vue'
import VariableNodeRenderer from './VariableNodeRenderer.vue'

const { node, isRootNode = false } = defineProps<{
  node: ExpressionNode
  isRootNode?: boolean
}>()
</script>

<template>
  <ValueNodeRenderer v-if="isValueNode(node)" :node="node" />
  <OperationNodeRenderer v-else-if="isOperationNode(node)" :node="node" :isRootNode="isRootNode" />
  <VariableNodeRenderer v-else-if="isVariableNode(node)" :node="node" />
</template>
