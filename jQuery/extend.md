# extend

$("div").constructor===$

var arr=[1,2,3,4];
var obj={a:1,b:2,c:3};
// var a=$.map(arr,function(index,item){
// return item+1;
// })
// var o=$.map(obj,function(prop,value){
// return value+10;
// })
// console.log(o);

// var a=$.map($("div"),function(index,item){
// return  "`<div></div>`";
// return $(item).text("nihao");
// })
// console.log(a);


// var a=$.filter(arr,fu
// if(item>2) retur
// });
// console.log(a);
// var a=$.filter($("div"
// // return Number
// return item.clas
// });
// console.log(a);
// var o=$.filter(obj,f
// return value>1;
// });
// console.log(o);

```js
$.extend((function(){
    return {
        //封装一种随机颜色
        randomColor:function(){
            var col="#";
            for(var i=0;i<6;i++){
                col+=Math.floor(Math.random()*16).toString(16);
            }
            return col;
        },
        //封装一个map效果
        map:function(list,fn){
            if(list.constructor===Array || list.constructor===$){
                var lists=[];
                for(let i=0;i<list.length;i++){
                    var value=fn(i,list[i]);
                    if(list.constructor===$ && value.constructor===String)value=$(value);
                    if(value.constructor===$) value=value[0];
                    lists.push(value);
                }
                if(list.constructor===Array) return lists;
                return $(lists);
            }
            if(list.constructor===Object){
                var obj={};
                for(let prop in list){
                   var value=fn(prop,list[prop]);
                   obj[prop]=value;
                }
                return obj;
            }
        },
        //封装一个筛选效果
        filter:function(list,fn){
            var bool;
            if(list.constructor===Array || list.constructor===$){
                var lists=[];
                for(let i=0;i<list.length;i++){
                   bool=fn(i,list[i]);
                   if(bool) lists.push(list[i]);
                }
                if(list.constructor===Array) return lists;
                return $(lists);
            }
            if(list.constructor===Object){
                var obj={};
                for(let prop in list){
                    bool=fn(prop,list[prop]);
                    if(bool) obj[prop]=list[prop];
                }
                return obj;
            }
        }
    }
})());
```