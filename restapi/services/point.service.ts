import { IOpinion } from "../models/opinion.model";
import { IPoint, PointModel } from "../models/point.model";
import { sendError } from "./helper/hellpers";
const mongoose = require('mongoose');

/**
 * Buscar todos los puntos de interés creados por un usuario
 *
 * @param webId webId del usuario.
 * @returns Lista de puntos de interés, si los tiene.
 */
 const findAllPointsByUser = async (webId: string, res:any) => {
    const result = await PointModel.find()
                    .then(result => res.status(200).send(result))
		            .catch(error => sendError(error, res));    
    return result; 
};

/**
 * Añade los puntos creados por el usuario
 *
 * @param point point del usario.
 * @returns result
 */
const addPointByUser = (point : IPoint, res:any) => {
    const result = point.save()
                    .then(result => res.status(200).send(result))
		            .catch(error => sendError(error, res));
    return result;
};

/**
 * Elimina puntos que no desea el usuario
 *
 * @param idPoint id del punto del usuario.
 * @returns result
 */
const deletePointByUser = (idPoint : string, res:any) => {
    const result = PointModel.deleteOne({idPoint: idPoint})
                    .then(result => res.status(200).send('Succesfully deleted point'))
		            .catch(error => sendError(error, res));
    return result; 
};

/**
 * Añade una review de un punto realizada por el usuario
 *
 * @param idPoint id del punto del usuario.
 * @param opinion opinion del usuario.
 * @returns result
 */
const reviewPointByUser = (idPoint: string, opinion: IOpinion, res:any) => {
    const result = PointModel.findByIdAndUpdate({idPoint: idPoint}, {opinion:opinion})
                    .then(result => res.status(200).send('Succesfully review added'))
		            .catch(error => sendError(error, res));
    return result; 
};

export { findAllPointsByUser, addPointByUser, deletePointByUser, reviewPointByUser };

