module.exports = {
  root: true,
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    // '@tencent/eslint-config-tencent',
    // '@tencent/eslint-config-tencent/ts',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  overrides: [
    {
      files: ['.webpack/**/*.js'],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/naming-convention': 'off',
    // 'react-hooks/exhaustive-deps': 'off',
  },
  globals: {
    qb_bridge: true,
    browser: true,
  },
};
