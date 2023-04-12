# path路径模块

path模块通常用于处理路径，是node内置的模块



## 基本使用

1. 导入path模块

```js
const path = require('path')
```

2. 使用

```js
// 把多个路径片段拼接成字符串
path.join(...pathStr)

// 获取文件路径中最后一部分，常使用这个方法获取文件名
path.basename(pathStr[,ext]) // ext参数是扩展名

// 获取文件路径中扩展名部分
path.extname(pathStr)
```



