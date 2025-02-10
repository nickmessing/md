import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import { operators } from '../language/tokens'

export const languageId = 'md-logica'

const operatorRE = new RegExp(operators.join('|'))

monaco.languages.register({ id: languageId })
monaco.languages.setLanguageConfiguration(languageId, {
  brackets: [['(', ')']],
  autoClosingPairs: [{ open: '(', close: ')' }],
})
monaco.languages.setMonarchTokensProvider(languageId, {
  tokenizer: {
    root: [
      [/\(|\)/, 'bracket'],
      [operatorRE, 'keyword'],
      [/\b[A-Z]{1,}[0-9]*\b/, 'variable'],
      [/[0-1]/, 'constant'],
      [/;/, 'meta.separator'],
    ],
  },
})
