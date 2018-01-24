import Vue from 'vue'
import App from './App'
// import store from './store'
// import 'bootstrap/dist/css/bootstrap.css'
// import {MdDialog} from 'vue-material/dist/components'
// import 'vue-material/dist/vue-material.min.css'
// Vue.use(MdDialog)

// import VueMaterial from 'vue-material'
// Vue.use(VueMaterial)


Vue.config.productionTip = false

/* eslint-disable no-new */
global._app = new Vue({
  el: '#app',
  // store,
  render: h => h(App)
})
