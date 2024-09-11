module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh','react', '@typescript-eslint',],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'linebreak-style': 'off',
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 4],
    'react/jsx-indent': ['error', 4],
    'react/jsx-indent-props': ['error', 4],
    'no-unused-vars': ['off', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
    eqeqeq: ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/prop-types': 'off',
    'jsx-quotes': ['warn', 'prefer-double'],
    'react/jsx-filename-extension': ['error', {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    'max-len': ['warn', 130, { ignoreComments: true }],
    'space-infix-ops': 'off',
    'arrow-body-style': 'off',
    'react/require-default-props': 'off',
    'no-nested-ternary': 'off',
    "no-param-reassign": 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "@typescript-eslint/no-unused-vars": ["warn"],
    '@typescript-eslint/ban-ts-comment': 'off',
  },
  overrides: [
    {
      files: ['src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },

}
