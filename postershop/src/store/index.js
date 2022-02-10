import Vue from 'vue'
import Vuex from 'vuex'
import posts from '@/assets/posts.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts : [...posts],
    cart : []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
