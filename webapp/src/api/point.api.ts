const apiEndPoint = "http://localhost:5001"; 
// TODO: Refactorizar

/**
 * Obtener la información de un punto de interés por su id. 
 *
 * @param id Id del punto de interés.
 * @returns 
 */
const getPointDataById = (id: string) => {
  return fetch(`${apiEndPoint}/point/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());
};

export { getPointDataById };

