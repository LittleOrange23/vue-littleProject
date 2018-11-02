<template>
 <div class="newsInfo-container">
   <h3 class="title">新闻标题---{{ uniquekey }}</h3>
   <p class="subtitle">
     <span>发表时间：</span>
     <span>点击：0次</span>
   </p>

  <hr>
  <!-- 内容区域 -->
   <div class="content">
     <!-- 评论子组件区域 -->

     <comment-box :id="this.uniquekey"></comment-box>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
import comment from "../subcomponents/comment.vue"

export default {
 data() {
 return {
   uniquekey: this.$route.params.uniquekey
 }
 },
 components: {
   'commentBox' : comment
 }
}
</script>

<style scoped lang="scss">
  .newsInfo-container{
    .title {
      font-size: 16px;
      color: red;
      text-align: center;
    }
    .subtitle {
      color: #1e89e1;
      display: flex;
      justify-content: space-between
    }
  }
</style>
