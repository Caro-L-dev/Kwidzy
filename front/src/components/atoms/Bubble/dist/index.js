"use strict";
exports.__esModule = true;
/**
 * Package Import
 */
var react_1 = require("react");
/**
 * Component
 */
var Bubble = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement("div", { className: "relative my-6" },
        react_1["default"].createElement("p", { className: "p-4 bg-tertiary-color rounded-full mb-6 tracking-wide text-sm z-30" }, children)));
};
exports["default"] = Bubble;
