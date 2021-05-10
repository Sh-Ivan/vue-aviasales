import Vue from 'vue';
import MyApp from './MyApp.vue';

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(MyApp),
}).$mount('#app');
