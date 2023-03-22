import { IPoint } from "../../../restapi/models/point.model";
import { User } from "../shared/shareddtypes";

/**
 * Añadir un usuario al sistema.
 *
 * @param user Usuario a añadir.
 * @returns
 */
export async function addUser(user: User): Promise<boolean> {
  const apiEndPoint =
    process.env.REACT_APP_API_URI || "http://localhost:5001/api";
  let response = await fetch(apiEndPoint + "/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: user.name, email: user.email }),
  });

  if (response.status === 200) return true;
  else return false;
}

/**
 * Obtener todos los usuarios del sistema.
 *
 * @returns
 */
export async function getUsers(): Promise<User[]> {
  const apiEndPoint =
    process.env.REACT_APP_API_URI || "http://localhost:5001/api";
  let response = await fetch(apiEndPoint + "/users/list");
  //The objects returned by the api are directly convertible to User objects
  return response.json();
}

/**
 * Obtener todos los puntos de interes de un usuario.
 *
 * @param webId
 * @returns
 */
export async function findAllPointsByUser(webId: string) {
  const apiEndPoint = "http://localhost:5001/point";

  let response = await fetch(apiEndPoint + "/findall/" + webId, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

/**
 * Obtener todos los puntos de interés.
 *
 * @returns
 */
const findAllPoints = async () => {
  let response = await fetch("http://localhost:5001/point/findall/2", {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

/**
 * Obtener toda la información de un punto de interes.
 *
 * @param idPoint Identificador del punto de interes.
 * @returns
 */
export async function findPointById(idPoint: string) {
  let response = await fetch("http://localhost:5001/point/find/" + idPoint, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

/**
 * Editar la información de un punto de interes.
 *
 * @param idPoint Identificador del punto de interes.
 * @param body Información del punto de interes a editar.
 * @returns
 */
export async function editPointById(idPoint: string, body: any) {
  const apiEndPoint = process.env.REACT_APP_API_URI;

  let response = await fetch(apiEndPoint + "/find/" + idPoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body,
  });
  return response.json();
}

/**
 * Añadir un punto de interes.
 *
 * @param point
 * @returns
 */
export async function addPoint(point: IPoint) {
  const apiEndPoint = process.env.REACT_APP_API_URI;

  let response = await fetch(apiEndPoint + "/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "auth-token": sessionStorage.getItem("token") as string,
    },
    body: JSON.stringify(point),
  });
  return response.status === 201;
}

/**
 * Eliminar un punto de interés por su id.
 *
 * @param idPoint Identificador del punto de interes.
 * @returns
 */
export async function deletePoint(idPoint: string): Promise<boolean> {
  const apiEndPoint = process.env.REACT_APP_API_URI;
  let response = await fetch(apiEndPoint + "/delete/" + idPoint, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "auth-token": sessionStorage.getItem("token") as string,
    },
  });
  return response.status === 200;
}

/**
 * Guardar un punto de interes.
 *
 * @param idPoint Identificador del punto de interes.
 * @param webId Identificador del usuario.
 * @returns
 */
export async function likesPoint(idPoint: string, webId: string) {
  const apiEndPoint = process.env.REACT_APP_API_URI;
  let response = await fetch(apiEndPoint + "/review/" + idPoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(webId),
  });
  return response.status === 200;
}

export { findAllPoints };
