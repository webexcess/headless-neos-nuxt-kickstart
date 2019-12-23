<template>
  <b-row>
    <b-col cols="6">
      <component v-for="contentNode in leftContent" :key="contentNode.identifier" :is="contentNode.type + 'Content'" v-bind="contentNode" :slider-init="true" />
    </b-col>
    <b-col cols="6">
      <component v-for="contentNode in rightContent" :key="contentNode.identifier" :is="contentNode.type + 'Content'" v-bind="contentNode" :slider-init="true" />
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: ['__typename', 'type', 'identifier', 'apiKey', 'options', 'content'],

  computed: {
    leftContent () {
      try {
        return this.$props.content[0].content
      } catch (e) {
        return []
      }
    },
    rightContent () {
      try {
        return this.$props.content[1].content
      } catch (e) {
        return []
      }
    }
  }
}
</script>
