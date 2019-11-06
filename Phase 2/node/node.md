# nood.js

node js 的服务端语言不能在前端中使用

除了 bom/dom 和事件以外的所有 JS 都可以使用

暂时不用 let 先用 var

require 加载

```js
var b=require("./b") 类似于import b from "./b.js"； //CommanJS模块化
//字符串内不用谢后缀.js

//其中 b.js内容
module.exports=(function(){
    return {
        a:1,
        play:function(){
            console.log(this.a);
        }
    }
})();


```

port？：number 端口号

```js
var http = require("http");

// http.createServer创建服务，创建的参数是一个函数
//这个函数种有两个参数,req(请求),res（响应），

//客户端发给服务器的称为   请求
//服务器返回给客户端的为   响应

var server = http.createServer(function(req, res) {
  // 当客户端发送数据给服务端时，服务端接收数据的时候执行的函数
  req.on("data", function(_data) {});
  // 当服务端接收数据结束完成后执行的函数
  req.on("end", function() {
    res.writeHead(200);
    res.write("n你好");
    res.end();
  });
});
server.listen(4001, "10.9.42.224", function() {
  console.log("ads");
});
```

parse 转换成对象 目前在 JSON.parse 与 queryString.parse 中遇到

跨域问题

CORS 需要在响应头加 Access-...

response 响应反应回答
