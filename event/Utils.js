//这是一个创建标签、鼠标拖拽、随机颜色的工具
var Utils = (function () {
    return {
        ce: function (type, style, parent, textContent, prop) {
            var elem = document.createElement(type);
            for (var p1 in style) {
                elem.style[p1] = style[p1];
            }
            for (var p2 in prop) {
                elem[p2] = prop[p2];
            }
            if (textContent) elem.textContent = textContent;
            if (parent) parent.appendChild(elem);
            return elem;
        },
        dragOn:function(elem){
            elem.self=this;//this是Utils对象,当前对象
            elem.style.position="absolute";
            elem.addEventListener("mousedown",this.mouseHandler);
        },
        dragOff:function(elem){
            elem.removeEventListener("mousedown",this.mouseHandler);
        },
        //  如果是在事件函数中this就是被侦听的对象,也就是调用该函数的addEventListener前面侦听的对象
        mouseHandler:function(e){
            if(e.type==="mousedown"){
                // this是针对mousedown事件进入这个函数侦听的对象,就是上面的elem
                e.preventDefault();
                 document.elem=this;
                 document.rect=this.parentElement ? this.parentElement.getBoundingClientRect() : {x:0,y:0};
                 document.point={x:e.offsetX,y:e.offsetY};
                //  如果调用对象的方法时,必须调用this.方法名,而这里的this就是这个对象
                // this.self就是Utils对象
                 document.addEventListener("mousemove",this.self.mouseHandler);
                 document.addEventListener("mouseup",this.self.mouseHandler);
            }else if(e.type==="mousemove"){
                // 针对mousemove事件,this是document
             //    console.log(this.elem);
                 //this是document,this.elem 是 document.elem--->div
                 this.elem.style.left=e.clientX-this.rect.x-this.point.x+"px";
                 this.elem.style.top=e.clientY-this.rect.y-this.point.y+"px";
                //  console.log(this.elem.offsetLeft,this.elem.offsetTop);
            }else if(e.type==="mouseup"){
                // 针对mouseup事件,就是mouseup事件调用mousedown中this,也就是elem
                 document.removeEventListener("mousemove",this.self.mouseHandler);
                 document.removeEventListener("mouseup",this.self.mouseHandler);
            }
        },
        randomColor:function(){
            var col="#";
            for(var i=0;i<6;i++){
                col+=Math.floor(Math.random()*16).toString(16);
            }
            return col;
        }
    }
})();