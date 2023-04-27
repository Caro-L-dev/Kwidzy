"use strict";
exports.__esModule = true;
/**
 * Package Import
 */
var router_1 = require("next/router");
var client_1 = require("@auth0/nextjs-auth0/client");
/**
 * Local Import
 */
var atoms_1 = require("@/src/components/atoms");
var link_1 = require("next/link");
/**
 * Page
 */
function homePage() {
    var router = router_1.useRouter();
    var _a = client_1.useUser(), user = _a.user, error = _a.error, isLoading = _a.isLoading;
    var handleClick = function (path) {
        router.push(path);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "relative mt-56 md:mt-[20%]" },
            React.createElement("div", { className: "flex justify-center" },
                React.createElement(atoms_1.Triangle, { className: "md:hidden", position: "down" })),
            React.createElement("h1", { className: "absolute top-6 right-0 left-0 font-bold text-3xl md:text-6xl mb-20 md:relative md:text-center" }, "KWIDZY")),
        user ? (React.createElement("div", { className: "mb-8" },
            React.createElement("p", null,
                "Coucou ",
                React.createElement("span", { className: "text-tertiary-color" }, user.name),
                " !"),
            React.createElement("p", { className: "mb-5" }, "C'est l'heure de "),
            React.createElement(atoms_1.Button, { type: "button", variant: "primary", className: "mb-4", rounded: true, onClick: function () { return handleClick("/categories"); } }, "Jouer !"),
            React.createElement(link_1["default"], { href: "/api/auth/logout" }, "Se d\u00E9connecter"))) : (React.createElement(React.Fragment, null,
            React.createElement(link_1["default"], { href: "/api/auth/login" },
                React.createElement(atoms_1.Button, { rounded: true, className: "mt-20 mb-8", type: "submit", variant: "secondary" }, "Se connecter"))))));
}
exports["default"] = homePage;
