import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '*',
        name: 'Error404',
        component: () => import(/* webpackChunkName: "goodsError404Chunk" */ '@/components/Error404.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: window.__MICRO_APP_BASE_URL__ || '/',
    routes,
});

router.beforeEach((to, from, next) => {
    console.log('[goods] router.beforeEach: ', to);
    next();
});

export default router;
