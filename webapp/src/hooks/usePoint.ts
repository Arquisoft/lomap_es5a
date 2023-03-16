import { useState } from "react";
import { findAllPointsByUser as findAllByUser, findPointById as findById } from "src/api/api";

function usePoint() {
  //const [points, setPoints] = useState<Point[] | null>(null);
  const [points, setPoints] = useState([]);
  const [userPoints, setUserPoints] = useState([]);

  // Para el detalle de un punto
  const [selectedPoint, setSelectedPoint] = useState<any>(null);

  /**
   * Obtener todos los puntos registrados.
   */
  const findAllPoints = async () => {
    const result = await findAllByUser("2");
    setPoints(result);
  };

  /**
   * Obtener todos los puntos de interes de un usuario.
   * @param webId
   */
  const findAllPointsByUser = async (webId: string) => {
    const result = await findAllByUser(webId);
    setUserPoints(result);
  };

  /**
   * Obtener toda la información de un punto de interes.
   *
   * @param idPoint Identificador del punto de interes.
   */
  const findPointById = async (idPoint: string) => {
    const result = await findById(idPoint);
    setSelectedPoint(result);
  };

  return {
    findAllPoints,
    findAllPointsByUser,
    findPointById,
    points,
    userPoints,
    selectedPoint,
  };
}

export default usePoint;
