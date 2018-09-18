<template>
  <div>
    <sg-aside />
    <div v-html="mdContents" />
  </div>
</template>

<script>
import SgAside from '~/components/Aside.vue';

export default {
  async asyncData() {
    const mdContents = await import(`../drafts/post-script.md`);

    return {
      mdContents,
    }
  },

  components: {
    SgAside,
  },
}
</script>
