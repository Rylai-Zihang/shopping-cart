module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    'no-console': 1,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    camelcase: [
      1,
      {
        ignoreGlobals: true
      }
    ],
    quotes: [
      1,
      'single',
      {
        allowTemplateLiterals: true
      }
    ],
    semi: [1, 'never'],
    'object-curly-spacing': [1, 'always'],
    'comma-dangle': 1,
    indent: [1, 2],
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'max-len': [1, 120],
    'no-multiple-empty-lines': 1,
    'import/first': 1,
    'import/order': [
      1,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object'
        ]
      }
    ],
    'import/no-duplicates': 1,
    'import/newline-after-import': 1,
    'no-multi-spaces': 1
  }
}
