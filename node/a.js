// console.log("aa");
// var b=require("./b")
// b.play();

var http=require("http");
var queryString=require("querystring");
// http.createServer创建服务，创建的参数是一个函数
//这个函数种有两个参数,req(请求),res（响应），

//客户端发给服务器的称为   请求
//服务器返回给客户端的为   响应

var server = http.createServer(function(req,res){
    // 当客户端发送数据给服务端时，服务端接收数据的时候执行的函数
    req.on("data",function(_data){

    });
    // 当服务端接收数据结束完成后执行的函数
    req.on("end",function(){
        
        if(req.url.indexOf("favicon.ico")>-1)return;
        let str= req.url.split("?")[1];
        let obj=queryString.parse(str);
        console.log(obj);
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        res.write("你好");
        res.end();
    })
});
server.listen(4001,"10.9.42.224",function(){
    console.log("开启服务");
});
