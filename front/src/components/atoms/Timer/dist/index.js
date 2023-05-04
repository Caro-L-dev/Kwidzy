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
    var setDelayTimerStop = _a.setDelayTimerStop, nextQuestion = _a.nextQuestion;
    /**
     * State
     */
    var _b = react_1.useState(30), delayTimer = _b[0], setDelayTimer = _b[1];
    /**
     * LifeCycles
     */
    react_1.useEffect(function () {
        if (delayTimer === 0)
            return setDelayTimerStop(true);
        var interval = setInterval(function () {
            setDelayTimer(function (currentSecond) { return currentSecond - 1; });
        }, 1000);
        return function () { return clearInterval(interval); };
    }, [setDelayTimerStop, delayTimer]);
    react_1.useEffect(function () {
        setDelayTimer(30);
    }, [nextQuestion]);
    return (react_1["default"].createElement("div", { className: "h-5 w-5 flex justify-center items-center rounded-full border-4 border-white p-8  text-white" }, delayTimer));
};
exports["default"] = Timer;
