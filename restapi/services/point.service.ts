import { IPoint, PointModel } from "../models/point.model";
import { saveFileInContainer,getFile,overwriteFile } from "@inrupt/solid-client";
import { fetch } from "@inrupt/solid-client-authn-browser";

/**
 * Buscar todos los puntos de interés creados por un usuario
 *
 * @param webId webId del usuario.
 * @returns Lista de puntos de interés, si los tiene.
 */
const findAllPointsByUser = async (webId: string) => {
    let markers: IPoint[] = []
    let profileDocumentURI = "https://" + webId + ".inrupt.net/";
    try {
        const file = await getFile(
            profileDocumentURI + 'private/Markers.json',
            { fetch: fetch },
        ).then(async () => {
            const file = await getFile(
                profileDocumentURI + 'private/Markers.json',
                { fetch: fetch },
            )
            markers = JSON.parse(await file.text());
        }).catch(async (err: any) => {
            const blob = new Blob([], {
                type: "application/json;charset=utf-8"
            })
            const createFile = await saveFileInContainer(
                profileDocumentURI + 'private/',
                blob,
                { slug: "Markers.json", contentType: blob.type, fetch: fetch }
            );
        });
    } catch (err) {
    }
    return markers;
};

/**
 * Busca el punto de interés con el id suministrado.
 *
 * @param idPoint id del punto de interés (no el generado por la base de datos).
 * @returns Punto de interés solicitado, en caso de existir.
 */
const findPointById = async (idPoint: string) => {
    const result = await PointModel.findOne({idPoint});
    return result;
}

/**
 * Edita el punto de interés con id suministrado con los datos recibidos del formulario.
 *
 * @param idPoint id del punto de interés (no el generado por la base de datos).
 * @param edit body de la peticion post con todods los datos que pasará a tener el punto de interés.
 * @returns Punto de interés solicitado, en caso de existir.
 */
const editPointById = async (idPoint: string, edit: any) => {    
    const filter = {idPoint};
    const update = edit;
    const result = await PointModel.findOneAndUpdate(filter,update, {
        new : true
    });
    return result;
}

/**
 * Añade los puntos creados por el usuario
 *
 * @param point point del usario.
 * @returns Punto añadido.
 */
const addPointByUser = async (point : IPoint, webId : string) => {
    let perfil = webId.split("profile")[0]; // perfil del usuario
    perfil = perfil + "/private/Puntos.json"; // fichero json
    let cadena = JSON.stringify(point); // paso a una cadena
    const bytes = new TextEncoder().encode(cadena);

    const blob = new Blob([bytes], {
        type: "application/json",
    });
    
    const file = await overwriteFile(
            perfil,
            blob,
            { contentType: blob.type, fetch: fetch } // guardo en el fichero
    );
    return cadena;
};

/**
 * Elimina puntos que no desea el usuario
 *
 * @param idPoint id del punto del usuario.
 * @returns Punto eliminado en caso de existir.
 */
const deletePointByUser = async (idPoint : string) => {
    const result = await PointModel.findOneAndRemove({idPoint});

    return result;
};

/**
 * Añade un like a un punto del mapa
 *
 * @param idPoint id del punto del usuario.
 * @param webId id del usuario.
 * @returns Punto modificado con el like en caso de existir.
 */
const likePointByUser = async (idPoint: string, webId: string) => {
    const result = await PointModel.findOneAndUpdate({ idPoint : idPoint }, 
                                                    { $push: { likes : webId } });
    return result;
};

export { findAllPointsByUser, findPointById, editPointById ,addPointByUser, deletePointByUser, likePointByUser };