import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Article from './views/Article.vue';
import Login from './views/Login.vue';
import Dashboard from './views/Dashboard.vue';
import New from './views/New.vue';
import Edit from './views/Edit.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article,
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new',
      component: New
    },
    {
      path: '/edit/:id',
      name: 'edit',
      props: true,
      component: Edit
    }
  ],
  mode: 'history',
  linkExactActiveClass: 'is-active',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
