"use strict";
exports.__esModule = true;
/**
 * Package Import
 */
var react_1 = require("react");
/**
 * Component
 */
var Timer = function (_a) {
    var setStop = _a.setStop, questionNumber = _a.questionNumber;
    /**
     * State
     */
    var _b = react_1.useState(30), timer = _b[0], setTimer = _b[1];
    /**
     * LifeCycles
     */
    react_1.useEffect(function () {
        if (timer === 0)
            return setStop(true);
        var interval = setInterval(function () {
            setTimer(function (currentSecond) { return currentSecond - 1; });
        }, 1000);
        return function () { return clearInterval(interval); };
    }, [setStop, timer]);
    react_1.useEffect(function () {
        setTimer(30);
    }, [questionNumber]);
    return (react_1["default"].createElement("div", { className: "h-5 w-5 flex justify-center items-center rounded-full bg-primary-color p-8 border-white border-2" }, timer));
};
exports["default"] = Timer;
