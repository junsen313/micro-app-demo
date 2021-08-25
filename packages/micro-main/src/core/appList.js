const localhost = '//localhost';
const isProd = ['production', 'prod'].includes(process.env.NODE_ENV);

// 独立App，不需要layout
export const singleAppList = [
    {
        name: 'login',
        url: isProd ? '/micro-login' : `${localhost}:5001`,
        baseurl: '/login',
        inline: false,
        destory: false,
        disableScopecss: false,
        disableSandbox: false,
        macro: false,
        shadowDOM: false,
    },
];

// 常规App，需要layout，渲染区域展示的App
export const commonAppList = [
    {
        name: 'goods',
        url: isProd ? '/micro-goods' : `${localhost}:5010`,
        baseurl: '/goods',
        inline: false,
        destory: false,
        disableScopecss: false,
        disableSandbox: false,
        macro: false,
        shadowDOM: false,
    },
];

// all app
export const appList = [...singleAppList, ...commonAppList];
