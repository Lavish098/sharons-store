<template>
  <div>
    <div v-if="currentProduct" class="product-description">
<div class="product-img">
      <img :src="productImage" alt="" />
    </div>
    <div class="product-container">
      <div class="product-details">
        <h1>{{ currentProduct.name }}</h1>
        <h2>₦{{ currentProduct.price.toLocaleString() }}</h2>
        <h3>{{ currentProduct.description }}</h3>
      </div>
      <div v-if="product_total" class="cart-total">
        <h3>In cart </h3>
        <h3>{{ product_total }}</h3>
      </div>
      <div class="button-container">
        <button class="add" @click="addToCart">Add To Cart</button>
      </div>
    </div>
    </div>
    <div class="category-container" v-if="currentProduct">
      <h1> Similar Products</h1>
      <div class="category">
          <categoryCard :product="category" v-for="category in category" :key="category.id"/>

      </div>
    </div>

  </div>
</template>

<script>
import { productStore } from '../store/index';

export default {
  props: ['active'],
  data() {
    return {
      store: productStore(),
      currentProduct: null,
      category: null,
    };
  },
  methods: {
    addToCart() {
      this.store.addToCart(this.currentProduct);
    },
    removeFromCart() {
      this.store.removeFromCart(this.currentProduct);
    },
    async product_description() {
        const products = await this.store.products
        console.log(products)
      this.currentProduct = products.find(
        (product) => product.id == this.$route.params.id
      );
    },
    async product_category() {
        const products = await this.store.products
      this.category = products.filter(
        (product) => product.category == this.currentProduct.category
      );
      console.log(this.category);
    },
  },
  computed: {
    product_total() {
      return this.store.productQuantity(this.currentProduct);
    },
    productImage() {
      return this.currentProduct ? this.currentProduct.image : '';
    },
  },
  watch: {
    $route(to, from) {
      this.product_description();
    },
  },
  async created() {
    await this.store.getProducts();
    await this.product_description();
    await this.product_category();
  },
};
</script>

<style>
/* Add your styles here */
</style>
