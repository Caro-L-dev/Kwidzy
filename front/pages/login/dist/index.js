"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
var atoms_1 = require("@/src/components/atoms");
var ai_1 = require("react-icons/ai");
var Login = function () {
    var _a = react_1.useState(false), isSuccess = _a[0], setIsSuccess = _a[1];
    var _b = react_1.useState(false), isError = _b[0], setIsError = _b[1];
    var handleSubmit = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var usernameInput, passwordInput, username, password, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    usernameInput = event.currentTarget.elements.namedItem("username");
                    passwordInput = event.currentTarget.elements.namedItem("password");
                    username = usernameInput.value;
                    password = passwordInput.value;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].post("http://localhost:3030/user", {
                            username: username,
                            password: password
                        })];
                case 2:
                    response = _a.sent();
                    console.log(response.data);
                    setIsSuccess(true);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    setIsError(true);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("form", { onSubmit: handleSubmit, className: "flex flex-col justify-center items-center " },
            react_1["default"].createElement("div", { className: " shadow-md w-80 py-14 px-10 rounded overflow-hidden mb-4" },
                react_1["default"].createElement("h2", { className: "border-3 border-primary-color rounded text-xl mb-10 font-bold tracking-widest sm:text-sm" }, "Se connecter"),
                react_1["default"].createElement("div", { className: "flex justify-center items-center border-b  border-solid mb-6 p-2" },
                    react_1["default"].createElement(ai_1.AiOutlineUser, { className: "" }),
                    react_1["default"].createElement("input", { placeholder: "Pseudo", type: "text", id: "username", name: "username", className: " border-0 outline-none bg-transparent w-full pb ml-2 placeholder:text-sm placeholder:text-white", required: true })),
                react_1["default"].createElement("div", { className: "flex justify-center items-center border-b border-gray-400 border-solid mb-6 p-2" },
                    react_1["default"].createElement(ai_1.AiOutlineLock, null),
                    react_1["default"].createElement("input", { placeholder: "Mot de passe", type: "password", id: "password", name: "password", className: "border-0 outline-none bg-transparent w-full pb ml-2 placeholder:text-sm placeholder:text-white", required: true })),
                react_1["default"].createElement(atoms_1.Button, { type: "submit", rounded: true, className: "text-white" }, "Se connecter"),
                isSuccess && (react_1["default"].createElement("div", { className: "mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" }, "L'utilisateur a bien \u00E9t\u00E9 enregistr\u00E9.")),
                isError && (react_1["default"].createElement("div", { className: "mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" }, "Une erreur s'est produite lors de l'enregistrement de l'utilisateur."))))));
};
exports["default"] = Login;
