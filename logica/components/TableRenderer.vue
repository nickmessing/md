<script setup lang="ts">
import { computed } from 'vue'
import AstRenderer from './ast/AstRenderer.vue'
import {
  ExpressionNode,
  expressionUniqueHash,
  isBinaryOperation,
  isOperationNode,
  isUnaryOperation,
  isValueNode,
  isVariableNode,
} from './utils/language/ast'
import { Value } from './utils/language/tokens'
import { and, iff, implies, nand, nor, not, or, xor } from './utils/evaluation'

const { expressions } = defineProps<{
  expressions: ExpressionNode[]
}>()

type Row = string[]

const mappedToHashes = computed(() =>
  expressions.map(expression => ({
    hash: expressionUniqueHash(expression),
    expression,
  })),
)

const values = computed(() => mappedToHashes.value.filter(({ expression }) => isValueNode(expression)))
const variables = computed(() => mappedToHashes.value.filter(({ expression }) => isVariableNode(expression)))
const operations = computed(() => mappedToHashes.value.filter(({ expression }) => isOperationNode(expression)))

const rowsCount = computed(() => 2 ** variables.value.length)

function computeCellValue(resultHashes: Record<string, string>, expression: ExpressionNode, hash?: string): string {
  const hashValue = hash ?? expressionUniqueHash(expression)

  if (resultHashes[hashValue] != undefined) {
    return resultHashes[hashValue]
  }

  if (isValueNode(expression)) {
    return expression.value
  }
  if (isOperationNode(expression)) {
    if (isUnaryOperation(expression.operation)) {
      const value = computeCellValue(resultHashes, expression.operation.operand)
      return not(value)
    }

    if (isBinaryOperation(expression.operation)) {
      const leftValue = computeCellValue(resultHashes, expression.operation.left)
      const rightValue = computeCellValue(resultHashes, expression.operation.right)

      if (leftValue === 'ERR' || rightValue === 'ERR') {
        return 'ERR'
      }

      if (expression.operation.operator === 'and') {
        return and(leftValue, rightValue)
      }
      if (expression.operation.operator === 'or') {
        return or(leftValue, rightValue)
      }
      if (expression.operation.operator === 'implies') {
        return implies(leftValue, rightValue)
      }
      if (expression.operation.operator === 'iff') {
        return iff(leftValue, rightValue)
      }
      if (expression.operation.operator === 'nand') {
        return nand(leftValue, rightValue)
      }
      if (expression.operation.operator === 'nor') {
        return nor(leftValue, rightValue)
      }
      if (expression.operation.operator === 'xor') {
        return xor(leftValue, rightValue)
      }
    }
  }
  return 'ERR'
}

const rows = computed(() => {
  const result: Row[] = []

  for (let rowIndex = 0; rowIndex < rowsCount.value; rowIndex++) {
    const row: Row = []

    const resultHashes: Record<string, string> = {}

    for (let variableCellIndex = 0; variableCellIndex < variables.value.length; variableCellIndex++) {
      const value = String((rowIndex >> (variables.value.length - variableCellIndex - 1)) & 1) as Value
      row.push(String(value) as Value)
      resultHashes[variables.value[variableCellIndex].hash] = value
    }

    for (let valueIndex = 0; valueIndex < values.value.length; valueIndex++) {
      const value = computeCellValue(resultHashes, values.value[valueIndex].expression, values.value[valueIndex].hash)
      row.push(value)
      resultHashes[values.value[valueIndex].hash] = value
    }

    for (let operationIndex = 0; operationIndex < operations.value.length; operationIndex++) {
      const value = computeCellValue(resultHashes, operations.value[operationIndex].expression)
      row.push(value)
      resultHashes[operations.value[operationIndex].hash] = value
    }

    result.push(row)
  }

  return result
})
</script>

<template>
  <table class="highlightable no-new-line-in-cell" tabindex="0">
    <thead>
      <tr>
        <th v-for="(expression, index) in expressions" :key="index">
          <AstRenderer :expression="expression" isRootNode />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
        <td v-for="(cell, cellIndex) in row" :key="cellIndex">
          {{ cell }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.highlightable tr:hover td {
  background-color: oklch(0.901 0.058 230.902);
  color: #000;
}
</style>
