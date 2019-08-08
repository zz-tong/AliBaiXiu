//先写一个入口函数
$(function(){
    //注册点击登录按钮事件//在login.ejs文键中增加一个类名btnLogin,让不重复
    $('.btnLogin').on('click',function(){
        //使用ajax请求
        $.ajax({
            type:'post',
            url:'/login',
            dataType:'json',
             // serialize可以获取指定表单中所有拥有name属性的表单元素的value值
            data: $('form').serialize(),
             success:function(res){
                // console.log(res);
                if(res.code==400){
                    //页面login.ejs的隐藏的错误提示
                    $('.alert-danger > span').text(res.msg);
                    //增加提示一个弹出的的延迟弹出时间和隐藏
                    $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500);

                }else{
                    //页面跳转
                    location.href='/admin';
                };
             },
        });
    });



});