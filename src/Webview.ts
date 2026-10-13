import { Tabs } from "./Tabs";

export const Webview = {
    getWebviewBytabUUID: function (tabUUID: string) {
        return document.getElementById(tabUUID);
    },
    // registerWebviewListenter: function (tabUUID: string) {
    //     // ...
    // },
    // unregisterWebviewListenter: function (tabUUID: string) {
    //     // ...
    // },
    setUrl: function(tabUUID?: string, url?: string) {
        if (!tabUUID) tabUUID = Tabs.activatedTab;
        Webview.getWebviewBytabUUID(tabUUID)?.setAttribute('src', url || "about:blank");
    },
    back: function (tabUUID?: string) {
        if (!tabUUID) tabUUID = Tabs.activatedTab;
        Webview.getWebviewBytabUUID(tabUUID)?.back()
    },
    forward: function (tabUUID?: string) {
        if (!tabUUID) tabUUID = Tabs.activatedTab;
        Webview.getWebviewBytabUUID(tabUUID)?.forward()
    },
    reload: function (tabUUID?: string) {
        if (!tabUUID) tabUUID = Tabs.activatedTab;
        Webview.getWebviewBytabUUID(tabUUID)?.reload()
    }
}