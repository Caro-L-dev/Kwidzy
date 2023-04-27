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
/**
 * Page
 */
function homePage() {
    /**
     * Routing
     */
    var router = router_1.useRouter();
    var _a = client_1.useUser(), user = _a.user, error = _a.error, isLoading = _a.isLoading;
    // console.log(user);
    if (isLoading)
        return React.createElement("p", null, "En cours de chargement ...");
    if (error)
        return React.createElement("p", null, error.message);
    if (user) {
        return (React.createElement(React.Fragment, null,
            React.createElement("h1", null,
                "Bienvenue ",
                user.name,
                " !"),
            React.createElement("a", { href: "/api/auth/logout" }, "Se d\u00E9connecter")));
    }
    /**
     * Actions
     */
    var handleClick = function (path) {
        router.push(path);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("a", { href: "/api/auth/login" }, "Se connecter"),
        React.createElement("div", { className: "relative mt-56 md:mt-[20%]" },
            React.createElement("div", { className: "flex justify-center" },
                React.createElement(atoms_1.Triangle, { className: "md:hidden", position: "down" })),
            React.createElement("h1", { className: "absolute top-6 right-0 left-0 font-bold text-3xl md:text-6xl mb-8 md:relative md:text-center" }, "KWIDZY")),
        React.createElement(atoms_1.Button, { type: "button", variant: "primary", className: "mt-20 mb-4", rounded: true, onClick: function () { return handleClick("/categories"); } }, "Jouer")));
}
exports["default"] = homePage;
