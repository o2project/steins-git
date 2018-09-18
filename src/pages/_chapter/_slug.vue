<template>
  <div>
    <div v-html="mdContents" />
    <sg-aside />
  </div>
</template>

<script>
import SgAside from '~/components/Aside.vue';

export default {
  async asyncData({ params }) {
    const { chapter, slug } = params;
    const mdContents = await import(`../../drafts/${chapter}/${slug}.md`);

    return {
      mdContents,
    }
  },

  components: {
    SgAside,
  },
}
</script>
