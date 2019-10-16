# input事件

1. onfocus 当input 获取到焦点时触发

2. onblur 当input失去焦点时触发，注意：这个事件触发的前提是已经获取了焦点再失去焦点的时候会触发相应的js

3. onchange 当input失去焦点并且它的value值发生变化时触发

4. onkeydown 在 input中有键按住的时候执行一些代码

5. onkeyup 在input中有键抬起的时候触发的事件，在此事件触发之前一定触发了onkeydown事件

6. onclick 主要是用于 input type=button，当被点击时触发此事件

7. onselect 当input里的内容文本被选中后执行一段，只要选择了就会触发，不是非得全部选中

---

## InputEvent对象

只针对input的文本框输入做事件侦听，当输入一个内容时触发事件。

    data：“a”;当前输入的内容    

    inputType:"inserText" 输入的类型    

    deleteContentBackword 退格  

    deleteContentForword  del   

    deleteByCut 剪切    

    insertFromPaste 粘贴    

    inserCompositionText 插入输入法文本 

    isComposing 是否输入法状态 
