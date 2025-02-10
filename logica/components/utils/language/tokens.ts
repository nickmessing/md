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

export const separator = ';' as const
export type Separator = typeof separator

export enum TokenType {
  Bracket = 'bracket',
  Variable = 'variable',
  Operator = 'operator',
  Value = 'value',
  Separator = 'separator',
}

export type TokenBase = {
  line: number
  column: number
  length: number
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
  value: Value
}

export type SeparatorToken = TokenBase & {
  type: TokenType.Separator
  value: Separator
}

export type Token = BracketToken | VariableToken | OperatorToken | ValueToken | SeparatorToken

export type TokenizationErrorResult = {
  success: false
  message: string
  line: number
  column: number
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

export function isValidSeparator(str: string): str is Separator {
  return str === separator
}

export function tokenize(str: string): TokenizationResult {
  const tokens: Token[] = []
  let readingString = ''
  let line = 1
  let index = 0
  let column = 0
  let error: TokenizationErrorResult | undefined

  function pushReadingString(line: number, column: number) {
    const properColumn = column - readingString.length
    if (readingString === '') {
      return
    }
    if (isValidBracket(readingString)) {
      tokens.push({
        type: TokenType.Bracket,
        value: readingString,
        line,
        column: properColumn,
        length: readingString.length,
      })
    } else if (isValidVariableName(readingString)) {
      tokens.push({
        type: TokenType.Variable,
        value: readingString,
        line,
        column: properColumn,
        length: readingString.length,
      })
    } else if (isValidOperator(readingString)) {
      tokens.push({
        type: TokenType.Operator,
        value: readingString,
        line,
        column: properColumn,
        length: readingString.length,
      })
    } else if (isValidValue(readingString)) {
      tokens.push({
        type: TokenType.Value,
        value: readingString,
        line,
        column: properColumn,
        length: readingString.length,
      })
    } else if (isValidSeparator(readingString)) {
      tokens.push({
        type: TokenType.Separator,
        line,
        column: properColumn,
        length: readingString.length,
        value: separator,
      })
    } else {
      error = {
        success: false,
        message: `Invalid token "${readingString}" on line ${line}, column ${properColumn}`,
        line,
        column: properColumn,
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
      pushReadingString(line, column)
    } else if (char === '\n') {
      pushReadingString(line, column)
      line++
      column = 0
    } else if (char === '(' || char === ')') {
      pushReadingString(line, column)
      readingString += char
      pushReadingString(line, column)
    } else if (char === ';') {
      pushReadingString(line, column)
      readingString += char
      pushReadingString(line, column)
    } else {
      readingString += char
    }
    index++
    column++
  }

  pushReadingString(line, column)

  return (
    error ?? {
      success: true,
      tokens,
    }
  )
}
