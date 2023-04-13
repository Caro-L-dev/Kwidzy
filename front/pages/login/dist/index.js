"use strict";
exports.__esModule = true;
/**
 * Package Import
 */
var react_1 = require("react");
/**
 * Page
 */
function loginPage() {
    /**
     * State
     */
    var _a = react_1.useState(""), usernameRegister = _a[0], setUsernameRegistration = _a[1];
    var _b = react_1.useState(""), passwordRegister = _b[0], setPasswordRegistration = _b[1];
    return (react_1["default"].createElement("div", { className: "flex flex-col justify-center" },
        react_1["default"].createElement("div", { className: "mb-6" },
            react_1["default"].createElement("div", { className: "flex flex-col" },
                react_1["default"].createElement("label", { htmlFor: "" }, "username"),
                react_1["default"].createElement("input", { type: "text", onChange: function (event) {
                        setUsernameRegistration(event.target.value);
                    } })),
            react_1["default"].createElement("div", { className: "flex flex-col" },
                react_1["default"].createElement("label", { htmlFor: "" }, "password"),
                react_1["default"].createElement("input", { type: "text", onChange: function (event) {
                        setPasswordRegistration(event.target.value);
                    } })),
            react_1["default"].createElement("button", null, "S'inscrire")),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("h1", null, "Se connecter"),
            react_1["default"].createElement("div", { className: "flex flex-col" },
                react_1["default"].createElement("input", { className: "mb-2", type: "text", placeholder: "username..." }),
                react_1["default"].createElement("input", { className: "mb-2", type: "password", placeholder: "password..." })),
            react_1["default"].createElement("button", null, "Se connecter"))));
}
exports["default"] = loginPage;
