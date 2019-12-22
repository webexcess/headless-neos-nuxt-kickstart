<template>
  <Button :to="getLinkUri" v-html="getLinkText" v-if="value" />
</template>

<script>
import Button from '~/components/partials/elements/Button.vue'

export default {
  props: ['__typename', 'type', 'identifier', 'apiKey', 'options', 'value'],

  components: {
    Button
  },

  computed: {
    getLinkUri () {
      if (!this.$props.value) {
        return null;
      }

      let valueLinkUri = ''
      let valueLinkText = ''
      const regex = /<a[^\b>]+href="(.+)">(.+)[\<]\/a>/gm
      let m
      while ((m = regex.exec(this.$props.value)) !== null) {
          if (m.index === regex.lastIndex) {
              regex.lastIndex++
          }
          valueLinkUri = m[1]
          valueLinkText = m[2]
      }

      return valueLinkUri
    },

    getLinkText () {
      if (!this.$props.value) {
        return null;
      }

      let valueLinkUri = ''
      let valueLinkText = ''
      const regex = /<a[^\b>]+href="(.+)">(.+)[\<]\/a>/gm
      let m
      while ((m = regex.exec(this.$props.value)) !== null) {
          if (m.index === regex.lastIndex) {
              regex.lastIndex++
          }
          valueLinkUri = m[1]
          valueLinkText = m[2]
      }

      return valueLinkText
    }
  }
}
</script>
