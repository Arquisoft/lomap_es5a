import express, { Router } from "express";

import { findAll, findOne, editPoint, addPoint, deletePoint, likesPoint } from "../controllers/point.controller";

const router: Router = express.Router();

// rutas a implementar
router.get("/findall/:webId", findAll); // encuentra todos los puntos creados por el usuario
router.get("/find/:idPoint", findOne); // encuentra el punto de interés solicitado
router.post("/edit/:idPoint" , editPoint); // edita un punto de interés del mapa
router.post("/add", addPoint); // añade un punto en el mapa
router.delete("/delete/:idPoint", deletePoint); // elimina un punto del mapa
router.put("/likes/:idPoint", likesPoint); // añade un like a un punto cualquiera del mapa

export default router;