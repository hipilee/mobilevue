import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import master from '../components/master'

import trade from '../components/trade'
import bindmt4 from '../components/trade/bindmt4'
import loginphone from '../components/mine/loginphone'

import mine from '../components/mine'
import register from '../components/mine/register'
import contact from '../components/mine/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/home/home',
      name:home,
      component:home,
    },
    {
      path:'/home/master',
      name:master,
      component:master,
    },
    {
      path:'/home/trade',
      name:trade,
      component:trade,
    },
    {
      path:'/trade/bindmt4',
      name:bindmt4,
      component:bindmt4,
    },
    {
      path:'/home/mine',
      name:mine,
      component:mine,
    },
    {
      path:'/mine/loginphone',
      name:loginphone,
      component:loginphone,
    },
    {
      path:'/mine/register',
      name:register,
      component:register,
    },
    {
      path:'/mine/contact',
      name:contact,
      component:contact,
    },
  ],
  mode: "history"//干掉地址栏里边的#号键
})


