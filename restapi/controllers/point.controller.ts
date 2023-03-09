import { RequestHandler } from "express";
import {
  findAllPointsByUser,
  addPointByUser,
  deletePointByUser,
  likePointByUser,
} from "../services/point.service";
import { PointModel } from "../models/point.model";
import { checkStatus } from "../services/helper/hellpers";

/**
 * Encuentra todos los puntos creados por un usuario
 * @param req
 * @param res
 * @param next
 */
const findAll: RequestHandler = async (req, res) => {
  const { webId } = req.params;

  const result = await findAllPointsByUser(webId);

  checkStatus(result, res);
};

/**
 * Añade el punto que desea el usuario
 * @param req
 * @param res
 * @param next
 */
const addPoint: RequestHandler = async (req, res) => {
  const pointData = req.body;

  // creamos el punto nuevo
  const point = new PointModel({
    webId: pointData.webId,
    idPoint: pointData.idPoint,
    name: pointData.name,
    description: pointData.description,
    lat: pointData.lat,
    lng: pointData.lng,
    direction: pointData.direction,
    opiniones: pointData.opinion,
  });

  const result = await addPointByUser(point);

  checkStatus(result, res);
};

/**
 * Elimina un punto pasado por el usuario
 * @param req
 * @param res
 * @param next
 */
const deletePoint: RequestHandler = async (req, res) => {
  const { idPoint } = req.params;

  const result = await deletePointByUser(idPoint);

  checkStatus(result, res);
};

/**
 * Registra un like sobre un punto en concreto
 * @param req
 * @param res
 * @param next
 */
const likesPoint: RequestHandler = async (req, res) => {
  const { idPoint } = req.params;
  const { webId } = req.body;

  const result = await likePointByUser(idPoint, webId);
  
  checkStatus(result, res);
};

export { findAll, addPoint, deletePoint, likesPoint };
