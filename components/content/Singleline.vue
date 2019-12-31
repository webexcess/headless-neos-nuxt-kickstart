<template>
  <span v-html="value" class="singleline" v-if="value" />
</template>

<script>
export default {
  props: ['__typename', 'type', 'identifier', 'group', 'options', 'value']
}
</script>
