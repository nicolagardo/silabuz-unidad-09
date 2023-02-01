import express from "express";

import { Express, Response, Request } from "express";

const app: Express = express();

const saludo: string = "hola";

app.get("/ping", (req: Request, respuesta: Response) => {
  respuesta.send("pong");
});

export default app;
