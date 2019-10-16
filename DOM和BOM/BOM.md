# BOM 对象

## 什么是 BOM 对象

浏览器对象模型提供了可以与浏览器窗口进行互动的对象结构。

BOM 由多个对象组成，其中代表浏览器窗口的 Window 对象是 BOM 的顶层对象，其他对象都是该对象的子对象。

BOM 提供了一些访问窗口对象的一些方法，我们可以用它来移动窗口位置，改变窗口大小，打开新窗口和关闭窗口，弹出对话框，进行导航以及获取客户的一些信息如：浏览器品牌版本，屏幕分辨率。但 BOM 最强大的功能是它提供了一个访问 HTML 页面的一入口——document 对象，以使得我们可以通过这个入口来使用 DOM 的强大功能！！！

## 区别

### BOM

1. BOM 是 **Browser Object Model** 的缩写，即 **浏览器 对象 模型**。

2. BOM 没有相关标准。不同浏览器定义有差别,实现方式不同。

3. BOM 的最顶层对象是 window。

4. BOM 是 window 的根节点

### DOM

1. DOM 是 Document Object Model 的缩写，即文档对象模型。

2. DOM 是 W3C 的标准。

3. DOM 最根本对象是 document（实际上是 window.document）。

4. DOM 的最根本的对象是 BOM 的 window 对象的子对象。

总结：BOM 是浏览器对象模型，DOM 是文档对象模型，前者是对浏览器本身进行操作，而后者是对浏览器（可看成容器）内的内容进行操作

## window 对象

> window 作为 BOM 中的顶级对象。window 对象是 BOM 的顶层(核心)对象，所有对象都是通过它延伸出来的，也可以称为 window 的子对象。由于 window 是顶层对象，因此调用它的子对象时可以不显示的指明 window 对象，例如下面两行代码是一样的： </br>
> document.write("BOM"); </br>
> window.document.write("BOM");</br>
> window 对象表示整个浏览器窗口。</br>
> JavaScript 中的任何一个全局函数或变量都是 window 的成员。全局变量是 window 对象的属性。全局函数是 window 对象的方法。例如：alert，定时器都是 window 对象的方法。

- open() window.open("要打开的网页", "网页名字", "height=400,width=400,top=10, left=10"); 容易被拦截

- close() 关闭

- ***innerHeight 浏览器窗口的内部高度(兼容所有浏览器)—包含滚动条***

- ***innerWidth 浏览器窗口的内部宽度(兼容所有浏览器)***

- outerWidth 可以获取浏览器窗口的整个宽

- outerHeight 可以获取浏览器窗口的整个高

- screenLeft 与 screenX 值一样 到屏幕左上角位置

- screenTop 与 screenY 值一样

- screenX

- screenY

### 跳转锚点标记

```js
//<p id="a">a</p>
//<a name="c">c</a>
//<a href="#a"></a>
//刷新当前页面的同时改变了地址
//name 也可以作为锚点标记
//<button></button>
//当前页面的锚点不会跳转页面，不会重新执行当前页面的script
//路由
//历史记录回记录当前页面中操作过的内容，包括文本框中的内容（除了密码）都会保留下来

var bn = document.getElementsByName("button")[0];
bn.addEventListener("click", clickHandler);
function clickHandler(e) {
  console.log(history.length); //历史记录数
}
```

## location 对象

window.location 本地

location 对象

1. reload() 重新加载当前页面

    - F5 调用缓存

    - reload 请求服务时，没有在 http 标签头部消息中有缓冲标记，意味着不会调用缓冲数据

2. href 有历史记录

   - `location.href = "https://www.baidu.com/";`

3. assign 有历史记录

   - `location.assign(“https://www.baidu.com/“)`

4. replace 无历史记录，不能回退

   - `location.replace("https://www.baidu.com/");`

5. **_hash 获取浏览器地址栏(url)中#后面的内容，路由跳转，超链接的锚点标记,如果没有，则返回空字符串_**

6. **_search 浏览器地址栏中的?后面的内容，表单的 GET 数据提交或者页面的传参_**

7. hostname 域 IP 地址不带端口号 返回 web 主机的域名

8. port 返回 web 主机的端口 （80 或 443）

9. pathname 返回当前页面的路径和文件名

10. protocol 返回所使用的 web 协议（`http://` 或 `https://`）

## history 对象

历史记录会记录当前页面中操作过的内容,包括文本框中的内容(除了密码)都会保留下来

1. back 向后退一页
2. forward 向前进一页
3. go

   - 空 0 刷新页面 history.go(0);// 刷新页面,会重新执行 script 标签内容
   - 参数为-1：后退一页 //back
   - 参数为 1：前进一页 //forward
   - 参数为 2：前进两页

4. length 属性返回历史列表中的网址数

   - console.log(history.length);//历史记录数

## screen 对象

屏幕信息

availHeight 屏幕的高度像素减去系统部件高度之后的值 </br>
availWidth 屏幕的宽度像素减去系统部件宽度后的值</br>
height 屏幕的高度像素</br>
width 屏幕的宽度像素</br>

console.log(screen.availWidth,screen.availHeight);//屏幕不含任务栏的高度</br>
console.log(screen.width,screen.height);//带屏幕下方任务栏高度

## navigator 对象

导航信息

userAgent 返回由客户机发送服务器的 user-agent 头部的值

> userAgent 属性是一个只读的字符串，声明了浏览器用于 HTTP 请求的用户代理头的值，语法：navigator.userAgent</br>
> userAgent 属性是一个只读的字符串，声明了浏览器用于 HTTP 请求的用户代理头的值。</br>
> 一般来讲，它是在 navigator.appCodeName 的值之后加上斜线和 navigator.appVersion 的值构成的。</br>
> 例如：Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; SV1; .NET CLR 1.1.4322)。</br>
> 注：用户代理头：user-agent header。

navigator.userAgent.indexOf("Chrome")

appName 返回浏览器的名称。

appVersion 返回浏览器的平台和版本信息。

platform 返回运行浏览器的操作系统平台。

- console.log(navigator.platform);//运行平台,判断手机的系统

```js
//获取浏览器版本号
if(navigator.userAgent.indexOf("Chrome")>-1){
    var arr=navigator.userAgent.split(" ");
    var v=arr[arr.length-1].split("/")[1];
    console.log("Safari "+v);
if(navigator.platform==="Win32"){
    var v=arr[arr.length-2].split("/")[1];
    console.log("Chrome "+v);
}
}
```
