//导入vue
import Vue from "vue"
import app from "./app.vue"

//1.1导入路由
import VueRouter from "vue-router"
//1.2安装路由
Vue.use(VueRouter)
//1.3导入自己的router.js模块
import router from "./router.js"

//导入MUI样式
import "../lib/mui/css/mui.min.css"
import "../lib/mui/css/icons-extra.css"

//按需导入mint-ui header 组件
import { Header } from "mint-ui"
Vue.component(Header.name, Header)

//Vue.use(Mint)
var vm = new Vue({
  el: '#app',
  data: {},
  methods: {},
  render: c=> c(app),    //将app组件渲染到index.html 中
  router   //1.4挂载路由对象到vm实例上
})