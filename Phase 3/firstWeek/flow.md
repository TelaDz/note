# flow

rmvc 结构(前后端分离)

- r router 路由
- m model 数据层
- v view 视图层
- c controller 控制层 (承上启下的关系)

## 框架

前后端分离

用到了 es6 + gulp + zepto.js +webpack

## 框架搭建

这里使用 yarn 和 npm 是一样的 区别不大

- //初始化工程，生成 Package.json
- npm init -y

### 安装依赖 -D

- yarn add gulp --dev
- //启动 server ,打开浏览器
- yarn add gulp-webserver --dev
- //编译 scss 文件
- yarn add node-sass gulp-sass --dev
- //文件合并
- yarn add gulp-concat --dev
- //编译 js 文件
- yarn add webpack-stream -D

### 转译 e6 es7 代码转成 es5

- loader:文件的转译（翻译官）
- yarn add babel-loader @babel/core @babel/preset-env webpack -D
- yarn add @babel/plugin-transform-runtime @babel/runtime -D

---

## 创建 gulpfile 文件

const { series, parallel, src, dest, watch } = require('gulp')

这里用 node 的写法 使用 require 导入模块/插件

const 内是用到的 gulp 功能

### 拷贝 HTML

```js
function copyHtml() {
  //目标文件
  return (
    src("./src/views/*.html")
      //输出目录
      .pipe(dest("./dev/"))
  );
}
```

### 编译 css

```js
function compileCSS() {
  return (
    src("./src/style/*.scss")
      //适用sass插件
      .pipe(sass().on("error", sass.logError))
      //合并css文件
      .pipe(concat("all.css"))
      .pipe(dest("./dev/style/"))
  );
}
```

### 编译 JS

```js
function compileJS() {
  // return src('./src/js/**/*.js')
  //   .pipe(dest('./dev/js/'))
  //前面只是简单的将JS文件合并 但是并不符合要求  需要将ES6或以上转成ES5实现兼容
  return src("./src/js/index.js")
    .pipe(
      webpackStream({
        //模式:开发  还有生产
        mode: "development",
        //在浏览器中可以执行断点操作去调试程序
        devtool: "inline-source-map",
        //入口文件 指向入口文件
        entry: "./src/js/index.js",
        //输出
        output: {
          //目录
          path: path.resolve(__dirname, "./dev/js/"),
          //文件名,
          filename: "all.js"
        },
        module: {
          rules: [
            // the 'transform-runtime' plugin tells Babel to
            // require the runtime instead of inlining it.
            {
              //匹配js文件
              test: /\.js$/,
              //排除文件
              exclude: /(node_modules)/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-env"],
                  plugins: ["@babel/plugin-transform-runtime"]
                }
              }
            },
            //将html 转义成JS可以识别的字符串 塞到函数中执行
            { test: /\.html$/, loader: "string-loader" }
          ]
        }
      })
    )
    .pipe(dest("./dev/js/"));
}
```

//开启服务

//监控文件的变化

### watch

方法内有 2 个参数，第一个参数是监控路径，第 2 个近似于回调(call-back)，要使用(cb)=>方法; cb();

```js
//监控文件的变化，当文件有变化时，同步到dev目录
function watchFile() {
  watch("./src/**/*.js", cb => {
    //监视src文件
    //执行编译JS
    compileJS();
    cb();
  });
  watch("./src/style/*.scss", cb => {
    compileCSS();
    cb();
  });
  watch("./src/views/**/*.html", cb => {
    //由于html从新编译 所有JS也再执行一次编译
    copyHtml();
    compileJS();
    cb();
  });
}
```

### gulp-webserver

```js
function startServer() {
  return src("./dev/").pipe(
    gulpServer({
      //设置端口
      port: 9090,
      //设置域名 如果被占用 可以不写或者127.0.0.1
      host: "0.0.0.0",
      //是否支持热更新
      livereload: true,
      //是否展示文件夹列表
      //directoryListing: true,
      //打开浏览器
      open: true,
      middleware: [
        //注意这里的路径
        proxy("/fetch", {
          //这个地址与json-server端口相同
          //在package内"scripts"项下可以写入"mock": "json-server ./mock/mock.js --routes ./mock/routes.json --port 9099"
          //此后 可以使用npm/cnpm/yarn run mock 直接执行这条语句
          target: "http://localhost:9099/",
          //是否支持跨域
          changeOrigin: true,
          //路径重写
          pathRewrite: {
            "^/fetch": ""
          }
        })
      ]
    })
  );
}
```

### 拷贝第三方库

将第三方库导入 libs 文件中

```js
function copyLibs() {
  return src("./src/libs/*.*").pipe(dest("./dev/libs/"));
}
```

### 服务器运行

```js
exports.default = series(
  parallel(copyHtml, copyImages, copyLibs, compileJS, compileCSS),
  startServer,
  watchFile
);
```

series 顺序执行任务

parallel 并行处理任务

## 布局

## 数据对接

假数据/模拟数据(商量好的数据)

写一个路由 Router.js

### Router 路由

专门写一个类(ES6)用来实现同页面跳转功能

- 导入需要载入的 JS 文件(JS 内部转义 HTML 将 HTML 以字符串形式塞入 JS 参数内输出到 HTML 形成页面)

- 监听`hashchange`事件或`popstate`事件(VUE,REACT的路由同样是这两个监听事件实现的)

- 设置路由跳转

  ```js
  const MODE = 'hash';
  class Router {
    constructor() {
      //设置一个路由参数
      this.routes={
        'position': PositionController,
        'search':SearchController,
        'profile':ProfileController
      }
      this.initEvent();
      PositionController.render();
    }

    loadView(path){
      //使用 path为'position'，'search'，'profile'
        if(this.routes[path]){
          this.routes[path].render();
        }else{
          ErrorController.render();
        }
    }

    go(path){
        if(MODE==='hash'){
          location.hash=path;
        }else {
            //pushState属性
          history.pushState({path},'',path);
          this.loadView(path);
        }
    }

    initEvent(){
        if(MODE==='hash'){
          window.addEventListener('hashchange',()=>{
            let hash=location.hash.replace('#','');
            this.loadView(hash)
            })
        }else {
          window.addEventListener('popstate',()=>{
            this.loadView(history.state.path)
          })
        }
    }
    //实例化后只要导入就不需要在其他使用的地方进行实例化
    export default new Router();
  ```

  ```js
  initEvent() {
  //老方法路由跳转
  window.addEventListener('hashchange', function () {
    console.log(location.hash);
    let hash = location.hash.replace('#', '');
    switch (hash) {
      case 'position':
        PositionController.render();
        break;
      case 'search':
        SearchController.render();
        break;
      case 'profile':
        ProfileController.render();
        break;
      }
    })
  }
  ```

## 执行 gulp
