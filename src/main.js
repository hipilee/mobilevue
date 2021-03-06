// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import VueResource from 'vue-resource'

import App from './App'
import home from './components/home'
import master from './components/master'
import trade from './components/trade'
import mine from './components/mine'
import contact from './components/mine/contact'
import router from './router'


Vue.use(VueResource)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
    home,
    master,
    trade,
    mine,
    contact
  },
  template: '<App/>'
})
