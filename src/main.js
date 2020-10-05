import Vue from 'vue'
import App from './App.vue'
import bootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueRouter from 'vue-router'
import VueProps from 'vue-props'

Vue.use(bootstrapVue);
Vue.use(VueRouter);
Vue.use(VueProps);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')