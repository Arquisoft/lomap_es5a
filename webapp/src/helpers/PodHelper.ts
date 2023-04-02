import { getDefaultSession } from "@inrupt/solid-client-authn-browser";
import { checkIsNotEmpty } from "../utils/validator";
import { useSession } from "@inrupt/solid-ui-react";

const HTTP_PREFIX = "https";

// Fichero que contiene todos los puntos del usuario
const PRIVATE_POINTS_PATH = "/private/points/points.json";

const webId: string = getDefaultSession().info.webId as string;

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
 * @param profileUrl
 * @returns
 * @throws Error si no se proporciona una URL de perfil.
 */
const getUserPrivatePointsUrl = (myWedId?: string) => {
  return contructPodUrl(myWedId ?? webId, PRIVATE_POINTS_PATH);
};

const contructPodUrl = (webId: string, path: string) => {
  checkIsNotEmpty(webId);
  checkIsNotEmpty(path);
  return `${HTTP_PREFIX}://${getWebIdFromUrl(webId)}${path}`;
};

export { getUserPrivatePointsUrl };

