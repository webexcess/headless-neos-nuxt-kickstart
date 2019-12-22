<template>
  <nuxt-link v-if="hasTo" class="button" :to="to" :class="[ isDark, isTransparent, { 'button--disabled': isDisabled }]"><slot /></nuxt-link>
  <button v-else class="button" :class="[ isDark, isTransparent, { 'button--disabled': isDisabled }]" @click="$emit('click')"><slot /></button>
</template>

<script>
  export default {
    props: [
      'to',
      'transparent',
      'dark',
      'disabled'
    ],

    data () {
      return {
        isDisabled: false
      }
    },

    computed: {
      isDark () {
        const isDark = this.$props.dark
        return { 'button--dark': isDark != undefined ? true : false }
      },
      isTransparent () {
        const isTransparent = this.$props.transparent
        return { 'button--transparent': isTransparent != undefined ? true : false }
      },
      hasTo () {
        const hasTo = this.$props.to
        return hasTo != undefined ? true : false
      }
    },

    mounted () {
      this.isDisabled = this.$props.disabled != undefined ? true : false
    }
  }
</script>
