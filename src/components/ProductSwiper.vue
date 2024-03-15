<template>
  <div ref="swiper" class="swiper shadow-lg">
    <span id="lens" v-show="activeLens"
    :style="markerInfoStyle" @mousemove="mouseOver($event, imgArray[activeIndex])" @mouseout="mouseOut" @click="openModal()"></span>
    <div class="swiper-wrapper" id="swiper-wrapper">
      <div class="swiper-slide">
        <img  @mousemove="mouseOver($event, imgArray[activeIndex])" @click="openModal()"  src="../assets/product-image-front.jpeg" alt="">
      </div>
      <div class="swiper-slide">
        <img @mousemove="mouseOver($event, imgArray[activeIndex])" @click="openModal()" src="../assets/product-image-back.jpeg" alt="">
      </div>
      <div class="swiper-slide">
        <img @mousemove="mouseOver($event, imgArray[activeIndex])" @click="openModal()" src="../assets/product-image.jpeg" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-scrollbar"></div>

  </div>
</template>

<script>
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules';


import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  emits:['hover-position', 'mouse-out', 'open-modal'],
  data() {
    return {
      imgArray:['product-image-front.jpeg',
      'product-image-back.jpeg',
      'product-image.jpeg'],

      activeLens: false,
      activeIndex: 0,
      lensLeft: 0,
      lensTop: 0
    }
  },
  mounted() {
    new Swiper(this.$refs.swiper, {
      // configure Swiper to use modules
      modules: [Navigation, Pagination],
      // Optional parameters
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
       // Events
       on: {
        slideChange: (swiper) => {

          this.activeIndex = swiper.realIndex;
          this.$store.commit('changeCurrentIndex', this.activeIndex);
        },
      },
    })
  },
  computed:{
    markerInfoStyle: function(){
      return {
        left: this.lensLeft + 'px',
        top: this.lensTop + 'px'
      }
    }
  },
  methods: {
    openModal(){
      console.log("CLICK");
      this.$emit('open-modal');
    },
    mouseOver: function(event, url){
      if(window.innerWidth < 1024){
        return;
      }
      this.activeLens = true;
      let canvas = document.getElementsByClassName("swiper-slide-active")[0];
      let canvasBounds = canvas.getBoundingClientRect();

      this.lensLeft = event.pageX -  (canvasBounds.x + 75);
      this.lensTop = event.pageY - (canvasBounds.y + 75);
      this.$emit('hover-position', this.lensLeft,this.lensTop, url);
    },
    mouseOut: function(){
      this.activeLens = false;
      this.$emit('mouse-out', false);
    }
  }
}
</script>

<style scoped>
  #lens{
    display: block;
    width: 150px;
    height: 150px;
    background: rgba(0,0,0,0.2);
    position: absolute;
    z-index: 11;
    border: 3px solid red;
  }
  .swiper{
    height: 500px;
    position: relative;
    background-color: white;
  }
  img:hover{
    cursor: pointer;
  }
  .swiper-slide{
    display: flex;
    position: relative;
  }
  .swiper-slide img{
    margin: auto;
    margin-top: 0;
    max-height: 460px;
  }
  .swiper-button-prev:after, .swiper-rtl .swiper-button-next:after{
    font-size: 14px;
  }
  .swiper-button-next:after, .swiper-rtl .swiper-button-prev:after{
    font-size: 14px;
  }
  @media only screen  and (max-width: 1024px) {
    .swiper-slide img{
      margin-top: 10px;
    }

  }
</style>