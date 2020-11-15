import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "../src/assets/css/main.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;
Vue.prototype.$base_url = "http://localhost:3000/";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
