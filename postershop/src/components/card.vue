<template>
  <section class="wrapper">
      <img src="" alt="">
    <article class="info">
        <h2>{{card.Title}}</h2>
        <p>{{card.About}}</p>
        <button v-if="!cartItem" @click="addToCart(card)">Oh, take my money!</button>
        <button v-else>X</button>
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
}
h2,p{
  color: #fff;
}



</style>