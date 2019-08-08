
$(function () {
    //获取元素:文章和设置的
    let menuPosts = $('#menu-posts');
    let menuSettings = $('#menu-settings');
    //获取路由名称:如就是url/后面的posts
    let index = location.href.indexOf('?')//判断是否有?
    //先定义一个变量为空字符串
    let routerName = '';
    //判断
    if (index == -1) {//如果等于-1 就是没有字符串,说明没有参数
        //判断如果截取没有?前的路由名称,使用substring()方法
        routerName = location.href.substring(location.href.lastIndexOf('/') + 1)//就是/后面的
        console.log(routerName)
    } else {
        //否则就是/和?中间的部分
        routerName = location.href.substring(location.href.lastIndexOf('/') + 1, location.href.indexOf('?'))
    };
    //判断是否满足条件
    if (routerName == 'posts' || routerName == 'post-add' || routerName == "categories") {
        //实现展开:文章的
        menuPosts.addClass('in').attr('aria-expanded', true)//打开是增加类in, attr设置改名原来是fals变为true
        menuPosts.parent().find('.collapsed').removeClass('collapsed')//parent获取父元素在遍历find获取所有字元素再移除掉collapsed
    };
    //再判断设置中的是否满足条件
    if (routerName == 'nav-menus' || routerName == 'slides' || routerName == 'settings') {
        // 实现展开:设置的
        menuSettings.addClass('in').attr('aria-expanded', true);
        menuSettings.parent().find('.collapsed').removeClass('collapsed');
    };
    //高光效果
    $('#' + routerName).addClass('active');//id+路由.添加类名   要在结构中增加对应Id
});