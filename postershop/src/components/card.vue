<template>
  <section class="wrapper">
      <img src="" alt="">
    <article class="info">
        <h2>{{card.Title}}</h2>
        <p>{{card.About}}</p>
        <button class="add-to-cart" v-if="!cartItem" @click="addToCart(card)">Oh, take my money!</button>
        <button class="remove-from-cart" v-else>X</button>
    </article>
  </section>
</template>

<script>
export default {
  props:['card', 'cartItem'],
  methods:{
    addToCart(cartItem){
      this.$store.dispatch('handleNewCartItem', cartItem);
    }
  }
}
</script>

<style scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

    max-width: 200px;
    height: 200px;
}
img{
    /* max-width: 484px;
    height: 484px;
    background-color: cadetblue; */
}
/* .info{
    
} */
h2{
  font-size: 1.5rem;
}
p{
  font-size: 0.8rem;
  margin: 1rem 0;
  line-height: 1.2rem;
}
h2,p{
  color: #fff;
}
.add-to-cart{
  padding: 0.3rem 0.5rem;
  background-color: #E83F57;
   color: #fff;
}
.remove-from-cart{
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
}



</style>