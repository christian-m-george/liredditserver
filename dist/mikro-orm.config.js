"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const posts_1 = require("./entities/posts");
const path_1 = __importDefault(require("path"));
exports.default = {
    entities: [posts_1.Post],
    migrations: {
        path: path_1.default.join(__dirname, '/migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    dbName: 'lireddit',
    type: 'postgresql',
    user: 'postgres',
    password: 'password',
    debug: !constants_1.__prod__,
};
//# sourceMappingURL=mikro-orm.config.js.map