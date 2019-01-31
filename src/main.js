window._ = require('lodash');
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.Vue = require('vue');
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
    { path: '/', component: require('./js/routes/home.vue').default },
  ]

const router = new VueRouter({
  routes
});

// global event bus
window.eventBus = new Vue();

// global components shared by routes
Vue.component('NavBar', require('./js/components/Navbar').default);

const app = new Vue({
    el: '#app',
    router
});