<template>
  <div id="app">
    <ProductDetail msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import ProductDetail from './components/ProductDetail.vue'

export default {
  name: 'App',
  components: {
    ProductDetail
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background-color: #f5f5f5;
}
</style>
