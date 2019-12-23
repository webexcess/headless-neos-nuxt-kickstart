import Vue from 'vue'

// Document imports
import Home from '~/components/document/Home.vue'
import Page from '~/components/document/Page.vue'

// Content imports
import Button from '~/components/content/Button.vue'
import Singleline from '~/components/content/Singleline.vue'
import H1 from '~/components/content/H1.vue'
import H2 from '~/components/content/H2.vue'
import H3 from '~/components/content/H3.vue'
import Image from '~/components/content/Image.vue'
import Plaintext from '~/components/content/Plaintext.vue'
import Richtext from '~/components/content/Richtext.vue'
import Blockquote from '~/components/content/Blockquote.vue'
import Section from '~/components/content/Section.vue'
import YouTube from '~/components/content/YouTube.vue'
import TwoColumn from '~/components/content/TwoColumn.vue'

// Document components
Vue.component('HomeDocument', Home)
Vue.component('PageDocument', Page)

// Content components
Vue.component('ButtonContent', Button)
Vue.component('SectionContent', Section)
Vue.component('H1Content', H1)
Vue.component('H2Content', H2)
Vue.component('H3Content', H3)
Vue.component('ImageContent', Image)
Vue.component('PlaintextContent', Plaintext)
Vue.component('RichtextContent', Richtext)
Vue.component('BlockquoteContent', Blockquote)
Vue.component('SinglelineContent', Singleline)
Vue.component('YouTubeContent', YouTube)
Vue.component('TwoColumnContent', TwoColumn)
