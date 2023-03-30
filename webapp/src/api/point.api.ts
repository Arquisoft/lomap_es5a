import { Point, Review } from "../shared/shareddtypes";
import { saveFileInContainer, getFile, overwriteFile } from "@inrupt/solid-client";
import { Session, fetch } from "@inrupt/solid-client-authn-browser";
import { parseJsonToPoint } from "../utils/parsers/pointParser";
import { convertArrToJSON } from "../utils/jsonUtils";

/**
 * Obtener todos los puntos de interés.
 *
 * @returns points
 */
const findAllPoints = async () => {
  let profileDocumentURI = encodeURI(
    `https://uo282337.inrupt.net/private/Puntos.json`
  );

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
 * Obtener todos los puntos públicos de interés, es decir con isPublic a true.
 *
 * @returns points
 */
const findAllPublicPoints = async () => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/private/Puntos.json`)
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
 * @param idPoint Identificador del punto de interes
 * @returns point
 */
const findPointById = async (idPoint: string) => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/private/Puntos.json`)
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
 * @param category categoría del punto de interes
 * @returns points
 */
const findPointsByCategory = async (category: string) => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/private/Puntos.json`)

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
 * Añadir un punto de interés.
 *
 * @param point
 * @returns
 */
const addPoint = async (point: Point) => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/private/Puntos.json`)
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

    let fichero = new File([blob], "Puntos.json", { type: blob.type });

    // actualizamos el POD
    await overwriteFile(
      `https://uo282337.inrupt.net/private/Puntos.json`,
      fichero,
      { contentType: fichero.type, fetch: fetch }
    );
  } catch (err) {
    // si no existe el fichero, lo creamos
    let points: Point[] = [] // creamos un array
    points.push(point) // añadimos el punto

    const blob = new Blob([convertArrToJSON(points, "points")], {
      type: "application/json",
    });

    let file = new File([blob], "Puntos.json", {type: blob.type})

    // actualizamos el POD
    await saveFileInContainer(
      `https://uo282337.inrupt.net/private/`,
      file,
      { slug: file.name, contentType: file.type, fetch: fetch }
    );
    addPoint(point)
  }
}

/**
 * Editar la información de un punto de interes.
 *
 * @param idPoint Identificador del punto de interes
 * @param point Punto de interes con los datos a editar
 * @returns
 */
const editPointById = async (idPoint: string, point: Point) => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/private/Puntos.json`)
  try {
    const file = await getFile(
      profileDocumentURI,
      { fetch: fetch }
    );
    let totalPoints: Point[] = parseJsonToPoint(JSON.parse(await file.text())) // tenemos un array
    let filtro = totalPoints.filter(item => item._id === idPoint)

    if (filtro.length === 0) {
      console.log("ERROR: No existe el punto con id = " + idPoint)
    } else {
      for (const element of totalPoints) {
        if (element._id === idPoint) { // actualizamos
          element.name = point.name;
          element.description = point.description
          element.category = point.category
          element.updatedAt = new Date();
          break;
        }
      }
      const blob = new Blob([convertArrToJSON(totalPoints, "points")], {
        type: "application/json",
      });
  
      let fichero = new File([blob], "Puntos.json", { type: blob.type });
  
      // actualizamos el POD
      await overwriteFile(
        `https://uo282337.inrupt.net/private/Puntos.json`,
        fichero,
        { contentType: fichero.type, fetch: fetch }
      );
    }
  } catch (err) {
    console.error(err)
  }
}

/**
 * Eliminar un punto de interés por su id.
 *
 * @param idPoint Identificador del punto de interes
 * @returns
 */
const deletePoint = async (idPoint: string) => {
  let profileDocumentURI = encodeURI(
    `https://uo282337.inrupt.net/private/Puntos.json`
  );
  try {
    const file = await getFile(
      profileDocumentURI,
      { fetch: fetch }
    );
    let totalPoints: Point[] = parseJsonToPoint(JSON.parse(await file.text())) // tenemos un array
    let filtro = totalPoints.filter(item => item._id !== idPoint)
    let punto = totalPoints.filter(item => item._id === idPoint)

    if (punto.length === 0) {
      console.log("ERROR: No existe ningún punto con id = " + idPoint)
    } else {
      console.log(convertArrToJSON(filtro, "points"))
      const blob = new Blob([convertArrToJSON(filtro, "points")], {
        type: "application/json",
      });

      let fichero = new File([blob], "Puntos.json", { type: blob.type });

      // actualizamos el POD
      await overwriteFile(
        `https://uo282337.inrupt.net/private/Puntos.json`,
        fichero,
        { contentType: fichero.type, fetch: fetch }
      );
    }
  } catch (err) {
    console.error(err)
  }
}

/**
 * Añadir una review sobre un punto de interés.
 *
 * @param idPoint Identificador del punto de interes
 * @param review Review del punto de interés
 * @returns
 */
const addReviewPoint = async (idPoint: string, review: Review) => {
  let profileDocumentURI = encodeURI(
    `https://uo282337.inrupt.net/private/Puntos.json`
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
  
      let fichero = new File([blob], "Puntos.json", { type: blob.type });
  
      // actualizamos el POD
      await overwriteFile(
        `https://uo282337.inrupt.net/private/Puntos.json`,
        fichero,
        { contentType: fichero.type, fetch: fetch }
      );
    }
  } catch (err) {
    console.error(err);
  }
};

/**
 * Eliminar una valoración de un punto por el id de la review
 *
 * @param idPoint Identificador del punto de interes
 * @param idReview Identificador de la review
 * @returns
 */
const deleteReviewByPoint = async (idPoint: string, idReview:string) => {
  let profileDocumentURI = encodeURI(
    `https://uo282337.inrupt.net/private/Puntos.json`
  );
  try {
    const file = await getFile(
      profileDocumentURI,
      { fetch: fetch }
    );

    let totalPoints = parseJsonToPoint(JSON.parse(await file.text()));
    let pointsOriginal = totalPoints.filter((point) => point._id !== idPoint);
    let punto = totalPoints.find((point) => point._id === idPoint)

    // eliminamos la review del punto
    let reviews : Review[] | undefined = punto?.reviews?.filter((review) => review._id !== idReview) // obtenemos las reviews que no queremos borrar
    if (punto !== undefined && reviews !== undefined && punto?.reviews !== undefined) {
      punto.reviews = reviews // añadimos las reviews
    }
    
    if (!punto) {
      console.log("ERROR: No existe ningún punto con id = " + idPoint);
    } else {
      let result : Point[] = [...pointsOriginal,punto] // obtenemos el array de puntos
      console.log(result)
      const blob = new Blob([convertArrToJSON(result, "points")], {
        type: "application/json",
      });
  
      let fichero = new File([blob], "Puntos.json", { type: blob.type });
  
      // actualizamos el POD
      await overwriteFile(
        `https://uo282337.inrupt.net/private/Puntos.json`,
        fichero,
        { contentType: fichero.type, fetch: fetch }
      );
    }
  } catch (err) {
    console.error(err);
  }
}

/**
 * Obtener todos los review del punto.
 *
 * @param idPoint Identificador del punto de interes
 * @returns reviews del punto
 */
const findAllReviewByPoint = async (idPoint:string) => {
  let profileDocumentURI = encodeURI(
    `https://uo282337.inrupt.net/private/Puntos.json`
  );
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
        return filtro[0].reviews // devolvemos las reviews
      }
    } catch (err) {
      console.error(err)
    }
}

export { findAllPoints, findAllPublicPoints, findPointById, findPointsByCategory, addPoint, editPointById, deletePoint, addReviewPoint, deleteReviewByPoint, findAllReviewByPoint };
