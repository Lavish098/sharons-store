<template>
  <div class="table">
    <div class="cart-image">
   <img :src="`/images/${this.product.image}.jpg`" alt=""/>
    </div>
    <div class="cart-items">
        <p>{{ product.name }}</p>
                <p>₦{{ item_cost.toLocaleString() }}</p>
    </div>
    <div class="cart-button">
        <button @click="store.removeFromCart(product)">-</button>
        <p>{{ product.quantity }}</p>
        <button @click="store.addToCart(product)">+</button>
    </div>
         
  </div>
</template>

<script>
import { productStore } from  '../store/index'

export default {
props:['product'],
data(){
    return{
        store: productStore()
    }
},
computed:{
     item_cost() {
        return this.product.price * this.product.quantity
       }
},
methods:{
    removeItem(){
            this.$store.commit('removeItem', this.product)
        },
        
    },
}
</script>

<style>

</style>