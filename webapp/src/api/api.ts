import { Point, Review, User } from "../shared/shareddtypes";
import { saveFileInContainer, getFile, overwriteFile } from "@inrupt/solid-client";
import { fetch } from "@inrupt/solid-client-authn-browser";
import { parseJsonToPoint, parsePointToJson } from "../utils/parsers/pointParser";
import { convertArrToJSON, convertToJSON } from "../utils/jsonUtils";

/*
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
 * @returns points
 */
const findAllPoints = async () => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/public/Punto1.json`)
  try {
    const file = await getFile(
      profileDocumentURI,
      { fetch: fetch }
    );
    return parseJsonToPoint(JSON.parse(await file.text()))
  } catch (err) {
    console.error(err)
  }
}

/**
 * Obtener todos los puntos públicos de interés, es decir con isPublic a true
 *
 * @returns points
 */
const findAllPublicPoints = async () => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/public/Punto1.json`)
  try {
    const file = await getFile(
      profileDocumentURI,
      { fetch: fetch }
    );
    let totalPoints = parseJsonToPoint(JSON.parse(await file.text()));
    let filtro = totalPoints.filter(item => item.isPublic === true)

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
 * @returns point
 */
const findPointById = async (idPoint: string) => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/public/Punto1.json`)
  try {
    const file = await getFile(
      profileDocumentURI,
      { fetch: fetch }
    );
    let totalPoints = parseJsonToPoint(JSON.parse(await file.text()));
    let filtro = totalPoints.filter(item => item._id === idPoint)

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
 * @returns points
 */
const findPointsByCategory = async (category: string) => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/public/Punto1.json`)
  try {
    const file = await getFile(
      profileDocumentURI,
      { fetch: fetch }
    );
    let totalPoints = parseJsonToPoint(JSON.parse(await file.text()));
    let filtro = totalPoints.filter(item => item.category === category)

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
 * Añadir un punto de interes.
 *
 * @param point
 * @returns
 */
const addPoint = async (point: Point) => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/public/Punto1.json`)
  try {
    const file = await getFile(
      profileDocumentURI,
      { fetch: fetch }
    );
    let totalPoints: Point[] = parseJsonToPoint(JSON.parse(await file.text())) // tenemos un array
    totalPoints.push(point) // añadimos el punto

    const blob = new Blob([convertArrToJSON(totalPoints, "points")], {
      type: "application/json",
    });

    // actualizamos el POD
    await saveFileInContainer(
      "https://uo282337.inrupt.net/public",
      blob,
      { slug: "Punto1.json", contentType: "text/json", fetch: fetch }
    );
  } catch (err) {
    console.error(err)
  }
}

/**
 * Editar la información de un punto de interes.
 *
 * @param idPoint Identificador del punto de interes.
 * @param point Punto de interes con los datos a editar.
 * @returns
 */
const editPointById = async (idPoint: string, point: Point) => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/public/Punto1.json`)
  try {
    const file = await getFile(
      profileDocumentURI,
      { fetch: fetch }
    );
    let totalPoints = JSON.parse(await file.text()).points;

    let filtro = totalPoints.filter((item: { _id: string; }) => item._id === idPoint)

    if (filtro.length === 0) {
      console.log("ERROR: No existe el punto con id = " + idPoint)
    } else {
      for (let i = 0; i < totalPoints.length; i++) {
        if (totalPoints[i]._id === idPoint) {
          totalPoints[i].name = body.name;
          totalPoints[i].fecha = new Date();
          break;
        }
      }
      // pasar de array a json y actualizar pod
    }
  } catch (err) {
    console.error(err)
  }
}

/**
 * Eliminar un punto de interés por su id.
 *
 * @param idPoint Identificador del punto de interes.
 * @returns
 */
const deletePoint = async (idPoint: string) => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/public/Punto1.json`)
  try {
    const file = await getFile(
      profileDocumentURI,
      { fetch: fetch }
    );
    let totalPoints = JSON.parse(await file.text()).points;
    let filtro = totalPoints.filter((item: { _id: string; }) => item._id !== idPoint)

    if (filtro.length === 0) {
      console.log("ERROR: No existe ningún punto con id = " + idPoint)
    } else {
      // pasar de array a json y actualizar pod
    }
  } catch (err) {
    console.error(err)
  }
}

/**
 * Añadir una review sobre un punto de interés
 *
 * @param idPoint Identificador del punto de interes.
 * @param review Review del punto de interés
 * @returns
 */
const addReviewPoint = async (idPoint: string, review: Review) => {

  let profileDocumentURI = encodeURI(
    `https://uo282337.inrupt.net/public/Punto1.json`
  );
  try {
    const file = await getFile(
      profileDocumentURI,
      { fetch: fetch }
    );

    let totalPoints = parseJsonToPoint(JSON.parse(await file.text()));
    let pointsOriginal = totalPoints.filter((point) => point._id !== idPoint);
    let punto = totalPoints.find((point) => point._id === idPoint)
    punto?.reviews?.push(review) // añadimos la review

    if (!punto) {
      console.log("ERROR: No existe ningún punto con id = " + idPoint);
    } else {
      let result : Point[] = [...pointsOriginal,punto] // obtenemos el array de puntos
     
      const blob = new Blob([convertArrToJSON(result, "points")], {
        type: "application/json",
      });
  
      // actualizamos el POD
      await saveFileInContainer(
        "https://uo282337.inrupt.net/public/Punto1.json",
        blob,
        { contentType: "text/json", fetch: fetch }
      );
    }
  } catch (err) {
    console.error(err);
  }
};

/**
 * Eliminar una valoración de un punto
 *
 * @param idPoint Identificador del punto de interes.
 * @returns
 */
const deleteReviewByPoint = async (idPoint: string, idReview:string) => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/public/Punto1.json`)
  try {
    const file = await getFile(
      profileDocumentURI,
      { fetch: fetch }
    );
    
  } catch (err) {
    console.error(err)
  }
}

/**
 * Obtener todos los review del punto
 *
 * @param idPoint Identificador del punto de interes.
 * @returns
 */
const findAllReviewByPoint = async (idPoint:string) => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/public/Punto1.json`)
  try {
    const file = await getFile(
      profileDocumentURI,
      { fetch: fetch }
    );
    let totalPoints = JSON.parse(await file.text()).points;
    // recorremos los puntos seleccionando las reviews, las fusionamos y las devolvemos  
  } catch (err) {
    console.error(err)
  }
}

export { findAllPoints, findAllPublicPoints, findPointById, findPointsByCategory, addPoint, editPointById, deletePoint, addReviewPoint, deleteReviewByPoint, findAllReviewByPoint };
