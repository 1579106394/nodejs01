var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request', (req, res) => {

  var url = req.url

  if(url === '/') {
      fs.readFile('./resource/index.html', (error, data)=>{
          if(error) {
            res.setHeader('Content-Type', 'text/plain;charset=UTF-8')
            res.end('文件读取失败！请稍后重试')
          }else {
            res.setHeader('Content-Type', 'text/html;charset=UTF-8')
            res.end(data)
          }
      })
  }else if(url==='/c1.png') {
    fs.readFile('./resource/c1.png', (error, data)=>{
        if(error) {
          res.setHeader('Content-Type', 'text/plain;charset=UTF-8')
          res.end('文件读取失败！请稍后重试')
        }else {
          res.setHeader('Content-Type', 'image/png')
          res.end(data)
        }
    })
  }

})

server.listen(3000, () => {
  console.log('服务器启动了。。。')
})
