import * as express from "express";
import catsRouter from "./cats/cats.route";

const app: express.Express = express();

const port: number = 8000;

//* logging middleware
app.use((req, res, next: express.NextFunction) => {
  console.log(req.rawHeaders[1]);
  console.log("This is Logging Middleware");
  next();
});

//* json middleware
app.use(express.json());

app.use(catsRouter);

//* 404 middleware
app.use((req: express.Request, res: express.Response) => {
  console.log("This is Logging Middleware");
  res.send({ error: "404 not found" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
