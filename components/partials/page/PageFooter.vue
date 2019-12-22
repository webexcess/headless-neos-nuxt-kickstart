<template>
  <footer>
    <b-container>
      <b-row>
        <b-col md="4">
          a:<br>
          <nuxt-link :to="'/' + dimension">
            [LOGO]
          </nuxt-link>
        </b-col>
        <b-col md="4">
          b:<br>
          <address v-if="address">
            <component :is="address.type + 'Content'" v-bind="address" />
          </address>
        </b-col>
        <b-col md="4">
          c
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
  export default {
    computed: {
      address () {
        return this.$store.getters.general('address')
      },

      dimension () {
        return this.$store.state.locale
      }
    }
  }
</script>
