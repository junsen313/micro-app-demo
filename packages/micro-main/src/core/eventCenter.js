import router from '@/router';

export const dataAdpter = (event) => {
    let appName = event.target.appName;
    let data = event.detail.data;
    if (data.type === 'routerPush') {
        console.log(`[main] event center routerPush: `, data);
        router.push({ name: data.data });
        return;
    }
    console.log(`[main] event center: `, appName, data, event);
};
