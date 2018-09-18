<template>
  <div>
    <nuxt />
    <sg-aside />
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