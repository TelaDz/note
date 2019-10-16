# this

## 1、普通函数中的this

- 在普通函数中，this是表示window

- ```js
    console.log(this)
    function abc(){
          console.log(this);
        function a(){
          console.log(this);
        }
        a();
    }
    abc();
  ```

- 普通回调函数中指向也为window

普通函数中嵌套了一个函数就是回调函数

？？

- 普通递归函数中指向不变

？？

---

## 2、事件中的this

- 在事件侦听和触发过程中，执行事件触发的函数，我们称为事件处理函数，在该函数中我们获取的this是触发事件的对象

谁做的侦听this就是谁

- ```js
    bn.addEventListener(“click”,clickHandler);
    function clickHandler(e){
        console.log(this);
    }
    bn.onClick=function(){
      console.log(this);
    }
  ```

  this->侦听对象->e.curreatTarget
  e.target->触发目标
  但是我们可以利用函数绑定，改变this，
  例如bn.addEventListener(“click”,clickHandler.**bind(this)**);

---

## 3、类(class)中的this

- 当函数被实例化后，函数就是类的构造函数了，这个时候，函数中的this就是被实例化的对象本身了。

- ```js
  function Ball(){
                console.log(this);
       }
  var obj=new Ball();
  ```

- ```js
  class Box{
    constructor(){
      //this->当前实例化对象
      this.a=10;
    }
    play(){
      this.b=100;
    }
    static run(){
      //设定静态方法，因为给类添加了一个方法，并没有实例化对象添加
      //this->类
      console.log(this);
      //不要在类的静态方法中使用this
    }
  }
  let b1=new Box();
  let b2=new Box();
  b1.play();
  console.log(b1,b2);//b1{b:100,a:10},b2{a:10}

  ```

- 使用类名就可以了
- **不要在类的静态方法中使用this**

ES5中的类

```js
function Box(){

}
Box.prototype.a=function(){
//动态方法
}
Box.prototype.b=function(){

}
Box.c=function(){
//静态方法 this.Box
}
//Box();如果之间调用函数Box,Box中this指向window
var b=new Box();//Box函数中this，指向被实例化的而对象b
```

---

## 4、函数call以后替代执行的this

- 使用函数的方法call，替代执行方法。关于call部分，我们后面详细讲解该内容，但是在这里我们先做一下该部分this的说明

- ```js
  function fun2(){
    console.log(this);
  }
  function fun1(callBack){
    var obj={a:1};
    callBack.call(obj);
  }
    fun1();
  ```

  这个时候this是obj对象。
  不管方法在任何地方，是用call、apply、bind都直接指向被绑定的对象

---

## 5、对象中的this

- 在对象属性中的this是该对象所在外层中this的指向，而不是当前对象obj

- 因为创建对象时，创建了属性，而对象还未创建完成，所以this就不能指向对象

```js
var obj={
  b:1,
  c:this.b+1,
  a:function(){
    // this->当前对象obj
    // 函数是对象创建完成后才执行的，这时obj已经创建，因此this可以指向obj了
  }
}
obj.a();
```

---

## 6、箭头函数中的this

- ```js
  var obj={
  document.addEventListener("click",e=>{
  //this执行调用外层this执行---window
  });
  var arr=[1,2,3];
  arr.forEach(item=>{
    //this->obj
  })
  }
  
  ```

## 优先级

1. call\apply\bind

2. 箭头

3. 侦听事件

4. 回调函数

5. 面向对象类的实例化对象

6. 全局(严格模式下this不指向window)

构造函数中放地是回调函数
