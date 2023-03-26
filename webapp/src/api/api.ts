import { IPoint } from "../../../restapi/models/point.model";
import { User } from "../shared/shareddtypes";
import { saveFileInContainer, getFile, overwriteFile } from "@inrupt/solid-client";
import { fetch } from "@inrupt/solid-client-authn-browser";

/*
 * Añadir un usuario al sistema.
 *
 * @param user Usuario a añadir.
 * @returns
 */
export async function addUser(user: User): Promise<boolean> {
  const apiEndPoint =
    process.env.REACT_APP_API_URI || "http://localhost:5001/api";
  let response = await fetch(apiEndPoint + "/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: user.name, email: user.email }),
  });

  if (response.status === 200) return true;
  else return false;
}

/**
 * Obtener todos los usuarios del sistema.
 *
 * @returns
 */
export async function getUsers(): Promise<User[]> {
  const apiEndPoint =
    process.env.REACT_APP_API_URI || "http://localhost:5001/api";
  let response = await fetch(apiEndPoint + "/users/list");
  //The objects returned by the api are directly convertible to User objects
  return response.json();
}

/**
 * Obtener todos los puntos de interés.
 *
 * @returns
 */
const findAllPoints = async () => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/public/Punto1.json`)
    try {
        const file = await getFile(
            profileDocumentURI,
            { fetch: fetch }
        );
        return JSON.parse(await file.text());
    } catch (err) {
        console.error(err)
    }    
}

/**
 * Obtener todos los puntos públicos de interés, es decir con isPublic a true
 *
 * @returns
 */
const findAllPublicPoints = async () => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/public/Punto1.json`)
    try {
      const file = await getFile(
          profileDocumentURI,
          { fetch: fetch }
      );
      let totalPoints = JSON.parse(await file.text()).puntos;
      let filtro = totalPoints.filter((item: { isPublic: boolean; }) => item.isPublic===true)

      if (filtro.length === 0) {
        console.log("ERROR: No tiene ningún punto público almacenado")
      } else {
        return filtro
      }
    } catch (err) {
        console.error(err)
    }    
};

/**
 * Obtener toda la información de un punto de interes por su id.
 *
 * @param idPoint Identificador del punto de interes.
 * @returns
 */
const findPointById = async (idPoint:string) => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/public/Punto1.json`)
    try {
      const file = await getFile(
        profileDocumentURI,
        { fetch: fetch }
      );
      let totalPoints = JSON.parse(await file.text()).puntos;
      let filtro = totalPoints.filter((item: { _id: string; }) => item._id===idPoint)

      if (filtro.length === 0) {
        console.log("ERROR: No existe el punto con id = " + idPoint)
      } else {
        return filtro[0] // devolvemos el punto con ese id
      }  
    } catch (err) {
      console.error(err)
    }  
}

/**
 * Obtener toda la información de un punto de interes por su categoría (restaurante, museo, etc).
 *
 * @param category categoría del punto de interes.
 * @returns
 */
const findPointsByCategory = async (category:string) => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/public/Punto1.json`)
    try {
      const file = await getFile(
        profileDocumentURI,
        { fetch: fetch }
      );
      let totalPoints = JSON.parse(await file.text()).puntos;
      let filtro = totalPoints.filter((item: { category: string; }) => item.category===category)

      if (filtro.length === 0) {
        console.log("ERROR: No existe ningún punto con esa categoría (" + category + ")")
      } else {
        return filtro // devolvemos los puntos con esa categoría
      }  
    } catch (err) {
      console.error(err)
    }  
}

/**
 * Añadir un punto de interes.
 *
 * @param point
 * @returns
 */
const addPoint = async () => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/public/Punto1.json`)
    try {
      const file = await getFile(
        profileDocumentURI,
        { fetch: fetch }
      );
      let totalPoints = JSON.parse(await file.text()).puntos;
      // añadir el punto
      // pasar de array a JSON
      // actualizar el contenido del pod con el json  
    } catch (err) {
      console.error(err)
    } 
}

/**
 * Editar la información de un punto de interes.
 *
 * @param idPoint Identificador del punto de interes.
 * @param body Información del punto de interes a editar.
 * @returns
 */
const editPointById = async (idPoint: string, body: any) => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/public/Punto1.json`)
    try {
      const file = await getFile(
        profileDocumentURI,
        { fetch: fetch }
      );
      let totalPoints = JSON.parse(await file.text()).puntos;

      let filtro = totalPoints.filter((item: { _id: string; }) => item._id===idPoint)

      if (filtro.length === 0) {
        console.log("ERROR: No existe el punto con id = " + idPoint)
      } else {
        for(let i=0; i<totalPoints.length; i++){
          if(totalPoints[i]._id === idPoint) {
            totalPoints[i].name=body.name;
            totalPoints[i].descripcion=body.descripcion;
            totalPoints[i].categoria=body.categoria;
            totalPoints[i].fecha=new Date();
            break;
          }
        }
        // pasar de array a json y actualizar pod
      }  
    } catch (err) {
      console.error(err)
    } 
}

/**
 * Eliminar un punto de interés por su id.
 *
 * @param idPoint Identificador del punto de interes.
 * @returns
 */
const deletePoint = async (idPoint:string) => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/public/Punto1.json`)
    try {
      const file = await getFile(
        profileDocumentURI,
        { fetch: fetch }
      );
      let totalPoints = JSON.parse(await file.text()).puntos;
      let filtro = totalPoints.filter((item: { _id: string; }) => item._id!==idPoint)

      if (filtro.length === 0) {
        console.log("ERROR: No existe ningún punto con id = " + idPoint)
      } else {
        // pasar de array a json y actualizar pod
      }  
    } catch (err) {
      console.error(err)
    }  
}

/**
 * Añadir una review sobre un punto de interés
 *
 * @param idPoint Identificador del punto de interes.
 * @returns
 */
const addReviewPoint = async (idPoint:string) => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/public/Punto1.json`)
    try {
      const file = await getFile(
        profileDocumentURI,
        { fetch: fetch }
      );
      let totalPoints = JSON.parse(await file.text()).puntos;
      let filtro = totalPoints.filter((item: { _id: string; }) => item._id===idPoint)

      if (filtro.length === 0) {
        console.log("ERROR: No existe ningún punto con id = " + idPoint)
      } else {
        let ops = filtro[0].reviews
        // añadimos la review con los campos que me pasen por param
        // guardamos todo, lo pasamos a un JSON y lo subimos al POD 
      }  
    } catch (err) {
      console.error(err)
    }   
}

/**
 * Editar la información de una review del punto de interés
 *
 * @param idPoint Identificador del punto de interes.
 * @param body Información de la review a editar.
 * @returns
 */
const editReviewByPoint = async (idPoint: string, body: any) => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/public/Punto1.json`)
    try {
      const file = await getFile(
        profileDocumentURI,
        { fetch: fetch }
      );
      let totalPoints = JSON.parse(await file.text()).puntos;
      let filtro = totalPoints.filter((item: { _id: string; }) => item._id===idPoint)
      let reviews = filtro[0].reviews

      if (filtro.length === 0) {
        console.log("ERROR: No existe ningún punto con id = " + idPoint)
      } else {
        for(let i=0; i<reviews.length; i++){
          reviews[i].rating=body.rating;
          reviews[i].comment=body.descripcion;
          reviews[i].createdAt=new Date();
          break;
        }
      }
      // añadir las reviews, pasar a JSON y actualizar el POD
    } catch (err) {
      console.error(err)
    }   
}

/**
 * Obtener todos los review de un punto de interés
 *
 * @param idPoint Identificador del punto de interes.
 * @returns
 */
const findAllReviewPoint = async (idPoint:string) => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/public/Punto1.json`)
    try {
      const file = await getFile(
        profileDocumentURI,
        { fetch: fetch }
      );
      let totalPoints = JSON.parse(await file.text()).puntos;
      let filtro = totalPoints.filter((item: { _id: string; }) => item._id===idPoint)

      if (filtro.length === 0) {
        console.log("ERROR: No existe ningún punto con id = " + idPoint)
      } else {
        return filtro[0].reviews
      }  
    } catch (err) {
      console.error(err)
    }   
};


/**
 * Obtener todos los review del usuario
 *
 * @returns
 */
const findAllReviewByUser = async () => {
  let profileDocumentURI = encodeURI(`https://uo282337.inrupt.net/public/Punto1.json`)
    try {
      const file = await getFile(
        profileDocumentURI,
        { fetch: fetch }
      );
      let totalPoints = JSON.parse(await file.text()).puntos;
      // recorremos los puntos seleccionando las reviews, las fusionamos y las devolvemos  
    } catch (err) {
      console.error(err)
    }  
}

export { findAllPoints, findAllPublicPoints, findPointById, findPointsByCategory, addPoint, editPointById, deletePoint, addReviewPoint, editReviewByPoint, findAllReviewPoint, findAllReviewByUser };
