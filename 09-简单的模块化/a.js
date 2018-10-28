// require是一个方法
// 它的作用就是用来加载模块的
// 在Node中,模块有三种:
//  具名的核心模块,例如fs、http
//  用户自己编写的文件模块
// 相对路径必须加上./

var foo = 'aaa'
console.log('a start')
var b = require('./b.js') // 后缀名可以省略，这就表示加载并执行b
console.log('a end ')

console.log(foo)
console.log(b.foo)
