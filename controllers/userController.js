// 这个控制器完成所有与用户相关的业务操作
//引入usermodel
const userModel = require('../models/userModel.js')
//用户验证登录
exports.login = (req, res) => {
    //接收参数
    let obj = req.body;
    // 业务处理--调用数据模块
    userModel.login(obj.email, (err, data) => {
        if (err) {
            // json:可以直接将js对象转换json格式字符串并返回
            res.json({ code: 400, msg: '服务器异常' })
        } else {
            // 判断有没有查询到结果集
            if (data) {
                //再判断密码是否正确
                if (data.password == obj.password) {
                    //密码正确后将登录状态写入session中
                    req.session.isLogin = 'true';
                    //将当前用户对象存储到session
                    req.session.currentUser = data
                    res.json({ code: 200, msg: '登录成功' });
                } else {//否则密码输出错误
                    res.json({ code: 400, msg: '密码输入错误' });
                }
            } else {
                //否则邮箱错误
                res.json({ code: 400, msg: '邮箱输出有误' })

            };
        };
    });
};