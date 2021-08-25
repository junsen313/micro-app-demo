export function routerPush(path) {
    history.pushState(null, null, path);
    // 主动触发一次popstate事件
    window?.dispatchEvent(new PopStateEvent('popstate', { state: null }));
}
