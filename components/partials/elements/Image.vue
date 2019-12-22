<template>
  <div class="image" :style="[ backgroundImage, aspectRatio ]">
    <img :src="src" :alt="alt" v-lazy-load>
  </div>
</template>

<script>
  export default {
    name: 'imageComponent',

    props: {
      src: {
        type: String
      },
      alt: {
        type: String
      },
      cropRatio: {
        default: false
      }
    },

    computed: {
      aspectRatio () {
        let ratio = this.$props.cropRatio
        if (!ratio) return
        else {
          let percent = 100 / ratio.split(':')[0] * ratio.split(':')[1]
          return {
            paddingBottom: percent.toFixed(2) +'%'
          }
        }
      },

      backgroundImage () {
        if (!this.$props.cropRatio) return
        else return {
          backgroundImage: 'url('+ this.$props.src +')'
        }
      }
    }
  }
</script>
