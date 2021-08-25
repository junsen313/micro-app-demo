import Vue from 'vue';
import VueRouter from 'vue-router';
import { singleAppList, commonAppList } from '@/core/appList';

Vue.use(VueRouter);

const getAppRoutes = (appList) => {
    return appList.map((app) => {
        return {
            path: app.baseurl + '/*',
            name: app.name,
            component: () => import('@/components/MicroApp'),
            props: app,
        };
    });
};

const routes = [
    // 不需要layout的app
    ...getAppRoutes(singleAppList),
    {
        path: '/',
        component: () => import('@/components/layout'),
        children: [
            {
                path: '',
                name: 'dashbord',
                component: () => import(/* webpackChunkName: "dashbordChunk" */ '@/views/Dashbord'),
            },
            // 需要layout的app
            ...getAppRoutes(commonAppList),
            {
                path: '*',
                name: '404',
                component: () => import(/* webpackChunkName: "error404Chunk" */ '@/components/Error404'),
            },
        ],
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

// router.beforeEach((to, from, next) => {
//     let token = LocalStorage.getToken();
//     console.log(to, token);
//     if (to.path !== '/login' && !token) {
//         next();
//         routerPush('/login');
//         return;
//     }
//     next();
// });

export default router;
