import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

let subApp = new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');

// 子应用中监听卸载事件
window.addEventListener('unmount', function () {
    console.log('[goods] 我被卸载了');
    subApp.$destroy();
});
