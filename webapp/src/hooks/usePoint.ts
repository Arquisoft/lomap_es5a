import { useState } from "react";
import { findPointById as findById } from "../api/api";

function usePoint() {
  //const [points, setPoints] = useState<Point[] | null>(null);
  const [points, setPoints] = useState([]);
  const [userPoints, setUserPoints] = useState([]);

  // Para el detalle de un punto
  const [selectedPoint, setSelectedPoint] = useState<any>(null);

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
    findPointById,
    points,
    userPoints,
    selectedPoint,
  };
}

export default usePoint;