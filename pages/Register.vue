<template>
   <div class="form-wrap">
      <form class="register">
          <p class="login-register">
              Already have an account?
              <router-link class="router-link" :to="{name: 'Login'}">Login</router-link>
          </p>
          <h2>Create your account</h2>
          <div class="inputs">
              <div class="input">
                  <input type="text" placeholder="First Name" v-model="firstName">
                  <i class="fas fa-user icon"></i>
              </div>
              <div class="input">
                  <input type="text" placeholder="Last Name" v-model="lastName">
                  <i class="fas fa-user icon"></i>
              </div>
              <div class="input">
                  <input type="text" placeholder="Username" v-model="username">
                  <i class="fas fa-user icon"></i>
              </div>
              <div class="input">
                  <input type="text" placeholder="Email" v-model="email">
                  <i class="fas fa-envelope icon"></i>
              </div>
              <div class="input">
                  <input type="password" placeholder="Password" v-model="password">
                  <i class="fas fa-key icon"></i>
              </div>
              <div class="error" v-show="error">{{ this.errorMsg }}</div>
              </div>
              <button @click.prevent="register" class="register-btn">
                <div class="lds-ellipsis" v-if="isLoading">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    </div>
                <p v-if="!isLoading">Sign Up</p> </button>
              <div class="angle"></div>
      </form>
      <div class="background"></div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore"

export default {
    name: 'Register',
    data(){
        return{
            isLoading: false,
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            error:null,
            errorMsg:""
            }
    },
    methods:{
        async register(){
            this.isLoading = true;
            if(
                this.email !== "" &&
                this.password !== "" &&
                this.firstName !== "" &&
                this.lastName !== "" &&
                this.username !== ""
            ){
                this.error = false;
                this.errorMsg = "";
                const firebaseAuth = getAuth();
                const createUser = await createUserWithEmailAndPassword( firebaseAuth, this.email, this.password, this.username );
                const result = await createUser;
                // const dataBase = db.collection("users").doc(result.user.uid);
                // await dataBase.set({
                //     firstName: this.firstName,
                // lastName: this.lastName,
                // username: this.username, 
                //     email: this.email,
                // });
                this.$router.push({ name: 'index' });
                const user = getAuth().currentUser
                    console.log(user);
                    sendEmailVerification(user)
                    .then(() => {
                        console.log('email sent');
                    })
                return;
            }
            this.error = true;
            this.errorMsg = "Please fill out all the fields";
            this.isLoading = false
            return;
        }
         
    }
   
}
</script>

<style scoped>
.register h2{
    max-width: 350px;
}
</style>