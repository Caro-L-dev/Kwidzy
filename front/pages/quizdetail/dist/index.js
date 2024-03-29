"use strict";
var _a;
exports.__esModule = true;
/**
 * Package Import
 */
var react_1 = require("react");
var router_1 = require("next/router");
var link_1 = require("next/link");
/**
 * Local Import
 */
var atoms_1 = require("@/src/components/atoms");
var hi_1 = require("react-icons/hi");
var index_module_css_1 = require("./index.module.css");
var axios_1 = require("axios");
/**
 * Datas
 */
var categoryURL = (_a = process.env.NEXT_PUBLIC_CATEGORY_URL) !== null && _a !== void 0 ? _a : "";
/**
 * Page
 */
function quizdetailPage() {
    var router = router_1.useRouter();
    var handleClick = function (path) {
        var categoryName = router.query.category;
        router.push({
            pathname: path,
            query: { category: categoryName }
        });
    };
    var _a = react_1["default"].useState(null), categories = _a[0], setCategories = _a[1];
    /**
     * Fetch datas
     */
    react_1["default"].useEffect(function () {
        var categoryUrl = categoryURL + "?name=" + router.query.category;
        axios_1["default"].get(categoryUrl).then(function (response) {
            setCategories(response.data);
        });
    }, []);
    if (!categories)
        return null;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("title", null,
            "Kwidzy | Description cat\u00E9gorie ",
            categories[0].name,
            " - Niveau",
            " ",
            categories[0].level,
            " - ",
            categories[0].questions_total,
            " questions"),
        react_1["default"].createElement("div", { className: "hidden md:flex md:mb-4 md:items-center" },
            react_1["default"].createElement("span", { className: "mr-4 text-4xl cursor-pointer" },
                react_1["default"].createElement(link_1["default"], { href: "", onClick: function () { return router.back(); } },
                    react_1["default"].createElement(hi_1.HiArrowCircleLeft, null))),
            react_1["default"].createElement("div", { className: "uppercase" },
                react_1["default"].createElement(atoms_1.Title, { name: categories[0].name }))),
        react_1["default"].createElement("div", { className: "flex flex-col justify-between" },
            react_1["default"].createElement("div", { className: "md:flex md:mb-10" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { className: "h-[73px] md:h-full md:w-[580px] p-4 font-bold text-xl rounded-2xl my-4 bg-fixed bg-numerique bg-no-repeat bg-cover bg-center" })),
                react_1["default"].createElement("div", { className: "md:w-full md:ml-12" },
                    react_1["default"].createElement("div", { className: "mb-32" },
                        react_1["default"].createElement("div", { className: "text-txt-tertiary-color" },
                            react_1["default"].createElement(atoms_1.Box, { bgColor: "bg-tertiary-color" }, categories[0].level)),
                        react_1["default"].createElement("div", { className: "text-txt-secondary-color" },
                            react_1["default"].createElement(atoms_1.Box, { bgColor: "bg-secondary-color" },
                                categories[0].questions_total,
                                " questions")),
                        react_1["default"].createElement("div", { className: "text-sm text-left" },
                            react_1["default"].createElement("h3", null, "But du jeu :"),
                            react_1["default"].createElement("div", { className: index_module_css_1["default"].rules },
                                react_1["default"].createElement("p", null, "R\u00E9pondre au plus de questions possibles dans un temps imparti."),
                                react_1["default"].createElement("p", null, "Attention toutefois, d\u00E8s qu'une r\u00E9ponse est fausse, la partie s'arr\u00EAte."),
                                react_1["default"].createElement("p", null, "Bonne chance \u00E0 vous !")))),
                    react_1["default"].createElement(atoms_1.Button, { rounded: true, className: "mb-4 text-txt-primary-color", type: "button", variant: "primary", onClick: function () { return handleClick("/quiz"); } }, "Commencer"))))));
}
exports["default"] = quizdetailPage;
