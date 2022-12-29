import { Request, Response } from "express";
import { Router } from "express";
import { Cat } from "./cats.model";

const router = Router();

//* READ 전체 고양이 데이터 조회 -> GET
export const readAllCat = (req: Request, res: Response) => {
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
};

//* READ 특정 고양이 데이터 조회 -> GET
export const readCat = (req: Request, res: Response) => {
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
};

//* CREATE 새로운 고양이 추가 -> POST
export const createCat = (req: Request, res: Response) => {
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
};

//* UPDATE 고양이 데이터 업데이트 -> PUT
export const updateCat = (req: Request, res: Response) => {
  try {
    const data = req.body;
    const params = req.params;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = data;
        result = data;
      }
    });
    res.status(200).send({
      success: true,
      data: {
        result,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      sucess: false,
      error: error.message,
    });
  }
};

//* UPDATE 고양이 데이터 부분 업데이트 -> PATCH
export const updatePartialCat = (req: Request, res: Response) => {
  try {
    const data = req.body;
    const params = req.params;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...data };
        result = data;
      }
    });
    res.status(200).send({
      success: true,
      data: {
        result,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      sucess: false,
      error: error.message,
    });
  }
};

//* DELETE 고양이 데이터 삭제 -> DELETE
export const deleteCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);
    res.status(200).send({
      success: true,
      data: {
        data: newCat,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      sucess: false,
      error: error.message,
    });
  }
};

export default router;
