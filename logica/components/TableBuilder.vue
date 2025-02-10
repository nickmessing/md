<script setup lang="ts">
import { shallowRef } from 'vue'
import FormulaEditor from './editor/FormulaEditor.vue'
import { AST } from './utils/language/ast'
import FormulaRenderer from './FormulaRenderer.vue'

const ast = shallowRef<AST>([])
</script>

<template>
  <div class="w-full flex flex-col items-stretch">
    <FormulaEditor @update="ast = $event" />
    <FormulaRenderer :expressions="ast" isFormulaVisible />
  </div>
</template>
