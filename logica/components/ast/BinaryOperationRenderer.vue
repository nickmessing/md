<script setup lang="ts">
import type { BinaryOperation } from '../utils/ast'
import ExpressionNodeRenderer from './ExpressionNodeRenderer.vue'

const { operation, isRootNode = false } = defineProps<{
  operation: BinaryOperation
  isRootNode?: boolean
}>()
</script>

<template>
  <span class="strut" style="height: 1em; vertical-align: -0.25em" />
  <span v-if="!isRootNode" class="mopen">(</span>
  <ExpressionNodeRenderer :node="operation.left" />
  <span class="mspace" style="margin-right: 0.2222em" />
  <span v-if="operation.operator === 'and'" class="mbin">∧</span>
  <span v-else-if="operation.operator === 'or'" class="mbin">∨</span>
  <span v-else-if="operation.operator === 'implies'" class="mrel">→</span>
  <span v-else-if="operation.operator === 'iff'" class="mrel">↔</span>
  <span v-else-if="operation.operator === 'nand'" class="mord">∣</span>
  <span v-else-if="operation.operator === 'nor'" class="mrel">↓</span>
  <span v-else-if="operation.operator === 'xor'" class="mbin">⊕</span>
  <span class="mspace" style="margin-right: 0.2222em" />
  <span class="strut" style="height: 1em; vertical-align: -0.25em" />
  <ExpressionNodeRenderer :node="operation.right" />
  <span class="mspace" style="margin-right: 0.05017em" />
  <span v-if="!isRootNode" class="mclose">)</span>
</template>
