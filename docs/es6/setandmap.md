# Set和Map

ES6新增set和map两种数据结构。

`Set`是一种叫做集合的数据结构，`Map`是一种叫做字典的数据结构。

## Set

> Set是由一堆无序的、相关联的，且不重复的内存值组成的组合。

Set本身是一个构造函数，用来生成Set数据结构

```j
const set = new Set();
```

set成员的值都是唯一的，不存在重复的值，经常用于数据去重。

### 增删改查方法

- **add()**

添加值，返回set本身。若添加的元素已经存在，则不会重复添加。

```js
set.add(1).add(2).add(2) // 2只被添加了一次
```

- **delete()**

删除某个值，返回值类型为boolean，表示是否删除成功

```js
set.delete(2)
```

- **has()**

判断是否存在某个值，返回值类型为boolean，表示是否存在

```js
set.has(1)
```

- **clear()**

清除所有成员，没有返回值

```js
set.clear()
```

### Set遍历

> set遍历的顺序就是插入的顺序

Set集合有以下遍历方法：

前三种方法返回的都是遍历器对象

- **keys()**

```js
let set = new Set(['just','do','it'])

for (let item of set.keys()) {
  console.log(item);
}
// just
// do
// it
```

- **values()**

```js
for (let item of set.values()) {
  console.log(item);
}
// just
// do
// it
```

- **entries()**

```js
for (let item of set.entries()) {
  console.log(item);
}
// ["just", "just"]
// ["do", "do"]
// ["it", "it"]
```

- **forEach()**

`forEach()`用于对每个成员执行某种操作，没有返回值。键值、键名都相等，第一个参数是一个回调函数，第二个参数用于绑定处理函数的this

```js
set.forEach((item,key)=>{
    console.log(item+","+key)
})
// just,just
// do,do
// it,it
```

### Set实现数组去重

- 结合扩展运算符实现数组或字符串去重

```js
// 数组
let arr = [0, 0, 8, 2, 5, 8];
let unique = [...new Set(arr)]; // [0, 8, 2, 5]

// 字符串
let str = "008825";
let unique = [...new Set(str)].join(""); // "0825"
```





## Map

> Map是一些键值对元素的集合。键不能重复，值可以是重复的。

`Map`类型是键值对的有序列表，而键和值都可以是任意类型

`Map`本身是一个构造函数，用来生成 `Map` 数据结构

```js
const map = new Map()
```

### 增删改查

`Map` 有以下属性和操作方法：

- **size 属性**

map的长度（成员数量）

```javascript
const map = new Map();
map.set('one', true);
map.set('two', false);

map.size // 2
```

- **set()**

添加键值对，设置键名`key`对应的键值为`value`，然后返回整个 Map 结构

如果`key`已经有值，则键值会被更新，否则就新生成该键

同时返回的是当前`Map`对象，可采用链式写法

```js
// 链式调用
map.set(1,'nihao').set('hello','world')
```

- **get()**

获取key对应的值。若key不存在，则返回undefined.

```js
map.get(1) // nihao
```

- **has()**

`has`方法返回一个布尔值，表示某个键是否在当前 Map 实例对象之中

```js
map.has(100) // false
```

- **delete()**

删除某个键，返回一个布尔值，表示是否删除成功

```js
map.delete(2)
```

- **clear()**

清除所有成员，没有返回值



### Map遍历

`Map`结构原生提供三个遍历器生成函数和一个遍历方法：

- **keys()**：返回键名的遍历器
- **values()**：返回键值的遍历器
- **entries()**：返回所有成员的遍历器

- **forEach()**：遍历 Map 的所有成员

```js
// 回调函数参数分别为 值、键、map本身
map.forEach((value, key, map)=>{...});
```



## 区别

- 共同点：集合、字典都可以存储不重复的值
- 不同点：集合是以[值，值]的形式存储元素，字典是以[键，值]的形式存储

