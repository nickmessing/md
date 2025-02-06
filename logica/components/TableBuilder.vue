<script setup lang="ts">
import { useRouteQuery } from '../../composables/useRouteQuery'
import FormulaRenderer from './FormulaRenderer.vue'

const expression = useRouteQuery('expression', 'A and B')
</script>

<template>
  <input class="formula-input" type="text" v-model="expression" />
  <FormulaRenderer :expression="expression" isFormulaVisible />
</template>

<style scoped>
.formula-input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.2s, box-shadow 0.2s;
  margin-top: 1rem;

  &:hover {
    border-color: #999;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
}
</style>
