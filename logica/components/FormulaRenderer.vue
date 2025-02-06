<script setup lang="ts">
import { computed } from 'vue'
import { tokenize } from './utils/tokens'
import { parse } from './utils/ast'
import AstRenderer from './ast/AstRenderer.vue'
import { extractExpressions, uniqueExpressions } from './utils/extractExpressions'
import TableRenderer from './TableRenderer.vue'
import { notEmpty } from '../../grafuri/components/utils'

const { expression, isFormulaVisible = false } = defineProps<{
  expression: string
  isFormulaVisible?: boolean
}>()

const expressionSplit = computed(() =>
  expression
    .split(',')
    .map(line => line.trim())
    .filter(Boolean),
)
const tokenized = computed(() => expressionSplit.value.map(expression => tokenize(expression)))
const parsed = computed(() =>
  tokenized.value
    .map(tokenizationResult => (tokenizationResult.success ? parse(tokenizationResult.tokens) : undefined))
    .filter(notEmpty),
)
const expressions = computed(() =>
  uniqueExpressions(
    parsed.value.flatMap(parsingResult => (parsingResult.success ? extractExpressions(parsingResult.ast) : [])),
  ),
)

const errorMessage = computed(() => {
  for (const tokenizationResult of tokenized.value) {
    if (!tokenizationResult.success) {
      return tokenizationResult.message
    }
  }

  for (const parsingResult of parsed.value) {
    if (!parsingResult.success) {
      return parsingResult.message
    }
  }
})
</script>

<template>
  <div class="error-message" v-if="errorMessage">
    <p>{{ errorMessage }}</p>
  </div>
  <template v-if="isFormulaVisible">
    <div v-for="(parsingResult, index) in parsed" class="renderer-container">
      <AstRenderer v-if="parsingResult.success" :ast="parsingResult.ast" />
    </div>
  </template>
  <TableRenderer v-if="expressions.length" :expressions="expressions" />
</template>

<style scoped>
.renderer-container {
  margin-top: 2rem;
}

.error-message {
  color: #d00;
  font-weight: 600;
  margin-top: 0.5rem;
}
</style>
