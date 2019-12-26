<template>
  <figure class="youtube-video">
    <Rowcol align-center small="10" class="offset-top">
      <div class="video-wrapper">
        <iframe :src="'https://www.youtube.com/embed/'+ getOption('videoId') +'?playsinline=1&autoplay=0&cc_lang_pref='+ lang +'&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&cc_load_policy=1&fs=1&enablejsapi=1'" allowfullscreen allowtransparency allow="autoplay"></iframe>
      </div>
      <figcaption>
        <row align-center>
          <column small="12">
            <component v-for="contentNode in content" :key="contentNode.identifier" :is="contentNode.type + 'Content'" v-bind="contentNode" />
          </column>
        </row>
      </figcaption>
    </Rowcol>
  </figure>
</template>

<script>
  export default {
    props: ['__typename', 'type', 'identifier', 'group', 'options', 'content'],

    computed: {
      lang () {
        return this.$store.getters.locale
      }
    }
  }
</script>

<style lang="scss">

  .youtube-video {
    position: relative;

    .video-wrapper {
      position: relative;
      width: 100%;
      @include aspect-ratio(16,9);

      iframe {
        @include absolute(0,null,null,0);
        width: 100%;
        height: 100%;
        border: none;
      }
    }

    figcaption {
      padding: u(15px) 0 0;
    }
  }
 </style>
