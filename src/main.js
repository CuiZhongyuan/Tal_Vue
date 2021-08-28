// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// 导入上面创建的路由配置表
import router from './router'
// 导入ElementUI模块
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueRouter);
// 使用ElementUI模块
Vue.use(ElementUI);
Vue.use(VueAxios, axios )
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 配置路由
  router,
  render: h => h(App)
})
