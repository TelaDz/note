# JSON

JSON（JavaScript Object Notation）以纯文本结构组织所要传送的数据，数据内容包括字符串、数字、数组和对象等，由于JSON易读以及纯文本格式的特性，可以非常容易地与其他程序进行沟通与数据交换。

JSON 文件的文件类型是 ".json"

JSON的数据结构通过大括号、中括号、逗号和冒号来组织数据。

冒号代表的是一个键值（key）对应一个值（value）的参数。

以成绩表为例，有个学生的姓名叫小陈，英文成绩为75分，数学 成绩为80分，就必须用“键：值”来表达这些信息之间的关联，而字符串部分要用双引号来表示，例如：

>"姓名":"小陈"</br>     
>"英文":75</br>     
>"数学":80</br>     

大括号内代表的是“对象（object)”，对象代表的是一系列“键：值”的集合，同样使用成绩表做示范，我们将一个学生的完整数据当作一个对象，内容包括学生姓名、英语成绩、数学成绩，不同的信息间用逗号隔开，而这里要特别注意“键”一定要声明成字符串，也就是一定要加上“双引号”。

>{“姓名”:”小陈”,”英文”:75,”数学”:80}

中括号内代表的是“数组（array)”。数组内可以存放数字、文字、布尔值、数组、对象等变量，无论是同时存放同一种性质的变量，或是混合使用都可以，同样以逗号隔开每个变量。因此可以用数组声明以下的数据结构：

>[</br>     
>[20,30,40],</br>     
>["小陈",75,80],   </br>      
>[{"姓名":"小陈","英文":75,"数学":80},    </br>      
>{"姓名":"小刘","英文":88,"数学":91}]</br>     
>]</br>     

然而与对象不同的地方，数组内以逗号隔开的部分无法放入“键：值”的格式,只能在数组里使用{}设置键：值的格式。

[{“name”:”王五”}]

```js
for in  //关键字
 for ( 变量 in  对象) 
{ 
//执行语句; 
 }
delete://用于删除
```
JSON字符串:    
var str1 = '{ "name": "cxh", "sex": "man" }';
var obj = eval('(' + str + ')');//由JSON字符串转换为JSON对象

>var u = eval('('+user+')');</br>     
>为什么要 eval这里要添加('('+user+')') ”呢？</br>     
>原因在于：eval本身的问题。 由于json是以”{}”的方式来开始以及结束的，在JS中，它会被当成一个语句块来处理，所以必须强制性的将它转换成一种表达式。</br>     
>加上圆括号的目的是迫使eval函数在处理JavaScript代码的时候强制将括号内的表达式（expression）转化为对象，而不是作为语句（statement）来执行。举一个例子，例如对象字面量{}，如若不加外层的括号，那么eval会将大括号识别为JavaScript代码块的开始和结束标记，那么{}将会被认为是执行了一句空语句。所以下面两个执行结果是不同的：</br>     
>alert(eval("{}"); // return undefined</br>     
>alert(eval("({})");// return object[Object]</br>     

**eval()方法是动态执行其中字符串（可能是js脚本）的，这样很容易会造成系统的安全问题** 
所有脚本
或者
var obj = JSON.parse(str); //由JSON字符串转换为JSON对象(常用)


---

## 转换

```js
var str = '{"a":1,"b":"hello","c":[1,2,3,4]}';
console.log(JSON.parse(str));
//JSON.parse(JSON 字符串) //将 JSON 字符串转换为对象

let obj = { a: 1, b: 2, c: [2, 3, 4], d: { a: 1, b: 2, c: { a: 1, b: 2 } } };
//JSON.stringify(对象)将对象转换为JSON字符串
console.log(JSON.stringify(obj));
```

## 比较

```js
var obj={a:1,b:2};
var obj1={a:1,b:2};
console.log(obj===obj1);  //false
console.log(JSON.stringify(obj)===JSON.stringify(obj1));  //true

var  arr=[1,2,3,4];
var arr1=[1,2,3,4];
console.log(JSON.stringify(arr)===JSON.stringify(arr1)); //true
console.log(arr.toString()===arr1.toString()); //true
console.log(arr===arr1); //false 不能进行此种比较 这种比较方式是错误的，数组放在堆中，有引用地址 引用地址不同不能进行比较
```

## 深复制

```js
let obj={a:1,b:2,c:[2,3,4],d:{a:1,b:2,c:{a:1,b:2,d:new Date()}}};
let obj1=JSON.parse(JSON.stringify(obj));
obj.d.c.a=100;
console.log(obj,obj1);
//{a: 1, b: 2, c: Array(3), d: {…}} {a: 1, b: 2, c: Array(3), d: {…}}
//展开
//a: 1
//b: 2
//c: Array(3)
//0: 2
//1: 3
//2: 4
//length: 3
//__proto__: Array(0)
//d:
//a: 1
//b: 2
//c: {a: 100, b: 2, d: Wed Sep 18 2019 21:16:55 GMT+0800 (中国标准时间)}
```

## 解构赋值 将JSON字符串解构变量

```js
var str='{"a":1,"b":"hello","c":[1,2,3,4]}';
let {a,b,c:[d,e,f,g]}=JSON.parse(str);
console.log(a,b,d,e,f,g);
//1 "hello" 1 2 3 4
//解构赋值仅适用于对象或者类的静态方法和属性
  //Array.from();
  //Array.isArray();
let {from,isArray}=Array;
let divs=document.createElement("div");
let arr=from(divs)
console.log(isArray(arr));
//true;
```
