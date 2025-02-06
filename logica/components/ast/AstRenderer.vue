<script setup lang="ts">
import ExpressionNodeRenderer from './ExpressionNodeRenderer.vue'
import type { AST } from '../utils/ast'
import { computed } from 'vue'
import { buildKatexString } from '../utils/katex'
import { renderToString } from 'katex'

const { ast } = defineProps<{
  ast: AST
}>()

const katexString = computed(() => buildKatexString(ast, true))
const katexHtmlString = computed(() => renderToString(katexString.value))
</script>

<template>
  <div v-html="katexHtmlString" />
</template>
