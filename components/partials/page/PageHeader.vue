<template>
  <header>
    <b-container>
      <b-row>
        <b-col cols="9">
          <MainNav />
        </b-col>
        <b-col cols="3">
          <Dimension />
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
  import MainNav from '~/components/partials/nav/MainNav.vue'
  import Dimension from '~/components/partials/nav/Dimension.vue'

  export default {
    components: {
      MainNav,
      Dimension
    }
  }
</script>

<style lang="scss" scoped>
  header {
    background-color: $color-header;
  }
</style>
