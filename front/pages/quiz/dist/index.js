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
var index_module_css_1 = require("./index.module.css");
/**
 * Page
 */
function quizPage() {
    /**
     * State
     */
    var _a = react_1.useState(1), questionNumber = _a[0], setQuestionNumber = _a[1];
    var _b = react_1.useState(false), endGame = _b[0], setEndGame = _b[1];
    var _c = react_1.useState(0), earned = _c[0], setEarned = _c[1];
    /**
     * Lifecycle
     */
    react_1.useEffect(function () {
        questionNumber > 1 && setEarned(earned + 1);
    }, [questionNumber]);
    /**
     * Actions
     */
    var handleClick = function (path) {
        router_1["default"].push(path);
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
    var wordScore = "Point";
    if (earned > 1) {
        wordScore += "s";
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "relative" }, endGame ? (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(atoms_1.SubTitle, { name: "Score" }),
            react_1["default"].createElement("div", { className: "mt-4" },
                react_1["default"].createElement("p", null, scoreMsg),
                react_1["default"].createElement("p", { className: "mb-2" }, "Vous avez obtenu :"),
                react_1["default"].createElement("div", { className: index_module_css_1["default"].bgImg },
                    react_1["default"].createElement("p", { className: index_module_css_1["default"].bgImgText },
                        earned,
                        " ",
                        wordScore)),
                react_1["default"].createElement("div", { className: "text-txt-tertiary-color" },
                    react_1["default"].createElement(atoms_1.Bubble, null, scoreMsgBubble)),
                react_1["default"].createElement(atoms_1.Button, { rounded: true, className: "mb-4 text-txt-primary-color", type: "button", variant: "primary", onClick: function () { return handleClick("/categories"); } }, "Rejouer")))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("div", { className: "relative flex justify-center z-10 mb-4" },
                react_1["default"].createElement(atoms_1.Timer, { setDelayTimerStop: setEndGame, nextQuestion: questionNumber })),
            react_1["default"].createElement(molecules_1.Quiz, { setEndGame: setEndGame, questionNumber: questionNumber, setQuestionNumber: setQuestionNumber }))))));
}
exports["default"] = quizPage;
