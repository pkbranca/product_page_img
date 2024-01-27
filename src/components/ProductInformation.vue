<template>
  <div class="information_content">
    <p class="product_brand">SAMSUNG</p>
    <h1 class="product_name">Samsung Galaxy S23 Plus 5G</h1>
    <p class="product_price">£ 880.00</p>
    <hr class="space">
    <p><b>Sim:</b> Dual SIM</p>
    <p><b>Condition:</b> LIKE NEW</p>
    <p><b>Colour:</b> LAVENDER</p>
    <p><b>Network:</b> UNLOCKED</p>
    <p><b>Storage:</b> 512GB</p>
    <hr>
    <button class="button__yellow">Add to Basket</button>
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>
<style>
.button__yellow{
  width: 100%;
  background-color: #ffd504;
  color: black;
  font-weight: bold;
  font-size: 23px;
  padding: 10px 0;
  margin-top: 20px;
}
.information_content{
  text-align: left;
  padding-left: 50px;
  width: 100%;
}
.information_content p{
  margin: 20px 0;
}
.product_name{
  font-size: 25px;
  font-weight: bold;
}
.product_price{
  font-size: 22px;
  font-weight: bold;
}
.space {
  height: 5px;
  background-color: #e7e7e7;
}
  .product_brand{
    color: gray;
  }
</style>