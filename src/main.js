// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import "./vee-validate";
import vuetify from "./vuetify"; // path to vuetify export

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  vuetify,
  el: "#app",
  components: { App },
  template: "<App/>"
});
