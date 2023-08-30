
const state = {
    isAuthenticated: false,
  };
  
  const mutations = {
    setAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
  };
  
  const actions = {
    login({ commit }, { email, password }) {
      if (email === 'user@example.com' && password === 'password') {
        commit('setAuthenticated', true);
      }
    },
    logout({ commit }) {
      commit('setAuthenticated', false);
    },
  };
  
  export default {
    state,
    mutations,
    actions,
  };
  