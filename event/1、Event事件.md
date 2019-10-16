# 1、Event 对象

1. reset

    ```js
    // reset submit  针对表单的事件
    var form = document.querySelector("form");
    form.addEventListener("reset", resetHandler);
    form.addEventListener("submit", submitHandler);
    function resetHandler(e) {
        // e.preventDefault();
        console.log(e);
    }
    ```
  
2. submit

    - 点击 submit 后跳转到 action，提交信息
    - 有历史记录

3. resize

    - 更改大小，一般应用于 window 对象

    ```js
    window.daaEventListener("resize", resizeHandler);
    ```

4. select

    - 针对 input 文本框内容的选择事件
    - select 针对 input 文本框内容的选择事件

    ```js
    var user = document.querySelector("#user");
    user.addEventListener("select", selectHandler);
    function selectHandler(e) {
    selectionDirection: "forward"; //选择方向
    selectionEnd: 7; //选择结束的下标
    selectionStart: 3; //选择开始的下标
    console.log(this.selectionStart, this.selectionEnd);
    //this.value=this.value.slice(0,this.selectionStart)+this.value.slice(this.selectionEnd);
    //this.value=this.value.slice(0,this.selectionStart)+this.value.slice(this.selectionStart,this.selectionEnd).toUpperCase()+this.value.slice(this.selectionEnd);
    }
    ```

5. scroll

    - scroll 滚动条事件

    ```js
    // window.addEventListener("scroll",scrollHandler);
    // function scrollHandler(e){
    //     console.log(e)
    // }
    ```

6. change

7. error

8. load

9. unload
