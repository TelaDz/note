# DOM 属性

## Dom 常用属性

document.body：body元素
document.title：获取、设置文档的标题
document.URL：获得完整的URL
document.domain：获取域名

## 获取节点上的属性

getAttribute(属性)：

部分标签属性和对象属性相同
id </br>
title </br>
src </br>
href </br>
width 和 height(img) </br>
className(class)... </br>
type </br>
value </br>
checked 和 selected </br>
(对象属性中是 true 和 false,标签属性中是有该属性或者没有该属性)...

## 给节点创建一个新属性

setAttribute(属性,值)：

自定义标签属性名:单词全部小写,单词与单词之间使用-连接.不能使用驼峰式命名

```js
// 添加自定义的标签属性 标签属性名和标签属性值都必须是字符串
div.setAttribute("name", "abcde");
div.setAttribute("toggle-class", "div0 div1");

div.setAttribute("name", "divs");
div.setAttribute("id", "divs");
div.setAttribute("class", "divs");
```

```js
// 获取标签属性值
console.log(div.getAttribute("toggle-class"));
```

```js
//cheked对象属性优先级高于checked的标签属性
var ck = document.querySelector("[type=checkbox]");
ck.checked = true;
ck.setAttribute("checked", "checked");
ck.checked = false;
ck.removeAttribute("checked");
```

## 删除一个节点上的属性

removeAttribute(name)
