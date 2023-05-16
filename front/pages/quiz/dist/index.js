"use strict";
var _a;
exports.__esModule = true;
/**
 * Package Import
 */
var react_1 = require("react");
/**
 * Local Import
 */
var atoms_1 = require("@/src/components/atoms");
var molecules_1 = require("@/src/components/molecules");
var index_module_css_1 = require("./index.module.css");
var axios_1 = require("axios");
var router_1 = require("next/router");
/**
 * Datas
 */
var categoryURL = (_a = process.env.NEXT_PUBLIC_CATEGORY_URL) !== null && _a !== void 0 ? _a : "";
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
    var router = router_1.useRouter();
    var handleClick = function (path) {
        var categoryName = router.query.category;
        router.push({
            pathname: path,
            query: { category: categoryName }
        });
    };
    var _d = react_1["default"].useState(null), categories = _d[0], setCategories = _d[1];
    /**
     * Fetch datas
     */
    react_1["default"].useEffect(function () {
        if (router.query.category) {
            var categoryUrl = categoryURL + "?name=" + router.query.category;
            axios_1["default"].get(categoryUrl).then(function (response) {
                setCategories(response.data);
            });
        }
    }, [router.query]);
    if (!categories)
        return null;
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
