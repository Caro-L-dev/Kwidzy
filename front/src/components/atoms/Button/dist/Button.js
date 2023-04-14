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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.Button = void 0;
/**
 * Package Import
 */
var react_1 = require("react");
/**
 * Local Import
 */
var classNames_1 = require("./classNames");
/**
 * Component
 */
exports.Button = function (_a) {
    var id = _a.id, _b = _a.type, type = _b === void 0 ? "button" : _b, _c = _a.className, className = _c === void 0 ? "" : _c, children = _a.children, _d = _a.rounded, rounded = _d === void 0 ? false : _d, _e = _a.variant, variant = _e === void 0 ? "primary" : _e, onClick = _a.onClick, props = __rest(_a, ["id", "type", "className", "children", "rounded", "variant", "onClick"]);
    var buttonClasses = classNames_1.classNames("px-4 py-2 cursor-pointer shadow-md border-r-[5px] border-b-[5px] text-sm md:text-lg tracking-widest flex justify-center items-center mx-auto w-full h-[70px] md:h-[90px]", rounded ? "rounded-2xl" : "", variant === "primary" ? "bg-primary-color border-darker-primary-color" : "", variant === "secondary"
        ? "bg-secondary-color border-darker-secondary-color"
        : "", variant === "tertiary"
        ? "bg-tertiary-color border-darker-tertiary-color"
        : "", variant === "correct" ? "bg-correct-color border-darker-correct-color" : "", variant === "mistake" ? "bg-mistake-color border-darker-mistake-color" : "", className);
    return (react_1["default"].createElement("button", __assign({ type: type, id: id, onClick: onClick, className: buttonClasses }, props), children));
};
