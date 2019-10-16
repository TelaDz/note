# 类

先有类别后有对象，根据抽象形容构造对象

```js
//类是对象的抽象化体现
class Box {
  //构造函数（按照解构创造对象的入口函数）
  // 如果不写constructor() 会默认有一个constructor（）且为空
  a = 3;
  static b = 4;
  //使用static创建的属性和方法不是被构造出来的对象
  constructor() {
    this.a = 10;
    this.b = 10;
  }
  play() {
    console.log(this.a);
  }
  static run() {
    console.log("aaa");
  }
}
//new一个对象，构造对象，实例化对象
//b就是根据class Box构建出来的
let b = new Box(); //对象就是类的具现化，具现就是实例化
//Box()就是执行了 constructor() ;
console.log(b); //Box{a:10,b:10}
b.play(); // 10
console.log(Box.b); //4
Box.run(); //"aaa"

class Ball {
  constructor() {
    this.elem = this.createBall();
  }
  createBall() {
    let elem = document.createElement("div");
    Object.assign(elem, style, {
      width: "50px"
    });
    return elem;
  }
}
```

```js
export default class Ball //JS默认调用这个类
script type="module"
import Ball from "./js/Ball.js"

// 类名加载
```

如果函数笔记中的构造函数代码改为 ES6 的写法就会是这个样子：

```js
class Person {
  //定义了一个名字为Person的类
  constructor(name, age) {
    //constructor是一个构造方法，用来接收参数
    this.name = name; //this代表的是实例对象
    this.age = age;
  }
  say() {
    //这是一个类的方法，注意千万不要加上function
    return "我的名字叫" + this.name + "今年" + this.age + "岁了";
  }
}
var obj = new Person("laotie", 88);
console.log(obj.say()); //我的名字叫laotie今年88岁了
```

注意项

1. 在类中声明方法的时候，千万不要给该方法加上 function 关键字
2. 方法之间不要用逗号分隔，否则会报错

- **constructor 方法是类的构造函数的默认方法，通过 new 命令生成对象实例时，自动调用该方法。**

```js
class Box {
  constructor() {
    console.log("啦啦啦，今天天气好晴朗"); //当实例化对象时该行代码会执行。
  }
}
var obj = new Box();
```

## constructor

- constructor 方法如果没有显式定义，会隐式生成一个 constructor 方法。
  - 所以即使没有添加构造函数，构造函数也是存在的。
  - constructor 方法默认返回实例对象 this，但是也可以指定 constructor 方法返回一个全新的对象，让返回的实例对象不是该类的实例。

```js
class Desk {
  constructor() {
    this.xixi = "我是一只小小小小鸟！哦";
  }
}
class Box {
  constructor() {
    return new Desk(); // 这里没有用this哦，直接返回一个全新的对象
  }
}
var obj = new Box();
console.log(obj.xixi); //我是一只小小小小鸟！哦
```

- constructor 中定义的属性可以称为实例属性（即定义在 this 对象上）
- constructor 外声明的属性都是定义在原型上的，可以称为原型属性（即定义在 class 上)
- hasOwnProperty()函数用于判断属性是否是实例属性，其结果是一个布尔值

  - true 说明是实例属性
  - false 说明不是实例属性

- in 操作符会在通过对象能够访问给定属性时返回 true,无论该属性存在于实例中还是原型中。

```js
class Box {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  sum() {
    return num1 + num2;
  }
}
var box = new Box(12, 88);
console.log(box.hasOwnProperty("num1")); //true
console.log(box.hasOwnProperty("num2")); //true
console.log(box.hasOwnProperty("sum")); //false
console.log("num1" in box); //true
console.log("num2" in box); //true
console.log("sum" in box); //true
console.log("say" in box); //false
```

- **类的所有实例共享一个原型对象**

- 它们的原型都是 Person.prototype，所以 proto 属性是相等的

```js
class Box {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  sum() {
    return num1 + num2;
  }
}
//box1与box2都是Box的实例。它们的__proto__都指向Box的prototype
var box1 = new Box(12, 88);
var box2 = new Box(40, 60);
console.log(box1.__proto__ === box2.__proto__); //true
```

## 可以通过 Object.assign 方法来为对象动态增加方法

```js
Object.assign(Person.prototype, {
  getName: function() {
    return this.name;
  },
  getAge: function() {
    return this.age;
  }
});
var obj = new Person("laotie", 88);
console.log(obj.getName()); //laotie
console.log(obj.getAge()); //88
```

## 也可以通过 prototype 属性对类添加方法。如下

```js
Person.prototype.addFn = function() {
  return "我是通过prototype新增加的方法,名字叫addFn";
};
var obj = new Person("laotie", 88);
console.log(obj.addFn()); //我是通过prototype新增加的方法,名字叫addFn
```

## 使用 static 创建属性和方法不是被构造出对象的 它是类的

```js
class Arrays {
  constructor() {}
  static isArray() {
    console.log("bbb");
  }
  static from() {
    console.log("aa");
  }
  push() {
    console.log("c");
  }
  pop() {}
  shift() {}
  unshift() {}
  forEach() {}
}
```
