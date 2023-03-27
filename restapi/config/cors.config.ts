import cors from "cors";

// Dominios en la lista blanca
const allowedOrigins: string[] = ["http://localhost:3000"];

// Métodos HTTP permitidos
const allowedHttpMethods = ["GET", "POST", "PUT", "PATCH", "DELETE"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
  methods: allowedHttpMethods,
  optionsSuccessStatus: 201,
};

const configuration = cors(options);

export default configuration;
