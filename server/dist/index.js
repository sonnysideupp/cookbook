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
var graphql_yoga_1 = require("graphql-yoga");
var prisma_1 = require("./generated/prisma");
var resolvers_1 = require("./resolvers");
var db = new prisma_1.Prisma({
    fragmentReplacements: resolvers_1.fragmentReplacements,
    endpoint: process.env.PRISMA_ENDPOINT,
    debug: true,
    secret: process.env.PRISMA_SECRET // only needed if specified in `database/prisma.yml` (value set in `.env`)
});
var server = new graphql_yoga_1.GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers: resolvers_1.resolvers,
    context: function (req) { return (__assign({}, req, { db: db })); }
});
server.start(function () { return console.log("Server is running on http://localhost:4000"); });
//# sourceMappingURL=index.js.map