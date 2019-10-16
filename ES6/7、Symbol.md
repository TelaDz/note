# Symbol

ES6 一种新的基础数据类型（primitive type）

Symbol 是由 ES6 规范引入的一项新特性，它的功能类似于一种标识唯一性的 ID。通常情况下，我们可以通过调用 Symbol()函数来创建一个 Symbol 实例：

```js
let s1 = Symbol();
```

也可以在调用 Symbol()函数时传入一个可选的字符串参数，相当于给你创建的 Symbol 实例一个描述信息：

```js
let s2 = Symbol("another symbol");
```

由于 Symbol 是一种基础数据类型，所以当我们使用 typeof 去检查它的类型的时候，它会返回一个属于自己的类型 symbol，而不是什么 string、object 之类的：

```js
typeof s1; // 'symbol'
```

另外，我们需要重点记住的一点是：每个 Symbol 实例都是唯一的。因此，当你比较两个 Symbol 实例的时候，将总会返回 false：

```js
let s1 = Symbol();
let s2 = Symbol("another symbol");
let s3 = Symbol("another symbol");

s1 === s2; // false
s2 === s3; // false
```

---

## 应用场景1：使用Symbol来作为对象属性名(key)

在这之前，我们通常定义或访问对象的属性时都是使用字符串，比如下面的代码：

```js
let obj = {
  abc: 123,
  "hello": "world"
}

obj["abc"] // 123
obj["hello"] // 'world'
```

而现在，Symbol可同样用于对象属性的定义和访问：

```js
const PROP_NAME = Symbol()
const PROP_AGE = Symbol()

let obj = {
  [PROP_NAME]: "一斤代码"
}
obj[PROP_AGE] = 18

obj[PROP_NAME] // '一斤代码'
obj[PROP_AGE] // 18
```

**Symbol类型的key是不能通过Object.keys()或者for...in来枚举的，它未被包含在对象自身的属性名集合(property names)之中。**

所以，利用该特性，我们可以把一些不需要对外操作和访问的属性使用Symbol来定义。

也正因为这样一个特性，当使用JSON.stringify()将对象转换成JSON字符串的时候，Symbol属性也会被排除在输出内容之外：

```js
JSON.stringify(obj)  // {"age":18,"title":"Engineer"}
```

## 应用场景2：使用Symbol来替代常量

定义一组常量来代表一种业务逻辑下的几个不同类型，通常希望这几个常量之间是唯一的关系，为了保证这一点，需要为常量赋一个唯一的值

（比如这里的'AUDIO'、'VIDEO'、 'IMAGE'），常量少的时候还算好，但是常量一多起名非常麻烦

现在有了Symbol，我们大可不必这么麻烦了：

```js
const TYPE_AUDIO = Symbol()
const TYPE_VIDEO = Symbol()
const TYPE_IMAGE = Symbol()
```

这样定义，直接就保证了三个常量的值是唯一的了！

---

## 应用场景3：使用Symbol定义类的私有属性/方法

在文件 a.js中

```js
const PASSWORD = Symbol()

class Login {

  constructor(username, password) {

    this.username = username

    this[PASSWORD] = password

  }
  checkPassword(pwd) {

      return this[PASSWORD] === pwd

  }
}

export default Login
```

在文件 b.js 中

```js
import Login from './a'

const login = new Login('admin', '123456')

login.checkPassword('123456')  // true

login.PASSWORD  // oh!no!

login[PASSWORD] // oh!no!

login["PASSWORD"] // oh!no!

```

由于Symbol常量PASSWORD被定义在a.js所在的模块中，外面的模块获取不到这个Symbol，也不可能再创建一个一模一样的Symbol出来（因为Symbol是唯一的），因此这个PASSWORD的Symbol只能被限制在a.js内部使用，所以使用它来定义的类属性是没有办法被模块外访问到的，达到了一个私有化的效果。

---

## 消除魔术字符串 唯一性

```js
const RUN = Symbol();
const WALK = Symbol();
const PLAY = Symbol();
function fn(state) {
switch (state) {
    case RUN:
    console.log("run");
    break;
    case WALK:
    console.log("walk");
    break;
    case PLAY:
    console.log("play");
    break;
    }
}
fn(RUN); //run
let o={a:1};
let a={a:2};
let o=Symbol();
let a=Symbol();
let obj={
a:1,
b:2,
// 这样填入将对象引用地址作为属性名时,起始会自动将对象转为字符串 [objectobject]
// [o]:3,
// // 如果使用 o 是 Symbol 这个不会转为字符串,就会成为唯一指定的 Sybmol 类型
// [Symbol()]:4//永远找不到
}
console.log(obj[o]); //undefined
// 这种类型唯一方法就是转换为字符串
console.log(Symbol().toString())   //Symbol()
console.dir(Symbol()) //Symbol()
```
