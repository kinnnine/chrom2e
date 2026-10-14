import { Tabs } from "./Tabs";

export const Webview = {
    getWebviewElementById: function (id: string) {
        return document.getElementById(id);
    },
    registerWebviewEventListeners: function (id: string) {
        if (!id) id = Tabs.activatedTab;
        const webviewElement = Webview.getWebviewElementById(id);
        if (webviewElement && webviewElement.getAttribute("listener") !== 'true') {
            webviewElement.addEventListener('loadstart', (e) => {
                // @ts-ignore
                // console.log('Navigation started:', e.url);
                // @ts-ignore
                Tabs.setTabUrl(id, webviewElement.src);
            });
            webviewElement.addEventListener('loadcommit', (e) => {
                // @ts-ignore
                // console.log('Navigation committed:', e.url);
                // @ts-ignore
                Tabs.setTabUrl(id, webviewElement.src);
            });
            webviewElement.addEventListener('contentload', (e) => {
                // @ts-ignore
                // console.log('Content loaded for:', webviewElement.src);
                // @ts-ignore
                webviewElement.executeScript({
                    code: `document.title;`
                }).then((result: string) => {
                    Tabs.setTabTitle(id, result);
                })
            });
            // webviewElement.addEventListener('loadstop', (e) => {
            //     // @ts-ignore
            //     console.log('All resources loaded for:', webviewElement.src);
            // });
            // webviewElement.addEventListener('loadabort', (e) => {
            //     // @ts-ignore
            //     console.warn(`Navigation aborted: ${e.url}, Reason: ${e.detail.reason}`);
            // });
            // webviewElement.addEventListener('loadredirect', (e) => {
            //     // @ts-ignore
            //     console.log(`Redirect detected: ${e.oldUrl} -> ${e.newUrl}`);
            // });
            webviewElement.setAttribute('listener', 'true');
        }
    },
    setUrl: function (id?: string, url?: string) {
        if (!id) id = Tabs.activatedTab;
        Webview.getWebviewElementById(id)?.setAttribute('src', url || "about:blank");
    },
    back: function (id?: string) {
        if (!id) id = Tabs.activatedTab;
        // @ts-ignore
        Webview.getWebviewElementById(id)?.back()
    },
    forward: function (id?: string) {
        if (!id) id = Tabs.activatedTab;
        // @ts-ignore
        Webview.getWebviewElementById(id)?.forward()
    },
    reload: function (id?: string) {
        if (!id) id = Tabs.activatedTab;
        // @ts-ignore
        Webview.getWebviewElementById(id)?.reload()
    }
}