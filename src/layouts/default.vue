<template>
  <div class="container">
    <header class="header">
      <h1>Steins;Git <span class="sub">Rebuild</span></h1>
    </header>
    <main class="contents">
      <nuxt class="chapter" />
      <sg-aside class="aside" />
    </main>
    <footer class="footer">
      <p class="copyrights">
        <small>© 2014 O2 Project.</small>
      </p>
    </footer>
  </div>
</template>

<script>
import SgAside from '~/components/Aside.vue';

export default {
  components: {
    SgAside,
  },
}
</script>

<style lang="scss" scoped>
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