<script setup lang="ts">
import ExpressionNodeRenderer from './ExpressionNodeRenderer.vue'
import type { AST } from '../utils/ast'

const { ast } = defineProps<{
  ast: AST
}>()
</script>

<template>
  <div>
    <span class="katex">
      <span class="katex-html" aria-hidden="true">
        <span class="base">
          <ExpressionNodeRenderer :node="ast" isRootNode />
        </span>
      </span>
    </span>
  </div>
</template>
