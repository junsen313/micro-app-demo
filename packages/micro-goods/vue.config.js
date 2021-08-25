const packageName = require('./package.json').name;

module.exports = {
    devServer: {
        hot: false,
        port: 5010,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    outputDir: '../../dist/micro-goods',
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
};
