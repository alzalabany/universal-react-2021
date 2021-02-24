const parens_new_line = 'parens-new-line'
const never = 'never'
const always = 'always'

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'react-app',
    'plugin:styled-components-a11y/recommended',
    'plugin:sonarjs/recommended',
    'plugin:compat/recommended',
    'plugin:tailwind/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:styled-components-a11y/strict'
  ],
  plugins: [
    'unicorn',
    'testing-library',
    'better-styled-components',
    'styled-components-a11y',
    'sonarjs'
  ],
  rules: {
    camelcase: 0,
    // camelcase: ['error', { allow: ['created_at', 'updated_at', 'deleted_at', 'region_key'] }],
    'array-element-newline': ['error', 'consistent'],
    'object-property-newline': ['error', { allowMultiplePropertiesPerLine: false }],
    'better-styled-components/sort-declarations-alphabetically': 2,
    // camelcase: ['error', { allow: ['created_at', 'updated_at', 'deleted_at'] }],
    indent: ['error', 2],
    semi: ['error', never],
    'import/order': 0,
    'react/jsx-indent': [2, 2, {
      checkAttributes: true,
      indentLogicalExpressions: true
    }],
    'react/style-prop-object': ['error', { allow: ['StatusBar'] }],
    'react/jsx-first-prop-new-line': [2],
    'function-paren-newline': ['error', 'multiline-arguments'],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/jsx-max-props-per-line': [2, {
      when: always,
      maximum: 1
    }],
    'react/jsx-tag-spacing': ['error', {
      closingSlash: never,
      beforeSelfClosing: always,
      afterOpening: never,
      beforeClosing: never
    }],
    'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
    'react/jsx-wrap-multilines': [
      2,
      {
        declaration: parens_new_line,
        assignment: parens_new_line,
        return: parens_new_line,
        arrow: parens_new_line,
        condition: parens_new_line,
        logical: parens_new_line,
        prop: parens_new_line
      }
    ]
  },
  overrides: [
    {
      files: ['**/*.test.tsx', '**/*.spec.tsx', '**/*.spec.ts'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:testing-library/react'
      ]
    }
  ]
}

// module.exports = {
//   root: true,
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaVersion: 2018,
//     sourceType: 'module',
//   },
//   env: {
//     browser: true, // Enables browser globals like window and document
//     amd: true, // Enables require() and define() as global variables as per the amd spec.
//     node: true, // Enables Node.js global variables and Node.js scoping.
//   },
//   extends: [
//     'standard',
//     'eslint:recommended',
//     'plugin:@typescript-eslint/eslint-recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react/recommended',
//     'react-app',
//     'plugin:tailwind/recommended',
//     'plugin:jsx-a11y/strict',
//     'plugin:styled-components-a11y/strict',
//   ],
//   plugins: ['styled-components-a11y', 'better-styled-components'],
//   rules: {
//     'function-paren-newline': ['error', 'multiline-arguments'],

//     /// FOR PRETTIER
//     '@typescript-eslint/ban-ts-ignore': ['off'],
//     '@typescript-eslint/camelcase': ['off'],
//     '@typescript-eslint/explicit-function-return-type': ['off'],
//     '@typescript-eslint/interface-name-prefix': ['off'],
//     '@typescript-eslint/no-explicit-any': ['off'],
//     '@typescript-eslint/no-unused-expressions': ['off'],
//     '@typescript-eslint/no-var-requires': ['off'],
//     '@typescript-eslint/no-use-before-define': ['off'],
//     'comma-dangle': ['error', 'always-multiline'],
//     'no-async-promise-executor': ['off'],
//     'no-empty-pattern': ['off'],
//     'no-undef': ['error'],
//     'no-var': ['error'],
//     'object-curly-spacing': ['error', always],
//     quotes: ['error', 'single', { allowTemplateLiterals: true }],
//     'spaced-comment': ['off'],
//     'no-prototype-builtins': ['off'],
//     'sort-keys': ['off'],
//     'space-before-function-paren': ['off'],
//   },
//   overrides: [
//     {
//       files: ['**/*.test.tsx', '**/*.spec.tsx', '**/*.spec.ts'],
//       extends: ['react-app/jest', 'plugin:jest/recommended', 'plugin:jest/style'],
//     },
//   ],
// }
