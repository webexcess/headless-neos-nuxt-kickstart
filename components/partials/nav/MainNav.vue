<template>
  <nav class="nav-main">
    <transition-group tag="ul" class="main-items" name="slide-in" :style="{ '--total': navigation.length }">
      <li v-for="(node, index) in navigation" :key="node.identifier" :style="{'--i': index}" v-if="appear && index < navigation.length" >
        <nuxt-link :to="node.uriPath" @click.native="closeMenu">{{ node.title }}</nuxt-link>
        <ul v-if="node.subpages && node.subpages.length > 0" class="sub-items">
          <li v-for="subpage in node.subpages" :key="subpage.identifier">
            <nuxt-link :to="subpage.uriPath" @click.native="closeMenu">{{ subpage.title }}</nuxt-link>
          </li>
        </ul>
      </li>
    </transition-group>
  </nav>
</template>

<script>
  export default {
    name: 'MainNavigationComponent',

    computed: {
      navigation () {
        return this.$store.getters['navigation/main']
      },
      showItems () {
        return this.$parent.isShowed
      }
    },

    data () {
      return {
        appear: false
      }
    },

    methods: {
      closeMenu () {
        this.$emit('clicked', 'closeMenu')
      }
    },

    watch: {
      showItems () {
        setTimeout(() => {
          this.appear = this.$parent.isShowed
        }, this.$parent.isShowed ? 200 : 0)
      }
    }
  }
</script>
