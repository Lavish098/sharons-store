<template>
<div class="product">
<!-- <productDescription
:product="product"
:active="active.product_drawer"
v-on:close-product-drawer="closeProductDrawer()"/> -->

  <productCard :product="product" v-for="product in products" :key="product.id"
v-on:view-product="viewProduct($event)"/>
</div>

</template>

<script>
import { productStore } from  '../store/index'

export default {
  name: 'products',
  data(){
    return{
           store: productStore(),

      // products: products,
      product: null,
      active:{
        product_drawer: false
      }
    }
  },
   computed:{
    products(){
      return this.store.products
    }
  },
  methods:{
    viewProduct(product){
      this.product = product
      this.active.product_drawer = true
    },
    closeProductDrawer(){
      this.active.product_drawer = false
    }
  },
}
</script>
<style>
.product{
  display: flex;
  flex-wrap: wrap;
   width: 111%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}
</style>