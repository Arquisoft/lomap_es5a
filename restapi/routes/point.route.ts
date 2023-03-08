import express, { Router } from "express";

import { findAll } from "../controllers/point.controller";

const router: Router = express.Router();

router.get("/all/:webId", findAll);

<<<<<<< HEAD
router.post("/api/maps/point/add", addPoint);
router.post("/api/maps/point/delete/:pointId", addPoint);
router.post("/api/maps/point/review/:pointId", addPoint);
=======
//router.post("/api/maps/add", addPoint);
// deletePointById
// reviewPointByUser
>>>>>>> origin/MarcosBackEnd

export default router;