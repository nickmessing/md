<script setup lang="ts">
import type { ValueNode } from '../utils/ast'

const { node } = defineProps<{
  node: ValueNode
}>()
</script>

<template>
  <span class="strut" style="height: 0.6444em" />
  <span class="mord">{{ node.value }}</span>
</template>
