<template>
  <div ref="page" class="page" id="home">
    <PageHeader />
    <main>
      <b-container>
        <Breadcrumb />
        <component v-for="contentNode in content" :key="contentNode.identifier" :is="contentNode.type + 'Content'" v-bind="contentNode" />
      </b-container>
    </main>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from '~/components/partials/page/PageHeader.vue'
import Breadcrumb from '~/components/partials/nav/Breadcrumb.vue'
import PageFooter from '~/components/partials/page/PageFooter.vue'

export default {
  props: ['__typename', 'type', 'identifier', 'apiKey', 'options', 'title', 'uriPath', 'meta', 'content'],

  components: {
    PageHeader,
    Breadcrumb,
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
