"use strict";
exports.__esModule = true;
/**
 * Package Import
 */
var react_1 = require("react");
var image_1 = require("next/image");
/**
 * Local Import
 */
var classNames_1 = require("./classNames");
/**
 * Component
 */
var Avatar = function (_a) {
    var className = _a.className, src = _a.src, alt = _a.alt, variant = _a.variant, size = _a.size;
    return (react_1["default"].createElement(image_1["default"], { src: src, alt: alt, className: classNames_1.classNames("hover:border-2 hover:border-primary-color", variant === "rounded" ? "rounded" : "", variant === "circular" ? "rounded-full" : "", size === "sm" ? "w-12 h-12" : "", size === "md" ? "w-14 h-14" : "", size === "lg" ? "w-15 h-15" : "", className) }));
};
exports["default"] = Avatar;
