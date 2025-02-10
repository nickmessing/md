<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import FormulaEditor from './editor/FormulaEditor.vue'
import {
  AST,
  ExpressionNode,
  expressionToString,
  isBinaryOperation,
  isOperationNode,
  isUnaryOperation,
  isValueNode,
  isVariableNode,
  NodeType,
} from './utils/language/ast'
import { renderToString } from 'katex'
import { buildKatexString } from './utils/katex'
import {
  binaryOperation,
  buildChain,
  distribute,
  getChainElements,
  hasNode,
  isChainOfSimpleChains,
  isSimpleValue,
  operationNode,
  transformExpression,
  unaryOperation,
  valueNode,
} from './utils/language/astTransform'

const ast = shallowRef<AST>([])

const katexString = computed(() => {
  let response = ''
  let step = 0

  function addLine(content: string) {
    if (response !== '') {
      response += '\\newline '
    }
    response += content
  }

  function addSpace() {
    response += '\\newline \\! \\newline '
  }

  function addText(text: string) {
    addLine(`\\text{${text}} `)
  }

  function nextStep() {
    addSpace()
    addText(`Pasul ${++step}:`)
  }

  function addExpression(expression: ExpressionNode, isOnSameLine = false) {
    if (isOnSameLine) {
      response += buildKatexString(expression, true)
      return
    }

    addLine(buildKatexString(expression, true))
  }

  let expression = ast.value[0]

  if (!expression) {
    return '\\text{Introduceți o expresie logică}'
  }

  addText('Forma inițială:')
  addExpression(expression)

  const hasXor = () =>
    hasNode([expression], node => {
      return node.type === NodeType.Operation && node.operation.operator === 'xor'
    })

  while (hasXor()) {
    nextStep()
    addLine('\\text{Eliminarea operatorului } \\oplus ')

    let isReplaced = false
    expression = transformExpression(expression, node => {
      if (isReplaced) {
        return node
      }

      if (node.type === NodeType.Operation && isBinaryOperation(node.operation) && node.operation.operator === 'xor') {
        isReplaced = true

        const newNode = operationNode(
          unaryOperation('not', operationNode(binaryOperation('iff', node.operation.left, node.operation.right))),
        )

        addSpace()
        addText('Folosind formula')
        addLine('A \\oplus B \\equiv \\overline{A \\leftrightarrow B}')
        addSpace()
        addText('Aplicăm')

        addExpression(node)
        response += ' \\equiv '
        addExpression(newNode, true)

        return newNode
      }

      return node
    })
    addSpace()
    addText('Rezultat: ')
    addExpression(expression)
  }

  const hasNor = () =>
    hasNode([expression], node => {
      return node.type === NodeType.Operation && node.operation.operator === 'nor'
    })

  while (hasNor()) {
    nextStep()
    addLine('\\text{Eliminarea operatorului } \\downarrow ')

    let isReplaced = false
    expression = transformExpression(expression, node => {
      if (isReplaced) {
        return node
      }

      if (node.type === NodeType.Operation && isBinaryOperation(node.operation) && node.operation.operator === 'nor') {
        isReplaced = true

        const newNode = operationNode(
          unaryOperation('not', operationNode(binaryOperation('or', node.operation.left, node.operation.right))),
        )

        addSpace()
        addText('Folosind formula')
        addLine('A \\downarrow B \\equiv \\overline{A \\lor B}')
        addSpace()
        addText('Aplicăm')

        addExpression(node)
        response += ' \\equiv '
        addExpression(newNode, true)

        return newNode
      }

      return node
    })
    addSpace()
    addText('Rezultat: ')
    addExpression(expression)
  }

  const hasNand = () =>
    hasNode([expression], node => {
      return node.type === NodeType.Operation && node.operation.operator === 'nand'
    })

  while (hasNand()) {
    nextStep()
    addLine('\\text{Eliminarea operatorului } \\uparrow ')

    let isReplaced = false
    expression = transformExpression(expression, node => {
      if (isReplaced) {
        return node
      }

      if (node.type === NodeType.Operation && isBinaryOperation(node.operation) && node.operation.operator === 'nand') {
        isReplaced = true

        const newNode = operationNode(
          unaryOperation('not', operationNode(binaryOperation('and', node.operation.left, node.operation.right))),
        )

        addSpace()
        addText('Folosind formula')
        addLine('A \\uparrow B \\equiv \\overline{A \\land B}')
        addSpace()
        addText('Aplicăm')

        addExpression(node)
        response += ' \\equiv '
        addExpression(newNode, true)

        return newNode
      }

      return node
    })
    addSpace()
    addText('Rezultat: ')
    addExpression(expression)
  }

  const hasEquivalence = () =>
    hasNode([expression], node => {
      return node.type === NodeType.Operation && node.operation.operator === 'iff'
    })

  while (hasEquivalence()) {
    nextStep()
    addLine('\\text{Eliminarea operatorului } \\leftrightarrow ')

    let isReplaced = false
    expression = transformExpression(expression, node => {
      if (isReplaced) {
        return node
      }

      if (node.type === NodeType.Operation && isBinaryOperation(node.operation) && node.operation.operator === 'iff') {
        isReplaced = true

        const newNode = operationNode(
          binaryOperation(
            'and',
            operationNode(binaryOperation('implies', node.operation.left, node.operation.right)),
            operationNode(binaryOperation('implies', node.operation.right, node.operation.left)),
          ),
        )

        addSpace()
        addText('Folosind formula')
        addLine('A \\leftrightarrow B \\equiv (A \\rightarrow B) \\land (B \\rightarrow A)')
        addSpace()
        addText('Aplicăm')

        addExpression(node)
        response += ' \\equiv '
        addExpression(newNode, true)

        return newNode
      }

      return node
    })
    addSpace()
    addText('Rezultat: ')
    addExpression(expression)
  }

  const hasImplication = () =>
    hasNode([expression], node => {
      return node.type === NodeType.Operation && node.operation.operator === 'implies'
    })

  while (hasImplication()) {
    nextStep()
    addLine('\\text{Eliminarea operatorului } \\rightarrow ')

    let isReplaced = false
    expression = transformExpression(expression, node => {
      if (isReplaced) {
        return node
      }

      if (
        node.type === NodeType.Operation &&
        isBinaryOperation(node.operation) &&
        node.operation.operator === 'implies'
      ) {
        isReplaced = true

        const newNode = operationNode(
          binaryOperation('or', operationNode(unaryOperation('not', node.operation.left)), node.operation.right),
        )

        addSpace()
        addText('Folosind formula')
        addLine('A \\rightarrow B \\equiv \\overline{A} \\lor B')
        addSpace()
        addText('Aplicăm')

        addExpression(node)
        response += ' \\equiv '
        addExpression(newNode, true)

        return newNode
      }

      return node
    })
    addSpace()
    addText('Rezultat: ')
    addExpression(expression)
  }

  const hasDeMorganAnd = () =>
    hasNode([expression], node => {
      return (
        node.type === NodeType.Operation &&
        isUnaryOperation(node.operation) &&
        node.operation.operator === 'not' &&
        isOperationNode(node.operation.operand) &&
        isBinaryOperation(node.operation.operand.operation) &&
        node.operation.operand.operation.operator === 'and'
      )
    })

  const hasDeMorganOr = () =>
    hasNode([expression], node => {
      return (
        node.type === NodeType.Operation &&
        isUnaryOperation(node.operation) &&
        node.operation.operator === 'not' &&
        isOperationNode(node.operation.operand) &&
        isBinaryOperation(node.operation.operand.operation) &&
        node.operation.operand.operation.operator === 'or'
      )
    })

  const hasDeMorgan = () => (hasDeMorganAnd() ? 'and' : hasDeMorganOr() ? 'or' : '')

  let deMorganType = ''

  while ((deMorganType = hasDeMorgan())) {
    if (deMorganType === 'and') {
      nextStep()
      addLine('\\text{Aplicarea legii lui De Morgan pentru operatorul } \\land ')

      let isReplaced = false
      expression = transformExpression(expression, node => {
        if (isReplaced) {
          return node
        }

        if (
          node.type === NodeType.Operation &&
          isUnaryOperation(node.operation) &&
          isOperationNode(node.operation.operand) &&
          isBinaryOperation(node.operation.operand.operation) &&
          node.operation.operator === 'not' &&
          node.operation.operand.operation.operator === 'and'
        ) {
          isReplaced = true

          const newNode = operationNode(
            binaryOperation(
              'or',
              operationNode(unaryOperation('not', node.operation.operand.operation.left)),
              operationNode(unaryOperation('not', node.operation.operand.operation.right)),
            ),
          )

          addSpace()
          addText('Folosind formula')
          addLine('\\overline{A \\land B} \\equiv \\overline{A} \\lor \\overline{B}')
          addSpace()
          addText('Aplicăm')

          addExpression(node)
          response += ' \\equiv '
          addExpression(newNode, true)

          return newNode
        }

        return node
      })
    } else {
      nextStep()
      addLine('\\text{Aplicarea legii lui De Morgan pentru operatorul } \\lor ')

      let isReplaced = false
      expression = transformExpression(expression, node => {
        if (isReplaced) {
          return node
        }

        if (
          node.type === NodeType.Operation &&
          isUnaryOperation(node.operation) &&
          isOperationNode(node.operation.operand) &&
          isBinaryOperation(node.operation.operand.operation) &&
          node.operation.operator === 'not' &&
          node.operation.operand.operation.operator === 'or'
        ) {
          isReplaced = true

          const newNode = operationNode(
            binaryOperation(
              'and',
              operationNode(unaryOperation('not', node.operation.operand.operation.left)),
              operationNode(unaryOperation('not', node.operation.operand.operation.right)),
            ),
          )

          addSpace()
          addText('Folosind formula')
          addLine('\\overline{A \\lor B} \\equiv \\overline{A} \\land \\overline{B}')
          addSpace()
          addText('Aplicăm')

          addExpression(node)
          response += ' \\equiv '
          addExpression(newNode, true)

          return newNode
        }

        return node
      })
    }

    addSpace()
    addText('Rezultat: ')
    addExpression(expression)
  }

  const hasDoubleNegation = () =>
    hasNode([expression], node => {
      return (
        node.type === NodeType.Operation &&
        isUnaryOperation(node.operation) &&
        node.operation.operator === 'not' &&
        isOperationNode(node.operation.operand) &&
        isUnaryOperation(node.operation.operand.operation) &&
        node.operation.operand.operation.operator === 'not'
      )
    })

  while (hasDoubleNegation()) {
    nextStep()
    addLine('\\text{Eliminarea dublei negații}')

    let isReplaced = false
    expression = transformExpression(expression, node => {
      if (isReplaced) {
        return node
      }

      if (
        node.type === NodeType.Operation &&
        isUnaryOperation(node.operation) &&
        node.operation.operator === 'not' &&
        isOperationNode(node.operation.operand) &&
        isUnaryOperation(node.operation.operand.operation) &&
        node.operation.operand.operation.operator === 'not'
      ) {
        isReplaced = true

        const newNode = node.operation.operand.operation.operand

        addSpace()
        addText('Folosind formula')
        addLine('\\overline{\\overline{A}} \\equiv A')
        addSpace()
        addText('Aplicăm')

        addExpression(node)
        response += ' \\equiv '
        addExpression(newNode, true)

        return newNode
      }

      return node
    })
    addSpace()
    addText('Rezultat: ')
    addExpression(expression)
  }

  while (!isChainOfSimpleChains(expression)) {
    nextStep()
    if (!isOperationNode(expression)) {
      addLine('\\text{Eroare: Expresia nu este o operație}')
      return response
    }
    const operation = expression.operation
    if (!isBinaryOperation(operation)) {
      addLine('\\text{Eroare: Expresia nu este o operație binară}')
      return response
    }
    if (operation.operator !== 'and' && operation.operator !== 'or') {
      addLine('\\text{Eroare: Expresia nu este o conjuncție sau o disjuncție}')
      return response
    }
    const operator = operation.operator
    addLine(`\\text{Distribuirea pe operatorul } \\l${operator} `)

    expression = distribute(expression)

    addSpace()
    addText('Rezultat: ')
    addExpression(expression)
  }

  function dedupe() {
    if (!isOperationNode(expression)) {
      addLine('\\text{Eroare: Expresia nu este o operație}')
      return response
    }

    const operation = expression.operation

    if (!isBinaryOperation(operation)) {
      addLine('\\text{Eroare: Expresia nu este o operație binară}')
      return response
    }

    if (operation.operator !== 'and' && operation.operator !== 'or') {
      addLine('\\text{Eroare: Expresia nu este o conjuncție sau o disjuncție}')
      return response
    }

    const chainElements = getChainElements(expression, operation.operator)

    let isSomeSimplified = false

    const fixedChainElements = chainElements.map(chainElement => {
      if (!isOperationNode(chainElement)) {
        return chainElement
      }

      const chainElementOperation = chainElement.operation

      if (!isBinaryOperation(chainElementOperation)) {
        return chainElement
      }

      const childChainElements = getChainElements(chainElement, chainElementOperation.operator)
      const fixedChildChainElements = childChainElements.filter((element, index) => {
        if (index === 0) {
          return true
        }
        const indexInArray = childChainElements.findIndex(
          childElement => expressionToString(childElement) === expressionToString(element),
        )
        return indexInArray === index
      })

      if (fixedChildChainElements.length === childChainElements.length) {
        return chainElement
      }

      isSomeSimplified = true

      return buildChain(fixedChildChainElements, chainElementOperation.operator)
    })

    if (isSomeSimplified) {
      expression = buildChain(fixedChainElements, operation.operator)

      addSpace()
      addText('Deduplicăm elementele: ')
      addExpression(expression)
    }
  }

  function fixFinalExpression() {
    if (!isOperationNode(expression)) {
      addLine('\\text{Eroare: Expresia nu este o operație}')
      return response
    }

    const operation = expression.operation

    if (!isBinaryOperation(operation)) {
      addLine('\\text{Eroare: Expresia nu este o operație binară}')
      return response
    }

    if (operation.operator !== 'and' && operation.operator !== 'or') {
      addLine('\\text{Eroare: Expresia nu este o conjuncție sau o disjuncție}')
      return response
    }

    const chainElements = getChainElements(expression, operation.operator)
    const someAreSimple = chainElements.some(chainElement => isSimpleValue(chainElement))

    if (someAreSimple) {
      nextStep()
      addText('Înlocuim valorile simple cu operații identice')

      const oppositeOperator = operation.operator === 'and' ? 'or' : 'and'

      const updatedChainElements = chainElements.map(chainElement => {
        if (isSimpleValue(chainElement)) {
          return operationNode(binaryOperation(oppositeOperator, chainElement, chainElement))
        }

        return chainElement
      })

      expression = buildChain(updatedChainElements, operation.operator)

      addSpace()
      addText('Rezultat: ')
      addExpression(expression)
    }
  }

  function fixReduction() {
    if (!isOperationNode(expression)) {
      addLine('\\text{Eroare: Expresia nu este o operație}')
      return response
    }

    const operation = expression.operation

    if (!isBinaryOperation(operation)) {
      addLine('\\text{Eroare: Expresia nu este o operație binară}')
      return response
    }

    if (operation.operator !== 'and' && operation.operator !== 'or') {
      addLine('\\text{Eroare: Expresia nu este o conjuncție sau o disjuncție}')
      return response
    }

    const chainElements = getChainElements(expression, operation.operator)

    let wasDuplicationmessageDisplayed = false

    for (const [index, chainElement] of chainElements.entries()) {
      if (!isOperationNode(chainElement)) {
        continue
      }

      const chainElementOperation = chainElement.operation

      if (!isBinaryOperation(chainElementOperation)) {
        continue
      }

      const childChainElements = getChainElements(chainElement, chainElementOperation.operator)

      const simpleValues = new Set<string>()
      const negatedValues = new Set<string>()

      for (const childChainElement of childChainElements) {
        if (isValueNode(childChainElement) || isVariableNode(childChainElement)) {
          simpleValues.add(expressionToString(childChainElement))
        } else if (
          isOperationNode(childChainElement) &&
          isUnaryOperation(childChainElement.operation) &&
          childChainElement.operation.operator === 'not' &&
          isSimpleValue(childChainElement.operation.operand)
        ) {
          negatedValues.add(expressionToString(childChainElement.operation.operand))
        }
      }

      const duplication = [...simpleValues].find(simpleValue => negatedValues.has(simpleValue))

      const overridingValue = chainElementOperation.operator === 'and' ? '0' : '1'

      if (duplication) {
        if (!wasDuplicationmessageDisplayed) {
          nextStep()
          addText('Eliminăm expresiile redundante:')
          wasDuplicationmessageDisplayed = true
        }

        const formula = `(${duplication} \\l${chainElementOperation.operator} \\overline{${duplication}}) \\equiv ${overridingValue}`
        addLine(formula)

        chainElements[index] = valueNode(overridingValue)
      } else if (simpleValues.has(overridingValue)) {
        if (!wasDuplicationmessageDisplayed) {
          nextStep()
          addText('Eliminăm expresiile redundante:')
          wasDuplicationmessageDisplayed = true
        }

        chainElements[index] = valueNode(overridingValue)
      }
    }

    if (wasDuplicationmessageDisplayed) {
      expression = buildChain(chainElements, operation.operator)
      addSpace()
      addText('Rezultat: ')
      addExpression(expression)
    }
  }

  function fixEmptyElement() {
    if (!isOperationNode(expression)) {
      addLine('\\text{Eroare: Expresia nu este o operație}')
      return response
    }

    const operation = expression.operation

    if (!isBinaryOperation(operation)) {
      addLine('\\text{Eroare: Expresia nu este o operație binară}')
      return response
    }

    if (operation.operator !== 'and' && operation.operator !== 'or') {
      addLine('\\text{Eroare: Expresia nu este o conjuncție sau o disjuncție}')
      return response
    }

    const chainElements = getChainElements(expression, operation.operator)
    const emptyElement = operation.operator === 'and' ? '1' : '0'

    const updatedChainElements = chainElements.filter(chainElement => {
      if (isValueNode(chainElement) && expressionToString(chainElement) === emptyElement) {
        return false
      }

      return true
    })

    if (updatedChainElements.length !== chainElements.length) {
      nextStep()
      addText('Eliminăm elementele redundante:')
      addLine(
        `\\text{Elementul } ${emptyElement} \\text{ este elementul identitate pentru operatorul } \\l${operation.operator}`,
      )
      addSpace()
      addText('Rezultat: ')
      expression = buildChain(updatedChainElements, operation.operator)
      addExpression(expression)
    }
  }

  dedupe()
  fixReduction()
  fixEmptyElement()

  const expressionBeforeHack = expression

  fixFinalExpression()

  addSpace()
  addText('Rezultat final: ')
  addExpression(expression)
  addSpace()
  addText('Formula pentru tabel: ')
  addText(expressionToString(expression))

  addSpace()
  addText('Distribuim pentru a schimba forma')
  expression = distribute(expressionBeforeHack)

  addSpace()
  addText('Rezultat: ')
  addExpression(expression)

  dedupe()
  fixReduction()
  fixEmptyElement()
  fixFinalExpression()

  addSpace()
  addText('Rezultat final în altă formă: ')
  addExpression(expression)
  addSpace()
  addText('Formula pentru tabel: ')
  addText(expressionToString(expression))

  return response
})

// const katexString = computed(() => buildKatexString(expression, true))
const katexHtmlString = computed(() => renderToString(katexString.value, { displayMode: true }))
</script>

<template>
  <div class="w-full flex flex-col items-stretch">
    <FormulaEditor @update="ast = $event" />
    <div class="w-full mt-2 overflow-auto" v-html="katexHtmlString" />
  </div>
</template>
