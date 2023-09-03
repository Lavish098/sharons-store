


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
 actions: {
  addToCart(product){
    let item = this.cart.find(i => i.id === product.id)
    console.log(item)
    if(item){
      item.quantity++
     } else {
      this.cart.push({...product, quantity: 1})
      console.log(this.cart);
     }
     localStorage.setItem('cart', JSON.stringify(this.cart))
 },
    }
  
    
})

