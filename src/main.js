import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import router from "@/router";
import { dollarFilter, percentFilter } from "@/filters.js";
import Highcharts from "highcharts";
import Chartkick from "vue-chartkick";
import { VueSpinners } from "@saeris/vue-spinners";

Vue.config.productionTip = false;
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);

Vue.use(Chartkick.use(Highcharts));
Vue.use(VueSpinners);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
