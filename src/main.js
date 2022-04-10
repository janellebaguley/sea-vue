import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

Vue.config.productionTip = false;
import VueConfirmDialog from 'vue-confirm-dialog';
Vue.use(VueConfirmDialog);
Vue.component('vue-confirm-dialog', VueConfirmDialog.default);

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');