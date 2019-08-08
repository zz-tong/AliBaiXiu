
//把mysql的对象单独封装
var mysql = require('mysql')
// 创建连接
var connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'baixiu',
    
})
module.exports = connection