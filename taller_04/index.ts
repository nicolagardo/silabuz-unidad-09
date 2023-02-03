import express from "express";
import { Request, Response } from "express";

const app = express();
app.use(express.json);

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello");
});

app.post("/users", (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = { ...req.body };
  res.status(201).json(user);
});

app.listen(3000, () => {
  console.log("Servidor corriendo http://localhost:3000");
});
export default app;
