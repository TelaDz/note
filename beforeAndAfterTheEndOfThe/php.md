# PHP

## PHP 简介

1. 什么是 PHP

   - PHP 是 "PHP Hypertext Preprocessor" 的首字母缩略词
   - PHP 是一种被广泛使用的开源脚本语言
   - PHP 脚本在服务器上执行
   - PHP 没有成本，可供免费下载和使用

2. 什么是 PHP 文件

   - PHP 文件能够包含文本、HTML、CSS 以及 PHP 代码
   - PHP 代码在服务器上执行，而结果以纯文本返回浏览器
   - PHP 文件的后缀是 ".php"

3. PHP 能够做什么
   - PHP 能够生成动态页面内容
   - PHP 能够创建、打开、读取、写入、删除以及关闭服务器上的文件
   - PHP 能够接收表单数据
   - PHP 能够发送并取回 cookies
   - PHP 能够添加、删除、修改数据库中的数据
   - PHP 能够限制用户访问网站中的某些页面
   - PHP 能够对数据进行加密

---

## 基础 PHP 语法

PHP 脚本以 <?php 开头，以 ?>

PHP 文件通常包含 HTML 标签以及一些 PHP 脚本代码。

PHP 中的注释

    // 这是单行注释

    # 这也是单行注释

    /*这是多行注释块它横跨了多行*/

PHP 大小写敏感

    在 PHP 中，所有用户定义的函数、类和关键词（例如 if、else、echo 等等）都对大小写不敏感
    不过在 PHP 中，所有变量都对大小写敏感。函数名不区分大小写

在 php 中要写入

header("content-type:text/html;charset=utf-8");

---

## 变量

变量的定义

>变量以 $ 符号开头，其后是变量的名称 </br>
>变量名称必须以字母或下划线开头</br>
>变量名称不能以数字开头</br>
>变量名称只能包含字母数字字符和下划线（A-z、0-9 以及 _）</br>
>变量名称对大小写敏感（$y 与 $Y 是两个不同的变量）</br>

变量作用域
>local（局部）函数内的变量是局部变量</br>
>global（全局）函数外的变量是全局变量</br>
>static（静态）通常，当函数完成/执行后，会删除所有变量。不过，有时我需要不删除某个>局部变量。</br>

```php
function abc(){
static $a=5;
$a++;
echo $a;

abc();//6
abc();//7
abc();//8
//变量域的提示
//在函数内的变量，如果需要声明或者使用函数外的变量可以使用 global
$x=3;
  function abc(){
      global $x;
$x=6;
      echo $x;
}
abc();
echo $x;
//$GLOBALS[index] 的数组中存储了所有的全局变量。
$x=3;
  function abc(){
     $GLOBALS["x"]=6;
echo $GLOBALS["x"];
  }
  abc();
  echo $x;
//超全局变量
$GLOBALS
			$\_SERVER
$_SERVER //这种超全局变量保存关于报头、路径和脚本位置的信息。
			$\_REQUEST
$_REQUEST //用于收集 HTML 表单提交的数据。
					<html>
    <body>
        <form action="<?php echo $\_SERVER['PHP_SELF'];?>">
<!-- 利用$_SERVER获取当前脚本地址  -->
<input type="text" name="user">
<input type="submit" value="处理数据">
</form>
<?php
if($_REQUEST){
                $userName = $_REQUEST['user'];
                echo $userName;
}
?>
```

$_POST 广泛用于收集提交 method="post" 的 HTML 表单后的表单数据。

"POST" action="<?php echo $_SERVER['PHP_SELF'];?>">

利用$_SERVER获取当前脚本地址  -->

```php
        <?php
            if($_POST){
                $userName = $_POST['user'];
                echo $userName;
            }
         ?>
```

$_GET 也可用于收集提交 HTML 表单 (method="get") 之后的表单数据。</br>
$_FILES从客户计算机向远程服务器上传文件。</br>
通过环境方式传递给当前脚本的变量的数组。例如当前计算机名称</br>
$_COOKIE 变量用于取回 cookie 的值。</br>
存储和取回 session 变量的正确方法是使用 PHP $_SESSION 变量</br>

### 魔术变量
__LINE__
	返回当前代码在php中的行数,用于调试php脚本;
__FILE__
	返回当前文件的完整路径(绝对路径)
__FUNCTION__
	返回当前函数的函数名
__CLASS__
	返回当前的类名

***共有85个关键字，这些关键字都会实现一些功能***
