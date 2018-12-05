<template>
  <div id="app">
    
      <div class="container-fluid px-2">
        <pp-header></pp-header> 

      </div>
      
       <router-view></router-view>

      

      <div class="container-fluid px-2">
        <pp-footer></pp-footer> 

      </div>


  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {

  components: {
    ppHeader: Header,
    ppFooter: Footer

  }
  
}
</script>

<style>
li.router-link-exact-active.router-link-active a {
    color: green !important;
    font-weight: bold;
}
li a {
    text-transform: uppercase;
  }
  .container-fluid.px-2 {
    width: 90%;
}
</style>
