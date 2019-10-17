# this

## 1、普通函数中的 this

- 在普通函数中，this 是表示 window

- ```js
  console.log(this);//Window
  function abc() {
    console.log(this);//Window
    function a() {
      console.log(this);//Window
    }
    a();
  }
  abc();
  ```

- 普通回调函数中指向也为 window

普通函数中嵌套了一个函数就是回调函数

```js
function fn1(fn) {
  fn();
}
function fn2() {
  console.log(this);
}
fn1(fn2); //window
```

```js
var obj = {
  num: 1,
  a: function(fn) {
    fn();
  },
  b: function() {
    console.log(this);
  },
  c: function() {
    this.num++;
    if (this.num < 10) {
      // console.log(this.num);
      this.c();
    }
  }
};
obj.a(obj.b); //this是window
obj.b(); //this是obj
obj.c(); //this是obj
//
```

- 普通递归函数中this指向不变

---

## 2、事件中的 this

- 在事件侦听和触发过程中，执行事件触发的函数，我们称为事件处理函数，在该函数中我们获取的 this 是触发事件的对象

谁做的侦听 this 就是谁

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
  但是我们可以利用函数绑定，改变 this，
  例如 bn.addEventListener(“click”,clickHandler.**bind(this)**);

---

## 3、类(class)中的 this

- 当函数被实例化后，函数就是类的构造函数了，这个时候，函数中的 this 就是被实例化的对象本身了。

- ```js
  function Ball() {
    console.log(this);
  }
  var obj = new Ball();
  ```

- ```js
  class Box {
    constructor() {
      //this->当前实例化对象
      this.a = 10;
    }
    play() {
      this.b = 100;
    }
    static run() {
      //设定静态方法，因为给类添加了一个方法，并没有实例化对象添加
      //this->类
      console.log(this);
      //不要在类的静态方法中使用this
    }
  }
  let b1 = new Box();
  let b2 = new Box();
  b1.play();
  console.log(b1, b2); //b1{b:100,a:10},b2{a:10}
  console.log(b1===b2);//false
  ```

- 使用类名就可以了
- **不要在类的静态方法中使用 this**

ES5 中的类

```js
function Box() {}// 就是构造函数,等同于constructor
Box.prototype.a = function() {};  //动态方法
Box.prototype.b = function() {};
Box.c = function() {};  //静态方法 this.Box
//Box();如果之间调用函数Box,Box中this指向window
var b = new Box(); //Box函数中this，指向被实例化的而对象b
```

---

## 4、call apply bind 以后替代执行的 this

- 使用函数的方法 call apply，替代执行方法。不管方法在任何地方,使用call apply,bin都直接指向被绑定(带入)的对象

  ```js
   var obj={a:1};
   function fn(){
       console.log(this);
   }
   fn.call(obj);

   var obj1={
       a:function(){
           console.log(this);
       }
   }

   obj1.a.call(obj1);
  ```

- 这个时候 this 是 obj 对象。

---

## 5、对象中的 this

- 在对象属性中的 this 是该对象所在外层中 this 的指向，而不是当前对象 obj

- 因为创建对象时，创建了属性，而对象还未创建完成，所以 this 就不能指向对象

```js
var obj = {
  b: 1,
  c: this.b + 1,
  a: function() {
    // this->当前对象obj
    // 函数是对象创建完成后才执行的，这时obj已经创建，因此this可以指向obj了
  }
};
obj.a();
```

```js
var obj2 = {
  a: function() {
    var arr = [1, 2, 3, 4, 5];
    // this --> obj
    arr.forEach(function(a, b, c) {
      // 回调函数
      // this--->window
      console.log(this);
    });
    // forEach,map,filter,reduce,some,every,flatMap
    setTimeout(function() {
      // this--->window
    }, 10);
    setInterval(function() {
      // this->window
    }, 10);
  }
};
obj2.a();
```

---

## 6、箭头函数中的 this

- ```js
  document.addEventListener("click",e=>{
      // this执行调用外层this执行---window
  })
  var obj={
      a:function(){
          document.addEventListener("click",e=>{
              // this--obj 当前函数外层的this指向
          });
          var arr=[1,2,3];
          arr.forEach(item=>{
              // this-->obj
          });
      },
      c:()=>{
          console.log(this);
          // this--->window
      }
  }
  obj.c();//Window
  ```

## 优先级

1. call\apply\bind

2. 箭头

3. 侦听事件

4. 回调函数

5. 面向对象类的实例化对象

6. 全局(严格模式下 this 不指向 window)

构造函数中放地是回调函数
