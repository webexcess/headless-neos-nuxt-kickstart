<template>
  <div class="page" id="home">
    <PageHeader />
    <b-container>
      <component v-for="contentNode in content" :key="contentNode.identifier" :is="contentNode.type + 'Content'" v-bind="contentNode" />
    </b-container>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from '~/components/partials/page/PageHeader.vue'
import PageFooter from '~/components/partials/page/PageFooter.vue'

export default {
  props: ['__typename', 'type', 'identifier', 'apiKey', 'options', 'title', 'uriPath', 'meta', 'content'],

  components: {
    PageHeader,
    PageFooter
  }
}
</script>
