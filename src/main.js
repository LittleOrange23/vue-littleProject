//导入vue
import Vue from "vue"

import app from "./app.vue"
import "../lib/mui/css/mui.min.css"
//按需导入mint-ui header 组件
import { Header } from "mint-ui"
Vue.component(Header.name, Header)

//Vue.use(Mint)
var vm = new Vue({
  el: '#app',
  data: {},
  methods: {},
  render: c=> c(app)    //将app组件渲染到index.html 中
})