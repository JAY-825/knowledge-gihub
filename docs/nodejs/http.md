# http模块

http模块是node.js官方提供的用来创建web服务器的模块

## 基本使用

1、导入http模块

```js
const http = require('http')
```

2、创建实例对象

```js
const app = http.createServer();
```

3、绑定事件，监听客户端请求

```js
app.on('request',(req,res)=>{
    // 代码   
    // req,res为请求、响应对象
})
```

> <strong>req请求对象</strong>：客户端向服务器发送的请求对象
>
> ​	-req.url：获取请求路径（获取的是端口号后面的路径）
>
> ​	-req.method：获取请求方式（GET、POST、……）
>
> <strong>res响应对象</strong>：服务器向客户端返回的响应对象
>
> ​	-res.setHeader()：设置响应头（可在这设置响应编码格式等）
>
> ​		例：res.setHeader('Content-Type','text/html; charset=utf-8')  设置编码格式，解决中文乱码
>
> ​	-res.end()：向客户端发送内容（会出现中文乱码问题，需要手动设置编码问题）
>
> ​	

4、启动服务器

````js
app.listen(80,()=>{
    // 代码  80为node.js服务器默认端口号，可自行设置
})
````

> 实际开发中，通常使用Express、koa等框架快速搭建服务器，且效果更好。