<template>
  <img :src="image.uri" :alt="image.alt" v-lazy-load>
</template>

<script>
export default {
  props: ['__typename', 'type', 'identifier', 'group', 'options', 'image', 'link']
}
</script>

<style lang="scss" scoped>
  img {
    height: auto;
    width: auto;
    max-width: 100%;
  }
</style>
