# vue中的v-if与v-show

## 相同点
v-if和v-show在效果上都可以控制元素是否显示，当条件成立时(true)，显示元素;当条件不成立时(false),不显示元素

基本用法
```js
// html
<div v-if="isshow">
<div v-show="isshow">

// script
data(){
    return { isshow: true }
}
```

## 主要区别
**控制手段不同：**

v-show隐藏则是为该元素添加display:none，dom元素依旧还在。v-if显示隐藏是将dom元素整个添加或删除

**编译过程不同：**

v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show只是简单的基于css切换

**编译条件不同：**

v-if是真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。只有渲染条件为假时，并不做操作，直到为真才渲染

**当使用在组件上时：**

`v-show` 由false变为true的时候不会触发组件的生命周期

`v-if` 由false变为true的时候，触发组件的`beforeCreate`、`created`、`beforeMount`、`mounted`钩子，由true变为false的时候触发组件的`beforeDestory`、`destoryed`方法


## 使用场景
v-show是通过css的display属性控制元素显隐，v-if是通过条件控制元素是否渲染。
在性能上，`v-if`有更高的切换消耗，`v-show`有更高的初始渲染消耗

若需要频繁地切换元素显隐状态，使用 v-show 较好

如果在运行时条件很少改变，使用 v-if 较好