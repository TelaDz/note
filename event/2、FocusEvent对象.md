# FocusEvent对象

事件函数是不能带入参数的，并且也不能使用return返回值

## 1、FocusEvent

focus  汇聚焦距时

blur   失去焦距时

```js
  var input = document.querySelector("input");
        var user = document.querySelector("#user");
        input.addEventListener("focus", focusHandler);
        input.addEventListener("blur", focusHandler);

        function focusHandler(e) {
            // e.type  事件类型
            if (e.type === "focus") {
                console.log(this.value);
            } else if (e.type === "blur") {
                this.value = "";
            }
        }
        var input = document.querySelector("input");
        input.style.color = "#999999";
        input.value = "用户名";
        input.addEventListener("focus", focusHandler);
        user.addEventListener("focus", focusHandler);
        input.addEventListener("blur", focusHandler);

        function focusHandler(e) {
            // console.log(e.relatedTarget);//上一次当前事件的目标对象
            if (e.type === "focus" && this.style.color === "rgb(153, 153, 153)") {
                this.style.color = "#000000";
                this.value = "";
            } else if (e.type === "blur" && this.value.length === 0) {
                this.value = "用户名";
                this.style.color = "#999999";
            }
        }
```
