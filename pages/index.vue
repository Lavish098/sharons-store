<template>
<div class="home">
  <Loading v-show="!loading"/>
  <!-- <div class="gallery-container">

  <div class="mover-1">
    <img src="/images/images (32).jpeg" alt="">
    </div>
  <div class="mover-2">
    <img src="/images/images (33).jpeg" alt="">
    </div>
  </div> -->
  
  <!-- <categories /> -->

  <div class="productCard">
<productCard :product="product" v-for="product in productFeeds" :key="product.id"
v-on:view-product="viewProduct($event)"
/>
  </div>
  </div>
</template>

<script>
import { getAuth } from 'firebase/auth'
import { productStore } from  '../store/index'


export default {
  name: 'IndexPage',
  props:['mobile'],
  components:{
  },
  data(){
    return{
     store: productStore(),
      // products: products,
      loading: null,
      product: null,
      active:{
        product_drawer: false
      }
    }
  },
  computed:{
    productFeeds(){
    this.loading = true
      return this.store.productFeeds;
    },
  },
  created(){
          this.store.getProducts();
  },
  methods:{
    viewProduct(product){
      this.product = product
      this.active.product_drawer = true
      console.log(this.product)
    },
    closeProductDrawer(){
      this.active.product_drawer = false
      console.log(this.active.product_drawer)
    }
  },
  
}
</script>
<style>
.home{
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}
.productCard{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
}

</style>

