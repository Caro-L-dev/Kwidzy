"use strict";
exports.__esModule = true;
/**
 * Package Import
 */
var react_1 = require("react");
var link_1 = require("next/link");
var client_1 = require("@auth0/nextjs-auth0/client");
/**
 * Local Import
 */
var ai_1 = require("react-icons/ai");
var atoms_1 = require("@/src/components/atoms");
/**
 * Component
 */
function Navbar() {
    var _a, _b;
    var _c = client_1.useUser(), user = _c.user, error = _c.error, isLoading = _c.isLoading;
    if (isLoading)
        return react_1["default"].createElement("p", null, "En cours de chargement ...");
    if (error)
        return react_1["default"].createElement("p", null, error.message);
    return (react_1["default"].createElement("nav", { className: "flex justify-between items-center mb-7" },
        react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(link_1["default"], { href: "/", className: "md:hidden" },
                react_1["default"].createElement(ai_1.AiOutlineArrowLeft, null)),
            react_1["default"].createElement(link_1["default"], { href: "/", className: "hidden md:block" },
                react_1["default"].createElement(atoms_1.Logo, null)),
            user ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("div", { className: "flex items-center" },
                    react_1["default"].createElement(link_1["default"], { href: "/profil" }, user && (react_1["default"].createElement("img", { className: " h-12 w-12 rounded-full mb-4 border-4 border-secondary-color flex justify-center items-center", src: (_a = user.picture) === null || _a === void 0 ? void 0 : _a.toString(), alt: (_b = user.name) === null || _b === void 0 ? void 0 : _b.toString() })))))) : (""))));
}
exports["default"] = Navbar;
