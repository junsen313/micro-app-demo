const packageName = require('./package.json').name;

module.exports = {
    devServer: {
        hot: false,
        port: 5000,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    outputDir: '../../dist',
    lintOnSave: false,
    // 自定义webpack配置
    configureWebpack: (config) => {
        config.externals = {
            vue: 'Vue',
            'element-ui': 'ELEMENT',
            'vue-router': 'VueRouter',
            vuex: 'Vuex',
            axios: 'axios',
        };
        config.output.jsonpFunction = `webpackJsonp_${packageName}`;
    },
    chainWebpack: (config) => {
        const cdn = {
            css: ['//cdn.jsdelivr.net/npm/element-ui@2.15.5/lib/theme-chalk/index.css'],
            js: [
                '//cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js',
                '//cdn.jsdelivr.net/npm/vue-router@3.5.2/dist/vue-router.js',
                '//cdn.jsdelivr.net/npm/vuex@3.6.2/dist/vuex.js',
                '//cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.js',
                '//cdn.jsdelivr.net/npm/element-ui@2.15.5/lib/index.js',
            ],
        };

        // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
        config.plugin('html').tap((args) => {
            // html中添加cdn
            args[0].cdn = cdn;
            return args;
        });
    },
};
