<template>
 <div class="page">
   <!-- 轮播图 -->
  <mt-swipe :auto="4000">
    <!-- 向页面渲染数据，测试一下，这里没图片，所以先注释掉 -->
    <!-- <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
      <img :src="item.username" alt="">
    </mt-swipe-item> -->
    <mt-swipe-item>2</mt-swipe-item>
    <mt-swipe-item>3</mt-swipe-item>
  </mt-swipe>
  <!-- 九宫格变六宫格 -->
  <ul class="mui-table-view mui-grid-view mui-grid-9">
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
      <img src="../../images/news.png" alt="" srcset="">
      <div class="mui-media-body">新闻资讯</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoShare">
      <img src="../../images/picShare.png" alt="" srcset="">
      <div class="mui-media-body">图片分享</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/buyGoods">
      <img src="../../images/goodShow.png" alt="" srcset="">
      <div class="mui-media-body">商品购买</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/feedBack">
      <img src="../../images/feedback.png" alt="" srcset="">
      <div class="mui-media-body">留言反馈</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/videoModule">
      <img src="../../images/search.png" alt="" srcset="">
      <div class="mui-media-body">视频专区</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/connectMe">
      <img src="../../images/callme.png" alt="" srcset="">
      <div class="mui-media-body">联系我们</div></router-link></li>
  </ul>
 </div>
</template>

<script type="text/ecmascript-6">
import {Toast} from "mint-ui"
export default {
 data() {
 return {
   lunbotuList: [] //保存轮播图的数组
 }
 },
 created() {
   //this.getLunbotu()
 },
 methods: {
    //getLunbotu() {
      //获取后端接口，这个接口是个测试链接，没有图片
      //this.$http.get("/users").then(result => {
      // console.log(result.body)
      // console.log(result.body[0].name)
     // this.lunbotuList = result.body
      //  Toast("获取成功")
    // })
  // }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
  .mint-swipe {
    height: 200px;
    .mint-swipe-item:nth-child(1) {
      background-color: antiquewhite;
    }
    .mint-swipe-item:nth-child(2) {
      background-color: pink;
    }
    .mint-swipe-item:nth-child(3) {
      background-color: lightgreen;
    }
  }
  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: 0;
    img {
      width: 60px;
      height: 60px;
    }
    .mui-media-body {
      font-size: 13px;
    }
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0;
  }
</style>
