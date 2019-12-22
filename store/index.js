import Dimensions from '~/apollo/queries/Dimensions.graphql'
import General from '~/apollo/queries/General.graphql'

export const state = () => ({
  locales: ['de', 'fr'],
  locale: 'de',
  dimensions: [],
  general: [],
  navButtonInvert: true
});

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  SET_DIMENSIONS (state, dimensions) {
    state.dimensions = dimensions
  },
  SET_GENERAL_CONTENT (state, content) {
    state.general = content
  },
  setNavButtonInvert (state, navButtonInvert) {
    state.navButtonInvert = navButtonInvert
  }
};

export const getters = {
  locale (state) {
    return state.locale
  },
  dimensions (state) {
    return state.dimensions
  },
  general: (state) => (value = null) => {
    if (value !== null) {
      if (!value in state.general) {
        return null;
      }
      return state.general[value]
    }
    return state.general
  },
  getNavButtonInvert (state) {
    return state.navButtonInvert
  }
}

export const actions = {
  async LOAD_DIMENSIONS ({ commit }, path) {

    // let useMockedData = false;
    // let response = require('~/apollo/mock/dimensions-' + path.replace(/\//g, '-'));
    // if (!useMockedData) {

      const apollo = this.app.apolloProvider.defaultClient;

      let response = await apollo.query({
        query: Dimensions,
        variables: {
          uri: path
        }
      });

    // }

    const { dimensions } = response.data;
    commit('SET_DIMENSIONS', dimensions);
  },
  async LOAD_GENERAL_CONTENT ({ commit, rootGetters }) {
    const apollo = this.app.apolloProvider.defaultClient;

    let response = await apollo.query({
      query: General,
      variables: {
        language: rootGetters.locale
      }
    });

    commit('SET_GENERAL_CONTENT', response.data);
  }
};
