import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isRTL: true,
  },
  mutations: {
    changeDirection(state){
      state.isRTL == true ? state.isRTL = false : state.isRTL = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
