import {
  AST,
  ExpressionNode,
  isOperationNode,
  isUnaryOperation,
  isBinaryOperation,
  UnaryOperation,
  OperationType,
  BinaryOperation,
  ValueNode,
  NodeType,
  OperationNode,
  Operation,
  isValueNode,
  isVariableNode,
} from './ast'
import { BinaryOperator, UnaryOperator, Value } from './tokens'

export function hasNode(ast: AST, predicate: (node: ExpressionNode) => boolean): boolean {
  return ast.some(expr => findNode(expr, predicate) !== undefined)
}

export function findNode(
  root: ExpressionNode,
  predicate: (node: ExpressionNode) => boolean,
): ExpressionNode | undefined {
  if (predicate(root)) {
    return root
  }
  if (isOperationNode(root)) {
    const op = root.operation
    if (isUnaryOperation(op)) {
      return findNode(op.operand, predicate)
    } else if (isBinaryOperation(op)) {
      // search left side
      const foundLeft = findNode(op.left, predicate)
      if (foundLeft) return foundLeft
      // else search right
      return findNode(op.right, predicate)
    }
  }
  return undefined
}

export type NodeTransformer = (node: ExpressionNode) => ExpressionNode

export function transformExpression(root: ExpressionNode, transform: NodeTransformer): ExpressionNode {
  let node = transform(root)

  if (isOperationNode(node)) {
    const op = node.operation
    if (isUnaryOperation(op)) {
      const newOperand = transformExpression(op.operand, transform)
      // if changed, rebuild the node
      if (newOperand !== op.operand) {
        node = {
          ...node,
          operation: {
            ...op,
            operand: newOperand,
          },
        }
      }
    } else if (isBinaryOperation(op)) {
      const newLeft = transformExpression(op.left, transform)
      const newRight = transformExpression(op.right, transform)
      if (newLeft !== op.left || newRight !== op.right) {
        node = {
          ...node,
          operation: {
            ...op,
            left: newLeft,
            right: newRight,
          },
        }
      }
    }
  }
  return node
}

export function transformAST(ast: AST, transform: NodeTransformer): AST {
  return ast.map(expr => transformExpression(expr, transform))
}

export const unaryOperation = (operator: UnaryOperator, operand: ExpressionNode): UnaryOperation => ({
  type: OperationType.Unary,
  operator,
  operand,
})

export const binaryOperation = (
  operator: BinaryOperator,
  left: ExpressionNode,
  right: ExpressionNode,
): BinaryOperation => ({
  type: OperationType.Binary,
  operator,
  left,
  right,
})

export const valueNode = (value: Value): ValueNode => ({
  type: NodeType.Value,
  value,
})

export const operationNode = (operation: Operation): OperationNode => ({
  type: NodeType.Operation,
  operation,
})

export const variableNode = (name: string): ExpressionNode => ({
  type: NodeType.Variable,
  name,
})

export const isSimpleValue = (node: ExpressionNode): boolean =>
  isValueNode(node) ||
  isVariableNode(node) ||
  (isOperationNode(node) &&
    isUnaryOperation(node.operation) &&
    (isValueNode(node.operation.operand) || isVariableNode(node.operation.operand)))

export const isChainOfSimpleValues = (node: ExpressionNode, operator?: BinaryOperator): boolean => {
  if (isSimpleValue(node)) return true

  if (isOperationNode(node)) {
    const op = node.operation
    if (isUnaryOperation(op)) {
      return false
    } else if (isBinaryOperation(op)) {
      if (op.operator !== 'and' && op.operator !== 'or') return false
      if (operator && op.operator !== operator) return false

      return isChainOfSimpleValues(op.left, op.operator) && isChainOfSimpleValues(op.right, op.operator)
    }
  }

  return false
}

export const isChainOfSimpleChains = (node: ExpressionNode, operator?: BinaryOperator): boolean => {
  if (isChainOfSimpleValues(node, operator === 'and' ? 'or' : operator === 'or' ? 'and' : undefined)) return true

  if (isOperationNode(node)) {
    const op = node.operation
    if (isUnaryOperation(op)) {
      return false
    } else if (isBinaryOperation(op)) {
      if (op.operator !== 'and' && op.operator !== 'or') return false
      if (operator && op.operator !== operator) return false

      return isChainOfSimpleChains(op.left, op.operator) && isChainOfSimpleChains(op.right, op.operator)
    }
  }

  return false
}

export const getChainElements = (node: ExpressionNode, operator: BinaryOperator): ExpressionNode[] => {
  if (!isOperationNode(node)) return [node]
  const operation = node.operation

  if (operation.operator !== operator) return [node]

  return [...getChainElements(operation.left, operator), ...getChainElements(operation.right, operator)]
}

function cartesianProduct(elementsInChains: ExpressionNode[][]) {
  // Start with one empty combination
  let result: ExpressionNode[][] = [[]]

  for (const arr of elementsInChains) {
    const newResult: ExpressionNode[][] = []
    for (const combo of result) {
      for (const value of arr) {
        // Append each item in the current array to existing combos
        newResult.push([...combo, value])
      }
    }
    result = newResult
  }

  return result
}

export const buildChain = (elements: ExpressionNode[], operator: BinaryOperator): ExpressionNode => {
  if (elements.length === 0) return valueNode('1')
  if (elements.length === 1) return elements[0]

  return elements.reduce((acc, element) => operationNode(binaryOperation(operator, acc, element)))
}

export const distribute = (node: ExpressionNode) => {
  if (!isOperationNode(node)) return node
  const operation = node.operation
  if (!isBinaryOperation(operation)) return node
  const { operator, left, right } = operation
  if (operator !== 'or' && operator !== 'and') return node
  const otherOperator = operator === 'or' ? 'and' : 'or'

  const chainElements = getChainElements(node, operator)
  const elementsInChains = chainElements.map(element => getChainElements(element, otherOperator))

  const resultingElements: ExpressionNode[][] = cartesianProduct(elementsInChains)

  return buildChain(
    resultingElements.map(elements => buildChain(elements, operator)),
    otherOperator,
  )
}
