import * as dotenv from "dotenv";
import path from "path";
import {
  FirebaseConfig,
} from "../shared/shareddtypes";

dotenv.config({
  path: path.join(__dirname, "..", "..", `.env.${process.env.NODE_ENV}`),
});

// Variables de Firebase
const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY as string,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN as string,
  projectId: process.env.FIREBASE_PROJECTID as string,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET as string,
  msgSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID as string,
  appId: process.env.FIREBASE_APP_ID as string,
};

export {firebaseConfig };

