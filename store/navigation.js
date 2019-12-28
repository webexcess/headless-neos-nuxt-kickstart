import Navigation from '~/apollo/queries/Navigation.graphql'

export const state = () => ({
  main: [],
  meta: [],
});

export const mutations = {
  SET_MAIN(state, payload) {
    state.main = payload;
  },
  SET_META(state, payload) {
    state.meta = payload;
  },
};

export const getters = {
  main(state) {
    return state.main;
  },
  meta(state) {
    return state.meta;
  },
}

export const actions = {
  async LOAD_NAVIGATION ({ commit, rootGetters }) {
    const apollo = this.app.apolloProvider.defaultClient;

    const response = await apollo.query({
      query: Navigation,
      variables: {
        language: rootGetters.locale
      }
    });

    const { documents, meta } = response.data;

    console.log(meta, 'meta')
    commit('SET_MAIN', documents);
    commit('SET_META', meta);
  },
};
