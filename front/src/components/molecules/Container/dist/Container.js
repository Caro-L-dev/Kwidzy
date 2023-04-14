"use strict";
exports.__esModule = true;
/**
 * Package Import
 */
var react_1 = require("react");
/**
 * Local Import
 */
var Navbar_1 = require("../Navbar/Navbar");
/**
 * Component
 */
function Container(_a) {
    var children = _a.children;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "flex flex-col p-8 md:px-20 bg-gradient-to-b from-fuchsia-900 via-purple-600 to-indigo-500 w-full text-white" },
            react_1["default"].createElement(Navbar_1["default"], null),
            react_1["default"].createElement("div", { className: "mx-auto md:w-min md:min-w-fit" },
                react_1["default"].createElement("div", { className: " text-center justify-center" }, children),
                react_1["default"].createElement("div", { className: "text-center mt-auto" },
                    react_1["default"].createElement("p", null, "Liard Caroline"),
                    react_1["default"].createElement("p", null, "2023 - Tous droits r\u00E9serv\u00E9s"))))));
}
exports["default"] = Container;
