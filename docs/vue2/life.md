# vue2生命周期



## 什么是生命周期

每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做**生命周期钩子**的函数，这给了用户在不同阶段添加自己的代码的机会。



## 有哪些生命周期

::: danger
所有生命周期钩子的 this 上下文将自动绑定至实例中，因此你可以访问 data、computed 和 methods。这意味着你不应该使用箭头函数来定义一个生命周期方法 (例如 created: () => this.fetchTodos())。因为箭头函数绑定了父级上下文，所以 this 不会指向预期的组件实例，并且this.fetchTodos 将会是 undefined。
:::



| 生命周期      | 描述                        | 备注                                                    |
| :------------ | :-------------------------- | ------------------------------------------------------- |
| beforeCreate  | 组件实例被创建之初          |                                                         |
| created       | 组件实例已经完全创建        | 数据侦听、计算属性、方法、事件/侦听器的回调函数配置完毕 |
| beforeMount   | 组件挂载之前                | 相关的 `render` 函数首次被调用                          |
| mounted       | 组件挂载到实例上去之后      |                                                         |
| beforeUpdate  | 组件数据发生变化，更新之前  |                                                         |
| updated       | 组件数据更新之后            |                                                         |
| beforeDestroy | 组件实例销毁之前            | 常用于清除定时器等                                      |
| destroyed     | 组件实例销毁之后            |                                                         |
| activated     | keep-alive 缓存的组件激活时 |                                                         |



## 生命周期流程图

此图片来自官网，生命周期导航[[API — Vue.js (vuejs.org)](https://v2.cn.vuejs.org/v2/api/#选项-生命周期钩子)]

<img src="..\.vuepress\public\lifecycle.png" alt="lifecycle" style="zoom:30%;" />

## 数据请求在created和mouted的区别

`created`是在组件实例一旦创建完成的时候立刻调用，这时候页面`dom`节点并未生成；`mounted`是在页面`dom`节点渲染完毕之后就立刻执行的。触发时机上`created`是比`mounted`要更早的，两者的相同点：都能拿到实例对象的属性和方法。 讨论这个问题本质就是触发的时机，放在`mounted`中的请求有可能导致页面闪动（因为此时页面`dom`结构已经生成），但如果在页面加载前完成请求，则不会出现此情况。建议对页面内容的改动放在`created`生命周期当中。



## 参考导航

 vue2官方文档:  [Vue.js - 渐进式 JavaScript 框架 | Vue.js (vuejs.org)](https://cn.vuejs.org/)