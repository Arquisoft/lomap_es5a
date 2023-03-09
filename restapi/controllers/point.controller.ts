import { RequestHandler } from "express";
import {
  findAllPointsByUser,
  addPointByUser,
  deletePointByUser,
  reviewPointByUser,
} from "../services/point.service";
import { PointModel } from "../models/point.model";

/**
 * Encuentra todos los puntos creados por un usuario
 * @param req
 * @param res
 * @param next
 */
const findAll: RequestHandler = async (req, res) => {
  const { webId } = req.params;
  const result = await findAllPointsByUser(webId, res);
  res.status(200).json(result);
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

  const result = await addPointByUser(point, res);
  res.status(200).json(result);
};

/**
 * Elimina un punto pasado por el usuario
 * @param req
 * @param res
 * @param next
 */
const deletePoint: RequestHandler = async (req, res) => {
  const { idPoint } = req.params;
  const result = await deletePointByUser(idPoint, res);
  res.status(200).json(result);
};

/**
 * Realiza una review sobre un punto en concreto
 * @param req
 * @param res
 * @param next
 */
const reviewPoint: RequestHandler = async (req, res) => {
  const { idPoint } = req.params;
  const { opinion } = req.body;
  const result = await reviewPointByUser(idPoint, opinion, res);
  res.status(200).json(result);
};

export { findAll, addPoint, deletePoint, reviewPoint };
