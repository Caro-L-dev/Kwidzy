"use strict";
exports.__esModule = true;
/**
 * Package Import
 */
var react_1 = require("react");
var link_1 = require("next/link");
// import { useAuth } from "../hooks/useAuth";
/**
 * Local Import
 */
var ai_1 = require("react-icons/ai");
var atoms_1 = require("@/src/components/atoms");
/**
 * Component
 */
function Navbar() {
    // const { user } = useAuth();
    /**
     * Render
     */
    return (react_1["default"].createElement("nav", { className: "flex justify-between items-center mb-7" },
        react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(link_1["default"], { href: "/", className: "md:hidden" },
                react_1["default"].createElement(ai_1.AiOutlineArrowLeft, null)),
            react_1["default"].createElement(link_1["default"], { href: "/", className: "hidden md:block" },
                react_1["default"].createElement(atoms_1.Logo, null)),
            react_1["default"].createElement("div", { className: "flex items-center" },
                react_1["default"].createElement(link_1["default"], { href: "/profil" },
                    react_1["default"].createElement("div", { className: "bg-tertiary-color h-14 w-14 rounded-full mb-2 border-4 border-secondary-color flex justify-center items-center", "aria-hidden": "true" },
                        react_1["default"].createElement("span", null, "K")))))));
}
exports["default"] = Navbar;
