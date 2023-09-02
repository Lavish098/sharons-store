


import { defineStore } from 'pinia'
import products from '../data/products.js'



export const productStore = defineStore('product', {
  state: () => ({
    productItems: products,
    cart:[],
    productReviews:[]
    }),
    getters: {
      productFeeds: state => {
        return state.productItems.slice(0, 6)
      },
      products: state => {
        return state.productItems
      },
      cartItems: state => {
        return state.cart
      },
      cartTotal: state => {
        return state.cart.reduce((a, b) => a + (b.price * b.quantity), 0)
      }
  },
 actions : {
  
    }
  
    
})

