type FirebaseConfig = {
    apiKey: string | undefined;
    authDomain: string | undefined;
    projectId: string | undefined;
    storageBucket: string | undefined; 
    msgSenderId?: string;
    appId: string | undefined;
  };
  
  type MongoDbConfig = {
    uri: string | undefined, 
    user: string | undefined
  }
  
  /**
   * Tipo de entorno de desarrollo.
   */
  enum NodeEnviorenment {
    Prod = "production",
    Dev = "development",
  }
  
  export { FirebaseConfig, NodeEnviorenment, MongoDbConfig };
  