<template>
  <nav>
    <template v-for="(group, index) in menu">
      <h3 class="title" :key="index">
        <nuxt-link :to="group.link" exact>
          {{ group.title }}
        </nuxt-link>
      </h3>
      <ul class="items" :key="index">
        <li v-for="(content, idx) in group.contents" :key="index">
          <nuxt-link :to="content.link" :key="idx" exact>
            {{ content.title }}
          </nuxt-link>
        </li>
      </ul>
    </template>
  </nav>
</template>

<script>
export default {
  computed: {
    menu() { return this.$store.state.menu },
  },
}
</script>

<style lang="scss" scoped>
.title {
  margin: 0.5em 0;
}

.items {
  margin: 0;
}
</style>