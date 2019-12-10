# ES6 新增

## 新的变量声明方式 let/const（不具备变量提升，不可重复声明）

变量提升

例如 console.log('a');

var a=1

上面 a 会 undefined 如果是 let 就会报错

let：声明的变量仅在块级作用域内有效

const：常量，值一旦定义不可更改；声明时要赋初值

## 解构赋值：对象/数组赋值

对象赋值：对象根据属性名一一对应，无序对应

// es6
const { loading, clicked } = props;

数组赋值：数组以序列号一一对应，有序对应；允许指定默认值；内部使用严格相等运算符（===）

// es6

const arr = [1, 2, 3];

const [a, b, c] = arr;

## 字符串的遍历：for...of 循环遍历

```js
for (let codePointAt of "hicai") {
  console.log(codePointAt);
} // h i c a i
```

遍历对象用 for...in

## 箭头函数

// es6 箭头函数写法，当函数直接被 return 时，可以省略函数体的括号{}

const fn = (a, b) => { a + b }; // {}可以省略

箭头函数可以替换函数表达式，但是不能替换函数声明；

箭头函数本身没有 this，其中的 this 指的是外层的 this；

箭头函数不可以使用 arguments 对象，该对象在函数体内不存在；

不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数。

## 字符串模板

为了解决+号拼接字符串的不便利。用 ``包裹字符串，在其中用\${}包裹变量或表达式。

// es6

const a = 20;const b = 30;const string = `${a}+${b}=${a+b}`;

// es5

var a = 20;var b = 30;var string = a + "+" + b + "=" + (a + b);

## 展开运算符：（提高代码效率） 拓展运算符

ES6 中用...来表示展开运算符，可以将数组方法或者对象方法进行展开；

数组：

const arr1 = [1, 2, 3];

const arr2 = [...arr1, 10, 20, 30];

// 这样，arr2 就变成了[1, 2, 3, 10, 20, 30];

对象：

const obj1 = { a: 1, b: 2, c: 3

}

const obj2 = {

...obj1, d: 4, e: 5, f: 6

}

// 结果类似于 const obj2 = Object.assign({}, obj1, {d: 4})

## class

在 js 中，每个对象都有原型对象，所有 js 对象都从原型上继承方法和属性；

ES5 中，属性放在构造函数 constructor 里，方法放在原型 prototype 上；

ES6 中引入类 class 来代替构造函数 constructor；还提供了 extends 划分 super 关键字；

实际上类的所有方法都定义在类的 prototype 属性

也可以通过 prototype 属性对类添加方法

```js
Person.prototype.addFn = function() {
  return "我是通过prototype新增加的方法,名字叫addFn";
};
var obj = new Person("laotie", 88);
console.log(obj.addFn()); //我是通过prototype新增加的方法,名字叫addFn
```

还可以通过 Object.assign 方法来为对象动态增加方法

```js
Object.assign(Person.prototype, {
  getName: function() {
    return this.name;
  },
  getAge: function() {
    return this.age;
  },
});
var obj = new Person("laotie", 88);
console.log(obj.getName()); //laotie
console.log(obj.getAge()); //88
```

constructor 方法如果没有显式定义，会隐式生成一个 constructor 方法。所以即使你没有添加构造函数，构造函数也是存在的。**constructor 方法默认返回实例对象 this**，但是也可以指定 constructor 方法返回一个全新的对象，让返回的实例对象不是该类的实例。

constructor 中定义的属性可以称为实例属性（即定义在 this 对象上），constructor 外声明的属性都是定义在原型上的，可以称为原型属性（即定义在 class 上)。**hasOwnProperty()**函数用于判断属性是否是实例属性。其结果是一个布尔值， true 说明是实例属性，false 说明不是实例属性。in 操作符会在通过对象能够访问给定属性时返回 true,无论该属性存在于实例中还是原型中。

类的所有实例共享一个原型对象，它们的原型都是 Person.prototype，所以 proto 属性是相等的

也可以通过 proto 来为类增加方法。使用实例的 proto 属性改写原型，会改变 Class 的原始定义，影响到所有实例，所以**不推荐使用**

**class 不存在变量提升**，所以需要先定义再使用。因为 ES6 不会把类的声明提升到代码头部，但是 ES5 就不一样,_ES5 存在变量提升,可以先使用，然后再定义_。

## promise 对象：解决异步编程

特点：a）对象的状态不受外界影响，promise 对象代表一个异步操作，有三种状态：pending（进行中）、resolve（成功）、rejected（失败）

一旦状态改变，就不会改变

基本用法：

Promise 构造函数的两个参数是 resolve 和 reject；

Promise 实例生成后，可以用 then 方法分别制定 resolve 和 rejected 状态的回调函数；

Promise 的 then 方法是定义在原型对象 Promise.prototype 上的，then 方法返回的是一个新的 Promise 实例，不是原来那个 Promise 实例，因此可以用链式写法；

① 　 Promise.all()方法用于将多个 promise 实例包装成一个新的 promise 实例；

## 模块化 CommonJs

## 数组新 API

Array.from()方法可以将 Set 结构转为数组

entries()、values()、keys()

## Set 和 Map 数据结构

① 　 Set

a）Set 实例成员值唯一存储 key 值，map 实例存储键值对（key-value）

b）Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。

操作方法：

add（value）：添加某个值,返回 Set 结构本身

delete（value）：删除某个值，返回布尔值

has（value）：返回布尔值，表示该值是否为 Set 的成员

clear（）：清除所有成员，没有返回值

遍历方法：

keys()：返回键名

values()：返回键值

entries()：返回键值对

forEach()：使用回调遍历每个成员

② 　 Map

a）Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键；

b）Map 实例的属性和操作方法：

size 属性：返回 Map 结构的成员总数；

set(key, value)：设置键名 key 对应的键值为 value，然后返回整个 Map 结构，若 key 已有值，则更新键值，否则生成该键。

get(key)：读取 key 对应的键值

has(key)：返回布尔值，表示某个键是否存在当前 map 对象中。

delete(key)：删除某个键，返回 true，删除失败返回 false

clear()：其清除所有成员，没有返回值

c）map 的遍历方法：

keys()：返回键名

values：返回键值

entries：返回所有成员

forEach()：遍历 map 的所有成员，map 的遍历顺序就是插入顺序

## Symbol：新的数据类型，表示独一无二的值，不会与其他属性名产生冲突；

Symbol 值通过 Symbol 函数生成；

let s = Symbol();

typeof s; // “symbol”

Symbol 函数前不能使用 new 命令，Symbol 值不是对象，所以不能添加属性；

Symbol 函数可以接受一个字符串为参数，表示对当前 Symbol 实例的描述，因此相同参数的 Symbol 函数的返回值是不相等的；
