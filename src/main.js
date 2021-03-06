import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import './assets/styles.css';

require('code-prettify/styles/sunburst.css') ;

Vue.config.productionTip = false

import VueMathjax from 'vue-mathjax'
Vue.use(VueMathjax)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
