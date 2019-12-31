<template>
  <nav class="breadcrumb-nav">
    <ul>
      <li v-for="node in breadcrumb" :key="node.identifier">
        <nuxt-link :to="node.uriPath">{{ node.title }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: ['__typename', 'type', 'identifier', 'group', 'options', 'content'],

    computed: {
      ...mapGetters ({
        breadcrumb: 'breadcrumb'
      })
    }
  }
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
  }

  li {
    margin: 0;
    padding: 0;

    &:before {
      display: inline-block;
      content: '/';
      margin: 0 4px;
    }
  }
</style>
