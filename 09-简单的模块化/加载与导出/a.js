// require方法有两个作用
//  1.加载文件模块，并执行里面的代码
//  2.拿到被加载文件模块导出的接口对象

// 在每个文件模块中，都提供了一个对象：exports
var b = require('./b')

console.log(b.add(10, 20))