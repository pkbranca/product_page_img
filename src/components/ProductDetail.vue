<template>
  <div class="hello">
    <NavBar></NavBar>
    <div class="flex productContent">
      <div class="flex w-2/5">
        <ProductContent @hover-position="onHoverPosition" @mouse-out="onMouseOut"></ProductContent>
      </div>
      <!-- <img class="imageZoomer" src="../assets/product-image-front.jpeg" alt=""> -->
      <div class="imageWrapper">
        <div :style="{ backgroundPositionX: computedPositionX, backgroundPositionY: computedPositionY}"
        class="imageZoomer"></div>
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
  },
  data(){
    return{
      positionX: '1px',
      positionY: '1px'
    }
  },
  computed:{
    computedPositionX: function(){
      return this.positionX;
    },
    computedPositionY: function(){
      return this.positionY
    }
  },
  methods: {
    onMouseOut(value){
      if(!value){
        let imageWrapper = document.getElementsByClassName('imageWrapper')[0];
        imageWrapper.style.display = 'none';
      }
    },
    onHoverPosition(positionX, positionY) {
      let imageWrapper = document.getElementsByClassName('imageWrapper')[0];
      imageWrapper.style.display = 'block';
      this.positionX = positionX;
      this.positionY = positionY;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imageWrapper{
  display: none;
  position: absolute;
  height: 500px;
  width: 400px;
  overflow: hidden;
  left: 440px;
  z-index: 1;
}
  .imageZoomer{
    position: absolute;
    height: 500px;
    width: 400px;
    z-index: 1;
    background-image: url('../assets/product-image-front.jpeg');
    background-repeat: no-repeat;
    background-color: white;
    left: 0;
  }
.productContent{
  max-width: 1170px;
  margin: auto;
  padding-top: 70px;
  position: relative;
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
