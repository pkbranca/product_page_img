import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return{
      productImgList:[
        require('../assets/product-image-front.jpeg'),
        require('../assets/product-image-back.jpeg'),
        require('../assets/product-image.jpeg')
      ],
      currentIndex: 0,
      imagePrincipal: require('../assets/product-image-front.jpeg')
    }
  },
  getters: {
    currentIndex(state){
      return state.currentIndex;
    },
    getImagePrincipal(state){
      return state.imagePrincipal;
    }
  },
  mutations: {
    changeCurrentIndex(state,index){
      state.currentIndex = index;
      state.imagePrincipal = state.productImgList[index];
    }
  },
  actions: {
    // changeImagePrincipal(context,index){
    //   context.commit('changeCurrentIndex', index);
    // }
  },
  modules: {
  }
})
