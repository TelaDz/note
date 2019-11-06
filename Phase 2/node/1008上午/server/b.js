// 导出对象  类似于ES6中 export default 
module.exports=(function(){
    return {
        a:1,
        play:function(){
            console.log(this.a);
        }
    }
})();