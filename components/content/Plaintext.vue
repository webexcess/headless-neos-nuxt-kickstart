<template>
  <span v-html="value" class="plaintext" v-if="value" />
</template>

<script>
export default {
  name: 'PlaintextComponent',
  props: ['__typename', 'type', 'identifier', 'apiKey', 'options', 'value']
}
</script>
