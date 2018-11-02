<template>
 <div class="comments">
  <h3>发表评论</h3>
  <hr>
  <textarea class="texts" placeholder="评论不超过120字" cols="30" rows="10"></textarea>
  <mt-button type="primary" size="large">评论</mt-button>
  <div class="com-main">
    <div class="com-list" v-for="item in comments" :key="item.id">
      <div class="com-title">
        第{{ item.id }}楼：&nbsp;&nbsp;&nbsp;用户：{{ item.name }}&nbsp;&nbsp;发表时间：2018-11-02 21:02:02
      </div>
      <div class="com-body">
        {{ item.body }}
      </div>
    </div>
  <mt-button type="danger" size="large" plain>更多</mt-button>
  </div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
  return {
    comments:[]
  }
 },
 created() {
   this.getComments()
 },
 methods: {
   getComments() {
     this.$http.get("/mycomments/comments").then(result => {
      //  console.log(result.body)
       this.comments = result.body
     });
   }
 },
 components: {

 },
 props: ["id"]
}
</script>

<style scoped lang="scss">
  .comments {
    h3 {
      font-size: 18px;
    }
    textarea {
      font-size: 14px;
      height: 85px;
      margin: 0;
    }
    .com-list {
      margin: 10 0;
      font-size: 13px;
      .com-title {
        background: #ccc;
        line-height: 30px;
      }
      .com-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
    
  }
</style>
