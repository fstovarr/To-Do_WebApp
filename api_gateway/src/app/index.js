import express from "express";
import routes from "./routes";
import { generateRoutes } from "../util/routes_generator";

const app = express();

for (let route of routes) {
  let api = express();
  generateRoutes(api, route.children);
  app.use(route.name, api);
}

export default app;
