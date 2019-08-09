//引入
const postsModel=require('../models/postsModel.js')
const moment=require('moment');
exports.getAllpost=(req,res)=>{
    //获取用参数
    let obj=req.query;
    // console.log(obj)
    //调用数据模块
    postsModel.getAllpost(obj,(err,data)=>{
        if(err){
            res.json({code:400,msg:'查询数据失败'})
        }else{
            // 添加日期格式的转换
            // for(var i=0;i<data.length;i++){
                //moment是一个第三方模块要下载
                // moment():如果没有传递参数，就获取当前日期值进行转换，如果需要转换指定的日期，则需要传递参数
                // format：进行格式化，里面进行自定义的格式设置
                // data[i].created=moment(data[i].created).format('YYYY-MM-DD HH-mm-ss');
            // };
            res.json({code:200,msg:'查询数据成功',data:data})
        };
    });
};
