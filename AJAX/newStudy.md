# AJAX

2005年Jesse James Garrett发表了一篇文章，标题为：“**Ajax：A new Approach to Web Applications**”。他在这篇文章里介绍了一种技术，用他的话说，就叫：Ajax，是Asynchronous JavaScript + XML的简写。这种技术能够**向服务器请求额外的数据而无须卸载页面**(即刷新)，会带来更好的用户体验。一时间，席卷全球。
缺点不能做SEO优化(搜索)

4步

1 创建

>var ajax=new XMLHttpRequest(); </br>
>当服务器返回数据后完成后,执行函数

- 兼容写法

>IE 7以下 var request=new ActiveXObject("Microsoft.XMLHTTP");

try{
    var ajax=new XMLHttpRequest();
}catch(e){
    var ajax=new ActiveXObject("Microsoft.XMLHTTP");
}

2 打开

- GET方法

>var str="要传的内容";</br>
>ajax.open("GET","`http://10.9.42.207:4002`"+"?"+str);

- POST方法

>ajax.open("POST","`http://10.9.42.207:4002`");

3 侦听事件

>ajax.addEventListener("load",loadHandler);

4 发送

- GET方法

>var str="要传的内容";</br>
>ajax.open("GET","`http://10.9.42.207:4002`"+"?"+str);</br>
>ajax.send();

- POST方法

>ajax.open("POST","`http://10.9.42.207:4002`");</br>
>ajax.send(str);</br>
>//POST方法中要发送的数据需要写在send里面发送到服务端</br>

method

GET POST PUT DELETE (一部分)

GET

- 通过地址栏传参(一般地址栏携带发送，并非提交参数)，目的是获取服务端数据，应为地址栏携带数据较小所有只能适用于小数据或公开数据的发送提交
- 只能提交字符串

POST

- 主动发送数据给服务器端，等待服务端返回数据
- 可发送的数据类型丰富，适用于大量数据的发送

PUT 添加数据

DELETE 删除数据

HTTP和HTTPS以及FTP都可以使用GET方式    POST？

File加载本地文件目录的内容

执行ajax 必须当前网页以服务打开

使用File协议 只能访问当前域所在文件夹下的文件

如果使用File协议，就是加载当前域所有对应文件夹下的莫i个文件，并且获取文件的内容

(服务端打开方式的目录即为根目录)

xhr.open("GET","./文件夹名/文件名.后缀")

可以获取文本，图片(二进制流数据【可以压缩、上传】)

---

## open()

第3个参数 true 和 false

默认true 异步操作

如果加入了.false 就是设置了同步操作 且同步时不使用事件侦听

请求头必须写在open之后，send之前

xhr.setRequsetHeader()设置请求头

php中必须写这句话

- xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")

xhr.getAllResponseHeaders(); 获取所有头部属性

xhr.getResponseHeader(); 获取头部指定的属性值

cookie最重要的请求头之一

跨域访问不能获取cookie

---

## send()

可发送的内容

发送请求. 如果该请求是异步模式(默认),该方法会立刻返回. 相反,如果请求是同步模式,则直到请求的响应完全接受以后,该方法才会返回.
注意: 所有相关的事件绑定必须在调用send()方法之前进行.

void send();
void send(ArrayBuffer data);类型化数组

- let arr = new Int32Array([数据])如果发送的是类型化数组

void send(Blob data);二进制大对象，是一个可以存储二进制文件的容器。
void send(Document data); 文档对象
void send(DOMString? data); 文本数据
void send(FormData data); 数据对象，可以直接封装内容

FormData数据能提交非常多的东西

可以set FormData

当超时的时候

function timeHandler(e){
xhr.abort();断开连接
如果需要做超时请求 需要三次
}

e.total 总计数据大小
e.loaded 当前加载数据大小
获取加载进度
