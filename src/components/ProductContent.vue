<template>
  <div ref="swiper" class="swiper shadow-lg">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../assets/product-image-front.jpeg" alt="">
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
  data() {
    return {
      activeIndex: 0,
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
}
</script>

<style scoped>
.swiper{
  height: 500px;
}
.swiper-slide{
  display: flex;
}
.swiper-slide img{
  margin: auto;
  max-height: 340px;
}
</style>