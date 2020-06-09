const obj={
  left:{
    left:{
      val:1
    },
    right:{
      left:{
        val:3
      },
      right:{val:5},
      val:9
    },
    val:6
  },
  rhight:{val:7},
  val:4
}

function data(obj){
  let t= JSON.stringify(obj);
  console.log(t);
  if(t.indexOf('5')>0){
    console.log('1');
  }
}
data(obj)