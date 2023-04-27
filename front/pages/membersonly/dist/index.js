"use strict";
exports.__esModule = true;
exports.getServerSideProps = void 0;
var react_1 = require("react");
var nextjs_auth0_1 = require("@auth0/nextjs-auth0");
var members = function () {
    return react_1["default"].createElement("h1", null, "MEMBERS ONLY!!");
};
exports["default"] = members;
exports.getServerSideProps = nextjs_auth0_1.withPageAuthRequired();
