import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.getters.locale,
    fallbackLocale: 'de',
    messages: {
      'de': require('~/locales/de.json'),
      'en': require('~/locales/en.json')
    }
  });

  app.i18n.path = (link) => {
    return `/${app.i18n.locale}/${link}`
  }
}
