import * as express from "express";
import catsRouter from "./cats/cats.route";
class Server {
  public app: express.Application;
  public port: number;

  constructor() {
    const app: express.Application = express();
    this.app = app;
    this.port = 8000;
  }

  private setRoute() {
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    //* logging middleware
    this.app.use((req, res, next: express.NextFunction) => {
      console.log(req.rawHeaders[1]);
      console.log("This is Logging Middleware");
      next();
    });

    //* json middleware
    this.app.use(express.json());

    this.setRoute();

    //* 404 middleware
    this.app.use((req: express.Request, res: express.Response) => {
      console.log("This is Logging Middleware");
      res.send({ error: "404 not found" });
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
