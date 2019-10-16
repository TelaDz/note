# Generators 生成器函数

写法

- function\* 这种声明方式(function 关键字后跟一个星号）会定义一个生成器函数 (generator function)，它返回一个 Generator 对象。

停止判断后执行

在生成器函数内部，有一种类似return的语法：关键字yield。二者的区别是，普通函数只可以return一次，而生成器函数可以yield多次（当然也可以只yield一次）。在生成器的执行过程中，遇到yield表达式立即暂停，后续可恢复执行状态。

yield语句本身没有返回值，或者说总是返回undefined。

```js
function* abc(n, m) {
  yield n;
  yield m;
  var max = n > m ? n : m;
  yield max;
  var min = n > m ? m : n;
  yield min;
  var sum = n + m;
  yield sum;
  return sum;
}
let a2=abc(3,5);
console.log(a2.next().value);//3 第一次返回n
console.log(a2.next().value);//5 第二次返回m
console.log(a2.next().value);//5 第三次返回max
console.log(a2.next().value);//3 第四次返回min
console.log(a2.next().value);//8 第5次返回sum
console.log(a2.next().value);//8 第6次返回return sum ；这里没有return时返回undefined
console.log(a2.next().value);//undefined
console.log(a2.next().value);//undefined

```

next()方法可以带一个参数，该参数会被当作上一条yield语句的返回值。

第一次使用next()方法时不能带有参数。
