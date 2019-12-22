<template>
  <Img :src="image.uri" :alt="image.alt" :cropRatio="(getOption('cropRatio') ? getOption('cropRatio') : '16:9')" v-if="image" />
</template>

<script>
import Img from '~/components/partials/elements/Image.vue'

export default {
  props: ['__typename', 'type', 'identifier', 'apiKey', 'options', 'image', 'link'],

  components: {
    Img
  }
}
</script>
