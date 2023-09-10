<template>
  <div class="cart-bar">
    <div class="cart-header">
    <button @click="toggle" class="cartClose-button">></button>
    <h1>Cart</h1>
    </div>
    <div class="cart-table">
    <div class="cart-error" v-if="products.length === 0">
      <p>No item in cart</p>
    </div>
           <cartItem v-for="product in products" :key="product.id" :product="product"/>
    <div class="cart-checkout">
      <h2>Total: ${{ cart_total.toLocaleString()}}</h2> 
    </div>

     <div class="cart-btn">
<button @click="store.removeAll()" class="clear">Clear All</button>
    <button>Checkout</button>
    </div>
    </div>
  </div>
</template>

<script>
import { productStore } from  '../store/index'

export default {
    props:['toggle'],
    data(){
        return{
               store: productStore(),

        }
    },
    computed:{
       cart_total() {
        return this.store.cartTotal
       },
       products(){
    return this.store.cartItems
  }
},
methods:{
   
},
mounted(){
  // this.$store.commit('updateCartFromLocalStorage')
}

}
</script>

<style>

</style>