"use strict";
exports.__esModule = true;
/**
 * Package Import
 */
var react_1 = require("react");
/**
 * Local Import
 */
var atoms_1 = require("@/src/components/atoms");
var molecules_1 = require("@/src/components/molecules");
/**
 * Component
 */
function Start(_a) {
    var setUsername = _a.setUsername;
    var inputRef = react_1.useRef();
    var handleClick = function () {
        inputRef.current.value && setUsername(inputRef.current.value);
    };
    // S'affiche au fur et à mesure - animation
    return (react_1["default"].createElement("div", { className: "flex flex-col" },
        react_1["default"].createElement("input", { className: "rounded-full text-sm tracking-wide p-4 w-full bg-secondary-color placeholder-white focus:outline-none focus:bg-darker-secondary-color mb-6", type: "text", id: "pseudo", name: "pseudo", required: true, minLength: 3, maxLength: 8, placeholder: "Quel est ton pseudo ?", ref: inputRef }),
        react_1["default"].createElement("p", null, "Attention, sans pseudo pas d'entr\u00E9e !"),
        react_1["default"].createElement("div", { className: "mt-6" },
            react_1["default"].createElement(molecules_1.AvatarChoice, null),
            react_1["default"].createElement(atoms_1.Bubble, null, "Pret \u00E0 te lancer user ?"),
            react_1["default"].createElement(atoms_1.Button, { type: "button", variant: "primary", className: "w-full mb-4", rounded: true, onClick: handleClick }, "C'est parti !"))));
}
exports["default"] = Start;
