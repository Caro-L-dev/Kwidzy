"use strict";
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
/**
 * Datas
 */
var questionURL = process.env.NEXT_PUBLIC_QUESTION_URL;
var answerURL = process.env.NEXT_PUBLIC_ANSWER_URL;
/**
 * Component
 */
function QuizMolecule(_a) {
    var setStop = _a.setStop, questionNumber = _a.questionNumber, setQuestionNumber = _a.setQuestionNumber;
    /**
     * State
     */
    var _b = react_1.useState(null), question = _b[0], setQuestion = _b[1];
    var _c = react_1.useState(null), selectedAnswer = _c[0], setSelectedAnswer = _c[1];
    var _d = react_1.useState(""), className = _d[0], setClassName = _d[1];
    var _e = react_1.useState("primary"), variant = _e[0], setVariant = _e[1];
    /**
     * API State
     */
    var _f = react_1.useState(null), questionApi = _f[0], setQuestionApi = _f[1];
    var _g = react_1.useState(null), answerApi = _g[0], setAnswerApi = _g[1];
    var quizDataBack = react_1.useMemo(function () {
        if (!questionApi || !answerApi) {
            return [];
        }
        return questionApi.map(function (questionObject) {
            return {
                id: questionObject.id,
                questionNumber: "Q" + questionObject.id + ". ",
                question: questionObject.question_text,
                answers: answerApi
                    .filter(function (answerObject) {
                    return answerObject.question_id === questionObject.id;
                })
                    .map(function (answerObject) {
                    return {
                        text: answerObject.answer_text,
                        correct: answerObject.is_correct
                    };
                })
            };
        });
    }, [questionApi, answerApi]);
    /**
     * Lifecycle
     */
    react_1.useEffect(function () {
        setQuestion(quizDataBack[questionNumber - 1]);
    }, [quizDataBack, questionNumber]);
    /**
     * Fetch datas
     */
    react_1["default"].useEffect(function () {
        axios_1["default"].get(questionURL).then(function (response) {
            setQuestionApi(response.data);
        });
    }, []);
    react_1["default"].useEffect(function () {
        axios_1["default"].get(answerURL).then(function (response) {
            setAnswerApi(response.data);
        });
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
        setClassName("bg-secondary-color border-darker-secondary-color border-r-[5px] border-b-[5px]");
        delay(1000, function () { return setVariant(answer.correct ? "correct" : "mistake"); });
        delay(2000, function () {
            if (answer.correct) {
                // Go to the next question
                setQuestionNumber(function (currentQuestionNumber) { return currentQuestionNumber + 1; });
                setSelectedAnswer(null);
            }
            else {
                setStop(true);
            }
        });
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(atoms_1.Button, { className: "mb-4", type: "button", variant: "tertiary", rounded: true }, question === null || question === void 0 ? void 0 :
            question.questionNumber, question === null || question === void 0 ? void 0 :
            question.question),
        react_1["default"].createElement("div", { className: "md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-4 md:mb-4" }, question === null || question === void 0 ? void 0 : question.answers.map(function (answer, index) { return (react_1["default"].createElement(atoms_1.Button, { key: index, onClick: function () { return handleClick(answer); }, type: "button", variant: selectedAnswer === answer.text ? variant : "primary", rounded: true, className: "" },
            react_1["default"].createElement("span", { className: "mr-4" }, answer.letter),
            react_1["default"].createElement("p", null, answer.text))); }))));
}
exports["default"] = QuizMolecule;
