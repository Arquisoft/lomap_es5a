import express, { Router } from "express";

import { findAll, addPoint } from "../controllers/point.controller";

const router: Router = express.Router();

router.get("/all/:userId", findAll);

router.post("/api/maps/add", addPoint);
// deletePointById
// reviewPointByUser

export default router;