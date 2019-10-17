# jQuery 中的 ajax 通信

## 最高层

### 获取加载 json 文件

// \$.getJSON("./config/a.json",function(res,success,xhr){
// console.log(res,success,xhr);
// })

### 获取加载script脚本

// $.getScript("./js/a.js",function(res){
//     // console.log(res);
//     utils.b();
// }

### jsonp通信

// $.getScript("`http://10.9.42.207:4002?fn=callBack`")
// function callBack(a,b){
//     console.log(a+b);
// }

## 中间层通信

1. $("div").load();
2. $.get();
3. $.post();

### GET

#### 直接写在地址栏后

```js
$.get("`http://10.9.42.207:4002?a=3&b=4`",function(res){
    console.log(res);
})
```

#### 分开写在第二个参数

```js
$.get("`http://10.9.42.207:4002`","a=3&b=4",function(res){
    console.log(res);
});
```

#### 第二个参数直接写对象

```js
$.get("`http://10.9.42.207:4002`",{a:3,b:4},function(res){
    console.log(res);
})
```

#### 封装GET通信

```js
$.extend((function(){
    return {
        gets:function(url,prom,fn){
            var bool=prom.constructor===Function;
            if(bool) fn=prom;
            let xhr=new XMLHttpRequest();
            xhr.onreadystatechange=function(){
                if(xhr.readyState===4 &&xhr.status===200){
                        fn(xhr.response,"success",xhr;
                }
            }
            if(!bool){
                if(prom.constructor===String) url+="?"+prom;;
                else{
                    url+="?";
                    for(var prop in prom){
                        url+=prop+"="+prom[prop]+"&";
                    }
                    url=url.slice(0,-1);
                }
            }
            xhr.open("GET",url);
            xhr.send();
        }
    }
})()); // ()意思是执行函数

//使用
// $.gets("http://10.9.42.207:4002?a=3&b=4",function(res){
//     console.log(res);
// });
// $.gets("http://10.9.42.207:4002","a=3&b=4",function(res){
//     console.log(res);
// });
// $.get("http://10.9.42.207:4002",{a:3,b:4},function(res){
//     console.log(res);
// })
```

---

### POST

#### 与GET基本相似

```js
$.post("http://10.9.42.207:4002",{a:3,b:4},function(res){
    console.log(res);
})

$.post("http://10.9.42.207:4002","a=3&b=4",function(res){
    console.log(res);
});
```

### LOAD

```js
$(document).load("`http://10.9.42.207:4002`","a=3&b=4",function(res{
console.log(res);
})

POST
$(document).load("`http://10.9.42.207:4002`",{a:3,b:4}function(res){
    console.log(res);
})

$(document).load("./config/a.json",function(res){
    console.log(res);
});
$(document).load("./js/a.js",function(res){
    // var script=document.createElement("scirpt");
    // script.innerHTML=res;
    // document.body.appendChild(script);
    utils.b();
})

//转换进来的是一个文本或者html文本
$(".con").load("./2、动画.html");
```

---

### AJAX

```js
$.ajax({
     url:"http://10.9.42.207:4002",
     method:"POST",
     data:{a:1,b:2},
     success:function(res){
         console.log(res);
     }
 })
```

---

### jsonp 通讯

```js
 $.ajax({
     url:"http://10.9.42.207:4002?fn=callBack",
     dataType:"jsonp",
 })
 function callBack(a,b){
     console.log(a+b);
 }
```
