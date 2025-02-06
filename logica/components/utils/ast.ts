import { BinaryOperator, binaryOperators, Token, TokenType, UnaryOperator, unaryOperators, Value } from './tokens'

export enum NodeType {
  Operation = 'Operation',
  Value = 'Value',
  Variable = 'Variable',
}

export enum OperationType {
  Unary = 'Unary',
  Binary = 'Binary',
}

export type UnaryOperation = {
  type: OperationType.Unary
  operator: UnaryOperator
  operand: ExpressionNode
}

export type BinaryOperation = {
  type: OperationType.Binary
  operator: BinaryOperator
  left: ExpressionNode
  right: ExpressionNode
}

export type Operation = UnaryOperation | BinaryOperation

export type ValueNode = {
  type: NodeType.Value
  value: Value
}

export type OperationNode = {
  type: NodeType.Operation
  operation: Operation
}

export type VariableNode = {
  type: NodeType.Variable
  name: string
}

export type ExpressionNode = ValueNode | OperationNode | VariableNode

export type AST = ExpressionNode

export type ParsingErrorResult = {
  success: false
  message: string
  index: number
  length: number
}

export function isParsingErrorResult(value: any): value is ParsingErrorResult {
  return typeof value === 'object' && value != null && value.success === false
}

export type ParsingSuccessResult = {
  success: true
  ast: AST
}

export type ParsingResult = ParsingErrorResult | ParsingSuccessResult

export function isUnaryOperation(value: Operation): value is UnaryOperation {
  return value.type === OperationType.Unary
}

export function isBinaryOperation(value: Operation): value is BinaryOperation {
  return value.type === OperationType.Binary
}

export function isValueNode(value: ExpressionNode): value is ValueNode {
  return value.type === NodeType.Value
}

export function isOperationNode(value: ExpressionNode): value is OperationNode {
  return value.type === NodeType.Operation
}

export function isVariableNode(value: ExpressionNode): value is VariableNode {
  return value.type === NodeType.Variable
}

export function expressionUniqueHash(expression: ExpressionNode): string {
  if (isValueNode(expression)) {
    return expression.value
  }
  if (isVariableNode(expression)) {
    return expression.name
  }
  if (isOperationNode(expression)) {
    if (isUnaryOperation(expression.operation)) {
      return `${expression.operation.operator}(${expressionUniqueHash(expression.operation.operand)})`
    }
    if (isBinaryOperation(expression.operation)) {
      return `${expression.operation.operator}(${expressionUniqueHash(
        expression.operation.left,
      )},${expressionUniqueHash(expression.operation.right)})`
    }
  }
  return ''
}

// https://en.wikipedia.org/wiki/Recursive_descent_parser
export function parse(tokens: Token[]): ParsingResult {
  let currentIndex = 0

  function currentToken(): Token | undefined {
    return tokens[currentIndex]
  }

  function advance(): void {
    currentIndex++
  }

  function errorAtToken(message: string, token: Token): ParsingErrorResult {
    return {
      success: false,
      message,
      index: token.position,
      length: 1,
    }
  }

  function parseFactor(): ExpressionNode | ParsingErrorResult {
    let token = currentToken()
    if (!token) {
      return {
        success: false,
        message: 'Unexpected end of tokens while parsing factor',
        index: -1,
        length: 0,
      }
    }

    if (token.type === TokenType.Operator) {
      if (!unaryOperators.includes(token.value as UnaryOperator)) {
        return errorAtToken(`Expected unary operator but got '${token.value}'`, token)
      }
      const op = token.value as UnaryOperator
      advance()
      const operand = parseFactor()
      if (isParsingErrorResult(operand)) return operand
      return {
        type: NodeType.Operation,
        operation: {
          type: OperationType.Unary,
          operator: op,
          operand,
        },
      }
    }

    if (token.type === TokenType.Bracket && token.value === '(') {
      advance() // consume '('
      const expr = parseExpression()
      if (isParsingErrorResult(expr)) return expr

      const closing = currentToken()
      if (!closing || closing.type !== TokenType.Bracket || closing.value !== ')') {
        return {
          success: false,
          message: 'Missing closing parenthesis',
          index: token.position,
          length: 1,
        }
      }
      advance() // consume ')'
      return expr
    }

    if (token.type === TokenType.Value) {
      const node: ValueNode = {
        type: NodeType.Value,
        value: token.value,
      }
      advance()
      return node
    }

    if (token.type === TokenType.Variable) {
      const node: VariableNode = {
        type: NodeType.Variable,
        name: token.value,
      }
      advance()
      return node
    }

    return errorAtToken(`Unexpected token '${token.value}'`, token)
  }

  function parseExpression(): ExpressionNode | ParsingErrorResult {
    let left = parseFactor()
    if (isParsingErrorResult(left)) return left

    while (true) {
      const token = currentToken()
      if (!token || token.type !== TokenType.Operator) break

      if (!binaryOperators.includes(token.value as BinaryOperator)) {
        return errorAtToken(`Expected binary operator but got '${token.value}'`, token)
      }
      const op = token.value as BinaryOperator
      advance()

      let right = parseFactor()
      if (isParsingErrorResult(right)) return right

      left = {
        type: NodeType.Operation,
        operation: {
          type: OperationType.Binary,
          operator: op,
          left,
          right,
        },
      }
    }
    return left
  }

  const result = parseExpression()

  if (isParsingErrorResult(result)) {
    return result
  }

  if (currentIndex < tokens.length) {
    const token = currentToken()!
    return errorAtToken('Unexpected extra tokens', token)
  }

  return {
    success: true,
    ast: result as ExpressionNode,
  } satisfies ParsingSuccessResult
}
