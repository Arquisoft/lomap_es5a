import {
  POINT_INTEREST_BUCKET,
  ref,
  storage,
  uploadBytes,
  getDownloadURL,
} from "../config/firebase.config";
import { DEFAULT_IMAGE_COMPRESSION_HEIGHT, DEFAULT_IMAGE_COMPRESSION_WIDTH, compressImage } from "../utils/imageUtils";

/**
 * Subida de una imagen a Firebase Storage.
 * @param image
 */
//callback: (downloadUrl: string) => void
const uploadImage = async (image: File | undefined): Promise<string> => {
  if (!image || !image.name || !image.size || !image.type || !image.lastModified) {
    throw new Error("No se ha seleccionado ninguna imagen");
  }

  const imgExtension = image.name.split(".").slice().pop();
  const imgId: string = crypto.randomUUID();


  const imgCompressed = await compressImage(image, DEFAULT_IMAGE_COMPRESSION_WIDTH, DEFAULT_IMAGE_COMPRESSION_HEIGHT);

  try {
    const snapshot = await uploadBytes(
      ref(storage, `${POINT_INTEREST_BUCKET}/${imgId}.${imgExtension}`),
      imgCompressed
    ).catch(() => {
      throw new Error("Error al subir la imagen");
    });

    return await getDownloadURL(snapshot.ref);

  } catch (err1) {
    throw new Error("Error al subir la imagen. ");
  }
};

export { uploadImage };
