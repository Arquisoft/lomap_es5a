import {
  getFile,
  getPodUrlAll,
  getSolidDataset
} from "@inrupt/solid-client";
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";
import { checkIsNotEmpty } from "../utils/validator";

const HTTP_PREFIX = "https";

// Fichero que contiene todos los puntos del usuario
const PRIVATE_POINTS_PATH = "/private/points/points.json";

// Fichero que contiene todas las reviews
const PUBLIC_REVIEWS_PATH = "/private/reviews/reviews.json";

const PRIVATE_REVIEWS_FOLDER_PATH = "/private/reviews";
// Fichero que contiene todos los puntos guardados del usuario
const PRIVATE_SAVE_POINTS_PATH = "/private/savedPoints/savedPoints.json";
// Folder que contiene todos los subfolders con los puntos que comparte con cada
// amigo
const SHARED_POINTS_PATH = "/private/sharedpoints/";



// Información del perfil del usuario
const PROFILE_PATH = "/profile/card";

const webId: string = getDefaultSession().info.webId as string;

/**
 * 
 * @param userName nombre de usuario del amigo a añadir en solid (seguifdo de '.'<proveedor>)
 * @returns webId del user que se quiere agregar.
 */
const constructWebIdFromUsername = (userName:string):string => {
  const webId = 'https://'+userName+'/profile/card#me';
  return webId; 
}

/**
 * Formato de entrada: https://<webId>/profile/card#me
 * Formato de salida: <webId>
 * @param url
 * @returns
 */
const getWebIdFromUrl = (url: string): string => {
  const webId = url.split("/")[2];
  return webId;
};

/**
 * Devuelve la URL de los puntos privados de un usuario.
 * @param webId WebId del usuario.
 * @returns
 * @throws Error si no se proporciona una URL de perfil.
 */
const getUserPrivatePointsUrl = (myWedId?: string) => {
  return contructPodUrl(myWedId ?? webId, PRIVATE_POINTS_PATH);
};

/**
 * Devuelve la URL de las reviews de la carpeta public
 * @param webId WebId del usuario.
 * @returns
 * @throws Error si no se proporciona una URL de perfil.
 */
const getPublicReviewsPointsUrl = (myWedId?: string) => {
  return contructPodUrl(myWedId ?? webId, PUBLIC_REVIEWS_PATH);
};

/**
 * Devuelve la URL de los puntos guardados privados de un usuario.
 * @param webId WebId del usuario.
 * @returns
 * @throws Error si no se proporciona una URL de perfil.
 */
const getUserPrivateSavePointsUrl = (myWedId?: string) => {
  return contructPodUrl(myWedId ?? webId, PRIVATE_SAVE_POINTS_PATH);
};

/**
 * Devuelve la URL del folder en el que el user en sesion almacenara
 * los distintos subfolder con los puntos a compartir con sus amigos
 * @param webId WebId del usuario.
 * @returns
 * @throws Error si no se proporciona una URL de perfil.
 */
const getUserSharedPointsUrl = (myWedId?: string):string => {  
  return contructPodUrl(myWedId ?? webId, SHARED_POINTS_PATH);
};

/**
 * Devuelve la URL del folder en el que el user en sesion almacenara
 * los distintos subfolder con los puntos a compartir con sus amigos
 * @param webId WebId del usuario.
 * @returns
 * @throws Error si no se proporciona una URL de perfil.
 */
const getUserReviewsUrl = (myWedId?: string):string => {  
  return contructPodUrl(myWedId ?? webId, PRIVATE_REVIEWS_FOLDER_PATH );
};



/**
 * Devuelve la URL del perfil de un usuario.
 * @param myWedId WebId del usuario.
 * @returns
 */
const getUserProfileUrl = (myWedId?: string) => {
  return contructPodUrl(myWedId ?? webId, PROFILE_PATH);
};

const contructPodUrl = (webId: string, path: string) => {
  checkIsNotEmpty(webId, "webId");
  checkIsNotEmpty(path, "path");
  return `${HTTP_PREFIX}://${getWebIdFromUrl(webId)}${path}`;
};

const createNewContainer = async (session: any, folderName: string) => {
  const data = await getPodUrlAll(session.info.webId);

  if (data && data.length > 0) {
    const podUrl = data[0];
    const response = await session.fetch(`${podUrl}${folderName}`, {
      method: "PUT",
      headers: {
        "Content-Type": "text/turtle",
      },
    });
    if (response.status !== 201) {
      throw new Error(`Error creating container: ${response.status}`);
    }
  }
};

const checkContainerExists = async (
  session: any,
  folderName: string
): Promise<boolean> => {
  const mainFolder: string[] = await getPodUrlAll(session.info.webId);

  const data = await getSolidDataset(`${mainFolder[0]}${folderName}`, {
    fetch: session.fetch,
  }).catch(() => {
    return null;
  });

  return data ? true : false;
};

const checkFileExists = async (
  session: any,
  fileName: string
): Promise<boolean> => {
  const mainFolder: string[] = await getPodUrlAll(session.info.webId);

  const data = await getFile(`${mainFolder[0]}${fileName}`, {
    fetch: session.fetch,
  }).catch(() => {
    return null;
  });

  return data ? true : false;
}

export {
  getUserPrivatePointsUrl,
  getUserPrivateSavePointsUrl,
  getUserProfileUrl,
  createNewContainer,
  checkContainerExists,
  constructWebIdFromUsername,
  getWebIdFromUrl,
  checkFileExists,
  getUserSharedPointsUrl, 
  getPublicReviewsPointsUrl,
  getUserReviewsUrl
};

