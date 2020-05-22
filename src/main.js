import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Dejavue from "deja-vue";

Vue.config.productionTip = false;

const state = {
  firstName: "Lisa",
  lastName: "Simpson"
};

Vue.use(Dejavue, { state });

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
