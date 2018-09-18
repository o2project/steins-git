import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    menu: {},
  },
  mutations: {
    setMenu(state, menu) {
      state.menu = menu;
    },
  },
  actions: {
    async nuxtServerInit({ commit }) {
      try {
        const menu = await import('../static/chapters.json');
        commit('setMenu', menu);
      } catch (_err) {
        console.error('Error on [nuxtServerInit] action.');
      }
    }
  },
})

export default store