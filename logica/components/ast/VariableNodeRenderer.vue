<script setup lang="ts">
import { computed } from 'vue'
import type { VariableNode } from '../utils/ast'

const { node } = defineProps<{
  node: VariableNode
}>()

const variableName = computed(() => node.name.match(/^[A-Z]*/)?.[0] ?? '')
const index = computed(() => node.name.match(/\d+$/)?.[0] ?? '')
</script>

<template>
  <span class="strut" style="height: 0.8333em; vertical-align: -0.15em" />
  <span class="mord">
    <span class="mord mathnormal" style="margin-right: 0.05017em">{{ variableName }}</span>
    <span class="msupsub" v-if="index">
      <span class="vlist-t vlist-t2">
        <span class="vlist-r">
          <span class="vlist" style="height: 0.3011em">
            <span style="top: -2.55em; margin-left: -0.0502em; margin-right: 0.05em">
              <span class="pstrut" style="height: 2.7em" />
              <span class="sizing reset-size6 size3 mtight">
                <span class="mord mtight">{{ index }}</span>
              </span>
            </span>
          </span>
          <span class="vlist-s">​</span>
        </span>
        <span class="vlist-r">
          <span class="vlist" style="height: 0.15em">
            <span />
          </span>
        </span>
      </span>
    </span>
  </span>
</template>
