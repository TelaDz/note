# flow

## 框架

前后端分离

用到了es6 + gulp + zepto.js +webpack

## 框架搭建

这里使用yarn和npm 是一样的 区别不大

- //初始化工程，生成Package.json
- npm init -y

### 安装依赖 -D

- yarn add gulp --dev
- //启动server ,打开浏览器
- yarn add gulp-webserver --dev
- //编译scss文件
- yarn add node-sass gulp-sass --dev
- //文件合并
- yarn add gulp-concat --dev
- //编译js文件
- yarn add webpack-stream -D

### 转译e6 es7 代码转成es5

- loader:文件的转译（翻译官）
- yarn add babel-loader @babel/core @babel/preset-env webpack -D
- yarn add @babel/plugin-transform-runtime @babel/runtime -D

## 创建gulpfile文件

const { series, parallel, src, dest, watch } = require('gulp')

用到的gulp功能

//编译css

//编译JS

//开启服务

//监控文件的变化

watch方法内有2个参数，第一个参数是监控路径，第2个近似于回调(call-back)，要使用(cb)=>方法; cb();

//将服务运行

exports.default = series(parallel(copyHtml, compileJS, compileCSS), startServer, watchFile);

series 顺序执行任务方法

parallel 方法内是并行处理任务

## 执行gulp
