"use strict";
exports.__esModule = true;
/**
 * Package Import
 */
var react_1 = require("react");
var client_1 = require("@auth0/nextjs-auth0/client");
/**
 * Local Import
 */
var atoms_1 = require("@/src/components/atoms");
var link_1 = require("next/link");
/**
 * Page
 */
function ProfilePage() {
    var _a = client_1.useUser(), user = _a.user, error = _a.error, isLoading = _a.isLoading;
    if (isLoading)
        return react_1["default"].createElement("p", null, "En cours de chargement ...");
    if (error)
        return react_1["default"].createElement("p", null, error.message);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "flex flex-col justify-between items-center" }, user ? (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("img", { className: " h-24 w-24 rounded-full mb-4 border-4 border-secondary-color flex justify-center items-center", src: user.picture, alt: user.name }),
            react_1["default"].createElement("h2", null, user.name),
            react_1["default"].createElement("p", { className: "text-xs mb-6" }, "Compte officiel"))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("div", { className: "bg-tertiary-color h-24 w-24 rounded-full mb-2 border-4 border-secondary-color flex justify-center items-center", "aria-hidden": "true" },
                react_1["default"].createElement("span", null, "K")),
            react_1["default"].createElement("h2", null, "Invit\u00E9"),
            react_1["default"].createElement("p", { className: "text-xs mb-6" }, "Compte invit\u00E9")))),
        react_1["default"].createElement(link_1["default"], { href: "/api/auth/logout" },
            react_1["default"].createElement(atoms_1.Button, { rounded: true, className: "mb-4", type: "submit", variant: "tertiary" }, "Se d\u00E9connecter"))));
}
exports["default"] = ProfilePage;
