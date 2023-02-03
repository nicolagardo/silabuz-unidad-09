"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json);
app.get("/hello", (req, res) => {
    res.send("Hello");
});
app.post("/users", (req, res) => {
    const { username, password } = req.body;
    const user = Object.assign({}, req.body);
    res.status(201).json(user);
});
app.listen(3000, () => {
    console.log("Servidor corriendo http://localhost:3000");
});
exports.default = app;
