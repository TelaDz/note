var http=require("http");
var queryString=require("querystring");
var server=http.createServer(function(req,res){
    req.on("data",function(_data){

    });
    req.on("end",function(){
        if(req.url.indexOf("favicon.ico")>-1) return;
        var str=req.url.split("?")[1];
        var obj=queryString.parse(str);
        var sum=Number(obj.a)+Number(obj.b);
        res.writeHead(200,{
            "content-type":"text/html;charset=utf-8",
            // CORS 跨域
            // 解决跨域的方法一,CORS方式在服务端的响应头增加Access-Control-Allow-Origin,设置允许访问的ip或者域名
            "Access-Control-Allow-Origin":"*"
        });
        res.write(String(sum));
        res.end();
    })
});
server.listen(4002,"10.9.42.224",function(){
    console.log("开启服务");
})