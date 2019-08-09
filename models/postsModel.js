// 这个文件处理所有文章数据的操作
// 引入已封装好的连接对象
const conn = require('../utils/myconn.js')


//获取所有文章数据
// 获取所有文章数据
// obj是分页查询参数对象
// 里面必须包含这两个成员
// obj.pageNum:当前页码--必需
// obj.pageSize:每页显示的记录数--必需
// obj.cate:分类id
// obj.stauts:状态
exports.getAllpost = (obj, callback) => {
    // 1.创建sql语句--多表连接
    // 方法1
    // let sql=`select posts.*,users.nickname,categories.name
    //         from posts
    //         join users on posts.user_id = users.id
    //         join categories on posts.category_id = categories.id`
    // 方法2
    // let sql=`select posts.*,users.nickname,categories.name
    //         from posts
    //         join users on posts.user_id = users.id
    //         join categories on posts.category_id = categories.id
    //         order by id desc
    //         limit ${(obj.pageNum-1)*obj.pageSize},${obj.pageSize}`

    //基本查询
    let sql = `select posts.*,users.nickname,categories.name
            from posts
            join users on posts.user_id = users.id
            join categories on posts.category_id = categories.id
             where 1=1  `// 添加恒成立，这样有一个好处：后面进行语句拼接的时候，不用再考虑是拼接 where 还是拼接 and,我们可以统一 拼接and

    //数据筛选查询
    if (obj.cate && obj.cate != 'all') {// 有没有传递分类数据
        sql += ` and category_id = ${obj.cate}`;
    };
    if (obj.status && obj.status != 'all') {
        sql += ` and posts.status='${obj.status}'`;
    };
    //数据分页查询
    sql += ` order by id desc
            limit ${(obj.pageNum - 1) * obj.pageSize},${obj.pageSize}`


    //调用方法获取数据
    conn.query(sql, (err, results) => {
        if (err) {
            callback(err);
        } else {
            //再创建sql语句 进行总记录的查询
            sql = `select count(*) as cnt
            from posts
            join users on posts.user_id = users.id
            join categories on posts.category_id = categories.id`
            // //再次判断页数据筛选后显示的页数,筛选语句后面要增加where 2=2
            // if (obj.cate && obj.cate != 'all') {// 有没有传递分类数据
            //     sql += ` and category_id = ${obj.cate}`;
            // };
            // if (obj.status && obj.status != 'all') {
            //     sql += ` and posts.status='${obj.status}'`;
            conn.query(sql, (err2, res2) => {
                if (err2) {
                    callback(err2);
                } else {
                    // 没有错误，不仅仅要返回之前的查询数据，而且还要返回当前查询的总记录数 
                    callback(null, { data: results, total: res2[0].cnt })
                    // console.log(results,res2)
                };
            });
        }
    });


};