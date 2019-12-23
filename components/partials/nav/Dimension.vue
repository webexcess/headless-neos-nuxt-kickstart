<template>
  <nav class="dimension-nav">
    <nuxt-link v-for="dimension in dimensions" :key="dimension.dimensionValue" :to="dimension.uriPath" v-html="dimension.dimensionValue" />
  </nav>
</template>

<script>
  export default {
    computed: {
      dimensions () {
        return this.$store.getters.dimensions
      }
    }
  }
</script>

<style lang="scss" scoped>
  nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  a {
    padding: 0.75rem 0.25rem;
  }
</style>
