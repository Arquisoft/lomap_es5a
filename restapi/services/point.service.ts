import { IOpinion } from "../models/opinion.model";
import { PointModel, IPoint } from "../models/point.model";

/**
 * Buscar todos los puntos de interés creados por un usuario
 *
 * @param webId webId del usuario.
 * @returns Lista de puntos de interés, si los tiene.
 */
 const findAllPointsByUser = async (webId: string) => {
    const result = await PointModel.find();    
    return result; 
};

/**
 * Añade los puntos creados por el usuario
 *
 * @param point point del usario.
 * @returns result
 */
const addPointByUser = (point : IPoint) => {
    const result = point.save();
    return result;
};

/**
 * Elimina puntos que no desea el usuario
 *
 * @param idPoint id del punto del usuario.
 * @returns result
 */
const deletePointByUser = (idPoint : string) => {
    const result = PointModel.findByIdAndDelete(idPoint);    
    return result; 
};

/**
 * Añade una review de un punto realizada por el usuario 
 *
 * @param idPoint id del punto del usuario.
 * @param opinion opinion del usuario.
 * @returns result
 */
const reviewPointByUser = (idPoint: string, opinion: IOpinion) => {
    const result = PointModel.findByIdAndUpdate(idPoint, opinion);    
    return result; 
};

export { findAllPointsByUser, addPointByUser, deletePointByUser, reviewPointByUser };
