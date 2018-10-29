<template>
 <div class="page">
   <ul class="mui-table-view">
				<li v-for="item in newsList" :key="item.url" class="mui-table-view-cell mui-media">
					<router-link :to="'/home/newsInfo/' + item.uniquekey">
						<img class="mui-media-object mui-pull-left" :src="item.thumbnail_pic_s">
						<div class="mui-media-body">
							<h1>{{ item.title }}</h1>
							<p class='mui-ellipsis'>
                <span>发表时间：{{ item.date }}</span>
                <span>作者：{{ item.author_name }}</span>
              </p>
						</div>
					</router-link>
				</li>
			
			</ul>
 </div>
</template>

<script type="text/ecmascript-6">
import {Toast} from 'mint-ui'
export default {
	data() {
	return {
		newsList: []
	}
	},
	created() {
		this.getNewsList()
	},
 	methods: {
	 	getNewsList() {
		 	this.$http.get("/news?type=top&key=20a5e79cc79b7cb76de478e246659668").then(result => {
				 console.log(result.body)
				 if( result.body.error_code===0 )
				 {
					 this.newsList = result.body.result.data
					 
				 }
				 else {
					 Toast("访问数据失败")
				 }
			})
	 	}
	 }
	}
</script>

<style scoped lang="scss">
  .mui-table-view {
    li {
      h1 {
        font-size: 14px;
      }
      .mui-ellipsis {
        font-size: 13px;
        color: #1e89e1;
        //css3的定位，设置两端对齐
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
