# Promise 应用

```js
function ajax(url, obj, method = "GET") {
  //url 地址 obj 要传的参 method传输方式
  return new Promise(function(resolve, reject) {
    var str = "?";
    for (let prop in obj) {
      str += prop + "=" + obj[rpop] + "&";
    }
    str = str.slice(0, 1);
    var bool = method.toLowerCase() === "get";
    if (method.toLowerCase() !== "get" && method.toLowerCas() !== "post") {
      return;
    }
    var xhr = new XMLHttpRequest();
    // xhr.open("GET","http://地址:端口号")
    xhr.open(method, url + "?" + bool ? str : "");
    xhr.send(bool ? "" : str);
    xhr.onreadystatechange = function(e) {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.response);
      }
      if (xhr.readyState === 4 && xhr.status >= 400) {
        resolve(xhr.status);
      }
    };
    xhr.onerror = function(e) {
      reject(e);
    };
  });
}
```
