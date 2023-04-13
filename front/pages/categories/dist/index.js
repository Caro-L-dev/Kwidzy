"use strict";
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
var dots_1 = require("@/pages/categories/dots");
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
    var _b = react_1.useState(null), categories = _b[0], setCategories = _b[1];
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
    react_1.useEffect(function () {
        var _a;
        var categoriesURL = (_a = process.env.NEXT_PUBLIC_CATEGORIES_URL) !== null && _a !== void 0 ? _a : "";
        axios_1["default"].get(categoriesURL).then(function (response) {
            setCategories(response.data);
        });
    }, []);
    if (!categories) {
        return null;
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null, username ? (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(atoms_1.Title, { name: "Cat\u00E9gories" }),
        react_1["default"].createElement("section", { className: "mb-4 md:grid md:grid-cols-2 md:gap-y-2 md:gap-x-4 md:justify-items-center md:mt-12" }, categories.map(function (category, index) { return (react_1["default"].createElement(atoms_1.Button, { key: category.id, rounded: true, 
            // L'opérateur modulo "% bgColorBtn.length" garantit que la valeur de "index"
            // est toujours comprise entre 0 et 2, ce qui nous permet de sélectionner
            // la couleur correspondante dans le tableau "bgColorBtn".
            className: "mb-2 " + bgColorBtn[index % bgColorBtn.length] + " " + bgBorderColorBtn[index % bgBorderColorBtn.length], type: "button", variant: "primary", onClick: function () { return handleClick("/quizdetail"); } }, category.name)); })),
        react_1["default"].createElement("div", { className: "flex justify-center text-2xl mb-4" },
            react_1["default"].createElement(dots_1.RepeatDots, { times: 3 },
                react_1["default"].createElement(dots_1.Dot, { ASCIIChar: "." }))))) : (react_1["default"].createElement(molecules_1.Start, { setUsername: setUsername }))));
}
exports["default"] = categoriesPage;
