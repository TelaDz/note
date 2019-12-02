# 基础

## 重点

计算属性和侦听器

计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。

侦听器观测某个值有变化才会侦听到

事件修饰符面试点

v-model

修饰符的原理

依赖注入

prop验证

混入 mixin 项目上的混乱

指令 --实用

px 转 vw 插件

postcss-px-to-viewport

yarn add -D postcss-px-to-viewport
