module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  // parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   project: ['./tsconfig.json']
  // },
  extends: ['standard', 'react-app', 'prettier'],
  plugins: ['prettier'],
  rules: {
    indent: ['error', 2],
    camelcase: ['error', { allow: ['created_at', 'updated_at', 'deleted_at', 'region_key'] }],
    semi: ['error', 'never'],
    'import/order': 0,
    'react/jsx-indent': [2, 2, { checkAttributes: true, indentLogicalExpressions: true }],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'function-paren-newline': ['error', 'multiline-arguments'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'never', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: 'function', next: '*' },
    ],
  },
  overrides: [
    {
      files: ['**/*.test.tsx', '**/*.spec.tsx', '**/*.spec.ts'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
    },
  ],
}
