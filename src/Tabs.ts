import m from 'mithril'
import { Webview } from './Webview';

export const Tabs = {
    availableTabs: [
        { uuid: self.crypto.randomUUID(), title: "Blank Page", url: "about:blank" }
    ],
    activatedTab: "",
    // draggedTab: "",
    getLastTab: function () {
        return Tabs.availableTabs[Tabs.availableTabs.length - 1];
    },
    activateTab: function (tabUUID: string) {
        if (!tabUUID) return;
        Tabs.availableTabs.filter(function (value) {
            if (value.uuid == tabUUID) {
                Tabs.activatedTab = value.uuid;
                Tabs.setTabUrl(value.uuid, value.url);
                Webview.registerWebviewEventListeners(tabUUID);
            }
        });
        m.redraw();
    },
    activateLastTab: function () {
        setTimeout(() => {
            Tabs.activateTab(Tabs.getLastTab()?.uuid || '');
        }, 50);
        m.redraw();
    },
    newTab: function (url: string = "about:blank") {
        Tabs.availableTabs.push({
            uuid: self.crypto.randomUUID(),
            title: "Blank Page",
            url: url
        });
        Tabs.activateLastTab();
        m.redraw();
    },
    closeTab: function (tabUUID: string) {
        if (!tabUUID) return;
        Tabs.availableTabs.filter(function (value, index, arr) {
            if (value.uuid == tabUUID) {
                arr.splice(index, 1);
            }
        });
        Tabs.activateLastTab();
        m.redraw();
    },
    setTabTitle: function (tabUUID: string, title: string) {
        if (!tabUUID) return;
        Tabs.availableTabs.filter(function (value) {
            if (value.uuid == tabUUID) {
                value.title = title;
            }
        });
        m.redraw();
    },
    setTabUrl: function (tabUUID: string, url: string) {
        if (!tabUUID) return;
        Tabs.availableTabs.filter(function (value) {
            if (value.uuid == tabUUID && Tabs.activatedTab == tabUUID) {
                const urlbar = document.getElementById("urlbar") as HTMLInputElement;
                urlbar.value = url;
                value.url = url;
            }
        });
        m.redraw();
    }
}
