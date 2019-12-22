<template>
  <footer>
    <nuxt-link :to="'/' + dimension">
      [LOGO]
    </nuxt-link>
    <address v-if="address">
      <component :is="address.type + 'Content'" v-bind="address" />
    </address>
    <component :is="ctaButton.type + 'Content'" v-bind="ctaButton" v-if="ctaButton" />
  </footer>
</template>

<script>
  import Button from '~/components/partials/elements/Button.vue'

  export default {
    name: 'footerComponent',

    components: {
      Button
    },

    computed: {
      address () {
        return this.$store.getters.general('address')
      },

      ctaButton () {
        return this.$store.getters.general('ctaButton')
      },

      dimension () {
        return this.$store.state.locale
      }
    }
  }
</script>
