import { getDefaultSession } from "@inrupt/solid-client-authn-browser";
import { checkIsNotEmpty } from "../utils/validator";
import { useSession } from "@inrupt/solid-ui-react";

const HTTP_PREFIX = "https";

// Fichero que contiene todos los puntos del usuario
const PRIVATE_POINTS_PATH = "/private/points/points.json";

// Información del perfil del usuario
const PROFILE_PATH = "/profile/card";

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
 * @param webId WebId del usuario.
 * @returns
 * @throws Error si no se proporciona una URL de perfil.
 */
const getUserPrivatePointsUrl = (myWedId?: string) => {
  return contructPodUrl(myWedId ?? webId, PRIVATE_POINTS_PATH);
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

export { getUserPrivatePointsUrl, getUserProfileUrl };

