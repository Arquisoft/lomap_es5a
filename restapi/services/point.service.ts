import { isErrored } from "stream";
import { IOpinion } from "../models/opinion.model";
import { IPoint, PointModel } from "../models/point.model";
const mongoose = require('mongoose');

/**
 * Buscar todos los puntos de interés creados por un usuario
 *
 * @param webId webId del usuario.
 * @returns Lista de puntos de interés, si los tiene.
 */
 const findAllPointsByUser = async (webId: string) => {
    try {
        const result = PointModel.find();
        return result;
    } catch(error) {
        console.log(error);
    }
};

/**
 * Añade los puntos creados por el usuario
 *
 * @param point point del usario.
 * @returns result
 */
const addPointByUser = (point : IPoint) => {
    try {
        const result = point.save();
        return result;
    } catch(error) {
        console.log(error);
    }
};

/**
 * Elimina puntos que no desea el usuario
 *
 * @param idPoint id del punto del usuario.
 * @returns result
 */
const deletePointByUser = (idPoint : string) => {
    try {
        const result = PointModel.findOneAndRemove({idPoint}); 
        return result;
    } catch(error) {
        console.log(error);
    }
};

/**
 * Añade un like a un punto del mapa
 *
 * @param idPoint id del punto del usuario.
 * @param webId id del usuario.
 * @returns result
 */
const likePointByUser = (idPoint: string, webId: string) => {
    try {
        const result = PointModel.findOneAndUpdate({ idPoint : idPoint }, 
        { $push: { likes : webId } });
        return result;
    } catch(error) {
        console.log(error);
    }
};

export { findAllPointsByUser, addPointByUser, deletePointByUser, likePointByUser };