import {
  overwriteFile,
  saveFileInContainer,
  getFile,
  getSolidDatasetWithAcl,
  getFallbackAcl,
  hasResourceAcl,
  createAclFromFallbackAcl,
  hasAccessibleAcl,
  hasFallbackAcl,
  getResourceAcl,
  saveAclFor
  } from "@inrupt/solid-client";
import { fetch } from "@inrupt/solid-client-authn-browser";
import { 
    checkContainerExists,
    createNewContainer,
    getUserPrivatePointsUrl,
    getUserSharedPointsUrl
} from "../helpers/PodHelper";
import { Friend, Point } from "../shared/shareddtypes";
import { parseJsonToPoint } from "../utils/parsers/pointParser";
import { uploadImage } from "../services/imageService";



/**
 * Comprueba si ya existe el punto en la carpeta sharedpoints.
 * De esta forma se evita que solid genere un nuevo fichero con el mismo
 * contenido que el existente con un nuevo nombre (generado por solid).
 * @param idPoint Identificador del punto de interes
 * @param webId webId del usuario en sesión
 * @returns true si existe el fichero, false en caso contrario
 */
const existsPoint = async (
  idPoint: string,
  webId: string
) :Promise<boolean> => {  
  try {
    const sharedPointUrl = getUserSharedPointsUrl(webId) + idPoint + '.json';    
    await getFile(
      sharedPointUrl,
      {fetch:fetch}
    );
    return true;

    //console.log(file);
  } catch (err) {
    return false;
    //console.error("Error findPointById: ", err);
  }    
};



/**
 * 
 * @param idPoint 
 * @param webId 
 * @param friends 
 * @returns 
 */
const sharePointWithFriends = async (
  idPoint: string,
  webId: string,
  friends: Friend[]
) => {    
  const resourceUrl = getUserSharedPointsUrl(webId);   
  
  const userDatasetWithAcl = await getSolidDatasetWithAcl(resourceUrl, {fetch: fetch});  
  
  let datasetAcl;
  if (!hasResourceAcl(userDatasetWithAcl)){
    console.log("Entro por aqui")
    if (!hasAccessibleAcl(userDatasetWithAcl)){
      console.error("No tiene un acl accesible para el usuario autenticado");
      return;
    }
    if (!hasFallbackAcl(userDatasetWithAcl)){
      console.error("No tiene un ac que haya heredado de su contenedor/contenedores padres");
      return;
    }
    datasetAcl = createAclFromFallbackAcl(userDatasetWithAcl);
    // 
    await saveAclFor(userDatasetWithAcl, datasetAcl,{fetch :fetch});  
  }else{
    console.log("Entro por esti otru lau");
    datasetAcl = getResourceAcl(userDatasetWithAcl);
    console.log(datasetAcl);
    
  }
  
}


/**
 * Añade el punto a compartir a la carpeta private/sharedpoints del usuario.
 * @param point Punto que se quiere compartir con los amigos
 * @param session 
 * @param friends Array con los amigos con los que se quiere compartir el punto
 * @param image Imagen que el usuario ha añadido al punto.
 * @param callback 
 * @returns 
 */
const addSharePoint = async (
  point: Point,
  session: any,
  friends: Friend[]
) => {
  const existsFolder = await checkContainerExists(
    session,
    "private/sharedpoints/"
  ).catch(async (err) => {
    await createNewContainer(session, "private/sharedpoints/").then(async () => {
      console.log("creada");
      const points: Point[] = []; // creamos un array
      points.push(point); // añadimos el punto

      await saveFileInContainer(
        getUserSharedPointsUrl(session.info.webId).replace(
          "private/sharedpoints/sharedPoints.json",
          "private/sharedpoints"
        ),
        new Blob([JSON.stringify({ points: points })], {
          type: "application/json",
        }),
        { 
          slug: "sharedPoints.json",
          contentType: "application/json",
          fetch: fetch
        }
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

    const sharedPointsURI = encodeURI(getUserSharedPointsUrl(session.info.webId));

    const originalPoints = await fetch(sharedPointsURI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const totalPoints = parseJsonToPoint(await originalPoints.json());

    // Subir la imagen del punto y obtener la url
    // await uploadImage(image as File, async (downloadUrl) => {
    //   point.image = {
    //     url: downloadUrl ?? "",
    //     alt: point?.name ?? "",
    //   };            

    totalPoints.push(point); // añadimos el punto

    const blob = new Blob([JSON.stringify({ points: totalPoints })], {
      type: "application/json",
    });

    const fichero = new File([blob], "sharedPoints.json", { type: blob.type });

    // actualizamos el POD
    await overwriteFile(
      getUserSharedPointsUrl(session.info.webId),
      fichero,
      {
        contentType: fichero.type,
        fetch: fetch,
      }
    );
    console.log("Punto añadido satisfactoriamente con id = " + point._id);

  } catch (err) {
    console.error("add point error: " + err);
  }
}




  export{
    addSharePoint,
    sharePointWithFriends
  }