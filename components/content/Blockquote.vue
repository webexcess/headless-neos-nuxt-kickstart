<template>
  <blockquote v-html="value" class="blockquote" v-if="value" />
</template>

<script>
export default {
  props: ['__typename', 'type', 'identifier', 'apiKey', 'options', 'value'],

  watch: {
    'value': 'textUpdated'
  },

  mounted() {
    this.addListeners()
  },

  beforeDestroy() {
    this.removeListeners()
  },

  methods: {
    navigate(event) {
      const href = event.target.getAttribute('href')
      const target = event.target.hasAttribute('target') ? event.target.getAttribute('target') : ''
      if (!href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('tel') && target !== '_blank') {
        event.preventDefault()
        this.$router.push(href)
      }
    },
    textUpdated() {
      this.removeListeners()
      this.$nextTick(() => {
        this.addListeners()
      })
    },
    addListeners() {
      if (!this.$props.value) {
        return null;
      }

      this._links = this.$el.getElementsByTagName('a')
      for (let i = 0; i < this._links.length; i++) {
        let href = this._links[i].getAttribute('href')
        let target = this._links[i].hasAttribute('target') ? this._links[i].getAttribute('target') : ''
        if (!href.endsWith('.pdf') && target !== '_blank') {
          this._links[i].addEventListener('click', this.navigate, false)
        }
      }
    },
    removeListeners() {
      if (!this.$props.value) {
        return null;
      }

      for (let i = 0; i < this._links.length; i++) {
        let href = this._links[i].getAttribute('href')
        let target = this._links[i].hasAttribute('target') ? this._links[i].getAttribute('target') : ''
        if (!href.endsWith('.pdf') && target !== '_blank') {
          this._links[i].removeEventListener('click', this.navigate, false)
        }
      }
      this._links = []
    }
  }
}
</script>
