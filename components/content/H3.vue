<template>
  <Heading :tag="tag" class="h3" v-html="value" />
</template>

<script>
export default {
  props: ['__typename', 'type', 'identifier', 'apiKey', 'options', 'value'],

  computed: {
    tag () {
      return this.getOption('tag') ? this.getOption('tag') : 'h3'
    }
  }
}
</script>
