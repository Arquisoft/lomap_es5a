import { initializeApp } from "firebase/app";
import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";

import { firebaseConfig } from "./dotenv.config";

const AVATAR_BUCKET = `gs://${firebaseConfig.storageBucket}/avatars`;
const POINT_INTEREST_BUCKET = `gs://${firebaseConfig.storageBucket}/points`;

const app = initializeApp(firebaseConfig);

// Inicializacion de Cloud storage
const storage = getStorage(app);

// Almacenamiento de avatares de los usuarios
const avatarStorage = ref(storage, AVATAR_BUCKET);

// Almacenamientos de las imagenes dentro de los puntos de interes
const pointOfInterestRef = ref(storage, POINT_INTEREST_BUCKET);

export {
  app,
  storage,
  avatarStorage,
  pointOfInterestRef,
  getDownloadURL,
  uploadBytes,
  ref,
  POINT_INTEREST_BUCKET,
};
