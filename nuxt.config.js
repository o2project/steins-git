module.exports = {
  srcDir: 'src/',
  modules: [
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-footnote',
    ],
  },
};