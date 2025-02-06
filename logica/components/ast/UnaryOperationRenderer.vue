<script setup lang="ts">
import type { UnaryOperation } from '../utils/ast'
import ExpressionNodeRenderer from './ExpressionNodeRenderer.vue'

const { operation } = defineProps<{
  operation: UnaryOperation
}>()
</script>

<template>
  <span class="strut" style="height: 1.0778em; vertical-align: -0.1944em" />
  <span v-if="operation.operator === 'not'" class="mord overline">
    <span class="vlist-t vlist-t2">
      <span class="vlist-r">
        <span class="vlist" style="height: 0.8833em">
          <span style="top: -3em">
            <span class="pstrut" style="height: 3em"></span>
            <span class="mord">
              <ExpressionNodeRenderer :node="operation.operand" />
            </span>
          </span>
          <span style="top: -3.8033em">
            <span class="pstrut" style="height: 3em" />
            <span class="overline-line" style="border-bottom-width: 0.04em" />
          </span>
        </span>
        <span class="vlist-s">​</span>
      </span>
      <span class="vlist-r">
        <span class="vlist" style="height: 0.1944em"> <span /> </span>
      </span>
    </span>
  </span>
</template>
