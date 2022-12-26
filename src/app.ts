import * as express from "express";
import { Cat } from "./app.model";

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

//* READ 전체 고양이 데이터 조회
app.get("/cats", (req: express.Request, res: express.Response) => {
  try {
    const cats = Cat;
    res.status(200).send({
      sucess: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      sucess: false,
      error: error.message,
    });
  }
});

//* READ 특정 고양이 데이터 조회
app.get("/cats/:id", (req: express.Request, res: express.Response) => {
  try {
    const params = req.params;
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });
    res.status(200).send({
      sucess: true,
      data: {
        cat,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      sucess: false,
      error: error.message,
    });
  }
});

// * CREATE 새로운 고양이 추가
app.post("/cats", (req: express.Request, res: express.Response) => {
  try {
    const data = req.body;
    Cat.push(data);
  } catch (error: any) {
    res.status(400).send({
      sucess: false,
      error: error.message,
    });
  }
});

//* 404 middleware
app.use((req: express.Request, res: express.Response) => {
  console.log("This is Logging Middleware");
  res.send({ error: "404 not found" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
