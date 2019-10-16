# 样式和属性

## 样式

设置 Dom 对象的样式

dom.style.styleName=""

获取计算后的 dom 样式

ie

- currentStyle

  - ie 所支持的获取非行间样式的方法

  - 用法：对象.currentStyle.样式名

  - 例：oDiv.currentStyle.width

非 ie

- getComputedStyle

  - 非 ie 所支持的获取非行间样式的方法

  - 用法：getComputedStyle(对象，伪类).样式名

  - 例：getComputedStyle(oDiv,null).color

```js
var div = document.createElement("div");
document.body.appendChild(div);
var span = document.createElement("span");
document.body.appendChild(span);
div.style = "width: 100px;height: 100px;background-color: blue;"; //直接设置行内样式完成

//(div.style)可以设置为字符串,也可以当成对象使用
//div.style就是行内样式,css样式行内样式获取不到
div.style.width = "100px";
div.style.height = "100px";
div.style.backgroundColor = "red";

var div1 = div.cloneNode(false);
document.body.appendChild(div1);

console.log(div.style.width);
console.log("aaa");
console.log(getComputedStyle(div));

//获取计算后样式,主要用来获取css设置的样式
//IE不支持
var divStyle = getComputedStyle(div);
var spanStyel = getComputedStyle(span);
console.log(divStyle.width);
console.log(spanStyel.fontSize);

//IE支持
console.log(div.currentStyle.width);
```

try 方法测是否为 IE

```js
var divStyle;
try {
  divStyle = getComputedStyle(div);
} catch (error) {
  divStyle = div.currentStyle;
}
console.log(divStyle.width);
```

---

```js
div.style.width = "100px";
div.style.height = "100px";
div.style.backgroundColor = "red";

//ES5
var obj = {
  width: "100px",
  height: "100px",
  backgroundColor: "red"
};
for (var prop in obj) {
  div.style[prop] = obj[prop];
}

//ES6
Object.assign(div.style, {
  width: "100px",
  height: "100px",
  backgroundColor: "red"
});
if (Object.assign) {
  Object.assign(div.style, obj);
} else {
  for (var prop in obj) {
    div.style[prop] = obj[prop];
  }
}
```

---

## 常见属性

### 客户区大小

clientWidth,offsetWidth,scrollWidth

```js
//1\创建并且设置了宽高,2\放在文档中
var div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.backgroundColor = "red";
document.body.appendChild(div);
console.log(div.clientWidth);

var div = document.querySelector("div");
console.log(div.clientWidth); //width+padding-滚动条宽度
console.log(div.offsetWidth); //width+padding+border;
console.log(div.scrollWidth); //内容宽度+padding
```

---

### 元素占有可见空间

document.body body:1280\*0

document.documentElement html:1280\*0

```js
console.log(document.body.clientWidth); //页面宽度-2*8(margin)-滚动条宽度(17)
//1264(未显示滚动条) 1253

console.log(document.documentElement.clientWidth); //页面宽度-滚动条宽度(17)
//1280

console.log(document.body.clientHeight); //body需要内容撑开,0 内容高度
//0

console.log(document.documentElement.clientHeight); //文档显示高度
//624  页面展开

console.log(document.body.offsetWidth); ///页面宽度-2*8(margin)
//1264

console.log(document.documentElement.offsetWidth); //页面宽度-滚动条宽度(17)
//1280(未显示滚动条)

console.log(document.body.offsetHeight); //body需要内容撑开,0 内容高度
//21

console.log(document.documentElement.offsetHeight); //内容撑开的高度,并且多了两个body的margin(8*2);
//37

console.log(document.body.scrollWidth); //页面中body被撑开的宽度
//1264

console.log(document.documentElement.scrollWidth); //html被撑开的宽度(body宽度+8*2); ////1280

console.log(document.body.scrollHeight); //body需要内容撑开,0 内容高度
//0

console.log(document.documentElement.scrollHeight); ////内容撑开的高度,并且多了两个body的margin(8*2); 624
```

---

### 元素到边界的偏移

#### 坐标点就是左上顶点

clientLeft clientTop </br>
offsetLeft offsetTop </br>
scrollLeft scrollTop </br>

- **clientLeft-->左边线粗细**</br>
- **clientTop--->顶边线粗细**</br>

var div=document.querySelector("div");

console.log(div.clientLeft,div.clientTop);//从 padding 以外到坐标点位置的距离(边线粗细)

var div=document.querySelector("div");

console.log(div.offsetLeft,div.offsetTop);

如果没有使用定位,并且其向上所有父元素都没有定位的时候,offsetLeft 是距离 html 左距离 offsetTop 是距离 html 顶部的距离

var div=document.querySelector(".div1");

console.log(div.offsetLeft,div.offsetTop);

如果该元素使用了定位,offsetLeft 和 offsetTop 就是该元素的定位后 left 和 top 值

定位 有 left,top 样式,offsetLeft--->left,offsetTop---->top

如果没有设置 left 和 top 值,父元素设置了定位

offsetLeft--->当前元素左边线到父元素的左边线位置</br>
offsetTop--->当前元素顶边线到父元素的顶边线位置</br>

如果没有设置 left 和 top 值,父元素没有定位

向上查找父父元素及以上是否有定位,直到 html 标签为止

- **offsetLeft-->当前元素到该定位的父元素的左边线位置**</br>
- **offsetTop-->当前元素到该定位的父元素的顶边线位置**</br>

一般 html 和 body 不使用 clientLeft 和 clientTop,因为没有边线

console.log(document.body.clientLeft,document.body.clientTop);

左顶边线度 0,0

console.log(document.documentElement.clientLeftdocument.documentElement.clientTop)

左顶边线宽度 0,0

因为 html 和 body 都没有定位,因此 offsetLeft 和 offsetTop 均是 0,也不做使用

console.log(document.body.offsetLeft,document.body.offsetTop)

console.log(document.documentElement.offsetLeftdocument.documentElement.offsetTop)

**_scrollLeft,scrollTop_**

```js
var div = document.querySelector(".div2");

div.addEventListener("scroll", scrollHandler);
function scrollHandler(e) {
  console.log(div.scrollLeft, div.scrollTop);
}
```

如果直接在这里设置时,div 的样式 css 树还没有渲染到渲染树中,

当整个页面全部渲染完成后设置才有作用;

- **直接给值,不需要带单位**

```js
div.scrollTop = 100;
document.addEventListener("click", clickHandler);
function clickHandler(e) {
  div.scrollTop = 100;
  div.scrollLeft = 100;
}
window.addEventListener("scroll", scrollHandler);
window.onscroll = scrollHandler;
function scrollHandler(e) {
  //兼容问题 低版本浏览器中获取和设置scrollLeft和scrollTop使用body获取
  //高版本浏览器中是html获取
  console.log(
    document.documentElement.scrollLeftdocument.documentElement.scrollTop
  );
  console.log(document.body.scrollLeft, document.body.scrollTop);
}
document.addEventListener("click", clickHandler);
function clickHandler(e) {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}
```
