import express from "express";
import bodyParser from "body-parser";
import routes from "./src/app";
import cors from "cors";

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1/", routes);

app.listen(8001, () =>
  console.log(`API Gateway listening on port 8001`)
);
