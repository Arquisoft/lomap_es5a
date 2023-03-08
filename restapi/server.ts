import express, {
  Application,
  RequestHandler,
} from "express";
import corsConfiguration from './config/cors.config'
import "./config/mongodb.config";
import bp from 'body-parser';
import morgan from "morgan";
import promBundle from "express-prom-bundle";
import api from "./api";
import { API_PORT } from "./config/dotenv.config";
import pointRouter from "./routes/point.route";

const app: Application = express();
const port: number = API_PORT;

const metricsMiddleware: RequestHandler = promBundle({ includeMethod: true });
app.use(metricsMiddleware);

//app.use(express.json());
app.use(bp.json());

app.use(morgan("combined"));
app.use(express.urlencoded({ extended: true }));
app.use(corsConfiguration);


// Rutas
app.use("/api", api);
app.use("/point", pointRouter);






app
  .listen(port, (): void => {
    console.log("Restapi listening on " + port);
  })
  .on("error", (error: Error) => {
    console.error("Error occured: " + error.message);
  });
