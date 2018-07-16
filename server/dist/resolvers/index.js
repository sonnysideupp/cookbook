"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_binding_1 = require("prisma-binding");
var Viewer_1 = require("./Viewer");
var Query_1 = require("./Query");
var auth_1 = require("./Mutation/auth");
var tweet_1 = require("./Mutation/tweet");
var AuthPayload_1 = require("./AuthPayload");
exports.resolvers = {
    Query: Query_1.default,
    Mutation: __assign({}, auth_1.auth, tweet_1.default),
    Viewer: Viewer_1.default,
    AuthPayload: AuthPayload_1.AuthPayload
};
exports.fragmentReplacements = prisma_binding_1.extractFragmentReplacements(exports.resolvers);
//# sourceMappingURL=index.js.map