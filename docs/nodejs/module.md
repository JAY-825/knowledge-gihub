# Node中的模块

node中的js规范是`common.js`，并不是js官方的js规范，而是属于一种社区规范。

## 什么是模块？



## node中的模块分类

node.js中根据模块来源不同，将模块分成了三大类：

- 内置模块 --由node.js官方提供，无需下载依赖包
- 自定义模块 --用户自己创建的js文件
- 第三方模块 --第三方开发 ，使用前需要下载依赖包

**在node.js中，模块均使用`require()`导入，且导入模块的结果永远以module.exports指向的对象为准**



## 模块作用域

定义：在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问，这种模块级别的访问限制，就叫做模块作用域

好处：防止全局变量污染问题



## CommonJS模块化规范

common.js规定了模块的特性和各模块之间如何相互依赖，node.js遵循了common.js规范

**common.js模块化规范**

- 每个模块内，`module`代表当前模块
- module变量是一个对象，它的`exports`属性是对外的接口。即`module.exports`
- 一个模块内，可以多次使用`exports`，但是`module.exports`只有一个
- `require()`用于加载模块；加载模块时，其实是加载module.exports。



## module.exports和exports

`module.exports`是一个模块中最终导出的对象，`exports`是向外界共享的模块成员

**module.exports和exports指向同一个对象，但最终共享的结果，以module.exports指向的为准**

> 在使用时，尽量避免同时使用exports和module.exports

module.exports使用：

```js
// demo.js
// 方式1
module.exports.name = 'zhangsan'
module.exports.age = 18

// 方式2 [常用]
module.exports = {
    name: 'lisi'
}
```

exports使用：

```js
// 方式1
exports.username = '张三'
exports.age = 18
// 方式2--常用
exports = {
    rolename : '系统管理员'
}
```

加载模块

```js
// 加载时注意加载模块的路径
const demo = require('./demo.js')
```

