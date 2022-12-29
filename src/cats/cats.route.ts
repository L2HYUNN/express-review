import { Router } from "express";
import {
  createCat,
  deleteCat,
  readAllCat,
  readCat,
  updateCat,
  updatePartialCat,
} from "./cats.service";

const router = Router();

//* READ 전체 고양이 데이터 조회 -> GET
router.get("/cats", readAllCat);

//* READ 특정 고양이 데이터 조회 -> GET
router.get("/cats/:id", readCat);

//* CREATE 새로운 고양이 추가 -> POST
router.post("/cats", createCat);

//* UPDATE 고양이 데이터 업데이트 -> PUT
router.put("/cats/:id", updateCat);

//* UPDATE 고양이 데이터 부분 업데이트 -> PATCH
router.patch("/cats/:id", updatePartialCat);

//* DELETE 고양이 데이터 삭제 -> DELETE
router.delete("/cats/:id", deleteCat);

export default router;
