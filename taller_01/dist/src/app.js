"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const saludo = "hola";
app.get("/ping", (req, respuesta) => {
    respuesta.send("pong");
});
app.get("/user", function (req, res) {
    res.status(200).json({ name: "john" });
});
exports.default = app;
