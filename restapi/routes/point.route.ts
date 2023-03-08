import express, { Router } from "express";

import { findAll } from "../controllers/point.controller";

const router: Router = express.Router();

router.get("/findall/:webId", findAll);
// router.post("/add", addPoint);
// router.post("/delete/:pointId", addPoint);
// router.post("/review/:pointId", addPoint);

export default router;