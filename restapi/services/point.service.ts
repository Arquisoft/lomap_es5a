import { Types } from "mongoose";
import { isErrored } from "stream";
import { IOpinion } from "../models/opinion.model";
import { IPoint, PointModel } from "../models/point.model";


/**
 * Buscar todos los puntos de interés creados por un usuario
 *
 * @param webId webId del usuario.
 * @returns Lista de puntos de interés, si los tiene.
 */
 const findAllPointsByUser = async (webId: string) => {
    const result = await PointModel.find({webId});
    return result;
};

/**
 * Busca el punto de interés con el id suministrado.
 *
 * @param idPoint id del punto de interés (no el generado por la base de datos).
 * @returns Punto de interés solicitado, en caso de existir.
 */
const findPointById = async (idPoint: string) => {
    const result = await PointModel.findOne({idPoint});
    return result;
}

/**
 * Edita el punto de interés con id suministrado con los datos recibidos del formulario.
 *
 * @param idPoint id del punto de interés (no el generado por la base de datos).
 * @param edit body de la peticion post con todods los datos que pasará a tener el punto de interés.
 * @returns Punto de interés solicitado, en caso de existir.
 */
const editPointById = async (idPoint: string, edit:any) => {    
    const filter = {idPoint};
    const update = edit;
    const result = await PointModel.findOneAndUpdate(filter,update, {
        new : true
    });
    return result;

}

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

export { findAllPointsByUser, findPointById, editPointById ,addPointByUser, deletePointByUser, likePointByUser };