import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import(/* webpackChunkName: "loginChunk" */ '../views/Login.vue'),
    },
    {
        path: '*',
        name: 'Error404',
        component: () => import(/* webpackChunkName: "loginError404Chunk" */ '@/components/Error404.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: window.__MICRO_APP_BASE_URL__ || '/',
    routes,
});

export default router;
