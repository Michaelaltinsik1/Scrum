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
    },
    addToCart(state, cartItem){
      // state.cart.push(cartItem);
      // let checkPresense = state.cart.hasOwnProperty('id') && state.cart['id'] == cartItem.id
      for(let obj of state.cart){
        if(obj.id === cartItem.id){
          obj.Amount++;
          return;
        }
      }
      cartItem.Amount++;
      state.cart.push(cartItem);
      
    }
  },
  actions: {
    updateCardState(context){
      context.commit('modifyCardState');
    },
    handleNewCartItem(context, newCartItem){
      context.commit('addToCart',newCartItem);
    }
  },
  modules: {
  }
})
