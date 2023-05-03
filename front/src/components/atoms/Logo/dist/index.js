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
var Logo_svg_1 = require("@/public/assets/images/Logo.svg");
/**
 * Component
 */
var Logo = function (_a) {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(image_1["default"], { src: Logo_svg_1["default"], height: "100", alt: "Kwidzy logo" })));
};
exports["default"] = Logo;
