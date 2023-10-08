// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export default defineNuxtPlugin((nuxtApp) =>{
  
  const config = useRuntimeConfig();

    const firebaseConfig = {
        apiKey: config.public.FIREBASE_API_KEY,
        authDomain: "sharons-store.firebaseapp.com",
        databaseURL: "https://sharons-store-default-rtdb.firebaseio.com",
        projectId: "sharons-store",
        storageBucket: "sharons-store.appspot.com",
        messagingSenderId: "972767951989",
        appId: "1:972767951989:web:238ed492cb4a0a938e4c3c",
        measurementId: "G-548TY6SJZD"
      };

      const app = initializeApp(firebaseConfig);
      // console.log(db);
      
      // nuxtApp.vueApp.provide('db', db)
      // nuxtApp.provide('db', db)
// Initialize Firebase
})
