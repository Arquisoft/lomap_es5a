
import PointModel, { IPoint } from "../models/point.model";

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

// find
//db.bios.findOne(
//  { contribs: 'OOP' },
//  { _id: 0, 'name.first': 0, birth: 0 }
//)

const addPointByUser = (userId: string) => {
  // MapaModel.insertOne({name: "Hola", apellido: "Glez"});
};

export { findAllPointsByUser, addPointByUser };
