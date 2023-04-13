"use strict";
exports.__esModule = true;
exports.RepeatDots = exports.Dot = void 0;
var react_1 = require("react");
exports.Dot = function (_a) {
    var ASCIIChar = _a.ASCIIChar;
    return react_1["default"].createElement("span", null, ASCIIChar);
};
exports.RepeatDots = function (_a) {
    var times = _a.times, children = _a.children;
    return react_1["default"].cloneElement(children, {
        ASCIIChar: children.props.ASCIIChar.repeat(times)
    });
};
