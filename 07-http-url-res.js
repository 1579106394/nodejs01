var http = require('http')

// 创建server
var server = http.createServer()

// 监听request请求事件。设置请求处理函数
server.on('request', (req, res) => {
  // console.log('收到请求了，请求路径是：' + req.url)

  // res.write('hello')
  // res.write(' world')
  // res.end()

  // 上面的方式比较麻烦，推荐使用更简单的方式，直接end的同时发送响应数据
  // res.end('hello world')

  // 根据不同的请求路径发送不同的响应结果
  // 1.获取请求路径
  var url = req.url
  // 2.判断路径处理响应
  if (url === '/') {
    res.end('index page')
  }  else if (url === '/login') {
    res.end('login page')
  } else {
    res.end('404 not found')
  }
})

// 绑定端口号，启动服务
server.listen(3000, () => {
  console.log('服务器启动成功。。。。')
})
