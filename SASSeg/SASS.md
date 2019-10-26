# Ruby

## 安装

### ruby

- sass 基于 Ruby 语言开发而成，因此安装 sass 前需要安装 Ruby
- 安装过程中请注意勾选 Add Ruby executables to your PATH 添加到系统环境变量。

### SASS 安装

- gem install sass
- gem install compass

### SASS 转换 CSS

- 单文件 sass input.scss output.css
- 多文件 sass --watch assets/sass:dist/sass

## sass 和 scss

### sass

- Sass 是一门高于 CSS 的元语言，它能用来清晰地、结构化地描述文件样式，有着比普通 CSS 更加强大的功能
- 扩展名是.sass
- 书写：

$color:red
div
:color $color
span
color: $color
这两种写法都是可以的，但是注意不能使用{}和；
:color $color 指出该样式是这个元素的
color: $color 普通css写法

### scss

- Scss 是 Sass 3 引入新的语法，是Sassy CSS的简写是CSS3- 语法的超集，也就是说所有有效的CSS3样式也样适合于Sass
- 扩展名是.scss
- 书写
$color:red;
  div{
  color: $color;
}
span{
  color: $color;
  }
  贴近于 CSS 的写法
  Scss 就是 Sass 的升级版

## sass 的语法

### 变量的声明
  $color:red;
$width:300;
  div{
  color: $color;
   width: $width+px;
  }
  span{
  color: $color;
}

### 选择器的嵌套

$color_1:red;
  $color_2:blue;
div{
  span{color: $color_1}
  div{color: \$color_2}
  }

### 父选择器

  span{
  color: red;
  &:hover{
  color: blue;
  }
  }
  这里的&就是 span 自身这个选择器给它自己加了 hover

### 各种选择器的嵌套

  article {
  ~ article { border-top: 1px dashed #ccc }

> section { background: #eee }
> dl > {

    dt { color: #333 }
    dd { color: #555 }

}
nav + & { margin-top: 0 }
}

### 属性嵌套

nav {
border: {
style: solid;
width: 1px;
color: #ccc;
}
}
这是嵌套了属性，border-style 被拆分

### 导入文件

$r:50px;
div{
  width: $r;
height: $r;
  border-radius: $r/2;
}
上面这个文件起名叫 a.scss
在 main.scss 中如下写入
@import "a";
div{
span {color: red}
& {@import "a";}
}
这里导入以后就会有把 a 中的定义内容导入
如果写在标签中，那么导入的内容将会作为这个标签的后代元素样式进入

### 混合器

普通类型混合器
$r:50px;
@mixin divRadius{
  width: $r;
height: $r;
  border-radius: $r/2;
}

div{
@include divRadius;
}
这里的@mixin 定义语句块，@include 调用语句块
传参混合器
@mixin divRadius($r){
  width: $r;
height: $r;
  border-radius: $r/2;
}

div{
@include divRadius(50px);
div{
@include divRadius(25px)
}
}
混合器传参的默认值
@mixin divRadius($r:100px){
  width: $r;
height: $r;
  border-radius: $r/2;
}

div{
@include divRadius;
div{
@include divRadius(50px)
}
}

### 继承

.div0

{
$r:100px;
  width: $r;
height: $r;
  border-radius: $r/2;
}

div{
div{
@extend .div0;
}
}

    	这里使用@extend 继承了类div0的样式
