import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";

import Contacts from "./pages/Contacts.vue";
import AddContact from "./pages/AddContact.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false;



const routes = [
  { path: "/", redirect: "contacts" },
  { path: "/contacts", component: Contacts, name: 'contacts' },
  { path: "/contacts/:id", component: Contacts, name: "contact-details"},
  { path: "/add-contact", component: AddContact, name: 'add-contact' }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
