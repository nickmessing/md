<script setup lang="ts">
import { computed } from 'vue'
import { ExpressionNode, parse } from './utils/language/ast'
import AstRenderer from './ast/AstRenderer.vue'
import { extractExpressions, uniqueExpressions } from './utils/extractExpressions'
import TableRenderer from './TableRenderer.vue'
import { tokenize } from './utils/language/tokens'

const {
  expressions: expressionsRaw = [],
  expression,
  isFormulaVisible = false,
} = defineProps<{
  expressions?: ExpressionNode[]
  expression?: string
  isFormulaVisible?: boolean
}>()

const expressions = computed(() => {
  const tokenizedString = expression ? tokenize(expression) : undefined
  const ast = tokenizedString?.success ? parse(tokenizedString.tokens) : undefined
  const expressionsList = [...expressionsRaw, ...(ast?.success ? ast.ast : [])]

  return uniqueExpressions(expressionsList.flatMap(expression => extractExpressions(expression)))
})
</script>

<template>
  <template v-if="isFormulaVisible">
    <div v-for="(expression, index) in expressionsRaw" :key="index" class="renderer-container">
      <AstRenderer :expression="expression" />
    </div>
  </template>
  <TableRenderer v-if="expressions.length" :expressions="expressions" />
</template>

<style scoped>
.renderer-container {
  margin-top: 2rem;
}
</style>
