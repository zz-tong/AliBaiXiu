//express搭建服务器
//1引入express
const express = require('express');
// const fs=require('fs');
//引入router
const router = require('./router');
const bodyParser = require('body-parser')
const session=require('express-session')

// 2创建服务器
const app = express();
//3添加监听端口和ip
app.listen(8080, '127.0.0.1', () => {
    console.log('服务器已启动,http://127.0.0.1:8080');
});

//5静态资源托管
app.use('/assets', express.static('assets'));//静态文件夹
app.use('/uploads', express.static('uploads'));//现有的图片等路径的文件夹

// 6.配置ejs模板引擎:设置让当前node服务器使用ejs模板引擎
app.set('view engine', 'ejs')
//下面这句代码是进行ejs模板文件查询的默认目录配置
app.set('views', __dirname + '/views');

// 配置body-parser
// xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
// 处理psot方式的请求
// extended: false：将参数字符串转换为对象
app.use(bodyParser.urlencoded({ extended: false }))
// 后期你可能会传递json格式字符串
app.use(bodyParser.json())

//// 在express中使用session中间件,因为默认情况下，express并不会开启sesison的使用
app.use(session({
    // 加盐
    secret: 'my_albx_35',//相当于一个加密密钥，值可以是任意字符串
    resave: false,//强制session保存到session store中,不管Session有没有更新，都强制保存
    saveUninitialiazed: false //强制没有‘初始化’的session保存到storage中
}));

//添加全局中间件,每次请求都经过这个中间件
app.use(function (req, res, next) {
    //以下三中场合不用登录
    //1登录页 2前台三个页面不用登录  3有登录状态
    if (req.session.isLogin && req.session.isLogin == "true" || req.url == '/admin/login' || req.url.indexOf('/admin') == -1) {
        next()
    } else {
        //raidirect:实现重定向
        res.redirect('/admin/login');
    };
});









//---------------------------------------------------
// 让app使用Router进行路由管理
app.use(router)
