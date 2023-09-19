// https://nuxt.com/docs/api/configuration/nuxt-config



export default defineNuxtConfig({
  
runtimeConfig:{
  FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,

  public:{
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY
  },
},

  devtools: { enabled: true },
  modules:[['@pinia/nuxt', {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  }]],
  css: [
    "@/assets/css/main.css",
    "@/assets/css/media.css",
  ],
  imports:{
    dirs:["./store"]
  },
 app:{
  head:{
    viewport: "width=device-width, initial-scale=1, maximum-scale=1"
  }
},
})
