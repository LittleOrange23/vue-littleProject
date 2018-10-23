
import VueRouter from "vue-router"
//导入tabbar路由模块
import homeContainer from "./components/tabbar/homeContainer.vue"
import memberContainer from "./components/tabbar/memberContainer.vue"
import searchContainer from "./components/tabbar/searchContainer.vue"
import shopcarContainer from "./components/tabbar/shopcarContainer.vue"

//创建路由对象
var router = new VueRouter({
  routes: [
    { path: "/home", component: homeContainer },
    { path: "/member", component: memberContainer },
    { path: "/search", component: searchContainer },
    { path: "/shopcar", component: shopcarContainer }
  ],
  linkActiveClass: "mui-active"//配置路由点击后高亮显示
})


//将路由对象导出
export default router