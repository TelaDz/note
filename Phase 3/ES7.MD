# ES7

ES7在ES6的基础上添加三项内容：求幂运算符（**）、Array.prototype.includes()方法、函数作用域中严格模式的变更。

Math.pow(3, 2) === 3 ** 2    // 9

Array.prototype.includes()

数组原型的方法,查找一个数值是否在数组中，只能判断一些简单类型的数据，对于复杂类型的数据无法判断。该方法接受两个参数，分别是查询的数据和初始的查询索引值。

[1, 2, 3].indexOf(3) > -1 // true

等同于：

[1, 2, 3].includes(3) // true

两者的优缺点和使用场景

简便性

includes方法略胜一筹，直接返回bool。indexOf需要返回数组下标，我们需要对下标值在进行操作，进而判断是否在数组中。

精确性

两者这都是通过===进行数据处理，但是对NaN数值的处理行为不同。includes对NaN的处理不会遵循严格模式去处理，所以返回true。indexOf会按照严格模式去处理，返回-1。

[1, 2, NaN].includes(NaN)     // true

[1, 2, NaN].indexOf(NaN)  // -1
​
使用场景

如果仅仅查找数据是否在数组中，建议使用includes，如果是查找数据的索引位置，建议使用indexOf更好一些
