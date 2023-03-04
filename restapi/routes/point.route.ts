import express, { Router } from "express";

import { findAll, addPoint } from "../controllers/point.controller";

const router: Router = express.Router();

router.get("/all/:userId", findAll);
router.post("/api/maps/add", addPoint);

// rutas del point (point.route)

// addPoint
// getPointById
// getPointByUserWebId
// getFriendsPoints 
// editPointById
// deletePointById
// filtrarPuntoPorCategoria

// (otra clase -> user.route) Rutas para el usuario -> reviewPointByUser, getFriendsByUserId

// (otras posibles rutas)
// login y validateFields (validadores de puntos)
// /validadores/OrderValidator.ts

// implementar en Controller todo y no hacer Service

export default router;