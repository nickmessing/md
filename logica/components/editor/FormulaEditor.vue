<script setup lang="ts">
import { useTemplateRef, shallowRef, watch, onScopeDispose, computed } from 'vue'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import { languageId, themeId } from '../utils/monaco'
import { useRouteQuery } from '../../../composables/useRouteQuery'
import { tokenize } from '../utils/language/tokens'
import { AST, parse } from '../utils/language/ast'

const expression = useRouteQuery(
  'expression',
  `(
  A and B
) or (
  A implies B
)`,
)

const emit = defineEmits<{
  update: [ast: AST]
}>()

const monacoContainer = useTemplateRef<HTMLDivElement>('monacoContainerElement')

const editor = shallowRef<monaco.editor.IStandaloneCodeEditor>()

watch(monacoContainer, targetElement => {
  if (targetElement) {
    if (editor.value) {
      editor.value.dispose()
      editor.value = undefined
    }

    editor.value = monaco.editor.create(targetElement, {
      value: expression.value,
      language: languageId,
      theme: themeId,
      fontSize: 20,
    })

    editor.value.onDidChangeModelContent(event => {
      const value = editor.value?.getValue() ?? ''
      if (value !== expression.value) {
        expression.value = value
      }
    })
  }
})

const tokenized = computed(() => tokenize(expression.value))
const ast = computed(() => (tokenized.value.success ? parse(tokenized.value.tokens) : undefined))

watch(
  ast,
  value => {
    if (value?.success) {
      emit('update', value.ast)
    }
  },
  {
    immediate: true,
  },
)

watch(
  [tokenized, editor],
  ([value, editor]) => {
    if (!editor) {
      return
    }

    const tokenizationError = value.success ? undefined : value
    const astError = ast.value?.success ? undefined : ast.value
    const error = tokenizationError ?? astError

    const model = editor.getModel()
    if (model) {
      monaco.editor.setModelMarkers(
        model,
        'owner',
        error
          ? [
              {
                message: error.message,
                severity: monaco.MarkerSeverity.Error,
                startLineNumber: error.line,
                startColumn: error.column,
                endLineNumber: error.line,
                endColumn: error.column + error.length,
              },
            ]
          : [],
      )
    }
  },
  { immediate: true },
)

watch(expression, value => {
  if (value === editor.value?.getValue()) {
    return
  }
  if (editor.value) {
    editor.value.setValue(value)
  }
})

onScopeDispose(() => {
  if (editor.value) {
    editor.value.dispose()
  }
})
</script>

<template>
  <div class="mt-4">
    <div ref="monacoContainerElement" class="w-full h-[400px]" />
  </div>
</template>
