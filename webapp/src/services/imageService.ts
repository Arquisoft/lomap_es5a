import {
  POINT_INTEREST_BUCKET,
  ref,
  storage,
  uploadBytes,
  getDownloadURL,
} from "../config/firebase.config";
import { compressImage } from "../utils/imageUtils";

/**
 * Subida de una imagen a Firebase Storage.
 * @param image
 */
const uploadImage = async (image: File, callback: (downloadUrl: string) => void) => {
  const imgExtension = image.name.split(".").slice().pop();
  const imgId: string = crypto.randomUUID();
  try {
    compressImage(
      image,
      (imageCompressed) => {
        if (!imageCompressed) {
          throw new Error("Error al comprimir la imagen");
        }

        try {
          uploadBytes(
            ref(storage, `${POINT_INTEREST_BUCKET}/${imgId}.${imgExtension}`),
            imageCompressed
          )
            .then((snapshot) => {
              getDownloadURL(snapshot.ref).then((downloadUrl) => {
                callback(downloadUrl);
              });

            })
            .catch((err) => {
              throw new Error(err);
            });
        } catch (err) {
          // TODO: Manejar el error
        }
      },
      350,
      240
    );
  } catch (err) {
    console.error(`An error ocurred compressing the image. ${err}`);
  }
};

export { uploadImage };
