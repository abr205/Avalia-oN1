"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_routes_1 = __importDefault(require("./task/task.routes"));
const auth_routes_1 = __importDefault(require("./auth/auth.routes"));
const routes = (0, express_1.Router)();
routes.use('/task', task_routes_1.default);
routes.use('/auth', auth_routes_1.default);
exports.default = routes;
