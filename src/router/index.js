import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
//webpack按需加载组件
const home = r => require.ensure([], () => r(require('../page/home/home')), ' home');
const about = r => require.ensure([], () => r(require('../page/about/about')), 'about');
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta:{
        title:'首页'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta:{
        title:'关于'
      }
    },
  ],
  // mode:'history' // 打开需要后端配合
});
