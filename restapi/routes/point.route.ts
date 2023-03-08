import express, { Router } from "express";

import { findAll } from "../controllers/point.controller";

const router: Router = express.Router();

router.get("/all/:webId", findAll);
router.post("/api/maps/point/add", addPoint);
router.post("/api/maps/point/delete/:pointId", addPoint);
router.post("/api/maps/point/review/:pointId", addPoint);



export default router;