# var、let和const

## var

在ES5中，我们声明变量都是用的`var`，而var声明的变量是全局变量，也是顶层变量。因为在es5中，顶层对象和全局变量是等价的。

> 在浏览器中，顶层对象是window；在node环境中，顶层对象是global对象

**var的特点**

- 使用var声明变量存在变量提升的情况

  即在变量声明语句之前使用变量，将会得到undefined

```js
console.log(a)
var a = 'hello world'
```

上述打印语句结果为`undefined`，这是因为var存在变量提升的情况，在编译阶段，会变成以下执行：

```js
var a;
console.log(a);
a = 'hello world'
```

- 使用var声明的变量多次声明，后面声明的将会覆盖前面声明的

```js
var a = 10;
var a = 20;
console.log(a) // 20
```

- 在函数内部使用var时，变量是局部的；不使用var时，变量时全局的

```js
var a = 10;

// 使用var
function log(){
    var a = 20;
}
log();
console.log(a) // 20

// 不使用var
function log2(){
    a = 100
}
log2()
console.log(a) //100
```



## let

`let`是`ES6`新增的命令，用来声明变量，用法类似于`var`，但是所声明的变量，只在`let`命令所在的代码块内有效

**let的特点**

- let不存在变量提升，存在`暂时性死区`

暂时性死区指的是，变量在声明前，该变量都不可用。

```js
console.log(a) // 报错ReferenceError
let a = 10;
```

- let具有作用域

区别于var是全局变量，let声明的变量具有作用域，在作用域外无法使用。

```js
{
    let a = 20
}
console.log(a) // ReferenceError: a is not defined.
```

> 作用域通俗来说，一般就是指的大括号。只能在当前作用域内使用，包括其子作用域。

- 在相同作用域内，不允许重复声明变量

区别于var声明变量存在覆盖现象，let在**相同作用域下重复声明**变量将会报错。

```js
let a = 20
let a = 30
// Uncaught SyntaxError: Identifier 'a' has already been declared

// 注意：在函数内部也不能重复声明
function func(params){
    let params
}
func() // Uncaught SyntaxError: Identifier 'params' has already been declared
```

注意的是相同作用域，下面这种情况是不会报错的，因为是在不同的作用域中

```js
let a = 20
{
    let a = 30
}
```



## const

`const`声明一个只读的常量，一旦声明，常量的值就不能改变(普通类型的值不能变，引用对象类型地址不能改变)

**const的特点**

- const一旦声明变量，就必须初始化

```js
const a;
// SyntaxError: Missing initializer in const declaration
```

- const一旦声明变量，就不能改变(普通类型的值不能变，引用对象类型地址不能改变)

```js
const a = 1;
a = 2;
// TypeError: Assignment to constant variable.

const b = {
    name: 'zhangsan'
}
b.name = 'lisi'  // 这种是可以变的
b = { name: 'lisi' }  // 这种是不可以的
```

- const也存在暂时性死区，不存在变量提升
- const在相同作用域内不能重复声明变量

如果之前用`var`或`let`声明过某变量，再次用`const`声明该变量同样会报错



## 使用

能用`const`的情况尽量使用`const`，其他情况下大多数使用`let`，避免使用`var`

-  对于确定不再改变的变量，推荐使用const；

- 对于基本数据类型且不确定是否会改变的，推荐使用let；引用类型则let、const都可以；
- 尽量减少或避免使用var;