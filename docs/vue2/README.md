# vue2特性

## vue介绍
Vue.js（/vjuː/，或简称为Vue）是一个用于创建用户界面的开源JavaScript框架，也是一个创建单页应用的Web应用框架。2016年一项针对JavaScript的调查表明，Vue有着89%的开发者满意度。在GitHub上，该项目平均每天能收获95颗星，为Github有史以来星标数第3多的项目同时也是一款流行的JavaScript前端框架，旨在更好地组织与简化Web开发。Vue所关注的核心是MVC模式中的视图层，同时，它也能方便地获取数据更新，并通过组件内部特定的方法实现视图与模型的交互PS: Vue作者尤雨溪是在为AngularJS工作之后开发出了这一框架。他声称自己的思路是提取Angular中为自己所喜欢的部分，构建出一款相当轻量的框架最早发布于2014年2月

## 核心特性
### 数据驱动
#### 数据驱动(MVVM)
`MVVM`即模型-视图-视图模型(Model-View-ViewModel)
- Model：模型层，负责处理业务逻辑以及和服务器端进行交互
- View：视图层：负责将数据模型转化为UI展示出来，可以简单的理解为HTML页面
- ViewModel：视图模型层，用来连接Model和View，是Model和View之间的通信桥梁
### 指令化
指令能够让我们更好的专注数据和逻辑，减少操作DOM
> 指令 (Directives) 是带有 v- 前缀的特殊属性作用：当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM

**常用指令**
- 条件显隐指令 `v-show`
- 条件渲染指令 `v-if`
- 列表渲染指令 `v-for`
- 属性绑定指令 `v-bind`
- 事件绑定指令 `v-on`
- 双向数据绑定指令 `v-model`

### 组件化
#### 什么是组件化
> 组件化开发就是把各种逻辑均抽象为一个统一的概念（组件）来实现开发的模式

#### 组件化优势
- 降低代码耦合
- 功能抽离整合，能够在项目中复用，提高功能代码维护性

## vue与传统开发区别
总结：
- vue更专注与数据驱动视图，界面变动是根据数据自动绑定出来的。
- 传统开发更多的是去操作DOM，vue更多的是操作数据。

## 参考导航
- [https://v2.cn.vuejs.org/v2/guide/]()