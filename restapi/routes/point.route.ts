import express, { Router } from "express";

import { findAll, addPoint, deletePoint, likesPoint } from "../controllers/point.controller";

const router: Router = express.Router();

// rutas a implementar
router.get("/findall/:webId", findAll); // encuentra todos los puntos creados por el usuario
router.post("/add", addPoint); // añade un punto en el mapa
router.delete("/delete/:idPoint", deletePoint); // elimina un punto del mapa
router.put("/likes/:idPoint", likesPoint); // añade un like a un punto cualquiera del mapa

export default router;