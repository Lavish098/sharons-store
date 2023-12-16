<template>
  <div class="user" >
     <div  class="profile" ref="profile">
                      <div class="profile-menu" v-if="user">
                          <div class="info">
                              <p class="initials">{{ this.store.profileInitials }}</p>
                              <div class="right">
                                  <p>{{ this.store.profileFirstName }} {{ this.store.profileLastName }}</p>
                                  <p>{{ this.store.profileUsername }}</p>
                                  <p>{{ this.store.profileEmail }}</p>
                              </div>
                          </div>
                          <div class="options">
                              <div class="option" >
                                  <router-link class="option" :to="{name: 'Profile'}">
                                      <i class="fas fa-user icon"></i>
                                      <p>Profile</p>
                                  </router-link>
                              </div>
                              <div v-if="admin" class="option" >
                                  <router-link class="option" :to="{name: 'index'}">
                                      <i class="fas fa-user-shield icon"></i>
                                      <p>Admin</p>
                                  </router-link>
                              </div>
                              <div @click="signOut" class="option">
                                      <i class="fas fa-sign-out-alt icon"></i>
                                      <p>Sign Out</p>
                              </div>
                          </div>
                      </div>
                      <div class="profile-menu" v-if="!user">
                        <div class="option">
                            <p>{{ signOutMsg }}</p>
                        </div>
                      </div>
                  </div>
  </div>
</template>

<script>
import { productStore } from  '../store/index'
import { getAuth, signOut } from "firebase/auth";


export default {
    props:['user'],
    data(){
        return{
            admin: false,
            store: productStore(),
            signOutMsg:"",
        }
    },
    created(){
        console.log(this.store.profileEmail);
    },
    methods:{
        signOut(){
            const auth = getAuth();
            signOut(auth).then(() => {
                this.signOutMsg = "Sign Out Successful"
            }).catch((error) => {
                       console.log(error);
            });
        window.location.reload();
    }
    }
}
</script>

<style scoped>
span{
    color: #fff;
}
.user .profile{
    position: absolute;
    cursor: pointer;
    display: flex;
    right: 0px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    z-index: 9999;
}
.profile .profile-menu{
    position: absolute;
    top: 80%;
    right: 10%;
    width: 300px;
    background-color: #007eff;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.86);
}
.profile-menu .info{
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #fff;
}
.info .initials{
    position: initial;
    width: 40px;
    height: 40px;
    background-color: #fff;
    color: #007eff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}
.right{
    flex:1;
    margin-left: 24px;
}
    .right p:nth-child(1){
        font-size: 17px;
    }
    .right p:nth-child(2), p:nth-child(3){
        font-size: 15px;
    }
.options{
    padding: 15px;
}
.options .option{
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
} 
.option .icon{
    width: 18px;
    height: auto;
}
.option p{
    font-size: 14px;
    margin-left: 12px;
}
.option:last-child{
    margin-bottom: 0px;
}
span{
    pointer-events: none;
}
</style>>