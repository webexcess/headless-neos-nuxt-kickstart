<template>
  <div class="page" id="home">
    <PageHeader />
    <main>
      <b-container>
        <component v-for="contentNode in content" :key="contentNode.identifier" :is="contentNode.type + 'Content'" v-bind="contentNode" />
      </b-container>
    </main>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from '~/components/partials/page/PageHeader.vue'
import PageFooter from '~/components/partials/page/PageFooter.vue'

export default {
  props: ['__typename', 'type', 'identifier', 'group', 'options', 'title', 'uriPath', 'meta', 'content'],

  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style lang="scss" scoped>
  main {
    background-color: $color-body;
    padding-top: 6rem;
    padding-bottom: 3rem;
  }
</style>
