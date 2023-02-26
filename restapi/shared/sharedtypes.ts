type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  msgSenderId?: string;
  appId: string;
};

/**
 * Tipo de entorno de desarrollo.
 */
enum NodeEnviorenment {
  Prod = "production",
  Dev = "development",
}

export { FirebaseConfig, NodeEnviorenment };
