<template>
  <div class="hello">
    <NavBar></NavBar>
    <div class="flex">
      <div class="w-2/5">
        <ProductContent></ProductContent>
      </div>
      
    </div>
    


  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import ProductContent from './ProductContent.vue';

export default {
  components:{
    NavBar,
    ProductContent
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
