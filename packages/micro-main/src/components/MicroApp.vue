<template>
    <div class="micro-app-box">
        <micro-app
            v-loading="loading"
            :element-loading-text="loadingText"
            class="micro-app-container"
            :name="name"
            :url="url"
            :destory="destory"
            :baseurl="baseurl"
            @created="created"
            @beforemount="beforemount"
            @mounted="mounted"
            @unmount="unmount"
            @error="error"
            @datachange="dataAdpter"
        ></micro-app>
    </div>
</template>

<script>
import { dataAdpter } from '@/core/eventCenter';
export default {
    props: {
        name: String,
        url: String,
        baseurl: String,
        inline: Boolean,
        destory: Boolean,
        disableScopecss: Boolean,
        disableSandbox: Boolean,
        macro: Boolean,
        shadowDOM: Boolean,
    },
    data() {
        return {
            loading: true,
            loadingText: '应用加载中...',
        };
    },
    created() {
        console.log(`----------------- main vue created [${this.name}] -----------------`);
    },
    methods: {
        dataAdpter,
        created() {
            this.loading = true;
            console.log(`[${this.name}] created`);
        },
        beforemount() {
            console.log(`[${this.name}] beforemount`);
        },
        mounted() {
            this.loading = false;
            console.log(`[${this.name}] mounted`);
        },
        unmount() {
            this.loading = true;
            console.log(`[${this.name}] unmount`);
        },
        error() {
            console.log(`[${this.name}] error`);
        },
    },
    destroyed() {
        console.log(`----------------- main vue destroyed [${this.name}]-----------------`);
    },
};
</script>

<style lang="scss" scoped>
.micro-app-box,
.micro-app-container {
    position: relative;
    height: 100%;
}
</style>
