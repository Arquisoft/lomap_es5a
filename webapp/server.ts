import express, { Application } from "express";
import cors from "cors";
//for using an import here we need to configure the tsconfig.json
//setting the option module to commonjs

const app: Application = express();
const port = 3000;

app.use(express.static("build"));

app.use(
  cors({
    origin: true,
  })
);

app
  .listen(port, (): void => {
    console.log("Webapp started on port " + port);
  })
  .on("error", (error: Error) => {
    console.log("Error occured: " + error.message);
  });
