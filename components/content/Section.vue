<template>
  <section :id="apiKey || null">
    <component v-for="contentNode in content" :key="contentNode.identifier" :is="contentNode.type + 'Content'" v-bind="contentNode" :slider-init="true" />
  </section>
</template>

<script>
export default {
  props: ['__typename', 'type', 'identifier', 'apiKey', 'options', 'content']
}
</script>
