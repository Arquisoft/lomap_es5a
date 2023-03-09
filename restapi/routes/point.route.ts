import express, { Router } from "express";

import { findAll, addPoint, deletePoint, reviewPoint } from "../controllers/point.controller";

const router: Router = express.Router();

// rutas a implementar
router.get("/findall/:webId", findAll); // encuentra todos los puntos creados por el usuario
router.post("/add", addPoint); // añade un punto en el mapa
router.delete("/delete/:idPoint", deletePoint); // elimina un punto del mapa
router.put("/review/:idPoint", reviewPoint); // realiza una review sobre un punto cualquiera del mapa

export default router;