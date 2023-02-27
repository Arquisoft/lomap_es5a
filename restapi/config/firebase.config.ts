import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import { firebaseConfig } from "./dotenv.config";

const AVATAR_BUCKET: string = "gs://...";
const POINT_INTEREST_BUCKET: string = "gs://...";

const app = initializeApp(firebaseConfig);

// Inicializacion de Cloud storage
const storage = getStorage(app);

// Almacenamiento de avatares de los usuarios
const avatarStorage = getStorage(app, AVATAR_BUCKET);

// Almacenamientos de las imagenes dentro de los puntos de interes
const pointOfInterestStorage = getStorage(app, POINT_INTEREST_BUCKET);

export { app, storage, avatarStorage, pointOfInterestStorage };
