<template>
  <section :id="group || null">
    <component v-for="contentNode in content" :key="contentNode.identifier" :is="contentNode.type + 'Content'" v-bind="contentNode" />
  </section>
</template>

<script>
export default {
  props: ['__typename', 'type', 'identifier', 'group', 'options', 'content']
}
</script>
