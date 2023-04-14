"use strict";
exports.__esModule = true;
exports.Triangle = void 0;
/**
 * Package Import
 */
var react_1 = require("react");
/**
 * Local Import
 */
var classNames_1 = require("./classNames");
var TrianglePosition;
(function (TrianglePosition) {
    TrianglePosition["Down"] = "down";
    TrianglePosition["SideLogo"] = "side-logo";
    TrianglePosition["SideBubble"] = "side-bubble";
})(TrianglePosition || (TrianglePosition = {}));
/**
 * Component
 */
exports.Triangle = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.position, position = _c === void 0 ? TrianglePosition.Down : _c;
    return (react_1["default"].createElement("div", { className: classNames_1.classNames("w-0 h-0", position === TrianglePosition.Down
            ? "border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[100px] border-t-primary-color"
            : "", position === TrianglePosition.SideLogo
            ? "border-l-[30px] border-l-transparent border-r-[30px] border-r-primary-color border-b-[50px] border-b-primary-color transform rotate-0"
            : "", position === TrianglePosition.SideBubble
            ? "border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-tertiary-color"
            : "", className) }));
};
