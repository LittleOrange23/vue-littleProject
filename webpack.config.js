const path = require('path')
const htmlWebpackplugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: path.join(__dirname, './src/main.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [//配置插件结点
    new htmlWebpackplugin({//创建一个在内存中生成HTML的插件
      template: path.join(__dirname, './src/index.html'),//指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
      filename: 'index.html' //指定生成的页面名称
    }),
    new VueLoaderPlugin()
  ],
  module: {//这个结点用于配置所有第三方加载器
    rules: [//所有第三方模块的匹配规则
      {test: /\.css$/, use: ['style-loader', 'css-loader']},//配置处理.css文件的loader规则
      {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},//配置处理.less文件的loader规则
      {test: /\.(jpg|png|gif|bmp|jpeg)$/, use:'url-loader?limit=3020&name=[hash:8]-[name].[ext]'},//配置图片路径的规则，
      //limit给定的值是图片大小，单位是字节，如果引用的图片大于或等于给定的limit值，则不会转为base64格式的字符串
      //反之则会被转为base64格式
      {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
      {test: /\.(eot|svg|ttf|woff|woff2)$/, use:'url-loader'},//处理字体文件的loader
      {test:/\.js$/, use:'babel-loader', exclude:/node_modules/},//配置babel来转换更高级的es语法
      {test:/\.vue$/, use: 'vue-loader'}
    ]
  },
  resolve: {
    // alias: {
    //   "vue$": "vue/dist/vue.js"
    // }
  },
  devServer: {

    contentBase: __dirname + "/",

    port: 3000,

    proxy: {
        //需要代理的路径,需要代理的域名必须配置为true，才能正确代理
      "/users": { target: "http://jsonplaceholder.typicode.com", changeOrigin:true},
      "/news": {
        target: "http://v.juhe.cn/toutiao/index?type=top&key=20a5e79cc79b7cb76de478e246659668", changeOrigin: true }


      }

    },
  mode: 'none'
}