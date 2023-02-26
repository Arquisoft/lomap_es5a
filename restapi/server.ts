import express, {
  Application,
  Request,
  RequestHandler,
  Response,
} from "express";
import cors from "cors";
import morgan from "morgan";
import bp from "body-parser";
import promBundle from "express-prom-bundle";
import api from "./api";

import pointRouter from "./routes/point.route";

const app: Application = express();
const port: number = 5000;

const metricsMiddleware: RequestHandler = promBundle({ includeMethod: true });
app.use(metricsMiddleware);

app.use(bp.json());

app.use(morgan("combined"));
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

const allowedOrigins = ["*"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));
app.use("/api", api);

app.use("/point", pointRouter);

app
  .listen(port, (): void => {
    console.log("Restapi listening on " + port);
  })
  .on("error", (error: Error) => {
    console.error("Error occured: " + error.message);
  });
