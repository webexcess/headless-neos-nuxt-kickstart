import Dimensions from '~/apollo/queries/Dimensions.graphql'
import Breadcrumb from '~/apollo/queries/Breadcrumb.graphql'
import General from '~/apollo/queries/General.graphql'

export const state = () => ({
  locales: ['de', 'fr', 'en'],
  locale: 'de',
  dimensions: [],
  breadcrumb: [],
  general: []
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
  SET_BREADCRUMB (state, breadcrumb) {
    state.breadcrumb = breadcrumb
  },
  SET_GENERAL_CONTENT (state, content) {
    state.general = content
  }
};

export const getters = {
  locale (state) {
    return state.locale
  },
  dimensions (state) {
    return state.dimensions
  },
  breadcrumb (state) {
    return state.breadcrumb
  },
  general: (state) => (value = null) => {
    if (value !== null) {
      if (!value in state.general) {
        return null;
      }
      return state.general[value]
    }
    return state.general
  }
}

export const actions = {
  async LOAD_DIMENSIONS ({ commit }, path) {
    const apollo = this.app.apolloProvider.defaultClient;

    let response = await apollo.query({
      query: Dimensions,
      variables: {
        uri: path
      }
    });

    const { dimensions } = response.data;
    commit('SET_DIMENSIONS', dimensions);
  },

  async LOAD_BREADCRUMB ({ commit }, path) {
    const apollo = this.app.apolloProvider.defaultClient;

    const response = await apollo.query({
      query: Breadcrumb,
      variables: {
        uri: path
      }
    });

    const { breadcrumb } = response.data;
    commit('SET_BREADCRUMB', breadcrumb);
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
