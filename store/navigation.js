import Navigation from '~/apollo/queries/Navigation.graphql'

export const state = () => ({
  main: [],
  top: [],
  bottom: [],
});

export const mutations = {
  SET_MAIN(state, payload) {
    state.main = payload;
  },
  SET_TOP(state, payload) {
    state.top = payload;
  },
  SET_BOTTOM(state, payload) {
    state.bottom = payload;
  },
};

export const getters = {
  main(state) {
    return state.main;
  },
  top(state) {
    return state.top;
  },
  bottom(state) {
    return state.bottom;
  },
}

export const actions = {
  async LOAD_NAVIGATION ({ commit, rootGetters }) {

    // let useMockedData = false;
    // const response = require('~/apollo/mock/navigation');
    // if (!useMockedData) {

      const apollo = this.app.apolloProvider.defaultClient;

      const response = await apollo.query({
        query: Navigation,
        variables: {
          language: rootGetters.locale
        }
      });

    // }

    const { documents, topnav, bottomnav } = response.data;

    commit('SET_MAIN', documents);
    commit('SET_TOP', topnav);
    commit('SET_BOTTOM', bottomnav);
  },
};
