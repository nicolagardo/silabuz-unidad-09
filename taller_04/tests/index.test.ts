import request from "supertest";
import app from "../index";

describe("GET /hello", () => {
  test("Deberia responder un statusCode 200", async () => {
    const response = await request(app).get("/hello").send();
    expect(response.statusCode).toBe(200);
  });
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

  test("Deberia tener un Content-Type: application/json", async () => {
    const response = await request(app).post("/users").send(newUser);
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("application/json")
    );
  });
});
