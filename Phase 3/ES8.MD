# ES8

async、await异步解决方案

提出场景有两个：JS是单线程、优化回调地狱的写法。

在ES6中为了解决回调的书写方式，引入了Promise的then函数，业务逻辑很多的时候，需要链式多个then函数，语义会变得很不清楚。

ES8中把async和await变得更加方便，它其实就是Generator的语法糖。async/await是写异步代码的新方式，以前的方法有回调函数和Promise。相比于Promise，它更加简洁，并且处理错误、条件语句、获取中间值都更加方便。

