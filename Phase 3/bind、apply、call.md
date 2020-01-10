# 12-19

## 用法

在 JS 中，这三者都是用来改变函数的 this 对象的指向的

在说区别之前还是先总结一下三者的相似之处：

1. 都是用来改变函数的 this 对象的指向的。
2. 第一个参数都是 this 要指向的对象。
3. 都可以利用后续参数传参。

传参时，call 是**一个个传参**，apply 是**数组形式传参**，call 和 apply**立即执行**并且返回值是你调用的方法的返回值，若该方法没有返回值，则返回 undefined。bind 是改变 this 后返回一个**新的函数**，他**不会立即**执行。

### call

Function.call(obj,[param1[,param2[,…[,paramN]]]])

需要注意以下几点：

- 调用 call 的对象，必须是个函数 Function。
- call 的第一个参数，是一个对象。 Function 的调用者，将会指向这个对象。如果不传，则默认为全局对象 window。
- 第二个参数开始，可以接收任意个参数。每个参数会映射到相应位置的 Function 的参数上。但是如果将所有的参数作为数组传入，它们会作为一个整体映射到 Function 对应的第一个参数上，之后参数都为空。

### apply

Function.apply(obj[,argArray])

需要注意的是：

- 它的调用者必须是函数 Function，并且只接收两个参数，第一个参数的规则与 call 一致。
- 第二个参数，必须是数组或者类数组，它们会被转换成类数组，传入 Function 中，并且会被映射到 Function 对应的参数上。这也是 call 和 apply 之间，很重要的一个区别。

### bind

在 MDN 上的解释是：bind() 方法创建一个新的函数，在调用时设置 this 关键字为提供的值。并在调用新函数时，将给定参数列表作为原函数的参数序列的前若干项。

它的语法如下：

Function.bind(thisArg[, arg1[, arg2[, ...]]])

参数

thisArg

调用绑定函数时作为 this 参数传递给目标函数的值。 如果使用 new 运算符构造绑定函数，则忽略该值。当使用 bind 在 setTimeout 中创建一个函数（作为回调提供）时，作为 thisArg 传递的任何原始值都将转换为 object。如果 bind 函数的参数列表为空，执行作用域的 this 将被视为新函数的 thisArg。

arg1, arg2, ...

当目标函数被调用时，被预置入绑定函数的参数列表中的参数。

返回值

返回一个**原函数的拷贝**，并拥有指定的 this 值和初始参数。

---

## 实例

那么他们的区别在哪里的，先看一个例子。

```js
var xw = {
  name: '小王',
  gender: '男',
  age: 24,
  say: function () {
    alert(this.name + ' , ' + this.gender + ' ,今年' + this.age)
  }
}
var xh = {
  name: '小红',
  gender: '女',
  age: 18
}
xw.say()
```

本身没什么好说的，显示的肯定是小王 ， 男 ， 今年 24。
那么如何用 xw 的 say 方法来显示 xh 的数据呢。
对于 call 可以这样：

```js
xw.say.call(xh)
```

对于 apply 可以这样：

```js
xw.say.apply(xh)
```

而对于 bind 来说需要这样：

```js
xw.say.bind(xh)()
```

如果直接写 xw.say.bind(xh)是不会有任何结果的，看到区别了吗？

call 和 apply 都是对函数的直接调用，而 bind 方法返回的仍然是一个函数，因此后面还需要()来进行调用才可以。

那么 call 和 apply 有什么区别呢？我们把例子稍微改写一下。

```js
var xw = {
  name: '小王',
  gender: '男',
  age: 24,
  say: function (school, grade) {
    alert(
      this.name +
        ' , ' +
        this.gender +
        ' ,今年' +
        this.age +
        ' ,在' +
        school +
        '上' +
        grade
    )
  }
}
var xh = {
  name: '小红',
  gender: '女',
  age: 18
}
```

可以看到 say 方法多了两个参数，我们通过 call/apply 的参数进行传参。

对于 call 来说是这样的

```js
xw.say.call(xh, '实验小学', '六年级')
```

而对于 apply 来说是这样的

```js
xw.say.apply(xh, ['实验小学', '六年级郑州牛皮癣医院'])
```

看到区别了吗，call 后面的参数与 say 方法中是一一对应的，而 apply 的第二个参数是一个数组，数组中的元素是和 say 方法中一一对应的，这就是两者最大的区别。

那么 bind 怎么传参呢？它可以像 call 那样传参。

```js
xw.say.bind(xh, '实验小学', '六年级')()
```

但是由于 bind 返回的仍然是一个函数，所以我们还可以在调用的时候再进行传参。

```js
xw.say.bind(xh)('实验小学', '六年级')
```

---

apply 的一些妙用

1、Math.max。用它来获取数组中最大的一项。

```js
let max = Math.max.apply(null, array)
```

同理，要获取数组中最小的一项，可以这样：

```js
let min = Math.min.apply(null, array)
```

2、实现两个数组合并。在 ES6 的扩展运算符出现之前，我们可以用 Array.prototype.push 来实现。

```js
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

Array.prototype.push.apply(arr1, arr2)
console.log(arr1) // [1, 2, 3, 4, 5, 6]
```

---

## 天哥的讲解

```js
// call apply 执行函数
function fn () {
  console.log('aaa')
}

fn.call()
fn.apply()

function fn1 (a, b) {
  //     // 在非ES6严格模式,this是window
  this.a = a
  this.b = b
}

fn1(3, 5)
console.log(a, b)
// 使用call和apply,将一个对象混入到函数中,代替函数中this
// 如果函数中没有this,使用call没有意义
var obj = {}
fn1.call(obj, 3, 5)
console.log(obj) //{a:3,b:5}
// apply也是执行函数并且混入对象替代函数中this,但是在给函数传参是不是一个个传入,而是数组方式传入
fn1.apply(obj, [3, 5])
console.log(obj) //{a:3,b:5}

var obj = {
  a: 1,
  b: 2,
  c: function () {
    console.log(this.a + this.b)
  }
}

var obj1 = { a: 3, b: 5 }
obj.c() //3
obj.c.call(obj1) //8
// 第一个参数是必填
obj.c.call() //NaN

function fn2 (a, b) {
  this.a += a
  this.b += b
}
var obj = { a: 0, b: 0 }
// fn.call(obj,3,5);
// fn.call(obj,6,8);
// console.log(obj);
var fn3 = fn2.bind(obj)
fn3(3, 5)
console.log(obj) //{ a: 3, b: 5 }
fn3(6, 8)
console.log(obj) //{ a: 9, b: 13 }

//GP16-EX-1015
// var obj={
//     num:1,
//     a:function(){
//         var bn=document.createElement("button");
//         bn.textContent="按钮";
//         document.body.appendChild(bn);
//         this.bindHandler=this.clickHandler.bind(this);
//         bn.addEventListener("click",this.bindHandler);
//     },
//     clickHandler:function(e){
//         this.num++;
//         console.log(this.num);
//         e.currentTarget.removeEventListener("click",this.bindHandler);
//     }
// }
// obj.a();

// bind就是先将函数里面的this替换称为需要绑定的对象,然后在执行该绑定后的函数时,里面的this就会被替换
// 多用于回调函数的内容替换
```

---

## 重写

引用一点点其他知识点：一个方法的内部上下文 this 如何确定？

一个方法的调用分为一下四种：

1. 方法直接调用，称之为函数调用，当前的上下文 this，绑定在全局的 window 上，在严格模式 use strict 下，this 为 null,在非 ES6 严格模式,this 是 window
2. 方法作为一个对象的属性，这个是否通过对象调用方法，this 绑定在当前对象上。如下：
3. apply，call 调用模式，当前的方法的上下文为方法调用的一个入参
4. 构造函数的调用，当前方法的上下文为新生的实例

### apply 实现

思路：apply 方法实现在 Function.prototype 中

- 获取到当前调用方法体
- 获取方法的入参
- 绑定方法体中的上下文为传入的 context--使用的方法就是对象调用属性方法的方式绑定
- 调用方法

```js
Function.prototype.myApply = function () {
  let _fn = this
  if (typeof _fn !== 'function') {
    throw new TypeError('error')
  }
  let ctx = [...arguments].shift()
  // 因为apply的入参是数组，所有只需要取第一个
  let args = [...arguments].slice(1).shift()
  ctx.myApplyFn = _fn
  // 由于apply会将原方法的参数用数组包裹一下，所以需要展开参数
  let res = ctx.myApplyFn(...args)
  delete ctx.myApplyFn
  return res
}
```

### call 实现

特点：

- 可以改变我们当前函数的 this 指向
- 还会让当前函数执行

思路：实现在 Function.prototype 中，大致和 apply 相似，却别在对于参数的处理上

- 获取到当前调用方法体
- 获取方法的入参
- 绑定方法体中的上下文为传入的 context
- 调用方法

```js
Function.prototype.myCall = function () {
  let _fn = this
  if (typeof _fn !== 'function') {
    throw new TypeError('error')
  }
  let ctx = [...arguments].shift()
  // call使用的多个入参的方式，所有直接取参数第二个参数开始的所有入参，包装成一个数组
  let args = [...arguments].slice(1)
  ctx.myCallFn = _fn
  let res = ctx.myCallFn(...args)
  delete ctx.myCallFn
  return res
}
```

```js
//自测
Function.prototype.calla = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError(`${this} is not a function`)
  }
  context = Object(context) || window
  context.fn = this
  let args = []
  for (let i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }
  let r = eval('context.fn(' + args + ')')
  delete context.fn
  return r
}

function fn1 () {
  console.log(this, arguments)
  console.log(1)
}
function fn2 () {
  console.log(this, arguments)
  console.log(2)
}
fn1.calla(fn2, 1, 2) // fn2 [1,2] 1
fn1.calla.call.call.call.call(fn2, 1, 2) // {number:1} [2] 2
```

思路解析

fn1.call(fn2,1,2)

- 1）call 执行传入 fn2,1,2 三个参数
- 2）call 函数内部 context = Object(fn2) = fn2
- 3）fn2.fn = fn1
- 4）args=['arguments[1]','arguments[2]']=[1,2]
- 5）eval('context.fn('+args+')') = fn2.fn(1,2) = fn2.fn1(1,2)

fn1.call.call.call.call.call(fn2,1,2)

- 1）call 执行传入 fn2,1,2 三个参数
- 2）call 函数内部 context = Object(fn2) = fn2
- 3）fn2.fn = call
- 4）args=['arguments[1]',arguments[2]]=[1,2]
- 5）eval('context.fn('+args+')') = fn2.fn(1,2) = fn2.call(1,2)
- 6）call 执行传入 1,2 两个参数
- 7）call 函数内部 context = Object(1) = Number{1}
- 8）Number{1}.fn = fn2
- 9）args=['arguments[1]']=[1]
- 10）eval('context.fn('+args+')') = Number{1}.fn(2) = Number{1}.fn2(2)

注：多次调用 call 的时候其实是 call 执行的时候内部又调用了一次 call，总共调用两次

### bind 实现

特点:

- 绑定 this 指向
- 返回一个绑定后的函数(高阶函数原理)
- 如果绑定的函数被 new 执行 ，当前函数的 this 就是当前的实例
- new 出来的结果可以找到原有类的原型

思路：实现在 Function.prototype 中，并且返回一个已经绑定了上下文的函数。利用闭包可以捕获函数上下文的变量来实现，总体上比起之前两个方法稍微复杂一些。

- 获取调用 bind 的实例方法体
- 获取需要绑定的上下文 context
- 声明闭包函数
- 闭包函数中绑定 context 到实例方法体中
- 闭包函数中调用原来的方法体
- 返回闭包函数

```js
Function.prototype.myBind = function () {
  let _fn = this
  if (typeof _fn !== 'function') {
    throw new TypeError('error')
  }
  let ctx = [...arguments].shift()
  let args = [...arguments].slice(1)
  return function () {
    // 因为bind的调用方式，会有bind({}, 'para1', 'para2')('para3', 'para4')，这个时候需要将外面参数和内部参数拼接起来，之后调用原来方法
    args = args.concat([...arguments])
    ctx.myBindFn = _fn
    let res = ctx.myBindFn(...args)
    delete ctx.myBindFn
    return res
  }
}
```

```js
Function.prototype.bind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError(`${this} is not a function`)
  }
  let that = this
  let bindArgs = Array.prototype.slice.call(arguments, 1)0
  function Fn () {}
  function bindFn () {
    let args = Array.p8203rototype.slice.call(arguments)
    /*
     * 绑定`this`指向
     * 如果绑定的函数被`new`执行 ，当前函数的`this`就是当前的实例
     */
    that.apply(this instanceof bindFn ? this : context, bindArgs.concat(args))
  }
  /*`new`出来的结果可以找到原有类的原型*/
  Fn.prototype = that.prototype
  bindFn.prototype = new Fn()
  /*返回一个绑定后的函数*/
  return bindFn
}
```

---

## 额外 new 操作符实现

特点

- 新生成了对象
- 链接到原型
- 绑定 this
- 返回一个对象

```js
function mockNew(){
    let Constructor = [].shift.call(arguments);
    let obj = {}; // 新生成了对象
    obj.__proto__ = Constructor.prototype; // 链接到原型
    let r = Constructor.apply(obj,arguments) // 绑定`this`
    return r instance Object ? r : obj; //返回一个对象
}
let tiger = mockNew(Animal,'tiger');
console.log(tiger);

```
