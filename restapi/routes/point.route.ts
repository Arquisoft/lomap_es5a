import express, { Router } from "express";

import { findAll } from "../controllers/point.controller";

const router: Router = express.Router();

router.get("/all/:userId", findAll);

export default router;
