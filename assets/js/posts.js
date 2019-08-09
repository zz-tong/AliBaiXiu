//入口函数
$(function () {
    //定义全局的页面和页数量
    let pageNum = 1;//第1页
    let pageSize = 2;//页数

    function init(search) {
        $.ajax({
            type: 'get',
            url: '/getAllpost',
            // 分页查询需要参数
            data: {
                //分页查询需要的参数
                // pageNum:1,
                // pageSize:3
                pageNum: pageNum,
                pageSize: pageSize,
                ...search,
            },
            success: function (result) {
                // console.log(result);
                // 引用模板id和拼接在tbody页面中
                let html = template('postListTemp', result.data);
                $('tbody').html(html);
                // // 生成分页结构
                setPagenation(Math.ceil(result.data.total / pageSize));
            },
        });
    };
    init();

    //实现分页功能
    function setPagenation(total){
        //初始化
        $('.pagination').bootstrapPaginator({
            //配置版本3.0
            bootstrapMajorVersion:3,
            currentPage:pageNum,//当前页码
            totalPages:total,//总页数
            onPageClicked:function(event,originalEvent,teype,page){
                // page就是你当前想获取数据的页码
                // 修改全局pageNum
                pageNum=page;
                init()
            },
        });
    };

    //加载分类数据
    $.ajax({
        type:'get',
        url:'/getAllCate',
        dataType:'json',
        success:function(res){
            //生成分类下来列表动态结构
            let str ='<option value="all">所有分类</option>'
            for(var i = 0; i< res.data.length;i++){
                str += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
            };
            $('.cateSelector').html(str);
        },
    });

    //实现筛选功能
    $('.btn-search').on('click',function(){
        //收集数据
        let obj={
            cate:$('.cateSelector').val(),
            status:$('.statuSelector').val(),
        };
        //发起ajax请求
        init(obj);
    });





});