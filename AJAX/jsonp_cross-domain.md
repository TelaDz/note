# jsonp跨域

jsonp和JSON无任何关系 

jsonp 

```js
var js=document.createElement("script");
js.src="服务器地址";
document.bdy.appendChild(js);



```

创建script，设置script地址为服务器的地址，通过服务器返回的内容转换为JavaScript的语句执行内容

因此可以通过传递回调函数名让服务器执行该回调函数并且传入参数就可以达到跨域的目的

这种跨域没有使用ajax 

是jsonp的一种跨域方式