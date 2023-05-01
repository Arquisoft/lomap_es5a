import { Session, fetch } from "@inrupt/solid-client-authn-browser";
import {
  checkContainerExists,
  checkFileExists,
  createNewContainer,
  getUserPrivatePointsUrl,
  getWebIdFromUrl,
} from "../helpers/PodHelper";
import { uploadImage } from "../services/imageService";
import { Category, Point, Review } from "../shared/shareddtypes";
import { parseJsonToPoint } from "../utils/parsers/pointParser";
import { updateContent, writeContent } from "./util.api";

/**
 * Obtener todos los puntos de interés.
 *
 * @param webId webId del usuario en sesión
 * @returns points
 */
const findAllUserPoints = async (webId: string): Promise<Point[]> => {
  const profileDocumentURI = encodeURI(getUserPrivatePointsUrl(webId));

  try {
    const data = await fetch(profileDocumentURI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return parseJsonToPoint(await data.json());
  } catch (err) {
    // no hay ningún punto
    console.log(err);
  }
  return new Array<Point>();
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
  const profileDocumentURI = encodeURI(getUserPrivatePointsUrl(webId));
  try {
    const data = await fetch(profileDocumentURI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const totalPoints = parseJsonToPoint(await data.json());
    const filtro = totalPoints.filter((item) => item._id === idPoint);

    if (filtro.length === 0) {
      console.log("No existe el punto con id = " + idPoint);
    } else {
      return filtro[0]; // devolvemos el punto con ese id
    }
  } catch (err) {
    throw new Error("Ha ocurrido un error al buscar el punto con ese id")
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
  const profileDocumentURI = encodeURI(getUserPrivatePointsUrl(webId));
  try {
    const data = await fetch(profileDocumentURI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const totalPoints = parseJsonToPoint(await data.json());
    const filtro = totalPoints.filter((item) => item.category === category);

    if (filtro.length === 0) {
      console.log(
        "No existe ningún punto con esa categoría (" + category + ")"
      );
    } else {
      return filtro; // devolvemos los puntos con esa categoría
    }
  } catch (err) {
    // no existe ningún punto con esa categoría
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
  session: Session,
  image?: File,
  callback?: (isSuccess: boolean) => void
) => {

  // Si hay imagen, comprobar que el tipo mime del fichero es una imagen
  if (image) {
    if (!image.type.includes("image") 
    || image.type.includes("jpg") 
    || image.type.includes("jpeg")
    || image.type.includes("png")) {
      throw new Error("El fichero subido no es una imagen");
    }
  }


  const isSuccess = false; // Indicar a la vista si se ha añadido correctamente el punto
  const existsFolder = await checkContainerExists(session, "private/points/");

  if (!existsFolder) {
    // si no existe la carpeta, la crea y dentro el fichero

    await createNewContainer(session, "private/points/").then(async () => {
      const points: Point[] = []; // creamos un array

      await upImage(image, point);

      points.push(point); // añadimos el punto

      await writeContent(points, 
        getUserPrivatePointsUrl(session.info.webId).replace(
          "/private/points/points.json",
          "/private/points/"),
        "points.json"
      ).then(() => {
        callback && callback(isSuccess);
      });

    });

  } else {
    // si existe la carpeta, añadimos el punto al fichero
    
    // Si no existe el fichero
    const existsFile = await checkFileExists(
      session,
      "private/points/points.json"
    );

    if (!existsFile) {
      const points: Point[] = []; // creamos un array

      await upImage(image, point);

      points.push(point); // añadimos el punto

      await writeContent(points, 
        getUserPrivatePointsUrl(session.info.webId).replace(
          "/private/points/points.json",
          "/private/points/"),
        "points.json"
      ).then(() => {
        callback && callback(isSuccess);
      });
      
    } else {
      // Si existe la carpeta y el fichero
      try {
        const profileDocumentURI = encodeURI(
          getUserPrivatePointsUrl(session.info.webId)
        );
        const originalPoints = await fetch(profileDocumentURI, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const totalPoints = parseJsonToPoint(await originalPoints.json());

        await upImage(image, point);

        totalPoints.push(point); // añadimos el punto

        await updateContent(totalPoints, "points.json", getUserPrivatePointsUrl(session.info.webId)).then(() => {
          callback && callback(isSuccess);
        });
      } catch (err) {
        throw new Error("Ha ocurrido un error al agregar el punto")
      }
    }
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
  const profileDocumentURI = encodeURI(getUserPrivatePointsUrl(webId));
  try {
    const originalPoints = await fetch(profileDocumentURI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const totalPoints = parseJsonToPoint(await originalPoints.json());
    const filtro = totalPoints.filter((item) => item._id === idPoint);

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
      await updateContent(totalPoints, "points.json", getUserPrivatePointsUrl(webId));
    }
  } catch (err) {
    throw new Error("Ha ocurrido un error al editar el punto con ese id")
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
  const profileDocumentURI = encodeURI(getUserPrivatePointsUrl(webId)); 
  
  try {
    const originalPoints = await fetch(profileDocumentURI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const totalPoints = parseJsonToPoint(await originalPoints.json());
    const filtro = totalPoints.filter((item) => item._id !== idPoint);
    const punto = totalPoints.filter((item) => item._id === idPoint);
  
    if (punto.length === 0) {
      console.log("No existe ningún punto con id = " + idPoint);
    } else {
      
      await updateContent(filtro, "points.json", getUserPrivatePointsUrl(webId));
    }
  } catch (err) {
    throw new Error("Ha ocurrido un error al eliminar el punto con ese id")
  }
};

/**
 * Añadir una review sobre un punto de interés.
 *
 * @param idPoint Identificador del punto de interes
 * @param review Review del punto de interés
 * @param webId webId del usuario en sesión(reviewer)
 * @param ownerWebId webId del dueño del pùnto
 * @returns
 */
const addReviewPoint = async (
  idPoint: string,
  review: Review,
  webId: string,
  ownerWebId: string

) => {
  const profileDocumentURI = encodeURI(getUserPrivatePointsUrl(webId));
  const userInSessionName = getWebIdFromUrl(webId);
  review.reviewer.name = userInSessionName.split(".")[0];
  try {
    const originalPoints = await fetch(profileDocumentURI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const totalPoints = parseJsonToPoint(await originalPoints.json());
    const pointsOriginal = totalPoints.filter((point) => point._id !== idPoint);
    const punto = totalPoints.find((point) => point._id === idPoint);
    punto?.reviews?.push(review); // añadimos la review

    if (!punto) {
      console.log("No existe ningún punto con id = " + idPoint);
    } else {
      const result: Point[] = [...pointsOriginal, punto]; // obtenemos el array de puntos
      await updateContent(result, "points.json", getUserPrivatePointsUrl(webId));
    }
  } catch (err) {
    throw new Error("Ha ocurrido un error al añadir la review")
  }
};

/**
 * Eliminar una valoración de un punto por el id de la review
 *
 * @param idPoint Identificador del punto de interes
 * @param idReview Identificador de la review
 * @param webId webId del usuario en sesión(reviewer)
 * @param ownerWebId webId del dueño del punto
 * @returns
 */
const deleteReviewByPoint = async (
  idPoint: string,
  idReview: string,
  webId: string,
  ownerWebId: string
) => {
  const profileDocumentURI = encodeURI(getUserPrivatePointsUrl(webId));
  try {
    const originalPoints = await fetch(profileDocumentURI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const totalPoints = parseJsonToPoint(await originalPoints.json());
    const pointsOriginal = totalPoints.filter((point) => point._id !== idPoint);
    const punto = totalPoints.find((point) => point._id === idPoint);

    // eliminamos la review del punto
    const reviews: Review[] | undefined = punto?.reviews?.filter(
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
      const result: Point[] = [...pointsOriginal, punto]; // obtenemos el array de puntos
      await updateContent(result, "points.json", getUserPrivatePointsUrl(webId));
    }
  } catch (err) {
    throw new Error("Ha ocurrido un error al eliminar la review")
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
  const profileDocumentURI = encodeURI(getUserPrivatePointsUrl(webId));
  try {
    const originalPoints = await fetch(profileDocumentURI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const totalPoints = parseJsonToPoint(await originalPoints.json());
    const filtro = totalPoints.filter((item) => item._id === idPoint);

    if (filtro.length === 0) {
      console.log("No existe el punto con id = " + idPoint);
    } else {
      return filtro[0].reviews; // devolvemos las reviews
    }
  } catch (err) {
    // no tiene reviews
  }
  return [];
};

async function upImage(image: File | undefined, point: Point) {
  if (image) {
    try {
      const downloadUrl = await uploadImage(image);
      point.image = {
        url: downloadUrl ?? "",
        alt: point?.name ?? "",
      };
    } catch (err) {
      throw new Error("Ha ocurrido un error al subir la imagen")
    }
  }
}

export {
  findAllUserPoints,
  findPointById,
  findPointsByCategory,
  addPoint,
  editPointById,
  deletePoint,
  addReviewPoint,
  deleteReviewByPoint,
  findAllReviewByPoint,
};


