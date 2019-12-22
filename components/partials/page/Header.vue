<template>
  <header>
    <div>
      <component :is="ctaButton.type + 'Content'" v-bind="ctaButton" v-if="ctaButton" />
      <!-- <Dimension /> -->
    </div>
  </header>
</template>

<script>
  import Button from '~/components/partials/elements/Button.vue'
  import Dimension from '~/components/partials/nav/Dimension.vue'

  export default {
    name: 'headerComponent',

    components: {
      Button,
      Dimension
    },

    computed: {
      ctaButton () {
        return this.$store.getters.general('ctaButton')
      }
    }
  }
</script>
