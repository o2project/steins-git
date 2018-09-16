<template>
  <div v-html="mdContents"></div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const { chapter, slug } = params;
    const mdContents = await import(`../../drafts/${chapter}/${slug}.md`);

    return {
      mdContents,
    }
  }
}
</script>
