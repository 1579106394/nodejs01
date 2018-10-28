// 使用node构建一个Web服务器
// 引入http模块。这个模块的指责就是帮你创建编写服务器的

// 1.加载http核心模块
var http = require('http')

// 2.使用http.createServer()方法创建一个web服务器
var server = http.createServer()

// request事件请求处理函数，需要接受两个函数
// Request：请求对象，可以用来获取客户端的请求信息，例如请求路径
// Response：响应对象，可以用来给客户端发送响应消息
server.on('request', function (request, response) {
  console.log('收到客户端的请求了', '请求路径是：' + request.url)

  // response对象有一个方法,write可以给客户端发送响应数据
  // write可以使用多次，但是最后一定要使用end来结束响应，否则客户端会一直等待
  response.write('hello')
  response.write(request.url)
  // 告诉客户端，话说完了
  response.end()
})

// 启动服务器，绑定端口号
server.listen(3000, function () {
  console.log('服务器启动成功了，可以通过http://localhost:3000来进行访问')
})
