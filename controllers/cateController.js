//实现所有与分类数据相关的业务处理
let cateModel=require('../models/cateModel');
  // 获取所有分类数据
exports.getAllCate = (req,res)=>{
  
    cateModel.getAllCate((err,data)=>{
        if(err){
            res.json({code:400,msg:'数据查询失败'});
        }else{
            res.json({code:200,msg:'数据查询成功',data:data})
        }
    });
}