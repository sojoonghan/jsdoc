module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['jsdoc', '@typescript-eslint/eslint-plugin', 'eslint-plugin', 'eslint-plugin-prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:jsdoc/recommended',
    'eslint-config-prettier',
    'prettier',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        alwyasTryTypes: true,
      },
    },
    jsdoc: {
      mode: 'typescript',
    },
  },
  root: true,
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es2022: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }],
    // '@typescript-eslint/interface-name-prefix': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-unused-vars': 'off', //사용안한 변수 경고 중복
    '@typescript-eslint/no-unused-vars': 'warn', //사용안한 변수는 경고
    'comma-dangle': 'off', // 마지막에 , 을 넣어주지 않는다.
    'spaced-comment': 'off', //주석을 뒤에 달 수 있다.
    'global-require': 'off', //함수 내에서 require 사용가능
    'no-unused-vars': ['warn', { varsIgnorePattern: 'HTMLElementTagNameMap' }],
    'jsdoc/check-indentation': 'error',
    'jsdoc/no-undefined-types': 1, // 추천
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-property-names': 'error',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/require-hyphen-before-param-description': ['error', 'never'],
    'jsdoc/require-jsdoc': 1, // 추천
    'jsdoc/require-param ': 1, // 추천
    'jsdoc/require-param-description': 'error',
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-param-type': 'error',
    'jsdoc/require-property': 'error',
    'jsdoc/require-property-name': 'error',
    'jsdoc/require-property-type': 'error',
    'jsdoc/require-returns-description': 'error',
    'jsdoc/require-returns-type': 'error',
    'jsdoc/require-returns': 'error',
    // Disallow @ts-ignore directive. Use @ts-expect-error instead
    'no-warning-comments': ['error', { terms: ['@ts-ignore'], location: 'start' }],
  },
};
