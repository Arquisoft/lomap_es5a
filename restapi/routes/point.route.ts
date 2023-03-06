import express, { Router } from "express";

import { findAll, addPoint } from "../controllers/point.controller";

const router: Router = express.Router();

router.get("/all/:userId", findAll);

router.post("/api/maps/point/add", addPoint);
router.post("/api/maps/point/delete/:pointId", addPoint);
router.post("/api/maps/point/review/:pointId", addPoint);

export default router;