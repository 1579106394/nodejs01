var http = require('http')

var server = http.createServer()

server.on('request', (req, res) => {

  console.log('接收到请求，请求路径是：' + req.url)
  console.log('客户端地址：' , req.socket.remoteAddress , req.socket.remotePort)

  // var products =[
  //     { name: '苹果X', price: 888 },
  //     { name: '菠萝X', price: 5000 },
  //     { name: '小辣椒X', price: 1999 }
  // ]

  // res.setHeader('Content-Type', 'application/json;charset=utf-8')
  // res.end(JSON.stringify(products))

  var url = req.url
  if (url === '/plain') {
    res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    res.end('<p>哈哈</p>')
  }else if (url === '/html') {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end('<p>哈哈</p>')
  }else if (url === '/json') {
    var products = [
      { name: '苹果X', price: 888 },
      { name: '菠萝X', price: 5000 },
      { name: '小辣椒X', price: 1999 }
    ]

    res.setHeader('Content-Type', 'application/json;charset=utf-8')
    res.end(JSON.stringify(products))
  }
})

server.listen(3000, () => {
  console.log('服务器启动了。。。')
})
