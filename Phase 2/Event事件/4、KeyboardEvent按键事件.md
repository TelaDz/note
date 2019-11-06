# 按键

- 按键事件一般针对 window 或者 document 的,一般使用针对 window
- window.addEventListener("keydown",keyHandler);
- 键位
  - ← 37 ↑ 38 → 39 ↓40
  - 回车 13

---

## 1、keyboardEvent

- 可以激活多次 keydown
- 只能激活一次 keyup
  - code: "KeyA" 按键名 正式区分按下键
  - key: "a" 键名
  - isComposing: false 是否启用输入法
  - keyCode: 83 键码值 **->用这个**
  - which: 83 键码

```js
window.addEventListener("keydown", keyHandler);
window.addEventListener("keyup", keyHandler);
window.addEventListener("keypress", keyHandler);

function keyHandler(e) {
  console.log(e);
}
```

---

## 2、案例

```js
var div, offsetLeft, offsetTop;
var code = 0;
init();
function init() {
  div = document.querySelector("div");
  offsetLeft = div.offsetLeft;
  offsetTop = div.offsetTop;
  window.addEventListener("keydown", keyHandler);
  window.addEventListener("keyup", keyHandler);
  setInterval(animation, 16);
}

function keyHandler(e) {
  if (e.type === "keydown") {
    code = e.keyCode;
  } else if (e.type === "keyup") {
    code = 0;
  }
}

function animation() {
  if (!code) return;
  switch (code) {
    case 37:
      offsetLeft -= 2;
      div.style.left = offsetLeft + "px";
      break;
    case 38:
      offsetTop -= 2;
      div.style.top = offsetTop + "px";
      break;
    case 39:
      offsetLeft += 2;
      div.style.left = offsetLeft + "px";
      break;
    case 40:
      offsetTop += 2;
      div.style.top = offsetTop + "px";
      break;
  }
}
```
