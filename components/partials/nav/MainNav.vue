<template>
  <nav class="nav-main">
    <ul>
      <li>
        <nuxt-link :to="'/' + dimension">Home</nuxt-link>
      </li>
      <li v-for="node in navigation" :key="node.identifier">
        <nuxt-link :to="node.uriPath" v-if="!isExternal(node.uriPath)">{{ node.title }}</nuxt-link>
        <a :href="node.uriPath" target="_blank" v-if="isExternal(node.uriPath)">{{ node.title }}</a>
        <ul v-if="node.subpages && node.subpages.length > 0" class="sub-items">
          <li v-for="subpage in node.subpages" :key="subpage.identifier">
            <nuxt-link :to="subpage.uriPath" v-if="!isExternal(subpage.uriPath)">{{ subpage.title }}</nuxt-link>
            <a :href="subpage.uriPath" target="_blank" v-if="isExternal(subpage.uriPath)">{{ subpage.title }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {

    computed: {
      navigation () {
        return this.$store.getters['navigation/main']
      },

      dimension () {
        return this.$store.state.locale
      }
    },

    methods: {
      isExternal: function (uriPath) {
        return uriPath.indexOf('http') === 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  a {
    font-weight: 600;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
  }

  li {
    margin: 0;
    padding: 0;

    &:hover .sub-items {
      visibility: visible;
    }
  }

  a {
    display: inline-block;
    padding: 0.75rem 1rem ;
  }

  nav > ul > li > a {
    text-transform: uppercase;
  }

  .sub-items {
    background-color: $color-header;
    position: absolute;
    visibility: hidden;
  }
</style>
