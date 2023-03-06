// import { MongoClient } from "mongodb";
// import { NodeEnviorenment } from "../shared/sharedtypes";
// import { mongoDbConfig, NODE_ENV, mongoDbTestUri } from "./dotenv.config";

// // Connection URI
// const uri: string =
//   NODE_ENV === NodeEnviorenment.Dev ? mongoDbTestUri : mongoDbConfig.uri || "";

// // Create a new MongoClient
// const client = new MongoClient(uri);

// const run = async () => {
//   try {
//     await client.connect();

//     // Establish and verify connection
//     await client.db(mongoDbConfig.user).command({ ping: 1 });
//     console.log("Connected successfully to server");
//   } finally {
//     await client.close();
//   }
// };

// run().catch(console.dir);

import mongoose from 'mongoose';

// Comprobar que la direccion de la base de datos exista
const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb://localhost:27017";

mongoose.connect(URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to MongoDB');
});

export {db};