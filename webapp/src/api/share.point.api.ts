import {
  overwriteFile,
  saveFileInContainer,  
  getSolidDatasetWithAcl,  
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
    checkFileExists,
    getUserPrivatePointsUrl
} from "../helpers/PodHelper";
import {getAllFriends} from "../api/friends.api"
import { Friend, Point } from "../shared/shareddtypes";
import { parseJsonToPoint } from "../utils/parsers/pointParser";
import { uploadImage } from "../services/imageService";
import { tr } from "date-fns/locale";


/**
 * Comparte un punto con un amigo del usuario en sesion.
 * @param point Punto que se quiere compartir
 * @param session Sesion del usuario logeado
 * @param friend Amigo con el que se quiere compartir el punto
 */
const sharePointWithFriend = async (
  point:Point,
  session:any,
  friend:Friend
) => {
  // En primer lugar añadimos el punto al folder correspondiente "private/sharedpoints/<friendUsername>"
  await addSharedPointForFriend(point,session,friend);
  // Posteriormente, asignamos al propietario de dicho folder todos los permisos sobre éste
  await giveAllPermsToOwner(session);
  // Finalmente, dotamos de permisos de lectura sobre el folder al amigo indicado del usuario en sesion
  await giveReadPermsToFriend(session,friend.webId);
}



/**
 * Elimina el punto con el id recibido del folder "private/sharedpoints/friendUsername" del 
 * usuario en sesion.
 * @param session Sesion del usuario logeado
 * @param friendWebId webId del amigo con el que se quiere dejar de compartir el punto. 
 * @param pointId id del punto que se quiere dejar de compartir. 
 */
const deleteSharedPointForFriend = async (session:any,friendWebId:string, pointId:string) => {
  const friendUsername = getWebIdFromUrl(friendWebId).split('.')[0];
  const profileDocumentURI = encodeURI(getUserSharedPointsUrl(session.info.webId)
  +`${friendUsername}/sharedPoints.json`);
  try {
    const originalPoints = await fetch(profileDocumentURI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const totalPoints = parseJsonToPoint(await originalPoints.json());
    const filtro = totalPoints.filter((item) => item._id !== pointId);
    const punto = totalPoints.filter((item) => item._id === pointId);

    if (punto.length === 0) {
      throw new Error(
        `No existe ningún punto compartido con id = ${pointId}`
      );
    } else {
      const blob = new Blob([JSON.stringify({ points: filtro })], {
        type: "application/json",
      });

      const fichero = new File([blob], "sharedPoints.json", { type: blob.type });

      // actualizamos el POD
      await overwriteFile(getUserSharedPointsUrl(session.info.webId) + `${friendUsername}/sharedPoints.json`, fichero, {
        contentType: fichero.type,
        fetch: fetch,
      });

    }
  } catch (err) {
    throw new Error(
      `Error deleteSharedPointForFriend: ${err}`
    );
    
  }
}

/**
 * Devuelve un array con todos los puntos que los amigos del usuario en sesión le han
 * compartido
 * @param session Sesion del usuario logeado.
 * @returns Array con los puntos compartidos
 */
const findAllSharedPointsByFriends = async (session:any) => {
  const userFriends = await getAllFriends(session.info.webId);
  let totalPoints:Point[] = [];
  for (let i = 0; i < userFriends.length; i++) {
    const friend = userFriends[i];
    totalPoints = totalPoints.concat(await findSharedPointsByFriend(session,friend.webId));
  }
  return totalPoints;
}

/**
 * Devuelve todos los puntos compartidos por un amigo
 * @param friendWebId
 * @returns Array con los puntos compartidos por un amigo del usuario en sesion
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
 * Asigna todos los permisos al propietario del folder "private/sharedpoints" sobre
 * dicho folder y todos sus hijos.
 */
const giveAllPermsToOwner = async (session:any) => {
  const webId = session.info.webId as string;
  const resourceUrl = getUserSharedPointsUrl(webId);  
  
  const userDatasetWithAcl = await getSolidDatasetWithAcl(resourceUrl, {fetch: fetch});  
  
  
  let resourceAcl;
  if (!hasResourceAcl(userDatasetWithAcl)){    
    if (!hasAccessibleAcl(userDatasetWithAcl)){      
      throw new Error (
        "El usuario actual no tiene permisos para cambiar los derechos de acceso a este recurso."
      );
            
    }
    if (!hasFallbackAcl(userDatasetWithAcl)){      
      throw new Error(
        "El usuario actual no tiene permiso para cambiar los permisos de este recurso"
      );
      
    }    
    resourceAcl = createAclFromFallbackAcl(userDatasetWithAcl);        
    
  }else{        
    resourceAcl = getResourceAcl(userDatasetWithAcl);     
  }
  // Damos todos los permisos al owner del folder (será el usuario en sesion)
  const updatedFolderAcl = setAgentResourceAccess(
    resourceAcl,
    webId,
    {read:true, append:true, write:true, control:true}
  );  
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
    if (!hasAccessibleAcl(userDatasetWithAcl)){
      throw new Error (
        "El usuario actual no tiene permisos para cambiar los derechos de acceso a este recurso."
      );
    }
    if (!hasFallbackAcl(userDatasetWithAcl)){
      throw new Error(
        "El usuario actual no tiene permiso para cambiar los permisos de este recurso"
      );
    }
    resourceAcl = createAclFromFallbackAcl(userDatasetWithAcl);     
    
  }else{    
    resourceAcl = getResourceAcl(userDatasetWithAcl);    
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
        throw new Error (
          `Error addSharedPointForFriend: ${err}`
        );       
      }
    }
  }
    


}




  export{
    deleteSharedPointForFriend,
    sharePointWithFriend,
    findSharedPointsByFriend,
    findAllSharedPointsByFriends
  }