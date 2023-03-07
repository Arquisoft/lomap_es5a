
import PointModel, { IPoint } from "../models/point.model";

/**
 * Buscar todos los puntos de interés creados por un usuario
 *
 * @param webId webId del usuario.
 * @returns Lista de puntos de interés, si los tiene.
 */
const findAllPointsByUser = (webId: string) => {
    return PointModel.find({'webId' : webId});
};

const addPointByUser = (userId: string) => {
  return {
    data: `Punto de ${userId}`,
  };
};

export { findAllPointsByUser, addPointByUser };
