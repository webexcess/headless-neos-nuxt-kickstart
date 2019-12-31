<template>
  <h3 class="h3" v-html="value" />
</template>

<script>
export default {
  props: ['__typename', 'type', 'identifier', 'group', 'options', 'value']
}
</script>
