import * as express from "express";
import { Router } from "express";
import { Cat } from "./cats.model";

const router = Router();

//* READ 전체 고양이 데이터 조회
router.get("/cats", (req: express.Request, res: express.Response) => {
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
router.get("/cats/:id", (req: express.Request, res: express.Response) => {
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
router.post("/cats", (req: express.Request, res: express.Response) => {
  try {
    const data = req.body;
    Cat.push(data);
    res.status(200).send({
      success: true,
      data: {
        data,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      sucess: false,
      error: error.message,
    });
  }
});

export default router;
