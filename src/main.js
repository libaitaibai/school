// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui';
import '@/assets/css/index.less'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/store'
import './components/index.js'
import { LoadingMixins } from '@/mixins/index'


Vue.config.productionTip = false

Vue.mixin(LoadingMixins)
Vue.use(VueAxios, axios)
Vue.use(ElementUI);

router.beforeEach(function(to,form,next){
  //未登录跳转到登录页
  const token = store.state.user.token
  if(!token && (to.name!='login')){
    next('login');
  }
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
