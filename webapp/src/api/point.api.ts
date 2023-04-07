import {
  getFile,
  overwriteFile,
  saveFileInContainer,
} from "@inrupt/solid-client";
import { fetch, getDefaultSession } from "@inrupt/solid-client-authn-browser";
import { Category, Point, Review } from "../shared/shareddtypes";
import { parseJsonToPoint } from "../utils/parsers/pointParser";
import {
  checkContainerExists,
  createNewContainer,
  getUserPrivatePointsUrl,
} from "../helpers/PodHelper";
import { uploadImage } from "../services/imageService";

/**
 * Obtener todos los puntos de interés.
 *
 * @param webId webId del usuario en sesión
 * @returns points
 */
const findAllPoints = async (webId: string): Promise<Point[]> => {
  let profileDocumentURI = encodeURI(getUserPrivatePointsUrl(webId));

  try {
    const data = await fetch(profileDocumentURI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return parseJsonToPoint(await data.json());
  } catch (err) {
    //console.error("Error findAllPoints: ", err);
    return [];
  }

  return [];
};

/**
 * Obtener todos los puntos públicos de interés, es decir con isPublic a true.
 *
 * @param webId webId del usuario en sesión
 * @returns points
 */
const findAllPublicPoints = async (webId: string): Promise<Point[]> => {
  let profileDocumentURI = encodeURI(getUserPrivatePointsUrl(webId));
  try {
    const data = await fetch(profileDocumentURI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let totalPoints = parseJsonToPoint(await data.json());
    let filtro = totalPoints.filter((item) => item.isPublic === true);

    if (filtro.length === 0) {
      console.log("No tiene ningún punto público almacenado");
    } else {
      return filtro;
    }
  } catch (err) {
    console.error("Error findAllPublicPoints: ", err);
  }
  return [];
};

/**
 * Obtener toda la información de un punto de interes por su id.
 *
 * @param idPoint Identificador del punto de interes
 * @param webId webId del usuario en sesión
 * @returns point
 */
const findPointById = async (
  idPoint: string,
  webId: string
): Promise<Point> => {
  let profileDocumentURI = encodeURI(getUserPrivatePointsUrl(webId));
  try {
    const data = await fetch(profileDocumentURI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let totalPoints = parseJsonToPoint(await data.json());
    let filtro = totalPoints.filter((item) => item._id === idPoint);

    if (filtro.length === 0) {
      console.log("No existe el punto con id = " + idPoint);
    } else {
      return filtro[0]; // devolvemos el punto con ese id
    }
  } catch (err) {
    console.error("Error findPointById: ", err);
  }
  return {} as Point;
};

/**
 * Obtener toda la información de un punto de interes por su categoría (restaurante, museo, etc).
 *
 * @param category categoría del punto de interes
 * @param webId webId del usuario en sesión
 * @returns points
 */
const findPointsByCategory = async (
  category: Category,
  webId: string
): Promise<Point[]> => {
  let profileDocumentURI = encodeURI(getUserPrivatePointsUrl(webId));
  try {
    const data = await fetch(profileDocumentURI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let totalPoints = parseJsonToPoint(await data.json());
    let filtro = totalPoints.filter((item) => item.category === category);

    if (filtro.length === 0) {
      console.log(
        "No existe ningún punto con esa categoría (" + category + ")"
      );
    } else {
      return filtro; // devolvemos los puntos con esa categoría
    }
  } catch (err) {
    console.error("Error findPointsByCategory: ", err);
  }
  return [];
};

/**
 * Añadir un punto de interés.
 *
 * @param point punto que vamos a añadir
 * @param session sesión del usuario (useSession)
 * @returns
 */
const addPoint = async (
  point: Point,
  session: any,
  image?: File,
  callback?: (isSuccess: any) => void
) => {
  let isSuccess = false; // Indicar a la vista si se ha añadido correctamente el punto
  const existsFolder = await checkContainerExists(
    session,
    "private/points/"
  ).catch(async (err) => {
    await createNewContainer(session, "private/points/").then(async () => {
      console.log("creada");
      let points: Point[] = []; // creamos un array
      points.push(point); // añadimos el punto

      await saveFileInContainer(
        getUserPrivatePointsUrl(session.info.webId).replace(
          "/private/points/points.json",
          "/private/points/"
        ),
        new Blob([JSON.stringify({ points: points })], {
          type: "application/json",
        }),
        { slug: "points.json", contentType: "application/json", fetch: fetch }
      );
      console.log("Punto añadido satisfactoriamente con id = " + point._id);
      return false;
    });
    return false;
  });

  if (!existsFolder) {
    console.log("no existe la carpeta, se ha creado");
    return;
  }

  console.log("La carpeta ya existe");

  try {
    let profileDocumentURI = encodeURI(
      getUserPrivatePointsUrl(session.info.webId)
    );
    const originalPoints = await fetch(profileDocumentURI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let totalPoints = parseJsonToPoint(await originalPoints.json());

    // Subir la imagen del punto y obtener la url
    await uploadImage(image as File, async (downloadUrl) => {
      point.image = {
        url: downloadUrl ?? "",
        alt: point?.name ?? "",
      };

      totalPoints.push(point); // añadimos el punto

      const blob = new Blob([JSON.stringify({ points: totalPoints })], {
        type: "application/json",
      });

      let fichero = new File([blob], "points.json", { type: blob.type });

      // actualizamos el POD
      await overwriteFile(
        getUserPrivatePointsUrl(session.info.webId),
        fichero,
        {
          contentType: fichero.type,
          fetch: fetch,
        }
      ).then(() => {
        callback && callback(isSuccess);
      });
    });
    console.log("Punto añadido satisfactoriamente con id = " + point._id);
  } catch (err) {
    console.error("add point error: " + err);
  }
};

/**
 * Editar la información de un punto de interes.
 *
 * @param idPoint Identificador del punto de interes
 * @param point Punto de interes con los datos a editar
 * @param webId webId del usuario en sesión
 * @returns
 */

const editPointById = async (idPoint: string, point: Point, webId: string) => {
  let profileDocumentURI = encodeURI(getUserPrivatePointsUrl(webId));
  try {
    const originalPoints = await fetch(profileDocumentURI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let totalPoints = parseJsonToPoint(await originalPoints.json());
    let filtro = totalPoints.filter((item) => item._id === idPoint);

    if (filtro.length === 0) {
      console.log("No existe el punto con id = " + idPoint);
    } else {
      for (const element of totalPoints) {
        if (element._id === idPoint) {
          // actualizamos
          element.name = point.name;
          element.description = point.description;
          element.category = point.category;
          element.updatedAt = new Date();
          break;
        }
      }
      const blob = new Blob([JSON.stringify({ points: totalPoints })], {
        type: "application/json",
      });

      let fichero = new File([blob], "points.json", { type: blob.type });

      // actualizamos el POD
      await overwriteFile(getUserPrivatePointsUrl(webId), fichero, {
        contentType: fichero.type,
        fetch: fetch,
      });
      console.log("Punto editado satisfactoriamente con id = " + idPoint);
    }
  } catch (err) {
    console.error("Error editPointById: ", err);
  }
};

/**
 * Eliminar un punto de interés por su id.
 *
 * @param idPoint Identificador del punto de interes
 * @param webId webId del usuario en sesión
 * @returns
 */
const deletePoint = async (idPoint: string, webId: string) => {
  let profileDocumentURI = encodeURI(getUserPrivatePointsUrl(webId));
  try {
    const originalPoints = await fetch(profileDocumentURI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let totalPoints = parseJsonToPoint(await originalPoints.json());
    let filtro = totalPoints.filter((item) => item._id !== idPoint);
    let punto = totalPoints.filter((item) => item._id === idPoint);

    if (punto.length === 0) {
      console.log("No existe ningún punto con id = " + idPoint);
    } else {
      const blob = new Blob([JSON.stringify({ points: filtro })], {
        type: "application/json",
      });

      let fichero = new File([blob], "points.json", { type: blob.type });

      // actualizamos el POD
      await overwriteFile(getUserPrivatePointsUrl(webId), fichero, {
        contentType: fichero.type,
        fetch: fetch,
      });
      console.log("Punto eliminado satisfactoriamente con id = " + idPoint);
    }
  } catch (err) {
    console.error("Error deletePoint: ", err);
  }
};

/**
 * Añadir una review sobre un punto de interés.
 *
 * @param idPoint Identificador del punto de interes
 * @param review Review del punto de interés
 * @param webId webId del usuario en sesión
 * @returns
 */
const addReviewPoint = async (
  idPoint: string,
  review: Review,
  webId: string
) => {
  let profileDocumentURI = encodeURI(getUserPrivatePointsUrl(webId));
  try {
    const originalPoints = await fetch(profileDocumentURI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let totalPoints = parseJsonToPoint(await originalPoints.json());
    let pointsOriginal = totalPoints.filter((point) => point._id !== idPoint);
    let punto = totalPoints.find((point) => point._id === idPoint);
    punto?.reviews?.push(review); // añadimos la review

    if (!punto) {
      console.log("No existe ningún punto con id = " + idPoint);
    } else {
      let result: Point[] = [...pointsOriginal, punto]; // obtenemos el array de puntos
      console.log(result);
      const blob = new Blob([JSON.stringify({ points: result })], {
        type: "application/json",
      });

      let fichero = new File([blob], "points.json", { type: blob.type });

      // actualizamos el POD
      await overwriteFile(getUserPrivatePointsUrl(webId), fichero, {
        contentType: fichero.type,
        fetch: fetch,
      });
      console.log("Review añadida satisfactoriamente con id = " + review._id);
    }
  } catch (err) {
    console.error("Error addReviewPoint: ", err);
  }
};

/**
 * Eliminar una valoración de un punto por el id de la review
 *
 * @param idPoint Identificador del punto de interes
 * @param idReview Identificador de la review
 * @param webId webId del usuario en sesión
 * @returns
 */
const deleteReviewByPoint = async (
  idPoint: string,
  idReview: string,
  webId: string
) => {
  let profileDocumentURI = encodeURI(getUserPrivatePointsUrl(webId));
  try {
    const originalPoints = await fetch(profileDocumentURI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let totalPoints = parseJsonToPoint(await originalPoints.json());
    let pointsOriginal = totalPoints.filter((point) => point._id !== idPoint);
    let punto = totalPoints.find((point) => point._id === idPoint);

    // eliminamos la review del punto
    let reviews: Review[] | undefined = punto?.reviews?.filter(
      (review) => review._id !== idReview
    ); // obtenemos las reviews que no queremos borrar
    if (
      punto !== undefined &&
      reviews !== undefined &&
      punto?.reviews !== undefined
    ) {
      punto.reviews = reviews; // añadimos las reviews
    }

    if (!punto) {
      console.log("No existe ningún punto con id = " + idPoint);
    } else {
      let result: Point[] = [...pointsOriginal, punto]; // obtenemos el array de puntos
      console.log(result);
      const blob = new Blob([JSON.stringify({ points: result })], {
        type: "application/json",
      });

      let fichero = new File([blob], "points.json", { type: blob.type });

      // actualizamos el POD
      await overwriteFile(getUserPrivatePointsUrl(webId), fichero, {
        contentType: fichero.type,
        fetch: fetch,
      });
      console.log("Review eliminada satisfactoriamente con id = " + idReview);
    }
  } catch (err) {
    console.error("Error deleteReviewByPoint: ", err);
  }
};

/**
 * Obtener todos los review del punto.
 *
 * @param idPoint Identificador del punto de interes
 * @param webId webId del usuario en sesión
 * @returns reviews del punto
 */
const findAllReviewByPoint = async (
  idPoint: string,
  webId: string
): Promise<Review[] | undefined> => {
  let profileDocumentURI = encodeURI(getUserPrivatePointsUrl(webId));
  try {
    const originalPoints = await fetch(profileDocumentURI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let totalPoints = parseJsonToPoint(await originalPoints.json());
    let filtro = totalPoints.filter((item) => item._id === idPoint);

    if (filtro.length === 0) {
      console.log("No existe el punto con id = " + idPoint);
    } else {
      return filtro[0].reviews; // devolvemos las reviews
    }
  } catch (err) {
    console.error("Error findAllReviewByPoint: ", err);
  }
  return [];
};

export {
  findAllPoints,
  findAllPublicPoints,
  findPointById,
  findPointsByCategory,
  addPoint,
  editPointById,
  deletePoint,
  addReviewPoint,
  deleteReviewByPoint,
  findAllReviewByPoint,
};
