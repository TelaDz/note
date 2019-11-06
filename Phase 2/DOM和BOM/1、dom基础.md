# DOM

console.log(document);//document 是 DOM 的根节点</br>
document.documentElement;//HTML 标签</br>
document.head;//head 标签</br>
document.body;//body 标签</br>
document.title;//title 标签</br>
document.domain;//域名</br>

## 生成 DOM 树

- 从根节点开始，按照标签的顺序逐个生成

- 生成 CSS 树

- 外链 css,style 中的 css,行内样式统一生成一个 CSS 树

- 合并生成页面的渲染树

- 如果需要获取已经完成渲染后的 DOM 样式时,首先需要将渲染的树拆分为 DOM 和 CSS 树两部分

- 然后在从 CSS 中获取计算后的样式

- 连续同时获取 css 计算后样式,实际核算中属于同一个拆分过程

```js
var div0=document.getElementById("div0");
console.log(div0);
console.dir(div0);
console.log(div0.constructor===HTMLDivElement);//判断元素是否是DIV标签

HTMLDivElement--->HTMLElement--->Element--->Node--->EventTarget--->Object
console.log(ul.constructor===HTMLUListElement)//ul
console.log(a.constructor===HTMLAnchorElement);//超链接

Document Object Model（文档对象模型）
```

DOM 是针对 HTML 和 XML 文档的一个 API（Application Programming Interface 应用程序编程接口）。DOM 描绘了一个层次化的节点树，允许开发人员添加、移除和修改页面的某一部分。

HTML DOM 定义了访问和操作 HTML 文档的标准方法。

要改变页面的某个东西，JavaScript 就需要获得对 HTML 文档中所有元素进行访问的入口。这个入口，连同对 HTML 元素进行添加、移动、改变或移除的方法和属性，都是通过文档对象模型来获得的（DOM）。

我们可以通过 JavaScript 操作 DOM，可以对节点实现增删改查操作，可以动态添加标签，属性等。
