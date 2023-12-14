<template>
  <div class="hello">
    <NavBar></NavBar>

    <div class="flex productContent">
      <div class="flex w-2/5">
        <ProductContent></ProductContent>
      </div>
      <ProductInformation></ProductInformation>
    </div>



  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import ProductContent from './ProductContent.vue';
import ProductInformation from './ProductInformation.vue';

export default {
  components:{
    NavBar,
    ProductContent,
    ProductInformation
},
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.productContent{
  max-width: 1170px;
  margin: auto;
  padding-top: 70px;
}
.hello{
  background-color: #f5f5f5;
  min-height: 1000px;
}
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
