import m from 'mithril'

export const Tabs = {
    openTabs: [
        { uuid: self.crypto.randomUUID(), title: "Blank Page", url: "https://example.com" }
    ],
    activatedTab: "",
    draggedTabId: "",
    activateTab: function (tabUUID: string) {
        Tabs.activatedTab = tabUUID;
        m.redraw();
    },
    newTab: function (url: string) {
        Tabs.openTabs.push({
            uuid: self.crypto.randomUUID(),
            title: "",
            url: url
        });
        m.redraw();
    },
    closeTab: function (tabUUID: string) {
        Tabs.openTabs.filter(function(value, index, arr){
            if (value.uuid == tabUUID) {
                arr.splice(index, 1);
            }
        });
        m.redraw();
    },
    setTabTitle: function (tabUUID: string, title: string) {
        Tabs.openTabs.filter(function(value){
            if (value.uuid == tabUUID) {
                value.title = title;
            }
        });
        m.redraw();
    },
    setTabUrl: function (tabUUID: string, url: string) {
        Tabs.openTabs.filter(function(value){
            if (value.uuid == tabUUID) {
                // ..
            }
        });
        m.redraw();
    },
}
