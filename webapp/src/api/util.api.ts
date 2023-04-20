import { overwriteFile, saveFileInContainer } from "@inrupt/solid-client";
import { Point } from "../shared/shareddtypes";

/**
 * Escribe (crea) el contenido en la carpeta del POD correspondiente
 * @param contenido puntos
 * @param folder directorio
 * @param url enlace 
 * @returns
 */
const writeContent = async (points: Point[], folder: string, url: string) => {
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

export { writeContent, updateContent };