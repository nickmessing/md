<script setup lang="ts">
import { defineAsyncComponent, shallowRef } from 'vue'
import { AST } from './utils/language/ast'
import FormulaRenderer from './FormulaRenderer.vue'

const FormulaEditor =
  typeof window !== 'undefined' && window.document
    ? defineAsyncComponent(() => import('./editor/FormulaEditor.vue'))
    : () => null

const ast = shallowRef<AST>([])
</script>

<template>
  <div class="w-full flex flex-col items-stretch">
    <FormulaEditor @update="ast = $event" />
    <FormulaRenderer :expressions="ast" isFormulaVisible />
  </div>
</template>
