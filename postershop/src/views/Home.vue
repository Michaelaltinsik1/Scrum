<template>
  <div class="home">


  <header>
    <div class="container">
      <div class="burger-menu"></div>
      <button class="cart" @click="toogleCart">Cart</button>
      <Cart class="cart-view" v-if="getCartState"/>
    </div>
    <h1>Poster Shop</h1>
  </header>
  <main>
    <Card v-for="card in getCards" :key="card.id" :card="card"/>
  </main>
  <footer>
  <div class="footer-nav">
    <h2>Nav</h2>
    <p>Products</p>
    <p>About Us</p>
    <p>Contact</p>
  </div>
  <div class="footer-adress">
    <h2>Adress</h2>
    <p>Plinkeplonkvägen 32</p>
<p>888 81 Klonkberga</p>
  </div>
  <div class="footer-social-media">
    <h2>Social Media</h2>
    <div class="img-wrap">
    <img src="../assets/logo-twitter.svg" alt="twitter logo">
    <img src="../assets/logo-facebook.svg" alt="facebook logo">
    <img src="../assets/logo-linkedin.svg" alt="linkedin logo">
    <img src="../assets/logo-instagram.svg" alt="instagram logo">
    </div>
  </div>
  </footer>

  </div>
</template>
<script>
import Card from '../components/card.vue'
import Cart from '../components/Cart.vue'

export default {
  components:{Card,Cart},
  computed:{
    getCards(){
      return this.$store.state.posts;
    },
    getCartState(){
      return this.$store.state.showCart;
    }
  },
  methods:{
    toogleCart(){
      this.$store.dispatch('updateCardState');
    }
  }
}
</script>

<style scoped>
*{
 
  padding: 0;
}
p{
  margin: 0.8rem;
}
.home {
   margin: auto;
  max-width: 90rem;
}
header{
width: 100%;
height: 38rem;
background: #3DE07E;
background-image: url(../assets/ninjahead.svg);
background-repeat: no-repeat;
background-position: 50% 100%;
text-align: center;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
font-size: 2.5rem;
position: relative;
} 
header h1{
  margin: auto 0;
}
.container{
  display: flex;
  min-width: 100%;
  justify-content: space-between;
}
.cart,.burger-menu{
  margin: 2rem;
  width: 30px;
  height: 30px; 
}
.cart{
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
.burger-menu{ 
  background-image: url(../assets/navicon.svg);
} 
main{
  /* Placeholder height, it doesn't need to be there */
  /* height: 40rem; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: black;
  padding: 2rem 8rem;
  
}
footer{
  color: white;
  height: 20rem;
  background: rgb(51, 51, 51);
  padding: 0 10% 0 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
}
.footer-nav p, .footer-adress p{
  font-size: 0.8rem;
  margin: 0.3rem;
}
h2{
   font-size: 2.1rem;
}

footer>div{
  height: 10rem;
  height: 3rem;
  /* background: red; */
  margin: auto;
}
.img-wrap{
 display: flex;
 justify-content: space-around;
}
.cart-view{
  position: absolute;
  right: 0;
}

</style>