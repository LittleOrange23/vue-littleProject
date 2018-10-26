
import VueRouter from "vue-router"
//导入tabbar路由模块
import homeContainer from "./components/tabbar/homeContainer.vue"
import memberContainer from "./components/tabbar/memberContainer.vue"
import searchContainer from "./components/tabbar/searchContainer.vue"
import shopcarContainer from "./components/tabbar/shopcarContainer.vue"
import newListContainer from "./components/sixgrid/newsList.vue"
import photoShareContainer from "./components/sixgrid/photoShare.vue"
import buyGoodsContainer from "./components/sixgrid/buyGoods.vue"
import feedBackContainer from "./components/sixgrid/feedBack.vue"
import videoModuleContainer from "./components/sixgrid/videoModule.vue"
import connectMeContainer from "./components/sixgrid/connectMe.vue"


//创建路由对象
var router = new VueRouter({
  routes: [
    { path:"/", redirect: "/home" },
    { path: "/home", component: homeContainer },
    { path: "/member", component: memberContainer },
    { path: "/search", component: searchContainer },
    { path: "/shopcar", component: shopcarContainer },
    { path: "/home/newsList", component: newListContainer },
    { path: "/home/photoShare", component: photoShareContainer },
    { path: "/home/buyGoods", component: buyGoodsContainer },
    { path: "/home/feedBack", component: feedBackContainer },
    { path: "/home/videoModule", component: videoModuleContainer },
    { path: "/home/connectMe", component: connectMeContainer},
  ],
  linkActiveClass: "mui-active"//配置路由点击后高亮显示
})


//将路由对象导出
export default router