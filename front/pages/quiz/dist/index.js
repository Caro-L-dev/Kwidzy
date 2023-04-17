"use strict";
exports.__esModule = true;
/**
 * Package Import
 */
var react_1 = require("react");
var router_1 = require("next/router");
/**
 * Local Import
 */
var atoms_1 = require("@/src/components/atoms");
var molecules_1 = require("@/src/components/molecules");
/**
 * Datas Import
 */
var quizData_1 = require("../../data/quizData");
/**
 * Page
 */
function quizPage() {
    /**
     * State
     */
    var _a = react_1.useState(1), questionNumber = _a[0], setQuestionNumber = _a[1];
    var _b = react_1.useState(false), stop = _b[0], setStop = _b[1];
    var _c = react_1.useState(0), earned = _c[0], setEarned = _c[1];
    /**
     * Datas
     */
    var scoreDatas = react_1.useMemo(function () {
        return [
            { id: 1, amount: 1 },
            { id: 2, amount: 2 },
            { id: 3, amount: 3 },
            { id: 4, amount: 4 },
            { id: 5, amount: 5 },
            { id: 6, amount: 6 },
            { id: 7, amount: 7 },
            { id: 8, amount: 8 },
            { id: 9, amount: 9 },
            { id: 10, amount: 10 },
        ].reverse();
    }, []);
    /**
     * Lifecycle
     */
    react_1.useEffect(function () {
        var _a, _b;
        questionNumber > 1 &&
            setEarned((_b = (_a = scoreDatas.find(function (money) { return money.id === questionNumber - 1; })) === null || _a === void 0 ? void 0 : _a.amount) !== null && _b !== void 0 ? _b : 0);
    }, [scoreDatas, questionNumber]);
    /**
     * Actions
     */
    var handleClick = function (path) {
        if (path === "/categories") {
            console.log("Je me rends sur la page Catégories");
            router_1["default"].push(path);
        }
    };
    var scoreMsg = "";
    if (earned < 3) {
        scoreMsg = "Aie aie, vous ferez mieux la prochaine fois !";
    }
    else if (earned >= 3 && earned <= 6) {
        scoreMsg = "Pas mal !";
    }
    else {
        scoreMsg = "Excellent !";
    }
    var scoreMsgBubble = "";
    if (earned < 3) {
        scoreMsgBubble = "Que diriez vous d'une revanche ?";
    }
    else if (earned >= 3 && earned <= 6) {
        scoreMsgBubble = "Allez ! une autre partie ?";
    }
    else {
        scoreMsgBubble = "C'est parti pour casser la baraque !";
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "relative" }, stop ? (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(atoms_1.SubTitle, { name: "Score" }),
            react_1["default"].createElement("div", { className: "mt-4" },
                react_1["default"].createElement("p", null, scoreMsg),
                react_1["default"].createElement("p", null, "Vous avez obtenu :"),
                react_1["default"].createElement("div", { className: "relative" },
                    react_1["default"].createElement("div", { className: "relative" },
                        react_1["default"].createElement("div", { className: "opacity-30 h-[73px] md:w-full p-4 rounded-2xl my-4 bg-fixed bg-numerique bg-no-repeat bg-cover bg-center" },
                            react_1["default"].createElement("p", { className: "absolute top-5 bottom-0 right-0 left-0 text-lg font-bold" },
                                earned,
                                " Brouette")))),
                react_1["default"].createElement(atoms_1.Bubble, null, scoreMsgBubble),
                react_1["default"].createElement(atoms_1.Button, { rounded: true, className: "mb-4", type: "button", variant: "primary", onClick: function () { return handleClick("/categories"); } }, "Rejouer")))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("div", { className: "relative flex justify-center z-10 mb-4" },
                react_1["default"].createElement(atoms_1.Timer, { setStop: setStop, questionNumber: questionNumber })),
            react_1["default"].createElement(molecules_1.Quiz, { quizData: quizData_1["default"], setStop: setStop, questionNumber: questionNumber, setQuestionNumber: setQuestionNumber }))))));
}
exports["default"] = quizPage;
