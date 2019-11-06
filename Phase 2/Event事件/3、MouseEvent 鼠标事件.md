# MouseEvent 鼠标事件

## 鼠标按键

### 1. click 点击

### 2. dblclick 双击

### 3. mousedown 鼠标按下键

### 4. mouseup 鼠标释放键

### 5. mousemove 鼠标移动

- 移动距离坐标 主要用户 mousemove 事件，早期版本不兼容
- 这里的值是每次移动相对上次移动的距离
- movementX: 0 正值是向右负向左
- movementY: 0 正值是向下负向上

### 6. mouseover 鼠标滑过

### 7. mouseout 鼠标滑出

### 8. mouseenter 鼠标进入

### 9. mouseleave 鼠标离开

- mouseenter 和 mouseleave 是针对被侦听的对象触发事件，不向内捕获

### 10. contextmenu 右键菜单

- e.preventDefault();屏蔽右键菜单

1. 表单提交及重置
2. 图片拖拽阻止
3. 文字选中取消
4. 右键菜单显示阻止

---

## 鼠标事件对象 后带 X 和 Y 的是鼠标事件

- altKey: false 是否按住 alt 点击

- ctrlKey: false 是否按住 ctrl 点击

- shiftKey: false 是否按住 shift 点击

- metaKey: false 是否按住 meta 点击
  - 主要用于 mousedown 和 mouseup
     |         |左  |中  |右 |
     |---------|----|----|---|
     |button   |0   |1   |2  |
     |buttons  |1   |4   |2  |
     |which    |1   |2   |3  |
- 坐标
  - 移动距离坐标 主要用户 mousemove 事件,早期版本不兼容
  - 这里的值是每次移动相对上次移动的距离
    - movementX: 0; 正 是向右 负 是向左
    - movementY: 0; 正 是向下 负 是向上
- 鼠标坐标,这两对是完全一样的含义
  - clientX 和 clientY 兼容早期 IE 浏览器
  - 鼠标点击所在位置相对视口距离
    - clientX: 68
    - clientY: 53
    - x: 51
    - y: 27
- 相对被点击目标(e.target)的左上角位置
  - offsetX: 54
  - offsetY: 70
- 如果元素没有定位
  - 相对父容器的左上角位置,如果父容器也没有定位,向上查找直到 html
  - 如果元素定位,和 offsetX,offsetY 相同;
  - layerX: 70
  - layerY: 73
- 鼠标点击相对 html 顶部左上角定位
  - pageX: 74
  - pageY: 32
- 鼠标点击相对屏幕左上角的位置
  - screenX: 60
  - screenY: 106

---

### 案例代码

```js
var div = document.querySelector("div");
div.addEventListener("click", clickHandler);
// div.addEventListener("mousedown",clickHandler);
// div.addEventListener("mouseup",clickHandler);
// div.addEventListener("mousemove",clickHandler);
function clickHandler(e) {
  console.log(e);
}
```

---

```js
var div = document.querySelector("div");
div.addEventListener("click", mouseHandler);
div.addEventListener("dblclick", mouseHandler);
div.addEventListener("mousedown", mouseHandler);
div.addEventListener("mouseup", mouseHandler);
// div.addEventListener("mousemove",mouseHandler);
div.addEventListener("mouseover", mouseHandler);
div.addEventListener("mouseout", mouseHandler);
div.addEventListener("mouseenter", mouseHandler);
div.addEventListener("mouseleave", mouseHandler);
// mouseenter和mouseleave是针对被侦听的对象触发事件,不向内捕获
// mouseover和mouseout是针对目标对象触发事件,会有冒泡特征
// 右键菜单
div.addEventListener("contextmenu", mouseHandler);
function mouseHandler(e) {
  console.log(e.type, e.target);
  // e.preventDefault();//屏蔽右键菜单

  // switch(e.type){
  //     case "click":
  //         console.log("click")
  //     break;
  //     case "dblclick":
  //         console.log("dblclick")
  //     break;
  // }
}
```
