<template>
  <div ref="swiper" class="swiper shadow-lg">
    <span id="lens" v-show="activeLens"
    :style="markerInfoStyle"  @mousemove="mouseOver" @mouseout="mouseOut"></span>
    <div class="swiper-wrapper" id="swiper-wrapper">
      <div class="swiper-slide">
        <img @mousemove="mouseOver"  src="../assets/product-image-front.jpeg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="../assets/product-image-back.jpeg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="../assets/product-image.jpeg" alt="">
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
  emits:['hover-position', 'mouse-out'],
  data() {
    return {
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
          this.activeIndex = swiper.realIndex
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
    mouseOver: function(event){
      this.activeLens = true;
      let canvas = document.getElementById("swiper-wrapper");
      let canvasBounds = canvas.getBoundingClientRect();

      this.lensLeft = event.pageX - (canvasBounds.x + 75);
      this.lensTop = event.pageY - (canvasBounds.y + 75);
      console.log("LNETS", this.lensLeft, this.lensTop)
      this.$emit('hover-position', '-'+(this.lensLeft )+'px', '-'+(this.lensTop)+'px');
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
</style>