<template>
  <section class="wrapper">
      <img src="" alt="">
    <article class="info">
        <h1>{{card.Title}}</h1>
        <p>{{card.About}}</p>
        <button>Oh, take my money!</button>
    </article>
  </section>
</template>

<script>
export default {
  props:['card']
}
</script>

<style scoped>
.wrapper{
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
h1,p{
  color: #fff;
}



</style>