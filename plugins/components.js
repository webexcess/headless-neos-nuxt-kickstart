import Vue from 'vue'

import Home from '~/components/document/Home.vue'
import Page from '~/components/document/Page.vue'

import Button from '~/components/content/Button.vue'
import H1 from '~/components/content/H1.vue'
import H2 from '~/components/content/H2.vue'
import H3 from '~/components/content/H3.vue'
import Image from '~/components/content/Image.vue'
import Plaintext from '~/components/content/Plaintext.vue'
import Richtext from '~/components/content/Richtext.vue'
import Section from '~/components/content/Section.vue'
import Singleline from '~/components/content/Singleline.vue'

// Documents
Vue.component('HomeDocument', Home)
Vue.component('PageDocument', Page)

// Content
Vue.component('ButtonContent', Button)
Vue.component('H1Content', H1)
Vue.component('H2Content', H2)
Vue.component('H3Content', H3)
Vue.component('ImageContent', Image)
Vue.component('PlaintextContent', Plaintext)
Vue.component('RichtextContent', Richtext)
Vue.component('SectionContent', Section)
Vue.component('SinglelineContent', Singleline)
