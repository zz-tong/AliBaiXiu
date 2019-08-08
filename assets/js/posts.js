//入口函数
$(function(){
    $.ajax({
        type:'get',
        url:'/getAllpost',
        // 分页查询需要参数
        data:{
            pageNum:1,
            pageSize:3
        },
        success:function(result){
            // console.log(result);
            // 引用模板id和拼接在tbody页面中
            let html=template('postListTemp',result);
            $('tbody').html(html);
        },
    });
});