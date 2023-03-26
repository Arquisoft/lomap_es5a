import { IPoint } from "../../../restapi/models/point.model";
import { User } from "../shared/shareddtypes";
import { saveFileInContainer, getFile, overwriteFile } from "@inrupt/solid-client";
import { fetch } from "@inrupt/solid-client-authn-browser";

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
 * Obtener todos los puntos de interés.
 *
 * @returns
 */
const findAllPoints = async () => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/public/Punto1.json`)
    try {
        const file = await getFile(
            profileDocumentURI,
            { fetch: fetch }
        );
        return JSON.parse(await file.text());
    } catch (err) {
        console.error(err)
    }    
};
/**
 * Obtener todos los puntos públicos de interés, es decir con isPublic a true
 *
 * @returns
 */
const findAllPublicPoints = async () => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/public/Punto1.json`)
  try {
    const file = await getFile(
        profileDocumentURI,
        { fetch: fetch }
    );
    let totalPoints = JSON.parse(await file.text()).puntos;
    let filtro = totalPoints.filter((item: { isPublic: boolean; }) => item.isPublic===true)

    if (filtro.length === 0) {
      console.log("ERROR: No tiene ningún punto público almacenado")
    } else {
      return filtro
    }
} catch (err) {
    console.error(err)
}    
};

/**
 * Obtener toda la información de un punto de interes por su id.
 *
 * @param idPoint Identificador del punto de interes.
 * @returns
 */
const findPointById = async (idPoint:string) => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/public/Punto1.json`)
    try {
        const file = await getFile(
            profileDocumentURI,
            { fetch: fetch }
        );
        let totalPoints = JSON.parse(await file.text()).puntos;
        let filtro = totalPoints.filter((item: { _id: string; }) => item._id===idPoint)

        if (filtro.length === 0) {
          console.log("ERROR: No existe el punto con id = " + idPoint)
        } else {
          return filtro[0] // devolvemos el punto con ese id
        }
    } catch (err) {
        console.error(err)
    }  
}

/**
 * Obtener toda la información de un punto de interes por su categoría (restaurante, museo, etc).
 *
 * @param category categoría del punto de interes.
 * @returns
 */
const findPointsByCategory = async (category:string) => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/public/Punto1.json`)
    try {
        const file = await getFile(
            profileDocumentURI,
            { fetch: fetch }
        );
        let totalPoints = JSON.parse(await file.text()).puntos;
        let filtro = totalPoints.filter((item: { category: string; }) => item.category===category)

        if (filtro.length === 0) {
          console.log("ERROR: No existe ningún punto con esa categoría (" + category + ")")
        } else {
          return filtro // devolvemos los puntos con esa categoría
        }
    } catch (err) {
        console.error(err)
    }  
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

export { findAllPoints, findAllPublicPoints, findPointById, findPointsByCategory };
