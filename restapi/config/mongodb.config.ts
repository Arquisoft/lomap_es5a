import mongoose from 'mongoose';
import {mongoDbConfig} from './dotenv.config';

// Comprobar que la direccion de la base de datos exista
const URI = mongoDbConfig.uri
  ? mongoDbConfig.uri
  : "";

  mongoose.connect(URI)
  .then(() => console.log('Base de datos conectada'))
  .catch((e: any) => console.log(e));
  

