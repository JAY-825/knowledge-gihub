# 函数新增扩展



## 参数

函数的参数是默认声明的，不需要再次显式声明。

**函数参数是可以设置默认值的**，不过设置默认值的参数顺序要尽量靠后

```js
function log(x, y = 'World') {
  console.log(x, y);
}
```

函数的参数可以配合结构赋值使用（当函数参数为对象时才能解构）

```js
function foo({x, y = 5}) {
  console.log(x, y);
}
foo({}) // undefined 5
foo({x: 1}) // 1 5
foo({x: 1, y: 2}) // 1 2
foo() // TypeError: Cannot read property 'x' of undefined

function foo({x, y = 5} = {}) {
  console.log(x, y);
}
foo() // undefined 5
```



## 属性

- **length属性**

函数的length属性将返回**没有设置默认值的参数个数**

```js
(function( a ) {}).length  // 1

// 返回的是没有设置默认值的参数，设置了默认值的不计入
(function( a=1, b=2 ) {}).length  // 0

// 注意：如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了
(function( a,b=2,c ) {}).length  // 1

// rest 参数也不会计入length属性
(function( ...args ) {}).length  // 0
```

- **name属性**

返回该函数的函数名

```js
var f = function () {};

// ES5
f.name // ""

// ES6
f.name // "f"
```

如果将一个具名函数赋值给一个变量，则 `name`属性都返回这个具名函数原本的名字

```js
const bar = function baz() {};
bar.name // "baz"
```

```
Function`构造函数返回的函数实例，`name`属性的值为`anonymous
(new Function).name // "anonymous"
```

`bind`返回的函数，`name`属性值会加上`bound`前缀

```javascript
function foo() {};
foo.bind({}).name // "bound foo"
(function(){}).bind({}).name // "bound "
```



## 箭头函数

箭头函数是es6一大亮点，箭头函数在实际开发中很常用，十分重要。要熟悉箭头函数基本使用，还有其`this`的指向问题。

```js
// 箭头函数基础写法
let a = (x)=>{
    console.log(x)
}
a(2) // 2

// 相当于：
let a = function(x){
    console.log(x)
}
```

箭头函数最基础的写法就是`()=>{}`，但其写法还有更多简写

```js
// 当接收多个参数，代码块只返回一条语句时，可以简写成：
lat f = (num1,num2)=> num1+num2

// 当接收1个参数，代码块只返回一条语句时，可以简写成：
lat f = num=> num*2

// 当返回值为一个对象，进行简写时，需要加上小括号
let f = obj => ({ id: id, name: "zhangsan" });

// 上述写法相当于：
function f(x,y) {
    // return x+y
    // return x*2
    return { id: id, name: "zhangsan" }
}
```

**箭头函数的this指向问题**

> 箭头函数体内的`this`对象，就是定义时所在的对象，而不是使用时所在的对象。

普通函数：this指向**使用时**所在的对象，通常是谁调用其this就指向谁。

箭头函数：this指向**定义时**所在的对象。

```js
let ad = document.getElementById('ad');
ad.addEventListener('click', function() {
   setTimeout(() => {
       console.log(this)  // 这里的this指向ad
   }, 2000);
});
/*
	箭头函数声明时所在的作用域是function函数内，而function的this指向其调用者ad，所以箭头函数的this也指向ad
	在定时器回调函数中，其this指向的是window，使用箭头函数更容易得到我们想要的this指向
*/
```



**箭头函数注意事项**

- 函数体内的`this`对象，就是定义时所在的对象，而不是使用时所在的对象
- 不能当作构造函数，也就是说，不可以使用`new`命令，否则会抛出一个错误
- 不可以使用`arguments`对象，该对象在函数体内不存在。如果要用，可以用 `rest` 参数代替
- 不可以使用`yield`命令，因此箭头函数不能用作 Generator 函数

**箭头函数常见使用场景**

- 箭头函数适合与 this 无关的回调。如定时器，数组的方法回调
- 不适合与 this 有关的回调。如dom元素事件回调，对象的方法