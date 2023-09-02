<template>
  <div class="product-card">
      <div class="info" >
        <img :src=" product.image.jpg" alt=""/>
          <h4>{{ product.name }}</h4>
          <h4 class="price">₦ {{ product.price.toLocaleString() }}</h4>
          <button @click="addToCart">Add to Cart</button>
    <!-- <nuxt-link :to="{name: 'productDescription', params:{productid: this.product.id} }">
        <i class="fas fa-eye">
        Quick View
        </i>
    </nuxt-link> -->
      </div>
  </div>
</template>

<script>
export default {
    name: "productCard",
    props:['product'],
    data(){
        return{
            image: this.product.image
        }
    },
    methods:{
        addToCart(){
            this.$store.commit('addToCart', this.product)
        },
    },
    computed:{
    carts(){
      return this.$store.state.carts;
    }
  }, 
    
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