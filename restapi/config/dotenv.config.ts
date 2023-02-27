import path from "path";
import * as dotenv from "dotenv";
import {
  FirebaseConfig,
  MongoDbConfig,
  NodeEnviorenment,
} from "../shared/sharedtypes";

const NODE_ENV: string = NodeEnviorenment.Dev;

dotenv.config({
  path: path.join(__dirname, "..", `.env.${NODE_ENV}`),
});

// Puerto de conexión por defecto a la API Rest
const API_PORT: number = Number(process.env.API_PORT) || 5000;

// Variables de Firebase
const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  msgSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Variables de MongoDB
const mongoDbConfig: MongoDbConfig = {
  uri: process.env.MONGODB_URI,
  user: process.env.MONGODB_USER,
};

// Uri de mongoDb para entorno de pruebas
const mongoDbTestUri: string = process.env.MONGO_URI_TEST || "";

export { API_PORT, firebaseConfig, mongoDbConfig, mongoDbTestUri, NODE_ENV };
