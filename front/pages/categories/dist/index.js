"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
/**
 * Package Import
 */
var react_1 = require("react");
var router_1 = require("next/router");
var axios_1 = require("axios");
/**
 * Local Import
 */
var atoms_1 = require("@/src/components/atoms");
var molecules_1 = require("@/src/components/molecules");
/**
 * Several dots Function
 */
var CreateCharactersWithProps = function (_a) {
    var ASCIIChar = _a.ASCIIChar, props = __rest(_a, ["ASCIIChar"]);
    return react_1["default"].createElement("span", __assign({}, props), ASCIIChar);
};
var RepeatDots = function (_a) {
    var times = _a.times, children = _a.children;
    return react_1["default"].cloneElement(children, {
        //   This will override the original ASCIIChar in the div
        ASCIIChar: children.props.ASCIIChar.repeat(times)
    });
};
/**
 * Datas
 */
var categoriesURL = process.env.NEXT_PUBLIC_CATEGORIES_URL;
/**
 * Page
 */
function categoriesPage() {
    /**
     * Routing
     */
    var router = router_1.useRouter();
    /**
     * Button Style
     */
    var bgColorBtn = [
        "bg-primary-color",
        "bg-secondary-color",
        "bg-tertiary-color",
    ];
    var bgBorderColorBtn = [
        "border-darker-primary-color",
        "border-darker-secondary-color",
        "border-darker-tertiary-color",
    ];
    /**
     * State
     */
    var _a = react_1.useState(null), username = _a[0], setUsername = _a[1];
    var _b = react_1["default"].useState(null), categories = _b[0], setCategories = _b[1];
    /**
     * Action
     */
    var handleClick = function (path) {
        if (path === "/quizdetail") {
            console.log("Je me rends sur la page QuizDetail");
            router.push(path);
        }
    };
    /**
     * Fetch datas
     */
    react_1["default"].useEffect(function () {
        axios_1["default"].get(categoriesURL).then(function (response) {
            setCategories(response.data);
        });
    }, []);
    if (!categories)
        return null;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, username ? (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(atoms_1.Title, { name: "Cat\u00E9gories" }),
        react_1["default"].createElement("section", { className: "mb-4 md:grid md:grid-cols-2 md:gap-y-2 md:gap-x-4 md:justify-items-center md:mt-12" }, categories.map(function (category, index) { return (react_1["default"].createElement(atoms_1.Button, { key: category.id, rounded: true, 
            // L'opérateur modulo "% bgColorBtn.length" garantit que la valeur de "index"
            // est toujours comprise entre 0 et 2, ce qui nous permet de sélectionner
            // la couleur correspondante dans le tableau "bgColorBtn".
            className: "mb-2 " + bgColorBtn[index % bgColorBtn.length] + " " + bgBorderColorBtn[index % bgBorderColorBtn.length], type: "button", variant: "primary", onClick: function () { return handleClick("/quizdetail"); } }, category.name)); })),
        react_1["default"].createElement("div", { className: "flex justify-center text-2xl mb-4" },
            react_1["default"].createElement(RepeatDots, { times: 3 },
                react_1["default"].createElement(CreateCharactersWithProps, { ASCIIChar: "." }))))) : (react_1["default"].createElement(molecules_1.Start, { setUsername: setUsername }))));
}
exports["default"] = categoriesPage;
