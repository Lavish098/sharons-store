


import { defineStore } from 'pinia'
import { getAuth } from 'firebase/auth';
import {  getFirestore, doc, getDoc } from "firebase/firestore";
import products from '../data/products.js'
// import productsFake from '../data/fakeProducts.js'



export const productStore = defineStore('product', {
  state: () => ({
    productItems: [],
    cart:[],
    productReviews:[],
    user: null,
    userDetails:[],
    profileAdmin: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
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
    if(item){
      item.quantity++
     } else {
      this.cart.push({...product, quantity: 1})
     }
     localStorage.setItem('cart', JSON.stringify(this.cart))
 },
 removeFromCart(product){
  let item = this.cart.find(i => i.id === product.id)
  if(item){
    if(item.quantity > 1){
      item.quantity--
    }
  else {
   this.cart = this.cart.filter(i => i.id !== product.id)
  }
}
localStorage.setItem('cart', JSON.stringify(this.cart))
},
removeAll(){
  this.cart = []
},
async getProducts(){
  const result = await fetch('https://fakestoreapi.com/products')
   const data = await result.json();
   this.productItems = data

 },
 updateUser(user){
  console.log(user)
  this.user = user
 },
 async getCurrentUser(user){
  const firebaseAuth = getAuth();
  const db = getFirestore();
  const dataBase = doc(db, 'users', firebaseAuth.currentUser.uid);
  const docSnap = await getDoc(dataBase);
  if(docSnap.exists()){
    console.log(docSnap.data());
    const dbResult = docSnap.data();
    this.userDetails.push(dbResult)
    this.setProfileInfo(this.userDetails)
    this.setProfileInitials(this.setProfileInfo())
  }
  const token = await user.getIdTokenResult();
  // const admin = await token.claims.admin;
  // commit('setProfileAdmin', admin);
},
setProfileInfo(){
  console.log(this.userDetails);
  this.userDetails.map((item) => {
    console.log(item);
    const doc = item
    console.log(doc.email);
    this.profileEmail = doc.email;
    this.profileFirstName = doc.firstName;
    this.profileLastName = doc.lastName;
    this.profileUsername = doc.username;
  })

  // state.profileId = doc.id;
 
},
setProfileInitials(){
  this.profileInitials = 
  this.profileFirstName.match(/(\b\S)?/g).join("") + 
  this.profileLastName.match(/(\b\S)?/g).join("");
  console.log(this.profileFirstName);

  console.log(this.profileInitials);
},
    },
   
 
    
})

