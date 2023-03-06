/**
 * Buscar todos los puntos de interés creados por un usuario
 *
 * @param userId Id del usuario.
 * @returns Lista de puntos de interés, si los tiene.
 */
import { db } from "../config/mongodb.config";
import MapaModel from "../models/mapa.model";

const findAllPointsByUser = (userId: string) => {
  return {
    data: `Punto de ${userId}`,
  };
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
