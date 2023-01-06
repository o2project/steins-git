module.exports = {
  endOfLine: 'auto',
  printWidth: 120,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  overrides: [
    {
      files: ['*.md'],
      options: {
        parser: 'markdown-nocjsp',
      },
    },
  ],
};
