import express, { Router } from "express";

import { findAll } from "../controllers/point.controller";

const router: Router = express.Router();

router.get("/all/:webId", findAll);

//router.post("/api/maps/add", addPoint);
// deletePointById
// reviewPointByUser

export default router;