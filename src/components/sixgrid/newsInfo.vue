<template>
 <div class="newsInfo-container">
   <h3 class="title">新闻标题---{{ uniquekey }}</h3>
   <p class="subtitle">
     <span>发表时间：</span>
     <span>点击：0次</span>
   </p>

  <hr>
   <div class="content">

   </div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
   uniquekey: this.$route.params.uniquekey
 }
 },
 components: {

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
