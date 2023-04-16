import { overwriteFile, saveFileInContainer } from "@inrupt/solid-client";
import { Session, fetch } from "@inrupt/solid-client-authn-browser";
import {
  checkContainerExists,
  checkFileExists,
  createNewContainer,
  getUserPrivateSavePointsUrl,
} from "../helpers/PodHelper";
import { Point } from "../shared/shareddtypes";
import { parseJsonToPoint } from "../utils/parsers/pointParser";

/**
 * Obtener todos los puntos de interés guardados.
 *
 * @param webId webId del usuario en sesión
 * @returns save points
 */
const findAllSavePoints = async (webId: string): Promise<Point[]> => {
  const profileDocumentURI = encodeURI(getUserPrivateSavePointsUrl(webId));

  try {
    const data = await fetch(profileDocumentURI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return parseJsonToPoint(await data.json());
  } catch (err) {
    console.error("Error findAllSavePoints: ", err);
  }
  return new Array<Point>();
};

/**
 * Guardar (añadir a favoritos) un punto de interés.
 *
 * @param point punto que vamos a añadir a guardados
 * @param session sesión del usuario (useSession)
 * @returns
 */
const savePoint = async (point: Point, session: Session) => {
  const existsFolder = await checkContainerExists(
    session,
    "private/savedPoints/"
  );

  // si no existe la carpeta, la crea y dentro el fichero
  if (!existsFolder) {
    await createNewContainer(session, "private/savedPoints/").then(async () => {
      const points: Point[] = []; // creamos un array
      points.push(point); // añadimos el punto

      await saveFileInContainer(
        getUserPrivateSavePointsUrl(session.info.webId).replace(
          "/private/savedPoints/savedPoints.json",
          "/private/savedPoints/"
        ),
        new Blob([JSON.stringify({ points: points })], {
          type: "application/json",
        }),
        {
          slug: "savedPoints.json",
          contentType: "application/json",
          fetch: fetch,
        }
      );
    });
  } else {
    // si existe la carpeta pero no el fichero, crea dentro de la carpeta ese fichero
    const existsFile = await checkFileExists(
      session,
      "private/savedPoints/savedPoints.json"
    );

    // Si no existe el fichero
    if (!existsFile) {
      const points: Point[] = []; // creamos un array
      points.push(point); // añadimos el punto
      await saveFileInContainer(
        getUserPrivateSavePointsUrl(session.info.webId).replace(
          "/private/savedPoints/savedPoints.json",
          "/private/savedPoints/"
        ),
        new Blob([JSON.stringify({ points: points })], {
          type: "application/json",
        }),
        {
          slug: "savedPoints.json",
          contentType: "application/json",
          fetch: fetch,
        }
      );
    } else {

      // Si existe la carpeta y el fichero, añadimos el punto al fichero
      try {
        const profileDocumentURI = encodeURI(
          getUserPrivateSavePointsUrl(session.info.webId)
        );
        const originalPoints = await fetch(profileDocumentURI, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const totalPoints = parseJsonToPoint(await originalPoints.json());

        totalPoints.push(point); // añadimos el punto

        const blob = new Blob([JSON.stringify({ points: totalPoints })], {
          type: "application/json",
        });

        const fichero = new File([blob], "savedPoints.json", {
          type: blob.type,
        });

        // actualizamos el POD
        await overwriteFile(
          getUserPrivateSavePointsUrl(session.info.webId),
          fichero,
          {
            contentType: fichero.type,
            fetch: fetch,
          }
        );
      } catch (err) {
        console.error("Error savePoint: " + err);
      }
    }
  }
};

/**
 * Eliminar un punto de interés de guardados por su id.
 *
 * @param idPoint Identificador del punto de interes guardado
 * @param webId webId del usuario en sesión
 * @returns
 */
const unsavePoint = async (idPoint: string, webId: string) => {
  const profileDocumentURI = encodeURI(getUserPrivateSavePointsUrl(webId));
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
      console.log("No existe ningún punto guardado con id = " + idPoint);
    } else {
      const blob = new Blob([JSON.stringify({ points: filtro })], {
        type: "application/json",
      });

      const fichero = new File([blob], "savedPoints.json", { type: blob.type });

      // actualizamos el POD
      await overwriteFile(getUserPrivateSavePointsUrl(webId), fichero, {
        contentType: fichero.type,
        fetch: fetch,
      });
      console.log(
        "Punto eliminado de favoritos satisfactoriamente con id = " + idPoint
      );
    }
  } catch (err) {
    console.error("Error unsavePoint: ", err);
  }
};

/**
 * Comprueba si el punto de interés está guardado por el usuario en sesión.
 * @param idPoint
 * @param webId
 * @returns
 */
const isPointSaved = async (idPoint: string, webId: string) => {
  const allSavedPoints = await findAllSavePoints(webId);
  return allSavedPoints.find((item) => item._id === idPoint) ? true : false;
};

export { findAllSavePoints, savePoint, unsavePoint, isPointSaved };
