"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a, _b;
exports.__esModule = true;
/**
 * Package Import
 */
var react_1 = require("react");
var axios_1 = require("axios");
/**
 * Local Import
 */
var atoms_1 = require("@/src/components/atoms");
var router_1 = require("next/router");
/**
 * Datas
 */
var questionURL = (_a = process.env.NEXT_PUBLIC_QUESTION_URL) !== null && _a !== void 0 ? _a : "default-url";
var answerURL = (_b = process.env.NEXT_PUBLIC_ANSWER_URL) !== null && _b !== void 0 ? _b : "default-url";
/**
 * Component
 */
var QuizMolecule = function (_a) {
    var setStop = _a.setStop, questionNumber = _a.questionNumber, setQuestionNumber = _a.setQuestionNumber;
    /**
     * State
     */
    var router = router_1.useRouter();
    var _b = react_1.useState(null), question = _b[0], setQuestion = _b[1];
    var _c = react_1.useState(null), selectedAnswer = _c[0], setSelectedAnswer = _c[1];
    var _d = react_1.useState(null), questionApi = _d[0], setQuestionApi = _d[1];
    var _e = react_1.useState("primary"), variant = _e[0], setVariant = _e[1];
    var quizDataBack = react_1.useMemo(function () {
        if (!questionApi) {
            return [];
        }
        return questionApi.map(function (questionObject, index) {
            return {
                id: questionObject.questionId,
                questionNumber: "Q" + (index + 1) + ".",
                question: questionObject.question,
                answers: questionObject.answers
            };
        });
    }, [questionApi]);
    /**
     * Lifecycle
     */
    react_1.useEffect(function () {
        setQuestion(quizDataBack[questionNumber - 1]);
    }, [quizDataBack, questionNumber]);
    /**
     * Fetch data
     */
    react_1.useEffect(function () {
        var fetchQuestions = function () { return __awaiter(void 0, void 0, void 0, function () {
            var categoryName, finalQuestionUrl, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        categoryName = router.query.category;
                        finalQuestionUrl = questionURL + "?category=" + categoryName;
                        return [4 /*yield*/, axios_1["default"].get(finalQuestionUrl)];
                    case 1:
                        response = _a.sent();
                        setQuestionApi(response.data);
                        return [2 /*return*/];
                }
            });
        }); };
        fetchQuestions();
    }, []);
    /**
     * Delay Function
     */
    var delay = function (duration, callback) {
        setTimeout(function () {
            callback();
        }, duration);
    };
    /**
     * Actions
     */
    var handleClick = function (answer) {
        setSelectedAnswer(answer.text);
        delay(500, function () { return setVariant(answer.isCorrect ? "correct" : "mistake"); });
        delay(1500, function () {
            answer.isCorrect
                ? (setQuestionNumber(
                // Go to the next question
                function (currentQuestionNumber) { return currentQuestionNumber + 1; }),
                    setSelectedAnswer(null))
                : setStop(true);
        });
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(atoms_1.Button, { className: "mb-4", type: "button", variant: "tertiary", rounded: true }, question === null || question === void 0 ? void 0 :
            question.questionNumber, question === null || question === void 0 ? void 0 :
            question.question),
        react_1["default"].createElement("div", { className: "md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-4 md:mb-4" }, question === null || question === void 0 ? void 0 : question.answers.map(function (answer, index) { return (react_1["default"].createElement(atoms_1.Button, { key: index, onClick: function () { return handleClick(answer); }, type: "button", variant: selectedAnswer === answer.text ? variant : "primary", rounded: true, className: "" },
            react_1["default"].createElement("p", null, answer.text))); }))));
};
exports["default"] = QuizMolecule;
