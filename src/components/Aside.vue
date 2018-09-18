<template>
  <nav>
    <template v-for="(group, index) in menu">
      <h3 :key="index">{{ group.title }}</h3>
      <ul :key="index">
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
