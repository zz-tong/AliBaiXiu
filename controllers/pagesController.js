// 这个模块主要用于返回用户所请求的页面

// 约定：所有的后台页面请求都添加/admin
// 前台页面
exports.getIndexPage = (req, res) => {
    res.render('index.ejs');
};
exports.getListPage = (req, res) => {
    res.render('list.ejs');
};
exports.getDetailPage = (req, res) => {
    res.render('detail.ejs');
};

//后台页面
exports.getAdminIndexPage = (req, res) => {
//     // 进行登录状态的验证.session正确判断过写入
//     if (req.session.isLogin && req.session.isLogin == 'true') {
//         // 如果登录成功就可以让跳转到主页
        res.render('admin/index.ejs');
//     } else {
//         // 否则无登录过,强制返回登录页
//         res.writeHead(301, {
//             'Location': '/admin/login'
//         });
//         res.end()
//     };
};
exports.getAdminCategoriesPage = (req, res) => {
    res.render('admin/categories.ejs');
};
exports.getAdminCommentsPage = (req, res) => {
    res.render('admin/comments.ejs');
};
exports.getAdminLoginPage = (req, res) => {
    res.render('admin/login.ejs');
};
exports.getAdminNavmenusPage = (req, res) => {
    res.render('admin/nav-menus.ejs');
};
exports.getAdminPasswordResetPage = (req, res) => {
    res.render('admin/password-reset.ejs');
};
exports.getAdminPostaddPage = (req, res) => {
    res.render('admin/post-add.ejs');

};
exports.getAdminPostsPage = (req, res) => {
    res.render('admin/posts.ejs');
};
exports.getAdminProfilePage = (req, res) => {
    res.render('admin/profile.ejs');
};
exports.getAdminSettingsPage = (req, res) => {
    res.render('admin/settings.ejs');
};
exports.getAdminSlidesPage = (req, res) => {
    res.render('admin/slides.ejs');
};
exports.getAdminUsersPage = (req, res) => {
    res.render('admin/users.ejs');
};







