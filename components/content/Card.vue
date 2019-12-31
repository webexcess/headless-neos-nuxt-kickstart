<template>
  <div>
    <b-card :title="cardTitle" footer-tag="footer">
      <b-card-text>
        <component :key="textElement.identifier" :is="textElement.type + 'Content'" v-bind="textElement" />
      </b-card-text>
      <template v-slot:footer>
        <component :key="footerElement.identifier" :is="footerElement.type + 'Content'" v-bind="footerElement" />
      </template>
    </b-card>
  </div>
</template>

<script>
  export default {
    props: ['__typename', 'type', 'identifier', 'group', 'options', 'content'],

    computed: {
      cardTitle () {
        try {
          return this.$props.content[0].value
        } catch (e) {
          return null
        }
      },
      textElement () {
        try {
          return this.$props.content[1]
        } catch (e) {
          return null
        }
      },
      footerElement () {
        try {
          return this.$props.content[2]
        } catch (e) {
          return null
        }
      }
    }
  }
</script>
