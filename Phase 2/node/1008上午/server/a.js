// 前面学习的除了DOM\BOM和事件以外的所有JS都可以使用
// var arr=[1,2,3,4,5];
// var sum=arr.reduce(function(value,item){
//     return value+item;
// });
// console.log("aaa");
// var http=require("http");
//类似于 import b from "./b.js";   CommanJS模块化
// var b=require("./b");
// b.play();
var http=require("http");
// var mysql=require("mysql");
var queryString=require("querystring");
// http.createServer创建服务,创建的参数是一个函数
// 这个函数中有两个参数,req(请求,客户端发给服务器的),res(响应,服务器返回给客户端的),
var server=http.createServer(function(req,res){
    // 当客户的发送数据给服务端时,服务端接收数据的时执行的函数
    req.on("data",function(_data){

    });
    // 当服务端接收请求数据结束完成后,执行的函数
    req.on("end",function(){
        if(req.url.indexOf("favicon.ico")>-1) return;
        var str=req.url.split("?")[1];
        var obj=queryString.parse(str);
        console.log(obj);
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        res.write("你好");
        res.end();
    })
});
// 给服务器创建侦听,端口号和ip地址
server.listen(4001,"10.9.42.207",function(){
    console.log("开启服务");
})