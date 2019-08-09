//引入
const express = require('express');
let router = express.Router();
// 引入页面返回控制器
const pagesController = require('./controllers/pagesController.js');
const userController = require('./controllers/userController.js');
const postsController=require('./controllers/postsController.js');
const cateController=require('./controllers/cateController.js')

//配置整个路由
//4添加路由监听
//前端管理页面
// router.get('/',(req,res)=>{
//     res.render('index.ejs')
// });
// router.get('/',(req,res)=>{
//     res.render('detail.ejs')
// });
// router.get('/',(req,res)=>{
//     res.render('list.ejs')
// });

//后台管理页面
// router.get('/admin',(req,res)=>{
//     res.render('admin/index.ejs');
// });
// router.get('/admin/categories',(req,res)=>{
//     res.render('admin/categories.ejs');
// });
// router.get('/admin/nav-menus',(req,res)=>{
//     res.render('admin/nav-menus.ejs');
// });
// router.get('/admin/password-reset',(req,res)=>{
//     res.render('admin/password-reset.ejs')
// });
// router.get('/admin/post-add',(req,res)=>{
//     res.render('admin/post-add.ejs')
// });
// router.get('/admin/posts',(req,res)=>{
//     res.render('admin/posts.ejs')
// });
// router.get('/admin/profile',(req,res)=>{
//     res.render('admin/profile.ejs')
// });
// router.get('/admin/settings',(req,res)=>{
//     res.render('admin/settings.ejs')
// });
// router.get('/admin/slides',(req,res)=>{
//     res.render('admin/slides.ejs')
// });
// router.get('/admin/users',(req,res)=>{
//     res.render('admin/users.ejs')
// });
//全部使用链式编程,直接调用pagesController中的函数
//前台页面,接口
router.get('/', pagesController.getIndexPage)
    
    .post('/login',userController.login)
    .get('/getAllpost',postsController.getAllpost) 
    .get('/getAllCate',cateController.getAllCate)

// 后台页面
router.get('/admin/',pagesController.getAdminIndexPage)  
    .get('/admin/categories',pagesController.getAdminCategoriesPage)  
    .get('/admin/comments',pagesController.getAdminCommentsPage)  
    .get('/admin/login',pagesController.getAdminLoginPage)  
    .get('/admin/nav-menus',pagesController.getAdminNavmenusPage)  
    .get('/admin/password-reset',pagesController.getAdminPasswordResetPage)  
    .get('/admin/post-add',pagesController.getAdminPostaddPage)  
    .get('/admin/posts',pagesController.getAdminPostsPage)  
    .get('/admin/profile',pagesController.getAdminProfilePage)  
    .get('/admin/settings',pagesController.getAdminSettingsPage)  
    .get('/admin/slides',pagesController.getAdminSlidesPage)  
    .get('/admin/users',pagesController.getAdminUsersPage) 
    


// 把router路由暴露
module.exports = router;