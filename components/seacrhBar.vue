<template>
  <div class="searchBar">
    <div class="inputIcon">
    <input type="text" v-model="search" placeholder="Search for your products here">
    <i class="fas fa-search searchIcon" @click="searchToggle"></i>
    </div>
    <div class="searchQuery"  v-if="search">
      <h2 v-for="search in searchQuery" :key="search.id" @click="searchToggle">
        <nuxt-link >
          <!-- :to="{name: 'productDescription', params:{productid: search.id} }" -->
        {{search.title}}
        </nuxt-link>
      </h2>
    <div class="item-error" v-if="searchQuery.length === 0">
      <p>No result found</p>
    </div>
    </div>
  </div>
</template>

<script>
import { productStore } from  '../store/index'

export default {
data(){
    return{
      store: productStore(),
        search: "",
        searchBar: false
    }
},
 computed:{
   products(){
      return this.store.products
    },
  searchQuery(){
    if(this.search){
      return this.products.filter(item => {
        return this.search.toLowerCase().split(" ").every(v => item.title.toLowerCase().includes(v))
      })
    }else{
      return this.products
    }
  }
  },
  methods:{
    searchToggle(){
      this.searchBar = !this.searchBar
      this.search = ""
    }
  }
    
}
</script>

<style>

</style>