<template>
  <section class="wrapper">
      <img src="" alt="">
    <article class="info" :class="{cartgrid : cartItem}">
        <h2 class="card-title">{{card.Title}}</h2>
        <p class="card-about">{{card.About}}</p>
        <button class="add-to-cart" v-if="!cartItem" @click="addToCart(card)">Oh, take my money!</button>
        <div class="cart-item-interaction" v-else>
          <button class="remove-from-cart">X</button>
          <button class="decrement-amount">-</button>
          <p class="amount">{{card.Amount}}</p>
          <button class="increment-amount">+</button>
        </div>
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

    max-width: 250px;
    max-height: 250px;
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
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
}
.cart-item-interaction{
  align-self: center;
  justify-self: center;
  grid-area: interaction;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
  "decrement amount increment"
  ". remove .";
}
.decrement-amount,.increment-amount{
  cursor: pointer;
  border: none;
  color: #fff;
  background-color: transparent;
}
.decrement-amount{
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: decrement;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;

}
.increment-amount{
  grid-area: increment;
  font-size: 2rem;
  margin-left: 0.5rem;
}
.amount{
  grid-area: amount;
  font-size: 2rem;
}
.remove-from-cart{
  grid-area: remove;
}
.cartgrid {
  display: grid;
  gap: 0 1.5rem;
  grid-template-columns:3fr 2fr;
  grid-template-rows:30px 1fr;
  grid-template-areas: 
  "title ."
  "about interaction"
}
.card-title{
  grid-area: title;
}
.card-about{
  grid-area: about;
}



</style>