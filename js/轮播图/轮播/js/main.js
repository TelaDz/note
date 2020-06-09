//静态的方法，类名是说明这一系列方式是什么类别的
//不能实例化，执行方式
// 类名.属性名，
// 类名.方法名
/*var 类名=类名 || (function () {
        return
        {
            属性名:属性值,
            方法名:函数
        }
    })()

//面向对象中可以被实例化的类var obj=new 类名();
// 实例化后可以执行
// obj.属性名,
// obj.方法名()
function 类名() {
   this.abc=3;
    img.addEventListener("load",加载后事件函数.bind(this))
}

类名.prototype={
    属性名:属性值,
    方法名:函数,
    加载后事件函数:function () {
        // this==img 绑定前
        // this==类实例化对象，this  绑定后
    }
};*/

(function Main() {
    var _info=0;
    var ab=0;

    function Main() {
        this.sum=0;
    }
    Main.prototype={
       /* set info(value){
            if(value>=10){
                _info=value;
            }
        },*/
        get info(){
            return _info;
        },
        info1:10,
        info2:function (value) {
           if(value>=10){
               this.sum=this.sum+value;
           }
        }
    };
    window.Main=Main;
})();

