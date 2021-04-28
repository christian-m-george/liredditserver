import { __prod__ } from "./constants";
import { Post } from "./entities/posts";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/users";

export default {
    entities: [Post, User],
    migrations: {
        path: path.join(__dirname, '/migrations'), // path to folder with migration files
    pattern: /^[\w-]+\d+\.[tj]s$/, // how to match migration files
    },
    dbName: 'lireddit',
    type: 'postgresql',
    user: 'postgres',
    password: 'password',
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];