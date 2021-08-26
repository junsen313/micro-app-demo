<template>
    <div class="app-content">
        <div class="topbar"></div>
        <div class="main-content">
            <div class="sidebar">
                <div class="item" @click="goView('/')">index</div>
                <div class="item" @click="goView('/login/')">login/</div>
                <div class="item" @click="goView('/login/404')">login/404</div>
                <div class="item" @click="goView('/goods/')">goods/</div>
                <div class="item" @click="goView('/goods/about')">goods/about</div>
                <div class="item" @click="goView('/goods/404')">goods/404</div>
                <div class="item" @click="goView('/343434')">main/404</div>
            </div>
            <div class="view-port">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import { routerPush } from '@/utils/core';
export default {
    methods: {
        goView(path) {
            routerPush(path);
        },
    },
};
</script>

<style lang="scss" scoped>
.app-content {
    height: 100%;
    overflow: hidden;
    .topbar {
        position: relative;
        z-index: 1;
        height: 52px;
        background-color: #fbfbfb;
        box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
    }
    .main-content {
        display: flex;
        height: calc(100vh - 52px);
        .sidebar {
            width: 200px;
            background-color: #fbfbfb;
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
            .item {
                height: 42px;
                line-height: 42px;
                text-align: center;
                background-color: #fafafa;
                margin-bottom: 4px;
                cursor: pointer;
                &:hover {
                    background-color: #e9e9e9;
                }
            }
        }
        .view-port {
            width: calc(100vw - 200px);
            height: 100%;
            overflow: hidden;
        }
    }
}
</style>
