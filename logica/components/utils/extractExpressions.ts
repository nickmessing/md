import {
  ExpressionNode,
  expressionUniqueHash,
  isBinaryOperation,
  isOperationNode,
  isUnaryOperation,
  isValueNode,
  isVariableNode,
  Operation,
} from './language/ast'

export function extractExpressionsFromOperation(operation: Operation): ExpressionNode[] {
  if (isUnaryOperation(operation)) {
    return extractExpressions(operation.operand)
  }

  if (isBinaryOperation(operation)) {
    return [...extractExpressions(operation.left), ...extractExpressions(operation.right)]
  }

  return []
}

export function extractExpressions(expression: ExpressionNode): ExpressionNode[] {
  if (isOperationNode(expression)) {
    return [...extractExpressionsFromOperation(expression.operation), expression]
  }

  if (isValueNode(expression)) {
    return [expression]
  }

  if (isVariableNode(expression)) {
    return [expression]
  }

  return []
}

export function uniqueExpressions(expressions: ExpressionNode[]): ExpressionNode[] {
  const mappedToHashes = expressions.map(expression => ({
    hash: expressionUniqueHash(expression),
    expression,
  }))

  const unique = mappedToHashes.filter(({ hash }, index) => mappedToHashes.findIndex(e => e.hash === hash) === index)

  const allExpressions = unique.map(({ expression }) => expression)
  const values = allExpressions.filter(isValueNode).sort((a, b) => a.value.localeCompare(b.value))
  const variables = allExpressions.filter(isVariableNode)
  const operations = allExpressions.filter(isOperationNode)

  return [...variables, ...values, ...operations]
}
