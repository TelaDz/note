
// # 题目1: 删除排序数组中的重复项

// # 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
// # 示例:

// # 给定 nums = [0,0,1,1,1,2,2,3,3,4],
// # 函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
// # 你不需要考虑数组中超出新长度后面的元素
// /**
//  * 
//  * 

let  nums = [0,0,1,1,1,2,2,3,3,4]


let a=new Set([...nums])
console.log(a);
var twoSum = function(nums, target) {
  let count=1;
  let len=nums.length;
  if(len<=1){
    return len
  }else{
    for(var i=0;i<len;i++){
      if(nums[count-1]!=nums[count]){
        nums[count++]=nums[i]
      }
    }
  } 
  return count
};
let b=twoSum(nums)


function unique1(array){
  var n = []; //—个新的临时数组
  //遍历当前数组
  for(var i = 0; i < array.length; i++){
    //如果当前数组的第i已经保存进了临时数组，那么跳过，
    //否则把当前项push到临时数组里面
    if (n.indexOf(array[i]) == -1) n.push(array[i]);
  }
  return n;
}


function unique4(array){
  array.sort(); 
  var re=[array[0]];
  for(var i = 1; i < array.length; i++){
    if( array[i] !== re[re.length-1])
    {
      re.push(array[i]);
    }
  }
  return re;}
unique4(nums)

var  nums = [0,0,1,1,1,2,2,3,3,4]
var threeSum=function(nums){
  nums.forEach((item,index)=>{
    if(item==nums[index]){
      nums.splice(index,1)

    }
  })
  return nums.length
}
// console.log(threeSum(nums),nums);

let abc=[1,1,2,7,4,3,1,5,0,4,6,5,3,1]

var fourSum=function(nums,target){
  // nums.sort();
  for(let i=0;i<nums.length;i++){
    if(nums[i]==nums[i+1]){
      nums.splice(i,1)
      fourSum(nums)
    }
  }
  target=nums.length
  return target
}

// console.log(fourSum(abc),abc);

var fiveSum=(nums,target)=>{
  nums.map((item,index)=>{
    if(item==nums[index]){
      console.log(item,index);
      nums.splice(index,1)
    }
  })
}

fiveSum(nums)

var str="abcdefg";
console.log(str.slice(4));applicationCache

// 选择2-3个你熟悉的题目进行回答
/**
 * 题目： 解析Cookie字符串转化为对象
 * 输入：'foo=bar; equation=E%3Dmc%5E2'
 * 输出：{ foo: 'bar', equation: 'E=mc^2' }
 * 测试: parseCookie('foo=bar; equation=E%3Dmc%5E2')
 */
function parseCookie(str) {

} 
/**
 * 题目： 找出对象中符合要求的项
 * 输入： 原始对象：{ a: 1, b: '2', c: 3 }， 筛选条件：x => typeof x === 'string'
 * 输出：{ 'b': '2' }
 * 测试: pickBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')
 */
function pickBy(obj, fn) {

}
/**
 * 题目： 字符串中划线转驼峰式
 * 输入： 'this-is-a-selector'
 * 输出： 'thisIsASelector'
 * 测试： camelize('this-is-a-selector') === 'thisIsASelector'
 */
/**
 * 
 */
function camelize(str) {
  let newstr=''
  let arr=str.split('-')
  console.log(arr);
  newstr+=arr[0]
  for(let i=1;i<arr.length;i++){
    newstr+=arr[i].slice(0,1).toUpperCase() + arr[i].slice(1);
  }
  return newstr
}
console.log(camelize('this-is-a-selector'))
/**
 * 题目：合并多个对象
 * 输入：{ a: [1,2,3], b: { name: 'b'} }, { a: [4], b: { age: 18 } }
 * 输出：{ a: [1,2,3,4], b:{name:'b', age: 18}}
 * 测试: merge({ a: [1,2,3], b: { name: 'b'} }, { a: [4], b: { age: 18 } })
 */
console.log(merge({ a: [1,2,3], b: { name: 'b'} }, { a: [4], b: { age: 18 } }))
function merge(obj1,obj2) {
  let obj={};
  let key=[]
  for(let item in obj1){
    if(obj1[item]!=undefined){
      key.push(item)
      
    }else{
      
      obj[item]=obj1[item]
    }
  }
  for(let item in obj2){
    if(key.indexOf(item)==-1){
      obj[item]=obj1[item]
    }
  }
  for(let item in key){
    
    if(obj1[key[item]] instanceof Object){
      obj[key[item]]=Object.assign({},obj1[key[item]],obj2[key[item]])
    }
    if(obj1[key[item]] instanceof Array){
     
      obj[key[item]]=[...obj1[key[item]],...obj2[key[item]]]
      console.log(obj[key[item]],...obj1[key[item]],...obj2[key[item]])
    }
  }
  return obj
}

/**
 * 题目：数组去重
 * 输入： [1, 2, 1, 3, 4, 1, 2]
 * 输出: [1,2,3,4]
 * 测试: handle([1, 2, 1, 3, 4, 1, 2])
 */
// const handle = (arr) => {
//   arr.forEach((item,index)=>{
//       if(arr[index]==item){
//         arr.splice(index,1)
//       }
//     } 
//    )
//    return arr
// }

const handle = (arr)=>{

  let arra=new Set(arr)
  return [...arra]
}

// let arr=[1, 2, 1, 3, 4, 1, 2]
console.log(handle([1, 2, 1, 3, 4, 1, 2])); 

// var a=undefined; b=NaN 
// var a= 123; b=NaN
// var a =undefined , b =NaN
var a=NaN , b='undefined'
console.log(a+b);

for (var i = 0; i < 5; i++) {
  setTimeout(function () { console.log(i); }, 0);
}

www.toutiao.com?a=1&b=2

封装成对象

实现垂直居中 

new Promise(resolve=>{
  console.log(1);
  setTimeout(resolve,100,2)
  console.log(3);

}).then((data)=>{
  console.log(data);
})

function fun(...dim){
  const [layer,...d]=dim
  return d.length?Array(layer).fill(0).map(_ =>fun(...d)):Array(layer)
}

fun(2,3,4)

