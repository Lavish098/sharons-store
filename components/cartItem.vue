<template>
  <div class="table">
    <div class="cart-image">
   <img :src="`@/assets/images/${this.product.image}.jpg`" alt=""/>
    </div>
    <div class="cart-items">
        <p>{{ product.name }}</p>
                <p>₦{{ item_cost.toLocaleString() }}</p>
    </div>
    <div class="cart-button">
        <button @click="removeFromCart">-</button>
        <p>{{ product.quantity }}</p>
        <button @click="addToCart">+</button>
    </div>
         
  </div>
</template>

<script>
export default {
props:['product'],
computed:{
     item_cost() {
        return this.product.price * this.product.quantity
       }
},
methods:{
    removeItem(){
            this.$store.commit('removeItem', this.product)
        },
        addToCart(){
            this.$store.commit('addToCart', this.product)
        },
        removeFromCart(){
            this.$store.commit('removeFromCart', this.product)
        }
    },
}
</script>

<style>

</style>