"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nextjsAuth = require("@auth0/nextjs-auth0");

var _default = (0, _nextjsAuth.withApiAuthRequired)(function SecretRoute(req, res) {
  var session = (0, _nextjsAuth.getSession)(req, res);
  var user = session.user;
});

exports["default"] = _default;