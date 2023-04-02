import { initializeApp } from "firebase/app";
import { getStorage, uploadBytes, ref  } from "firebase/storage";

import { firebaseConfig } from "./dotenv.config";

const AVATAR_BUCKET: string = `${firebaseConfig.storageBucket}/avatars}`;
const POINT_INTEREST_BUCKET: string =  `${firebaseConfig.storageBucket}/points}`;

const app = initializeApp(firebaseConfig);

// Inicializacion de Cloud storage
const storage = getStorage(app);

// Almacenamiento de avatares de los usuarios
const avatarStorage = getStorage(app, AVATAR_BUCKET);

// Almacenamientos de las imagenes dentro de los puntos de interes
const pointOfInterestStorage = getStorage(app, POINT_INTEREST_BUCKET);

export { app, storage, avatarStorage, pointOfInterestStorage, uploadBytes, ref  };
