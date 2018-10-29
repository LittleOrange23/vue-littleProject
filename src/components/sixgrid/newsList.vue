<template>
 <div class="page">
   <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://avatars1.githubusercontent.com/u/43208783?s=40&v=4">
						<div class="mui-media-body">
							<h1>点进去你就输了</h1>
							<p class='mui-ellipsis'>
                <span>发表时间：2018-10-26 13:17:36</span>
                <span>点击：10000次</span>
              </p>
						</div>
					</a>
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
