import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import { sync } from 'vuex-router-sync';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa'
  }
});

sync(store, router);

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app');
