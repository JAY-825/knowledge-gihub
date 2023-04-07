

# vue组件通信

vue组件间通信是一大考点，也是开发中常使用的的。在这里主要讲述vue2中的组件通信方式，通信方式的总结将放在vue3组件通信章节中。



## 组件通信方式

在vue中，每一个.vue文件都可以被看作是一个组件，组件通信就是指的各组件之间的信息传递，报错数据的传递、事件的触发等等。组件间关系通常描述为父子组件，兄弟组件、祖孙组件和非关系组件。

### 常用组件通信方式

vue中常见的几种组件通信解决方案

| 通信方式                  | 备注                   |
| ------------------------- | ---------------------- |
| 通过 props 传递           | 常用于父子             |
| 通过 $emit 触发自定义事件 | 常用于父子             |
| 使用 ref                  | 常用于父子             |
| EventBus(全局事件总线)    | 全局使用               |
| $parent 或$root           | 常用于有共同祖辈的组件 |
| attrs 与 listeners        | 常用于祖孙             |
| Provide 与 Inject         | 常用于祖孙、父子       |
| Vuex                      | 全局状态管理，全部适用 |

> 组件通信在条件成立的情况下都可以使用，这里讲述的是常见组件关系间的常用组件通信方式，并不代表唯一性。

#### 父子组件通信

- `props`传递

props是最常用的父组件传递数据给子组件。

使用：

```js
// fu.vue
<template>
	<zi name="zhangsan" age=32></zi>    
</template>
```

父组件中将需传递的数据直接写到子组件标签里，子组件再定义接收

```js
// zi.vue
props: {
    // 定义方式一
    name: String,
    // 定义方式二，可以限制接收的类型\默认值\是否必需
    age: {
        type: Number,
        default: 18,
        require: true
    }   
}
```

**父组件通过props传递给子组件的数据，不允许子组件直接修改。**

子组件想要修改父组件传递的数据可以使用`$emit`触发自定义事件来修改

- `$emit`

适用于子组件传递(或修改)数据给父组件。

```js
// fu.vue
<zi @log="showlog"></zi>  

methods:{
    showlog(name){
        console.log(name)
        ...
    }
}
```

```js
// zi.vue
<button @click="show"></button>

methods:{
    show(){
        // 触发子组件实例绑定的自定义事件
        // 参数(子组件实例绑定的事件名，参数...)
        this.$emit('log','lisi')
    }
}
```



- `ref`

  父组件在使用子组件时设置ref，这样父组件就可以通过 this.$refs拿到子组件实例，从而可以获取数据。

  ```js
  // fu.vue
  <zi ref="child" />
      
  // script获取子组件实例
  this.$refs.child
  ```

#### 兄弟组件间通信

- EventBus(全局事件总线)

使用场景：兄弟组件传值

创建一个中央事件总线`EventBus`，兄弟组件通过`$emit`触发自定义事件，`$emit`第二个参数为传递的数值，另一个兄弟组件通过`$on`监听自定义事件。



```js
// main.js
//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线
	},
})
```



#### 祖孙组件通信

- $parent或$root

通过共同祖辈`$parent`或者`$root`搭建通信桥连

兄弟组件

```js
this.$parent.on('hello',"this.add")
```

另一个兄弟组件

```js
this.$parent.emit('hello')
```



- $attrs 与$ listeners

适用场景：祖先传递数据给子孙

包含了父级作用域中不作为 `prop` 被识别 (且获取) 的特性绑定 ( class 和 style 除外)。

可以通过 `v-bind="$attrs"` 传⼊内部组件

```js
// child：并未在props中声明foo  
<p>{{$attrs.foo}}</p>  
  
// parent  
<HelloWorld foo="foo"/>  
```

```js
// 给Grandson隔代传值，communication/index.vue  
<Child2 msg="lalala" @some-event="onSomeEvent"></Child2>  
  
// Child2做展开  
<Grandson v-bind="$attrs" v-on="$listeners"></Grandson>  
  
// Grandson使⽤  
<div @click="$emit('some-event', 'msg from grandson')">  
{{msg}}  
</div>  
```



- provide 与 inject

在祖先组件定义`provide`属性，返回传递的值

在后代组件通过`inject`接收组件传递过来的值

```js
// zu.vue
provide(){  
    return {  
        foo:'foo'  
    }  
}  
```

```js
// sun.vue
inject:['foo'] // 获取到祖先组件传递过来的值  
```



> vuex单独开辟一节讲述