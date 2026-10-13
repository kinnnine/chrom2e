import m from "mithril";

export const App = () => {
    return {
        view: function () {
            return m("main", [
                m("h1", "Hello, Mithril.")
            ])
        }
    }
}