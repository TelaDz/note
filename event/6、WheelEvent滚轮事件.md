# WheelEvent

## mousewheel 事件

滚轮事件也是针对 document 或者 window,也可以针对某个元素

如果在页面中有 flash 等元素接收滚轮事件时,会造成冲突,这个时候可以在该元素上侦听滚轮事件,取消默认系统事件

WheelEvent(mousewheel) 谷歌和 IE 浏览器的事件

- deltaX: -0

- deltaY: -100 向上-100 向下 100

- deltaZ: 0

- detail: 0

- wheelDelta: 120 向上 120 向下-120

- wheelDeltaX: 0

- wheelDeltaY: 120

DOMMouseScroll

- 火狐浏览器

// detail: -3 向上-3 向下 3

```js
function mousewheelHandler(e) {
  e.preventDefault();
  // console.log(e);
  if (e.detail) {
    // 判断是否是火狐浏览器
    detail = e.detail > 0 ? -1 : 1;
  } else {
    detail = e.deltaY > 0 ? -1 : 1;
  }
  console.log(detail);
}
```
