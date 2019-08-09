//实现所有分类数据相关操作
let conn=require('../utils/myconn');
//获取所有分类数据
exports.getAllCate=(callback)=>{
    let sql='select * from categories';
    conn.query(sql,(err,data)=>{
        if(err){
            callback(err)
        }else{
            callback(null,data)
        }
    });
};