<script setup lang="ts">
import type { ExpressionNode } from '../utils/language/ast'
import { computed } from 'vue'
import { buildKatexString } from '../utils/katex'
import { renderToString } from 'katex'

const { expression } = defineProps<{
  expression: ExpressionNode
}>()

const katexString = computed(() => buildKatexString(expression, true))
const katexHtmlString = computed(() => renderToString(katexString.value))
</script>

<template>
  <div v-html="katexHtmlString" />
</template>
