# Set 和 Map

## set

  1. Set 是一个不能有重复元素的集合，重复添加无效

  2. 数据不能重复，数据是松散解构，

  3. 不会因为添加删除改变而影响其他元素变化（不会有性能问题），是一个以数-据为列表的容器

  4. 可以遍历，有长度，只存储，没有键

  5. **set 没有 length，只有 size**

  6. set 尽量将数据类型统一

### let a=new Set()

***数组去重 这个知道就行，面试时不能用***

```js
console.log(a.has(div0)); //判断一个元素是否存在 has(value) 判断是否是成员
a.add(1); //添加一个元素 add(value)添加元素
a.delete(1); //删除某个元素 delete(value)删除元素
a.clear(); //清空 清除所有数据

let arr = [1, 2, 3, 1, 2, 3, 1, 2, 3];//数组去重
arr = Array.from(new Set(arr));
console.log(arr);
//或者
let sets = new Set(arr);
arr = Array.from(sets);
console.log(arr);
```

Array.from()方法从一个类似数组或可迭代对象中创建一个新的数组实例
let divs=document.getElementsByTagName("div");
let arr1=Array.from(divs);

## map

Map() 构造方法。

size 成员方法，返回map的大小。

基本上和hashMap一样

let a=new Map();

1. 设置键值对

- set(key,value)
  - 设置键值对
  - a.set("name","xietian");
  - a.set("age",30);
- get(key)
  - 获取键对应的值
  - a.get("age")
  - console.log(a.get("age"));
- has(value)
  - 判断是否是成员
  - 判断是否有键名
  - console.log(a.has("name"));
- size
  - 获取 map 的成员数
- clear()
  - 清除所有数据
  - a.clear();

- 遍历值 map.entries() 遍历map的键值对。

```js
for(let value of a.entries()){
    // 以数组的形式显示键值对,0是键,1是值
    console.log(value);
}
//ap[Symbl.iterator]()相当于map.entries()，也是对[key, value]进行遍历。
```

- 遍历键名

```js
for(let key of a.keys()){
    // 遍历所有的键名
    console.log(key);
}
```

- 遍历属性名

```js
for(let value of a.values()){
    // 遍历所有值,这里不关心键是什么,只列出有多少值
    console.log(value);
}
```

- forEach 遍历

```js
//遍历 map
a.forEach((v,k,list)=>{console.log(v,k,list)})//箭头函数

//forEach()方法
map.forEach(function(value, key) {
  console.log(key, value);
})
```

- for..of循环

```js
for(let obj of a){
    // 以数组的形式显示键值对,0是键,1是值
    console.log(obj);
}

keys = map.keys();
for (key of keys) {
  console.log(key);  // map.get(key)可得value值。
}

values = map.values();
for (value of values) {
  console.log(value);
}

entries = map.entries();
for ([key, value] of entries) {
  console.log(key, value);
}

```
