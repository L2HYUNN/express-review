import * as express from "express";
import { ExpressNextTypes, ExpressTypes } from "types";
import { Cat } from "./app.model";

const app: express.Express = express();

const port: number = 8000;

app.use(({ req, res, next }: ExpressNextTypes) => {
  console.log(req.rawHeaders[1]);
  console.log("This is Logging Middleware");
  next();
});

app.get("/", ({ req, res }: ExpressTypes) => {
  res.send({ cats: Cat });
});

app.get("/cats/blue", ({ req, res }: ExpressTypes) => {
  res.send({ blue: Cat[0] });
});

app.get("/cats/som", ({ req, res }: ExpressTypes) => {
  res.send({ blue: Cat[1] });
});

app.use(({ req, res }: ExpressTypes) => {
  console.log("This is Logging Middleware");
  res.send({ error: "404 not found" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
