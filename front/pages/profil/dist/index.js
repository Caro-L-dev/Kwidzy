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
var link_1 = require("next/link");
/**
 * Page
 */
function ProfilePage() {
    var router = router_1.useRouter();
    var handleClick = function (path) {
        if (path === "/register") {
            console.log("Je me rends sur la page S'inscrire");
        }
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "flex flex-col justify-between items-center" },
            react_1["default"].createElement("div", { className: "bg-tertiary-color h-24 w-24 rounded-full mb-2 border-4 border-secondary-color flex justify-center items-center", "aria-hidden": "true" },
                react_1["default"].createElement("span", null, "K")),
            react_1["default"].createElement(atoms_1.SubTitle, { name: "Joueur" }),
            react_1["default"].createElement("p", { className: "text-xs mb-6" }, "Compte invit\u00E9")),
        react_1["default"].createElement(link_1["default"], { href: "/register" },
            react_1["default"].createElement(atoms_1.Button, { rounded: true, className: "mb-4", type: "submit", variant: "primary", onClick: function () { return handleClick("/register"); } }, "Cr\u00E9er un compte")),
        react_1["default"].createElement(link_1["default"], { href: "/login" },
            react_1["default"].createElement(atoms_1.Button, { rounded: true, className: "mb-4", type: "submit", variant: "secondary", onClick: function () { return handleClick("/login"); } }, "Se connecter")),
        react_1["default"].createElement(atoms_1.Button, { rounded: true, className: "mb-4", type: "submit", variant: "tertiary" }, "Se d\u00E9connecter")));
}
exports["default"] = ProfilePage;
