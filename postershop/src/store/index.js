import Vue from 'vue'
import Vuex from 'vuex'
import posts from '@/assets/posts.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts : [...posts],
    cart : [],
    showCart : false
  },
  mutations: {
    modifyCardState(state){
      state.showCart = !state.showCart;
    }
  },
  actions: {
    updateCardState(context){
      context.commit('modifyCardState');
    }
  },
  modules: {
  }
})
