import {
  ExpressionNode,
  isBinaryOperation,
  isOperationNode,
  isUnaryOperation,
  isValueNode,
  isVariableNode,
} from './ast'

export function buildKatexString(expression: ExpressionNode, isBracketSetOmitted = false): string {
  if (isValueNode(expression)) {
    return ` ${expression.value} `
  }
  if (isVariableNode(expression)) {
    const variableName = expression.name.match(/^[A-Z]*/)?.[0] ?? ''
    const index = expression.name.match(/\d+$/)?.[0] ?? ''

    return ` {${variableName}}${index ? `_{${index}}` : ''} `
  }
  if (isOperationNode(expression)) {
    if (isUnaryOperation(expression.operation)) {
      if (expression.operation.operator === 'not') {
        return ` \\overline{${buildKatexString(expression.operation.operand)}} `
      }
    }
    if (isBinaryOperation(expression.operation)) {
      const left = buildKatexString(expression.operation.left)
      const right = buildKatexString(expression.operation.right)
      let expressionString

      switch (expression.operation.operator) {
        case 'and':
          expressionString = ` {${left}} \\land {${right}} `
          break
        case 'or':
          expressionString = ` {${left}} \\lor {${right}} `
          break
        case 'implies':
          expressionString = ` {${left}} \\rightarrow {${right}} `
          break
        case 'iff':
          expressionString = ` {${left}} \\leftrightarrow {${right}} `
          break
        case 'nand':
          expressionString = ` {${left}} \\vert {${right}} `
          break
        case 'nor':
          expressionString = ` {${left}} \\downarrow {${right}} `
          break
        case 'xor':
          expressionString = ` {${left}} \\oplus {${right}} `
          break
      }

      if (expression.operation.operator === 'and') {
        expressionString = ` {${left}} \\land {${right}} `
      }

      if (expressionString) {
        return isBracketSetOmitted ? expressionString : ` (${expressionString}) `
      }
    }
  }
  return ''
}
