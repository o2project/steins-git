<template>
  <div v-html="mdContents" />
</template>

<script>
export default {
  async asyncData() {
    const mdContents = await import(`../drafts/introduction.md`);

    return {
      mdContents,
    };
  },
}
</script>