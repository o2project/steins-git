module.exports = {
  srcDir: 'src/',
  css: [
    '@/assets/styles/reset.css',
    '@/assets/styles/vars.css',
    '@/assets/styles/foundation.css',
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