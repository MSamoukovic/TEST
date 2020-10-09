import Vue from 'vue'
import App from './App.vue'
import VueProps from 'vue-props'

import bootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt, faEdit, faPencilAlt, faInfo, faInfoCircle, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(bootstrapVue)
Vue.use(VueProps)

library.add(faTrashAlt, faEdit, faPencilAlt, faInfo, faInfoCircle, faUsers)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
