<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
export default {
    destroyed() {
        console.log('login destroyed');
    },
};
</script>
<style lang="scss"></style>
