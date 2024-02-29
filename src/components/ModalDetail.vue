<template>
 <div v-if="showModal" class="overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
    <div class="relative w-auto mx-auto w-full h-full">
        <!--content-->
        <div class="h-full border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 class="text-3xl font-semibold">
              Modal Title
            </h3>
            <button class="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold" v-on:click="toggleModal()">
              <span class="bg-transparent text-black h-6 w-6 text-2xl block">
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto h-max-full flex">
            <div class="w-8/12	">
              <img class="m-auto h-2/5" :src=imagePrincipal alt="">
            </div>
            <div class="w-4/12 flex">
              <div class="imgWrapper" v-for="(phone, index) in phoneArray" :class="{selected: index === currentIndex}">
                <img class="m-auto max-h-full" @click="changeImagePrincipal(index)" :src="phone" alt="">
              </div>
              <!-- <div class="imgWrapper">
                <img class="m-auto max-h-full" @click="changeImagePrincipal(0)" src="../assets/product-image-front.jpeg" alt="">
              </div>
              <div class="imgWrapper" >
                <img class="m-auto max-h-full" @click="changeImagePrincipal(1)" src="../assets/product-image-back.jpeg" alt="">
              </div>
              <div class="imgWrapper">
                <img class="m-auto max-h-full" @click="changeImagePrincipal(2)" src="../assets/product-image.jpeg" alt="">
              </div> -->
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>

export default {
  data(){
    return{
      showModal: true,
      phoneArray: [
      require('../assets/product-image-front.jpeg'),
      require('../assets/product-image-back.jpeg'),
      require('../assets/product-image.jpeg')
      ],
      currentIndex: 0,
      imagePrincipal: require('../assets/product-image-front.jpeg')
    }
  },
  computed: {
    impagePrincipalComputed: function(){
      return  require(this.imagePrincipal);
    }
  },
 methods: {
    changeImagePrincipal: function(index){
      this.currentIndex = index;
      this.imagePrincipal = this.phoneArray[index];
    },
    toggleModal: function(){
      this.showModal = !this.showModal;
    }
  }
}

</script>
<style>
  .imgWrapper{
    width: 75px;
    justify-content: space-around;
    height: 75px;
  }
  .imgWrapper.selected{
    border: 1px solid red;
  }
</style>