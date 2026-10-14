import m from "mithril";
import { Tabs } from "./Tabs";
import { Webview } from "./Webview";

export const App = () => {
    return {
        oncreate: function () {
            Tabs.activateLastTab();
        },
        view: function () {
            return m("div", { class: "ce-browser" }, [
                m("header", { class: "ce-header" }, [
                    m("div", { class: "ce-tab-strip-container" }, [
                        m("button", { class: "ce-nav-btn", title: "Menu" }, [
                            m("svg", { "xmlns": "http://www.w3.org/2000/svg", "width": "24", "height": "24", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
                                m("path", { "d": "m6 9 6 6 6-6" })
                            )
                        ]),
                        m("div", { class: "ce-tabs-container" },
                            Tabs.availableTabs.map(function (tab) {
                                return m("div", {
                                    class: `${Tabs.activatedTab === tab.uuid ? 'ce-tab active' : 'ce-tab'}`,
                                    draggable: true,
                                    onclick: function () { Tabs.activateTab(tab.uuid) }
                                }, [
                                    m("div", { class: "ce-tab-content" }, [
                                        m("span", { class: "ce-tab-title" }, tab.title)
                                    ]),
                                    m("button", { class: "ce-tab-close", title: "Close Tab", onclick: function () { Tabs.closeTab(tab.uuid) } }, [
                                        m("svg", { "xmlns": "http://www.w3.org/2000/svg", "width": "24", "height": "24", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
                                            [
                                                m("path", { "d": "M18 6 6 18" }),
                                                m("path", { "d": "m6 6 12 12" })
                                            ]
                                        )
                                    ])
                                ])
                            }),
                            m("div", { class: "ce-new-tab-btn", title: "New Tab", onclick: function () { Tabs.newTab() } }, [
                                m("svg", { "xmlns": "http://www.w3.org/2000/svg", "width": "24", "height": "24", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
                                    [
                                        m("path", { "d": "M5 12h14" }),
                                        m("path", { "d": "M12 5v14" })
                                    ]
                                )
                            ])
                        )
                    ]),
                ]),
                m("div", { class: "ce-toolbar" }, [
                    m("div", { class: "ce-nav-btns" }, [
                        m("button", {
                            class: "ce-nav-btn",
                            onclick: function () {
                                Webview.back();
                            }
                        }, [
                            m("svg", { "xmlns": "http://www.w3.org/2000/svg", "width": "24", "height": "24", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
                                [
                                    m("path", { "d": "m12 19-7-7 7-7" }),
                                    m("path", { "d": "M19 12H5" })
                                ]
                            )
                        ]),
                        m("button", {
                            class: "ce-nav-btn",
                            onclick: function () {
                                Webview.forward();
                            }
                        }, [
                            m("svg", { "xmlns": "http://www.w3.org/2000/svg", "width": "24", "height": "24", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
                                [
                                    m("path", { "d": "M5 12h14" }),
                                    m("path", { "d": "m12 5 7 7-7 7" })
                                ]
                            )
                        ]),
                        m("button", {
                            class: "ce-nav-btn",
                            onclick: function () {
                                Webview.reload();
                            }
                        }, [
                            m("svg", { "xmlns": "http://www.w3.org/2000/svg", "width": "24", "height": "24", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
                                [
                                    m("path", { "d": "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" }),
                                    m("path", { "d": "M21 3v5h-5" })
                                ]
                            )
                        ]),
                    ]),
                    m("div", { class: "ce-url-bar" }, [
                        m("input", {
                            type: "text",
                            id: "urlbar",
                            class: "ce-url-input",
                            placeholder: "Search or enter web address",
                            onkeydown: function (e: any) {
                                if (e.key === "Enter") {
                                    Webview.setUrl(Tabs.activatedTab, e.target.value);
                                }
                            }
                        })
                    ]),
                    m("div", { class: "ce-nav-btns" }, [
                        m("button", {
                            class: "ce-nav-btn",
                            // onclick: function () {
                            //     Webview.reload();
                            // }
                        }, [
                            m("svg", { "xmlns": "http://www.w3.org/2000/svg", "width": "24", "height": "24", "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
                                [
                                    m("circle", { "cx": "12", "cy": "12", "r": "1" }),
                                    m("circle", { "cx": "12", "cy": "5", "r": "1" }),
                                    m("circle", { "cx": "12", "cy": "19", "r": "1" })
                                ]
                            )
                        ]),
                    ])
                ]),
                m("main", { class: "ce-viewport" }, [
                    Tabs.availableTabs.map(function (tab) {
                        return m("controlledframe", {
                            class: "ce-iframe",
                            id: tab.uuid,
                            style: {
                                display: `${Tabs.activatedTab === tab.uuid ? '' : 'none'}`,
                            }
                        })
                    })
                ])
            ])
        }
    }
}