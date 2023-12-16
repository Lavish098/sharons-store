<template>
  <div id="nav">
    <header>
      <div class="nav">
        <div @click="toggleMobileNav" v-show="mobile" class="menu-icon" :class="{'btn-home':mobileNav}" >
        <div class="bar" ></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    <nuxt-link to="/" class="name">SHARONS STORE</nuxt-link>
    <div class="nav-links" v-show="!mobile">
      <nuxt-link :to="{name: 'index'}" class="links">Home</nuxt-link>
    <nuxt-link :to="{name: 'products'}" class="links">Products</nuxt-link>
    <nuxt-link :to="{name: 'index'}" class="links">Past order</nuxt-link>
     
    </div>
    <seacrhBar />
    <div class="cartIcon" v-if="user" @click="toggleCartBar">
      <i class="fas fa-shopping-cart"></i>
      </div>
    <div class="cart-Icon" v-if="!user" @click="toggleCartBar">
      <i class="fas fa-shopping-cart"></i>
      </div>
    
       <div class="userIcon" v-if="user" @click="toggleProfileMenu">
<span>{{ this.store.profileInitials }}</span>
      </div>
      <userIcon  :user="user" v-if="profileMenu" @click="toggleProfileMenu"/>
      <!-- <div class="userIcon">
      
              <nuxt-link :to="{name: 'Login'}"> 
<i class="fas fa-user"></i>

              </nuxt-link>
      </div> -->
    </div>
      
      <transition name="mobile-nav" >
          <ul class="mobile-nav"  v-show="mobileNav">
            <button @click="toggleMobileNav">X</button>
            <div class="loginIcon" v-if="!user" @click="toggleMobileNav">
              <nuxt-link :to="{name: 'Login'}" > 
                LOGIN
              </nuxt-link>
      </div>
              <nuxt-link to="/" class="links" @click="toggleMobileNav">Home</nuxt-link>
    <nuxt-link to="products" class="links" @click="toggleMobileNav">Products</nuxt-link>
    <nuxt-link to="pastorder" class="links" @click="toggleMobileNav">Past order</nuxt-link>
    
    </ul>
      </transition>
    </header>

    <div class="login-icon" v-if="!user" v-show="!mobile">
              <nuxt-link :to="{name: 'Login'}" > 
                LOGIN
              </nuxt-link>  
    </div>
    <cartBar v-if="cartBar" 
    :toggle="toggleCartBar" />
    
    <slot @click="toggleMobileNav"/>
  </div>
</template>

<script>
import '@/fontawesome-free-5.15.1-web/css/all.css'
import { productStore } from  '../store/index'
import { getAuth } from 'firebase/auth'


export default {
data(){
  return{
    store: productStore(),
    cartBar: false,
     mobile: null,
        mobileNav: null,
        windowWidth: null,
        profileMenu: null,
  }
},
computed:{
  
},
mounted(){
  if(process.client){
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  }
},
created(){
      this.store.getProducts();
       getAuth().onAuthStateChanged(async (user) => {
        this.store.updateUser(user);
        if(user){
          console.log(user)
          this.store.getCurrentUser(user);
          this.store.setProfileInfo()
          this.store.setProfileInitials()
        }
      })
   
  },

methods:{
    checkScreen(){
      if(process.client){
        this.windowWidth = window.innerWidth;
        if(this.windowWidth <= 850){
          this.mobile = true;
            return;
        }
        this.mobile = false;
        this.mobileNav = false;
        return;
          }
    },
    toggleMobileNav(){
        this.mobileNav = !this.mobileNav;
    },
toggleCartBar(){
  this.cartBar = !this.cartBar
},
  toggleProfileMenu(){
            this.profileMenu = !this.profileMenu;
        
        
    },
},
computed:{
  user(){
    console.log(this.store.user);
        return this.store.user
      }
}
}
</script>

<style scoped>

</style>