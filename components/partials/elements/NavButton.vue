<template>
  <button type="button" class="nav-button" :class="[active ? 'is-active' : '', burgerTypeClass, invert ? 'neg-theme' : 'pos-theme']">
    <span class="nav-button-box">
      <span class="nav-button-inner">
        <span class="nav-button-inner__before"></span>
        <span class="nav-button-inner__after"></span>
      </span>
    </span>
  </button>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'boring'
      },
      active: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        burgerTypeClass: null
      }
    },

    created: function () {
      this.burgerTypeClass = `nav-button--${this.type}`
      this.isActive = this.active
      this._activeColor = this.activeColor || this.color;
    },

    computed: {
      invert () {
        return this.$store.getters.getNavButtonInvert
      }
    }
  }
</script>
