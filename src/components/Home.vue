<template>
  <div>
    <NavBar></NavBar>
    <div class="flex productContent">
      <div class="flex w-2/5">
        <ProductSwiper @open-modal="openModal" @hover-position="onHoverPosition" @mouse-out="onMouseOut"></ProductSwiper>
      </div>
      <div class="imageWrapper">
        <div :style="{ backgroundPositionX: computedPositionX,
                       backgroundPositionY: computedPositionY,
                       backgroundImage: `url(${computedUrlImage})`}"
        class="imageZoomer"></div>
      </div>
      <ProductInformation></ProductInformation>
    </div>
    <button @click="onToggleModal()">show modal</button>
    <ModalDetail :show-modal="showModal" @toggle-modal="onToggleModal()"></ModalDetail>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import ProductSwiper from './ProductSwiper.vue';
import ProductInformation from './ProductInformation.vue';
import ModalDetail from './ModalDetail.vue';
export default {
  components:{
    NavBar,
    ProductSwiper,
    ProductInformation,
    ModalDetail
},
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      positionX: '1px',
      positionY: '1px',
      urlImage: '',
      showModal: false
    }
  },
  computed:{
    computedPositionX: function(){
      return this.positionX;
    },
    computedPositionY: function(){
      return this.positionY
    },
    computedUrlImage: function(){
      return this.urlImage;
    }
  },
  methods: {
    openModal(){
      this.showModal = true;
    },
    onToggleModal(){
      this.showModal = !this.showModal;
    },
    onMouseOut(value){
      if(!value){
        let imageWrapper = document.getElementsByClassName('imageWrapper')[0];
        imageWrapper.style.display = 'none';
      }
    },
    onHoverPosition(positionX, positionY, url) {
      let imageWrapper = document.getElementsByClassName('imageWrapper')[0];
      imageWrapper.style.display = 'block';
      this.positionX = `-${(positionX*1.5)}px`;
      this.positionY = `-${(positionY * 1.5)}px`;
      this.urlImage = require(`../assets/${url}`);
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
  left: 490px;
  z-index: 1;
}
  .imageZoomer{
    position: absolute;
    height: 500px;
    width: 400px;
    background-image: url('../assets/product-image-front.jpeg');
    z-index: 1;
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