# setter 和 getter 访问器

用 obj 直接设置的方式可以直接获取内容

(...) 就是通过 set get 方法设置的

## set get ES6 后才可以用

```js
var obj = {
  set num(value) {
    //ES6中才能这么写
    this._nume = value;
  },
  get num() {
    return this.num;
  },
  a: function() {
    //a 和 b写法是一样的
  },
  b() {}
};
//当创建对象时 可以直接使用set和get创建访问器
```

```js
var obj={};
Object.defineProperty(obj,"num",{
    //在已有的对象中添加set和get访问器属性
   set:function(value){
        this._nume=value;
    },
    get:function()(){
        return this.num;
    },

    }
})
//缺陷 不能writable和value连用
```

ES6 类中增加

```js
class Box {
  constructor() {}
  set num(value) {
    this._nume = value;
  }
  get num() {
    return this.num;
  }
  static set nums(value) {
    Box._nums = value;
  }
  static get nums() {
    //静态常量中 不要写this
    if (!Box.nums) Box.nums = 0;
    return Box.nums;
  }
}
```

属性的设置和函数的执行

- **set 函数的参数有且只有 1 个 必须有参数**

这个参数就是设置属性等于值时,这个设置的值(**value**)

- **变量前面加个\_表示临时存储**

所有属性后面有=的 就以为**设置**该属性，也就会调用 set 方法

所有属性后面没有=的 就意味**调用**该属性 也就会调用 get 方法

一旦使用 set get 这种访问器属性 该属性**不具备属性的存储功能**

## 数据驱动方式

setter/getter 访问器属性

setter 访问者

getter 获取者

尽量不要使用 因为要创建 1 个临时变量 ?

如果对象中只有一个 set 没有 get 那就意味着该属性是只写属性 (只能写不能读)反之 get 只能读不能写

只读属性如果设置了值 在严格模式下会报错

**_设置静态常量_**

static get CHANGE_FINISH_EVENT="change_finish_event";//可以利用 get 方法来设置只读属性或者常量

set 设置只写不读或不需要返回

注意：

- 如果对象中只有一个 set,没有 get,该属性是**只写**属性

- 如果对象中只有一个 get,没有 set,该属性是**只读**属性
