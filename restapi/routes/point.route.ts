import express, { Router } from "express";

import { findAll, addPoint } from "../controllers/point.controller";

const router: Router = express.Router();

router.get("/all/:userId", findAll);
router.post("/api/maps/add", addPoint);

// rutas del point

// addPoint
// getPointById
// getPointByUserWebId
// getFriendsPoints 
// editPointById
// deletePointById
// filtrarPuntoPorCategoria

// (otra clase) Rutas para el usuario -> reviewPointByUser, getFriendsByUserId

export default router;