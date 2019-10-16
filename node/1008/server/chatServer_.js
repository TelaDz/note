var http=require("http");
var list=[];
var server=http.createServer(function(req,res){
    var data="";
    req.on("data",function(_data){
        data+=_data;
    });
    req.on("end",function(){
        if(req.url.indexOf("favicon.ico")>-1) return;
        if(req.method==="GET"){ 
            data=req.url.split("?")[1];
        }
        res.writeHead(200,{
            "concent-type":"text/html;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
        });
        try{
            var obj=JSON.parse(decodeURIComponent(data));
            if(obj.type===0x01){
                if(list.length>100)list.shift();
                list.push({user:obj.user,msg:obj.msg});
            }
        }catch(e){
            res.write(encodeURIComponent(JSON.stringify({result:null,error:{msg:"发送错误消息"}})));
            res.end();
            return;
        }
        if(obj.type!==0x01&&obj.type!==0x02){
            res.write(encodeURIComponent(JSON.stringify({result:null,error:{msg:"发送错误消息"}})));
            res.end();
            return;
        }
        var result={
            result:list,
            error:null
        }
        res.write(encodeURIComponent(JSON.stringify(result)));
        res.end();
    });

});

server.listen(4010,"10.9.42.224",function(){
    console.log("服务器启动");
})