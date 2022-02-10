<template>
    <section class="cart-view">
        <button @click="toogleCart" class="close-cart">X</button>
        <h2 class="order">Order</h2>
        <article v-for="post in posts" :key="post.id" class="shopping-item">                 
            <h2>{{post.Title}}</h2>
            <p>{{post.About}}</p>
            <button>X</button>
        </article>
        <article class="shopping-info">
            <h2>Your order</h2>
            <p>Fee: 0$</p>
            <p>Total price: 0$</p>
        </article>
        <router-link  class="payment-view-button"  to="" tag="button">Prooceed to Checkout</router-link>
    </section>
</template>

<script>
import posts from '@/assets/posts.json'
export default {
    data(){
        return{
            posts : [...posts]
        }
    },
    methods:{
        toogleCart(){
            this.$store.dispatch('updateCardState');
        }
    }

}
</script>

<style lang="scss" scoped>
    $primary-background: #2e2d2d;
    $secondary-background: #4d4b4b;
    $primary-color:#dedcdc;
    $payment-view-button-background: #F2AA4CFF;
    $payment-view-button-text: #000;
    p,h2,button{
        margin: 0;
        padding: 0;
    }
    .cart-view{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        padding-top: 0;
        background-color: $primary-background;
        max-width: 40%;
        border-radius: 0.5rem;
        
        .close-cart{
            align-self:flex-end;
            font-size: 2.2rem;
            cursor: pointer;
        }
        .order{
            text-align: center;
            font-size: 2.5rem;
            margin: 2rem 0rem;
        }
        p,h2,button{
            color: $primary-color;
        }
        h2{
            margin: 0.5rem;
            font-size: 1.5rem;
        }
        button{
            background: transparent; 
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            margin-top: 2rem;
        }
        .shopping-item{
            display: flex;
            flex-direction: column;
            max-width: 80%;
            margin-bottom: 2rem;
            
            h2, p{
                text-align: center;
            }
        }
        .shopping-info{
            min-width: 80%;
            box-sizing: border-box;
            background-color: $secondary-background;
            align-self: stretch;
            padding: 1.3rem;
            border-radius: 0.5rem;
            margin: 2rem 3rem;
            display: flex;
            flex-direction: column;

            h2{
                text-align: center;
            }
        }
        .payment-view-button{
            min-width: 100%;
            background-color: $payment-view-button-background;
            color: $payment-view-button-text;
            padding: 1.2rem;
            border-radius: 0.5rem;
        }
    }
</style>