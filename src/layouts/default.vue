<template>
  <div class="container">
    <header class="header">
      <h1 class="title">Steins;Git <span class="sub">Rebuild</span></h1>
    </header>
    <main class="contents">
      <nuxt class="chapter" />
      <sg-toc class="toc" />
    </main>
    <footer class="footer">
      <p class="copyrights">
        <small>© 2014 O2 Project.</small>
      </p>
    </footer>
  </div>
</template>

<script>
import SgToc from '~/components/Toc.vue';

export default {
  components: {
    SgToc,
  },
}
</script>

<style lang="scss" scoped>
.title {
  margin: 0;
  font-size: 1.5em;
}

.title .sub {
  text-transform: uppercase;
}

.contents {
  display: grid;
  grid-template-columns: 20em 1fr;
}

.chapter {
  grid-row: 1;
  grid-column: 2;
  max-height: 100vh;
  padding: 0 0.5em;
  overflow-y: auto;
}

.aside {
  grid-row: 1;
  grid-column: 1;
  max-height: 100vh;
  padding: 0 0.5em;
  overflow-y: auto;
}
</style>