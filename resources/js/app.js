require('./bootstrap');
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import Layout from '../components/Layout';
const app = new Vue({
    el: '#app',
    render: h=>h(Layout)
    
});