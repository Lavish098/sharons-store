<template>
<div  v-if="currentProduct" class="product-description" >
    
        <div class="img">
        <!-- <img :src="this.image" alt=""/> -->
        </div>
        <div class="product-container">

        <div class="product-details">
        <h1>{{ this.currentProduct.name }}</h1>
        <h2> ₦{{ this.currentProduct.price.toLocaleString() }}</h2>
        <h3>{{ this.currentProduct.description }}</h3>
        </div>
    <div v-if="product_total" class="cart-total">
        <h3>In cart </h3>
        <h3>{{ product_total }}</h3>
    </div>

    <div class="button-container">
        <button class="remove" @click="removeFromCart">-</button>
        <button class="add" @click="addToCart">+</button>
    </div>

<!-- <review :currentProduct="reviewId"/> -->
        </div>
  </div>
</template>

<script>
import { productStore } from '../store/index'
export default {
    props:[ 'active'],
    data(){
        return{
            store: productStore(),
            // reviewId: this.$route.params.productid,
            currentProduct: null,
            product :[]
            // image: this.currentProduct.image

        }
    },
    methods:{
        addToCart(){
            this.store.addToCart(this.currentProduct)
        },
        removeFromCart(){
            this.store.removeFromCart(this.currentProduct)
        },
        product_description(){
            console.log(this.products);
            this.currentProduct = this.products.filter((product) => {
        return product.id == this.$route.params.id;
    })[0];
        }

    }, 
    computed:{
        product_total(){
            return this.store.productQuantity(this.currentProduct)
        },
        products(){
      return this.store.products
    }
    },
    created(){
       this.product_description()
//     this.$store.commit('updateCartFromLocalStorage')
//   this.$store.commit('updateProductReviewsFromLocalStorage')
  }

}
</script>

<style>

</style>