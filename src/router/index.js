import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'
import User from "../views/User";

  // 安装路由
  Vue.use(Router);
  // 配置路由
  export default new Router({
    routes: [
      {
        // 路由路径
        path: '/Login',
        // 路由名称
        name: 'Login',
        // 跳转到组件
        component: Login
      },
      {
        path:'/Home',
        name:'Home',
        component:Home
      },
      {
        path: '/user',
        name: 'User',
        component: User
      }
    ]
  });


