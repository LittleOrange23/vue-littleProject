<template>
  <div class="vue-containt">
    <!-- 头部 header  区域 -->
    <mt-header fixed title="小豆芽的秘密花园"></mt-header>

    <!-- 中间 router-view 区域 -->
		<transition>
			<router-view></router-view>
		</transition>
		

    <!-- 底部 tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-xyz" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-xyz" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-xyz" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-xyz" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    
  </div>
</template>
<script>
  
</script>
<style lang="scss" scoped>
  .vue-containt {
    padding-top: 40px;
		padding-bottom: 50px;
		overflow-x: hidden;//隐藏转换页面时出现x轴出现的滚动条
	}
	.v-enter {
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to {
		opacity: 0;
		transform: translateX(-100%);
		position: absolute; //解决转换页面时出现中间内容部分向下的问题
	}
	.v-enter-active,
	.v-leave-active {
		transition: all 0.4s ease; 
	}
	//复制底部tab的样式，修改成自己的名称，解决底部tabbar无法点击问题
	.mui-bar-tab .mui-tab-item-xyz.mui-active {
    color: #007aff;
}
	.mui-bar-tab .mui-tab-item-xyz {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
	}
	.mui-bar-tab .mui-tab-item-xyz .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

