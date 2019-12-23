<template>
  <h1 class="h1" v-html="value" />
</template>

<script>
export default {
  props: ['__typename', 'type', 'identifier', 'apiKey', 'options', 'value']
}
</script>
