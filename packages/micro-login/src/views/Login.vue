<template>
    <div class="nextop-login--page">
        <div class="login-content">
            <div class="login-content--center">
                <el-button type="primary" size="default" @click="handleLogin1" :loading="loading"
                    >接口返回跳转</el-button
                >
                <el-button type="primary" size="default" @click="handleLogin2">直接跳转</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data() {
        return {
            loading: false,
        };
    },
    methods: {
        handleLogin1() {
            // routerPush('/goods/');
            this.loading = true;
            window.axios.get('https://thatcopy.pw/catapi/rest/').then((res) => {
                console.log(res);
                this.loading = false;
                this.routerPush('/goods/');
            });
        },
        handleLogin2() {
            this.routerPush('/goods/');
        },
        routerPush(path) {
            window?.history?.pushState(null, null, path);
            setTimeout(() => {
                window?.dispatchEvent(new PopStateEvent('popstate', { state: null }));
            }, 10);
        },
    },
};
</script>

<style lang="scss"></style>
