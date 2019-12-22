<template>
  <nav class="nav-main">
    <ul>
      <li v-for="node in navigation" :key="node.identifier">
        <nuxt-link :to="node.uriPath">{{ node.title }}</nuxt-link>
        <ul v-if="node.subpages && node.subpages.length > 0" class="sub-items">
          <li v-for="subpage in node.subpages" :key="subpage.identifier">
            <nuxt-link :to="subpage.uriPath">{{ subpage.title }}</nuxt-link>
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
      }
    }
  }
</script>
