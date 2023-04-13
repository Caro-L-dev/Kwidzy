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
 * Image Import
 */
var avatar_png_1 = require("@/public/assets/images/avatar.png");
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
            react_1["default"].createElement(link_1["default"], { href: "/categories", className: "md:hidden" }, "Cat\u00E9gories"),
            react_1["default"].createElement(link_1["default"], { href: "/profil" },
                react_1["default"].createElement(atoms_1.Avatar, { src: avatar_png_1["default"], alt: "Ananas Funky", variant: "circular", size: "md", className: "" })))));
}
exports["default"] = Navbar;
