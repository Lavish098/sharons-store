// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
 
 
})
