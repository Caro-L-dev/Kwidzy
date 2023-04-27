"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var client_1 = require("@auth0/nextjs-auth0/client");
/**
 * Local Import
 */
var molecules_1 = require("@/src/components/molecules");
/**
 * Styles
 */
require("@/styles/globals.css");
var google_1 = require("@next/font/google");
// https://nextjs.org/docs/api-reference/next/font
var mainFont = google_1.Rammetto_One({
    subsets: ["latin"],
    weight: "400"
});
/**
 * Component
 */
function App(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (React.createElement(client_1.UserProvider, null,
        React.createElement(molecules_1.Container, null,
            React.createElement("main", { className: mainFont.className },
                React.createElement(Component, __assign({}, pageProps))))));
}
exports["default"] = App;
