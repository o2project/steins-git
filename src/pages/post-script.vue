<template>
  <div v-html="mdContents"></div>
</template>

<script>
export default {
  async asyncData() {
    const mdContents = await import(`../drafts/post-script.md`);

    return {
      mdContents,
    }
  }
}
</script>
