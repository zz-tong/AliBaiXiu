// 这个文件处理所有文章数据的操作
// 引入已封装好的连接对象
const conn=require('../utils/myconn.js')


//获取所有文章数据
exports.getAllpost=(obj,callback)=>{
    // 1.创建sql语句--多表连接
    // let sql=`select posts.*,users.nickname,categories.name
    //         from posts
    //         join users on posts.user_id = users.id
    //         join categories on posts.category_id = categories.id`
    let sql=`select posts.*,users.nickname,categories.name
            from posts
            join users on posts.user_id = users.id
            join categories on posts.category_id = categories.id
            order by id desc
            limit ${(obj.pageNum-1)*obj.pageSize},${obj.pageSize}`
    //调用方法获取数据
    conn.query(sql,(err,results)=>{
        if(err){
            callback(err);
        }else{
            callback(null,results)
        }
    });


};