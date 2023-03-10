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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
describe("GET /hello", () => {
    test("Deberia responder un statusCode 200", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.default).get("/hello").send();
        expect(response.statusCode).toBe(200);
    }));
});
describe("POST /users", () => {
    const newUser = {
        email: "pepe@email.com",
        password: "password",
    };
    test("Deberia responder un status 201", async () => {
        const response = await request(app).post("/users").send(newUser);
        expect(response.statusCode).toBe(201);
      });
    
    test("Deberia tener un Content-Type: appilcation/json", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.default).post("/users").send(newUser);
        expect(response.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
    }));
});
