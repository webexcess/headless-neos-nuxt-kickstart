<template>
  <component :is="document.type + 'Document'" v-bind="document" v-if="document" />
</template>

<script>
import Document from '~/apollo/queries/Document.graphql'

export default {
  data () {
    return {
      document: null
    }
  },

  head () {
    if (!this.document) {
      return;
    }

    let meta = []

    // description
    if (this.document.meta.description !== null) {
      meta.push({hid: 'description', name: 'description', content: this.document.meta.description})
    }

    // keywords
    if (this.document.meta.keywords !== null) {
      meta.push({hid: 'keywords', name: 'keywords', content: this.document.meta.keywords})
    }

    // robots
    if (this.document.meta.noindex && !this.document.meta.nofollow) {
      meta.push({hid: 'robots', name: 'robots', content: 'noindex'})
    } else if (!this.document.meta.noindex && this.document.meta.nofollow) {
      meta.push({hid: 'robots', name: 'robots', content: 'nofollow'})
    } else if (this.document.meta.noindex && this.document.meta.nofollow) {
      meta.push({hid: 'robots', name: 'robots', content: 'noindex,nofollow'})
    }

    return {
      title: this.document.meta.title,
      meta
    }
  },

  asyncData (context) {

    const client = context.app.apolloProvider.defaultClient

    return client.query({
      query: Document,
      variables: {
        uri: context.route.path,
        language: context.store.getters.locale
      }
    })
      .then(response => {
        const { document } = response.data
        if (document) {
          return { document }
        }
        return context.error({ message: 'This page could not be found.', statusCode: 404 })
      })
  }
}
</script>
