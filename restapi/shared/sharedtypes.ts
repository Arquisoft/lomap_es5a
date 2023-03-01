import { IntegerType } from "mongodb";

// configuración de firebase
type FirebaseConfig = {
  apiKey: string | undefined;
  authDomain: string | undefined;
  projectId: string | undefined;
  storageBucket: string | undefined; 
  msgSenderId?: string;
  appId: string | undefined;
};

// configuración de mongo
type MongoDbConfig = {
  uri: string | undefined, 
  user: string | undefined
}

// tipos del modelo de dominio
type Opinion = {
  id: string | undefined, 
  description: string | undefined,
  note: number | undefined
}

type Punto = {
  name: string | undefined, 
  description: string | undefined,
  coordX: number | undefined,
  coordY: number | undefined,
  direccion: string | undefined
}

type Grupo = {
  id: string | undefined, 
  personas: Persona[] | undefined
}

type Persona = {
  id: string | undefined,
  role: string | undefined,
  verified: boolean | undefined
}

type Imagen = {
  url: string | undefined
}

type Mapa = {
  code: string | undefined,
  puntos: Punto[] | undefined,
}

/**
 * Tipo de entorno de desarrollo.
 */
enum NodeEnviorenment {
  Prod = "production",
  Dev = "development",
}

export { FirebaseConfig, NodeEnviorenment, MongoDbConfig, Opinion, Punto, Grupo, Imagen, Mapa, Persona };