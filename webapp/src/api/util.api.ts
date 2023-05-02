import { overwriteFile, saveFileInContainer } from "@inrupt/solid-client";
import { Point, Review } from "../shared/shareddtypes";
import { fetch } from "@inrupt/solid-client-authn-browser";

/**
 * Escribe (crea) el contenido en la carpeta del POD correspondiente
 * @param contenido puntos
 * @param folder directorio
 * @param url enlace 
 * @returns
 */
const writeContent = async (points: Point[], url: string, folder: string) => {
    await saveFileInContainer(
        url,
        new Blob([JSON.stringify({ points: points })], {
          type: "application/json",
        }),
        {
          slug: folder,
          contentType: "application/json",
          fetch: fetch,
        }
      );
}
/**
 * 
 * @param points 
 * @param url 
 * @param folder 
 */
const writeReviews = async (review: Review[], url: string, folder: string) => {
  await saveFileInContainer(
      url,
      new Blob([JSON.stringify({ reviews: review })], {
        type: "application/json",
      }),
      {
        slug: folder,
        contentType: "application/json",
        fetch: fetch,
      }
    );
}

/**
 * Actualizar el contenido en la carpeta del POD correspondiente
 * @param contenido puntos
 * @param folder directorio
 * @param url enlace 
 * @returns
 */
const updateContent = async (filtro: Point[], folder: string, url: string) => {
    const blob = new Blob([JSON.stringify({ points: filtro })], {
      type: "application/json",
    });
  
    const fichero = new File([blob], folder, { type: blob.type });
    
    await overwriteFile(url, fichero, {
        contentType: fichero.type,
        fetch: fetch,
    });
}

export { writeContent, updateContent , writeReviews};