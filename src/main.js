import Vue from "vue";
import App from "./App.vue";
import "normalize.css/normalize.css";
import VueMask from "v-mask";

Vue.use(VueMask, {
  placeholders: {
    Я: /[а-яА-Я]/,
  },
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
