<template>
  <div class="container">
    <main class="contents">
      <nuxt class="chapter" />
      <sg-toc class="toc" />
    </main>
    <footer class="footer">
      <p class="site-title">Steins;Git <span class="sub">Rebuild</span></p>
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
@import "../assets/styles/vars.css";

.container {
}
@media screen and (min-width: 64em) {
  .container {
    position: relative;
    min-height: 100vh;
  }
}

.contents {
}
@media screen and (min-width: 64em) {
  .contents {
    display: grid;
    grid-template-columns: 20em 1fr;

    .chapter,
    .toc {
      max-height: 100vh;
      padding: 0 0.5em;
      overflow-y: auto;
    }

    .chapter {
      grid-column: 2;
    }

    .toc {
      grid-column: 1;
      grid-row: 1;
    }
  }
}

.footer {
}
@media screen and (min-width: 64em) {
  .footer {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
  }
}

.site-title {
  margin: 0;
  font-weight: bold;

  .sub {
    text-transform: uppercase;
  }
}
@media screen and (min-width: 64em) {
  .site-title {
    margin: 0 0.5em 0;
  }
}

.copyrights {
  margin: 0;
}
</style>