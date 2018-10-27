// 浏览器中的js是没有稳健操作的能力的
// 但是Node中的js具有文件操作的能力

// fs的file-system的缩写,就是文件系统
// 在Node中如果想进行稳健操作,就必须引入fs这个模块
// 在fs模块中,提供了所有文件操作相关的API
// fs.readFile就是用来读取文件的

// 1.使用require方法加载fs核心模块
var fs = require('fs')

// 2.读取文件
// 两个参数：第一个是尧都区的文件路径
// 第二个参数是回调函数，有两个参数
//     error：如果读取失败就是错误对象，如果成功就是null
//     data：如果读取成功，就是读取到的数据，如果读取失败，就是null

fs.readFile('./data/hello.txt', (error, data)=>{
    // 默认文件中存储的其实都是二进制数据0和1，可以使用toString方法转换成文本
    console.log(data.toString())
    console.log(error)
})