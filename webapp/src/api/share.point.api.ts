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
  saveAclFor,
  setAgentResourceAccess,
  setAgentDefaultAccess
  } from "@inrupt/solid-client";
import { fetch } from "@inrupt/solid-client-authn-browser";
import { 
    checkContainerExists,
    createNewContainer,
    getWebIdFromUrl,
    getUserSharedPointsUrl,
    checkFileExists
} from "../helpers/PodHelper";
import { Friend, Point } from "../shared/shareddtypes";
import { parseJsonToPoint } from "../utils/parsers/pointParser";
import { uploadImage } from "../services/imageService";
import { tr } from "date-fns/locale";



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
 * @param webId 
 * @param friendWebId 
 * @returns 
 */
const sharePointsWithFriends = async (
  webId: string,
  friendWebId: string
) => {    
  const resourceUrl = getUserSharedPointsUrl(webId).replace(
    "private/sharedpoints/sharedPoints.json",
    "private/sharedpoints/"
  );   
  
  const userDatasetWithAcl = await getSolidDatasetWithAcl(resourceUrl, {fetch: fetch});  
  
  let resourceAcl;
  if (!hasResourceAcl(userDatasetWithAcl)){
    console.log("Entro por aqui")
    if (!hasAccessibleAcl(userDatasetWithAcl)){
      console.error("No tiene un acl accesible para el usuario autenticado");
      return;
    }
    if (!hasFallbackAcl(userDatasetWithAcl)){
      console.error("No tiene un acl que haya heredado de su contenedor/contenedores padres");
      return;
    }
    resourceAcl = createAclFromFallbackAcl(userDatasetWithAcl);
    // 
    
  }else{
    console.log("Entro por esti otru lau");
    resourceAcl = getResourceAcl(userDatasetWithAcl);
    console.log(resourceAcl.internal_accessTo);
  }
  // Nos damos control access del folder
  const updatedFolderAcl = setAgentResourceAccess(
    resourceAcl,
    webId,
    {read:true, append:true, write:true, control:true}
  );
  // Nos damos todos los permisos sobre el fichero de puntos
  const updatedPointsFileAcl = setAgentDefaultAccess(
    updatedFolderAcl,
    webId,
    {read:true, append:true, write:true, control:true}
  );
  // Le damos permisos de lectura al amigo
  const pointsFileFriendAcl = setAgentDefaultAccess(
    updatedPointsFileAcl,
    friendWebId,
    {read:true, append:false, write:false, control:false}
  )

  // almacenamos el acl
  await saveAclFor(userDatasetWithAcl, pointsFileFriendAcl,{fetch :fetch});  
  
}

/**
 * Asigna todos los permisos al propietario del folder "private/sharedpoints" sobre
 * dicho folder y todos sus hijos.
 */
const setAllPermsToOwner = async (session:any) => {
  const webId = session.info.webId as string;
  const resourceUrl = getUserSharedPointsUrl(webId);  
  
  const userDatasetWithAcl = await getSolidDatasetWithAcl(resourceUrl, {fetch: fetch});  
  
  
  let resourceAcl;
  if (!hasResourceAcl(userDatasetWithAcl)){    
    if (!hasAccessibleAcl(userDatasetWithAcl)){
      console.error("El usuario actual no tiene permisos para cambiar los derechos de acceso a este recurso.");
      throw new Error (
        "El usuario actual no tiene permisos para cambiar los derechos de acceso a este recurso."
      );
            
    }
    if (!hasFallbackAcl(userDatasetWithAcl)){
      console.error("El usuario actual no tiene permiso para cambiar los permisos de este recurso");
      throw new Error(
        "El usuario actual no tiene permiso para cambiar los permisos de este recurso"
      );
      
    }
    console.log("No tengo un acl");
    resourceAcl = createAclFromFallbackAcl(userDatasetWithAcl);    
    console.log("Ya cree un acl");
    
  }else{    
    console.log("Tengo un acl");
    resourceAcl = getResourceAcl(userDatasetWithAcl); 
    console.log(resourceAcl);   
  }
  // Damos todos los permisos al owner del folder (será el usuario en sesion)
  const updatedFolderAcl = setAgentResourceAccess(
    resourceAcl,
    webId,
    {read:true, append:true, write:true, control:true}
  );
  console.log(updatedFolderAcl);
  // Damos todos los permisos al owner sobre todos los subfolders y ficheros de "private/sharedpoints"
  const updatedPointsFileAcl = setAgentDefaultAccess(
    updatedFolderAcl,
    webId,
    {read:true, append:true, write:true, control:true}
  );

  // almacenamos el acl
  await saveAclFor(userDatasetWithAcl, updatedPointsFileAcl,{fetch :fetch});  
  
}

/**
 * Devuelve todos los puntos compartidos por un amigo
 * @param friendWebId
 * @returns 
 */
const findSharedPointsByFriend = async (session:any, friendWebId:string) => {
  const userName = getWebIdFromUrl(session.info.webId).split('.')[0];
  const friendDocumentURI = encodeURI(getUserSharedPointsUrl(friendWebId) +
  `${userName}/sharedPoints.json`);
  console.log("Uri documento",friendDocumentURI);
  try {
    const data = await fetch(friendDocumentURI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return parseJsonToPoint(await data.json());
  } catch (err) {
    console.error("Error findSharedPointsByFriend: ", err);
  }
  return new Array<Point>();
}

/**
 * Funcion que dota de permisos de lectura al amigo indicado sobre el folder
 * private/sharedpoints/<friendUsername>/ del usuario en sesion
 * @param session Sesion perteneciente al usuario que se encuentra logeado.
 * @param friendWebId webId del amigo al que se le quieren asignar permisos de
 * lectura
 * @returns 
 */
const giveReadPermsToFriend = async (session:any, friendWebId:string) => {
  const friendUserName = getWebIdFromUrl(friendWebId).split('.')[0];
  const resourceUrl = getUserSharedPointsUrl(session.info.webId).replace(
    "/private/sharedpoints/",
    `/private/sharedpoints/${friendUserName}/`
  );   
  
  const userDatasetWithAcl = await getSolidDatasetWithAcl(resourceUrl, {fetch: fetch});  
  
  let resourceAcl;
  if (!hasResourceAcl(userDatasetWithAcl)){
    console.log("Entro por aqui")
    if (!hasAccessibleAcl(userDatasetWithAcl)){
      console.error("No tiene un acl accesible para el usuario autenticado");
      return;
    }
    if (!hasFallbackAcl(userDatasetWithAcl)){
      console.error("No tiene un acl que haya heredado de su contenedor/contenedores padres");
      return;
    }
    resourceAcl = createAclFromFallbackAcl(userDatasetWithAcl);
    // 
    
  }else{
    console.log("Entro por esti otru lau");
    resourceAcl = getResourceAcl(userDatasetWithAcl);
    console.log(resourceAcl.internal_accessTo);
  }
  // Le damos permisos de lectura al amigo
  const pointsFileFriendAcl = setAgentDefaultAccess(
    resourceAcl,
    friendWebId,
    {read:true, append:false, write:false, control:false}
  )

  // almacenamos el acl
  await saveAclFor(userDatasetWithAcl, pointsFileFriendAcl,{fetch :fetch});  
}

/**
 * Añade el punto a compartir a la carpeta private/sharedpoints/<username> del usuario.
 * <username> es el nombre de usuario del amigo con el que se quiere compartir el punto.
 * @param point Punto que se quiere compartir con el amigo
 * @param session Sesión del usuario logeado en la aplicación
 * @param friend Amigo con el que se quiere compartir el punto dado.
 * @returns 
 */
const addSharedPointForFriend = async (
  point: Point,
  session: any,
  friend: Friend
) => {
  const friendUserName = getWebIdFromUrl(friend.webId).split('.')[0];
  const existsFolder = await checkContainerExists(
    session,
    `private/sharedpoints/${friendUserName}/`
  );
  // Si no existe el folder, lo creamos junto con el fichero
  if (!existsFolder) {
    await createNewContainer(session, `private/sharedpoints/${friendUserName}/`).then(async () => {


      const points: Point[] = []; // creamos un array
      points.push(point); // añadimos el punto

      // Creamos el fichero con el punto a compartir
      await saveFileInContainer(
        getUserSharedPointsUrl(session.info.webId).replace(
          "/private/sharedpoints/",
          `/private/sharedpoints/${friendUserName}`
        ),
        new Blob([JSON.stringify({ points: points })], {
          type: "application/json",
        }),
        {
          slug: "sharedPoints.json",
          contentType: "application/json",
          fetch: fetch,
        }
      );
    });

  } else { // Si existe el folder, comprobamos si existe el fichero
    const existsFile = await checkFileExists(
      session,
      `private/sharedpoints/${friendUserName}/sharedPoints.json`
    );
    // Si no existe el fichero
    if (!existsFile) {
      const points: Point[] = []; // creamos un array
      points.push(point); // añadimos el punto
      // Creamos el fichero con el punto a compartir
      await saveFileInContainer(
        getUserSharedPointsUrl(session.info.webId).replace(
          "/private/sharedpoints/",
          `/private/sharedpoints/${friendUserName}`
        ),
        new Blob([JSON.stringify({ points: points })], {
          type: "application/json",
        }),
        {
          slug: "sharedPoints.json",
          contentType: "application/json",
          fetch: fetch,
        }
      );
    } else { // Si existe el folder y el fichero
      try {
        const profileDocumentURI = encodeURI(
          getUserSharedPointsUrl(session.info.webId) +
          `${friendUserName}/sharedPoints.json`
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

        const fichero = new File([blob], "sharedPoints.json", {
          type: blob.type,
        });

        // actualizamos el POD
        await overwriteFile(
          getUserSharedPointsUrl(session.info.webId) +
          `${friendUserName}/sharedPoints.json`,
          fichero,
          {
            contentType: fichero.type,
            fetch: fetch,
          }
        );
      } catch (err) {
        console.error("Error sharePoint: " + err);
      }
    }
  }
    


}




  export{
    addSharedPointForFriend,
    setAllPermsToOwner,
    giveReadPermsToFriend,
    findSharedPointsByFriend
  }