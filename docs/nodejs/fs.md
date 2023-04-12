# fs文件模块系统

> fs文件模块是node内置的模块

### 读取与写入文件

1. 导入模块

```js
const fs = require('fs')
```

2. 基本使用

   - 读取文件 [异步]
  fs.readFile(path[,option],callback)

  > path: 读取文件的路径，使用相对路径容易出现动态路拼接问题，使用绝对路径会导致移植性差，不利于维护。可以使用 __dirname  表示当前文件所处目录

   - 写入文件 [异步]

  > 写入文件新的内容会覆盖原来的内容

  fs.writerFile(File,data[,option],callback)

3. 实例展示

```js
// 读取
fs.readFile('\TXT-Test\\one.txt', function(err, dataStr) {
    console.log(err);
    console.log("==========");
    console.log(dataStr.toString());
})
// 写入
fs.readFile('\TXT-Test\\info.txt', function(err, dataStr) {
    // 判断是否获取成功
    if (err) {
        return console.log("文件获取失败！" + err.message);
    }
    console.log("文件获取成功！");
    // 处理获取的内容
    let oldInfo = dataStr.toString().split(' ')
    let news = oldInfo.join('\r\n')
    console.log(news);
    // console.log(__filename); 当前文件的绝对路径
    console.log(__dirname); // 当前执行文件的上一级绝对路径
})
```

