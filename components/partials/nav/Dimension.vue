<template>
  <nav class="dimension-nav">
    <div>
      <nuxt-link v-for="dimension in dimensions" :key="dimension.dimensionValue" :to="dimension.uriPath" v-html="dimension.dimensionValue" />
    </div>
  </nav>
</template>

<script>
  export default {
    name: "DimensionNavComponent",

    computed: {
      dimensions () {
        return this.$store.getters.dimensions
      }
    }
  }
</script>
