import mongoose from 'mongoose';

// Comprobar que la direccion de la base de datos exista
const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "";


mongoose.connect(URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err: Error) => {
    console.error(err);
  });

const db = mongoose.connection;

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('connected to MongoDB');
// });

 export {db};
