<template>
  <div class="product-card">
      <div class="info" >
        <img :src="this.image" alt=""/>
          <h4>{{ product.name }}</h4>
          <!-- <p class="price">₦ {{ product.price.toLocaleString() }}</p> -->
          <button @click="store.addToCart(product)">Add to Cart</button>
    <nuxt-link :to="{name: 'id', params:{id: product.id} }">
        <i class="fas fa-eye">
        Quick View
        </i>
    </nuxt-link>
      </div>
  </div>
</template>

<script>
import { productStore } from  '../store/index'

export default {
    name: "productCard",
    props:['product'],
    data(){
        return{
            store: productStore(),
            image: this.product.image
        }
    },
    methods:{
      
    },
    computed:{
    carts(){
      return this.store.cart;
    }
  }, 
  mounted(){
    console.log(this.product);
  }
    
    //     quantity:{
    //         get(){
    //     console.log(this.$store.getters.storeFeed)
    //     return this.$store.getters.storeFeed;
    //   },
    //   set(payload){
    //     this.$store.commit("updateQuantity", payload)
    //   }
    //     }
    
}
</script>


<style scoped>

/* .blog-card .info link{
    display: inline-flex;
    align-items: center;
    margin-top: auto;
    font-weight: 500;
    padding-top: 20px;
    font-size: 12px;
    padding-bottom: 4px;
    transition: 0.5s ease-in all;
}
.blog-card .info link:hover{
    color: rgba(48, 48, 48, 0.8);
}
.blog-card .info .link .arrow{
    width: 10px;
} */
</style>