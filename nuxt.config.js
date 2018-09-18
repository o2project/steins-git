module.exports = {
  srcDir: 'src/',
  css: [
    '@/assets/styles/reset.css',
  ],
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