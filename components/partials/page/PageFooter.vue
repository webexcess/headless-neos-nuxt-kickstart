<template>
  <footer>
    <b-container>
      <b-row>
        <b-col md="6">
          <div v-html="footerText.value" class="richtext" v-if="footerText" />
        </b-col>
        <b-col md="6" v-if="showBreadcrumb">
          <Breadcrumb />
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
  import Breadcrumb from '~/components/partials/nav/Breadcrumb.vue'

  export default {
    props: ['showBreadcrumb'],

    components: {
      Breadcrumb
    },

    computed: {
      footerText () {
        return this.$store.getters.general('footerText')
      },
      dimension () {
        return this.$store.state.locale
      }
    }
  }
</script>

<style lang="scss" scoped>
  footer {
    background-color: $color-footer;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
</style>
