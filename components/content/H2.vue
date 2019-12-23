<template>
  <h2 class="h2" v-html="value" />
</template>

<script>
export default {
  props: ['__typename', 'type', 'identifier', 'apiKey', 'options', 'value']
}
</script>
