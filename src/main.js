 import { createApp } from 'vue'
//import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';


// Import Bootstrap an BootstrapVue CSS files (order is important)

 import 'bootstrap/dist/css/bootstrap.css'
 import 'bootstrap';


  const app = createApp(App)
  app.use(router);
  app.use(store);
  app.mount('#app');

 //







 //Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   store,
//   template: '<App/>',
//   components: { App }
// })
//*********** */
// new Vue({
//   router,
//   store,
//   render: h => h(App)
//   // components: { App }
// }).$mount('#app')