<script setup lang="ts" generic="TabId extends PropertyKey">
import type { Tab } from './types'
import { computed, useTemplateRef } from 'vue'
import { useElementBounding } from '@vueuse/core'

const { tabs } = defineProps<{
  tabs: Tab<TabId>[]
}>()

const activeTab = defineModel<TabId>({
  required: true,
})

const buttons = useTemplateRef<HTMLButtonElement>('buttonElements')
const activeButtonElement = computed(() => buttons.value?.[tabs.findIndex(tab => tab.id === activeTab.value)])
const { left, width } = useElementBounding(activeButtonElement)
const nav = useTemplateRef<HTMLElement>('navElement')
const { left: navLeft } = useElementBounding(nav)
</script>

<template>
  <nav ref="navElement" class="relative flex w-full flex-row gap-6 border-b border-gray-200 px-4">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      ref="buttonElements"
      :class="{
        'text-indigo-700': activeTab === tab.id,
        'text-gray-500 hover:text-gray-700': activeTab !== tab.id,
      }"
      class="cursor-pointer px-2 py-4"
      @click="activeTab = tab.id"
    >
      {{ tab.label }}
    </button>
    <div
      class="highlight-bar absolute -bottom-[1px] left-0 h-0.5 w-(--width) translate-x-(--left) bg-indigo-700 transition-all"
    />
  </nav>
</template>

<style scoped>
.highlight-bar {
  --left: calc(calc(v-bind(left) - v-bind(navLeft)) * 1px);
  --width: calc(v-bind(width) * 1px);
}
</style>
