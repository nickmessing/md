export const unaryOperators = ['not'] as const
export type UnaryOperator = (typeof unaryOperators)[number]

export const binaryOperators = ['and', 'or', 'implies', 'iff', 'nand', 'nor', 'xor'] as const
export type BinaryOperator = (typeof binaryOperators)[number]

export const operators = [...unaryOperators, ...binaryOperators] as const
export type Operator = (typeof operators)[number]

export const brackets = ['(', ')'] as const
export type Bracket = (typeof brackets)[number]

export const values = ['0', '1'] as const
export type Value = (typeof values)[number]

export enum TokenType {
  Bracket = 'bracket',
  Variable = 'variable',
  Operator = 'operator',
  Value = 'value',
}

export type TokenBase = {
  position: number
}

export type BracketToken = TokenBase & {
  type: TokenType.Bracket
  value: Bracket
}

export type VariableToken = TokenBase & {
  type: TokenType.Variable
  value: string
}

export type OperatorToken = TokenBase & {
  type: TokenType.Operator
  value: Operator
}

export type ValueToken = TokenBase & {
  type: TokenType.Value
  value: '0' | '1'
}

export type Token = BracketToken | VariableToken | OperatorToken | ValueToken

export type TokenizationErrorResult = {
  success: false
  message: string
  index: number
  length: number
}

export type TokenizationSuccessResult = {
  success: true
  tokens: Token[]
}

export type TokenizationResult = TokenizationErrorResult | TokenizationSuccessResult

export function isValidVariableName(str: string): boolean {
  return /^[A-Z]{1,}[0-9]*$/.test(str)
}

export function isValidBracket(str: string): str is Bracket {
  return brackets.includes(str as Bracket)
}

export function isValidOperator(str: string): str is Operator {
  return operators.includes(str as Operator)
}

export function isValidValue(str: string): str is Value {
  return values.includes(str as Value)
}

export function tokenize(str: string): TokenizationResult {
  const tokens: Token[] = []
  let readingString = ''
  let index = 0
  let error: TokenizationErrorResult | undefined

  function pushReadingString() {
    let properIndex = index - readingString.length
    if (readingString === '') {
      return
    }
    if (isValidBracket(readingString)) {
      tokens.push({ type: TokenType.Bracket, value: readingString, position: properIndex })
    } else if (isValidVariableName(readingString)) {
      tokens.push({ type: TokenType.Variable, value: readingString, position: properIndex })
    } else if (isValidOperator(readingString)) {
      tokens.push({ type: TokenType.Operator, value: readingString, position: properIndex })
    } else if (isValidValue(readingString)) {
      tokens.push({ type: TokenType.Value, value: readingString, position: properIndex })
    } else {
      error = {
        success: false,
        message: `Invalid token "${readingString}" at index ${properIndex}`,
        index: properIndex,
        length: readingString.length,
      }
    }
    readingString = ''
  }

  while (index < str.length) {
    if (error) {
      return error
    }
    const char = str[index]
    if (char === ' ') {
      pushReadingString()
    } else if (char === '(' || char === ')') {
      pushReadingString()
      readingString += char
      pushReadingString()
    } else {
      readingString += char
    }
    index++
  }

  pushReadingString()

  return (
    error ?? {
      success: true,
      tokens,
    }
  )
}
