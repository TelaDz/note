# Promise

用事件侦听和事件抛发 躲过 promise

```js
function loadImg(_src) {
  let p = new Promise(function(resolve, reject) {
    //resolve是个函数
    //reject 也是个函数
    let img = new Image();
    img.src = _src;
    img.onload = function(e) {
      // 加载成功执行reslove
      resolve(img);
    };
    img.onerror = function(e) {
      reject(_src + "加载失败");
      //加载失败执行reject
    };
  });
  return p;
}

//执行了resolve将不会执行reject, 执行了reject将不会执行resolve;
let p = loadImg("./img/a.jpg");
p.then(
  function(img) {
    // 是执行了resolve函数就会执行该函数
    console.log(img);
  },
  function(str) {
    // 执行了reject时,就会执行这个函数
    console.log(str);
  }
);

loadImg("./img/a.jpg")
  .then(function(img) {})
  .catch(function(str) {
    执行了reject时, 就会执行这个函数;
  });
```

链式调用 同步行为 1 2 3 4 5 6 7 8 9 10 .。。
