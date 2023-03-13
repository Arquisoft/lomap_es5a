import { RequestHandler } from "express";
import {
  findAllPointsByUser,
  findPointById,
  editPointById,
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
 */
const findAll: RequestHandler = async (req, res) => {
  const webId:string  = req.params.webId;

  const result = await findAllPointsByUser(webId);

  checkStatus(result, res);
};

/**
 * Encuentra el punto de interés solicitado por el cliente.
 * @param req
 * @param res 
 */
const findOne: RequestHandler = async (req, res) => {
  const idPoint = req.params.idPoint;
  const result = await findPointById(idPoint);
  checkStatus(result,res);
}

/**
 * Edita el punto de interés solicitado por el cliente.
 * @param req
 * @param res 
 */
const editPoint: RequestHandler = async (req, res) => {
  const idPoint = req.params.idPoint;
  const edit = req.body;
  const result = await editPointById(idPoint, edit);
  checkStatus(result,res);
}

/**
 * Añade el punto que desea el usuario
 * @param req
 * @param res
 */
const addPoint: RequestHandler = async (req, res) => {
  const pointData = req.body;
  // creamos el punto nuevo
  const point = new PointModel({
    webId: pointData.webId,
    idPoint: pointData.idPoint,
    name: pointData.name,
    description: pointData.description,
    coords: {
      lat: pointData.lat,
      lng: pointData.lng
    },
    direction: pointData.direction,
    opinion: pointData.opinion,
    likes: pointData.opinion
  });

  const result = await addPointByUser(point);

  checkStatus(result, res);
};

/**
 * Elimina un punto pasado por el usuario
 * @param req
 * @param res
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
 */
const likesPoint: RequestHandler = async (req, res) => {
  const { idPoint } = req.params;
  const { webId } = req.body;

  const result = await likePointByUser(idPoint, webId);
  
  checkStatus(result, res);
};

export { findAll, findOne, editPoint, addPoint, deletePoint, likesPoint };
