<template>
 <div class="page">
   <div class="goods-list">
     <div class="goods-item">
       <img src="../../images/goods.png" alt="">
       <h1 class="title">小米全网通</h1>
       <div class="info">
         <p class="price">
           <span class="new">￥888</span>
           <span class="old">￥899</span>
         </p>
         <p class="sell">
           <span>热卖中</span>
           <span>剩60件</span>
         </p>
       </div>
     </div>
     <div class="goods-item">
       <img src="../../images/goods.png" alt="">
       <h1 class="title">小米全网通</h1>
       <div class="info">
         <p class="price">
           <span class="new">￥888</span>
           <span class="old">￥899</span>
         </p>
         <p class="sell">
           <span>热卖中</span>
           <span>剩60件</span>
         </p>
       </div>
     </div>
     <div class="goods-item">
       <img src="../../images/goods.png" alt="">
       <h1 class="title">小米全网通</h1>
       <div class="info">
         <p class="price">
           <span class="new">￥888</span>
           <span class="old">￥899</span>
         </p>
         <p class="sell">
           <span>热卖中</span>
           <span>剩60件</span>
         </p>
       </div>
     </div>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {

 }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    .goods-item {
      width: 49%;
      border: 1px solid #ccc;
      box-shadow: 0 0 8px #ccc
      img {
        width: 100%;
      }
      .title {
        font-size: 14px;
      }
    }
    
  }
</style>
