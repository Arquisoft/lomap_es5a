import { overwriteFile, saveFileInContainer } from "@inrupt/solid-client";
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



const sharePointWithFriends = async (
    point: Point,
    session: any,
    friends: Friend[],
    image?: File,    
    callback?: (isSuccess: any) => void
) => {
    let isSuccess = false; // Indicar a la vista si se ha añadido correctamente el punto
    const existsFolder = await checkContainerExists(
      session,
      "private/sharedpoints/"
    ).catch(async (err) => {
      await createNewContainer(session, "private/sharedpoints/").then(async () => {
        console.log("creada");  
        await saveFileInContainer(
            getUserSharedPointsUrl(session.info.webId),
          new Blob([JSON.stringify({ point })], {
            type: "application/json",
          }),
          { slug: `${point._id}.json`, contentType: "application/json", fetch: fetch }
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
        // Subir la imagen del punto y obtener la url
        // await uploadImage(image as File, async (downloadUrl) => {
        //   point.image = {
        //     url: downloadUrl ?? "",
        //     alt: point?.name ?? "",
        //   };            
    
          await saveFileInContainer(
            getUserSharedPointsUrl(session.info.webId),
          new Blob([JSON.stringify({ point })], {
            type: "application/json",
          }),
          { slug: `${point._id}.json`, contentType: "application/json", fetch: fetch }
          )
        // ).then(() => {
        //     callback && callback(isSuccess);
        //   });
        // });
        console.log("Punto añadido satisfactoriamente con id = " + point._id);
      } catch (err) {
        console.error("add point error: " + err);
      }
}


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

  export{
    sharePointWithFriends
  }