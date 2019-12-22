<template>
  <div ref="page" class="page">
    <PageHeader />
    <main>
      <component v-for="contentNode in content" :key="contentNode.identifier" :is="contentNode.type + 'Content'" v-bind="contentNode" />
    </main>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from '~/components/partials/page/Header.vue'
import PageFooter from '~/components/partials/page/Footer.vue'

export default {
  name: 'PageComponent',
  props: ['__typename', 'type', 'identifier', 'apiKey', 'options', 'title', 'uriPath', 'meta', 'content'],

  components: {
    PageHeader,
    PageFooter
  }
}
</script>
