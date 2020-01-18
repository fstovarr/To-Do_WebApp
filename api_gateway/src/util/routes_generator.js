import { ERROR_CODES } from "./constants";
import Http from "./http_common";

const processRequest = (fn, req, res, next, public_route = false) => {
  Promise.resolve(fn(req, res, next)).catch(async function (error) {
    if (error.response !== undefined && error.response.status !== undefined) {
      res.status(error.response.status).json({ error: error.response.data });
    }
    else {
      res.status(500).json({ error: error.message });
    }
  });
};

const errorHandler = (
  fn,
  public_route,
  multerFn = (req, res, next) =>
    processRequest(fn, req, res, next, public_route)
) => (req, res, next) => {
  multerFn(req, res, function (err) {
    if (err !== undefined) res.status(500).json({ error: `${err}` });
    processRequest(fn, req, res, next, public_route);
  });
};

export const generateRoutes = function (api, routes) {
  for (let route of routes) {
    switch (route.type) {
      case "POST":
        api.post(route.name, errorHandler(route.controller, route.public));
        break;
      case "GET":
        api.get(route.name, errorHandler(route.controller, route.public));
        break;
      case "PUT":
        api.put(route.name, errorHandler(route.controller, route.public));
        break;
      case "PATCH":
        api.patch(route.name, errorHandler(route.controller, route.public));
        break;
      case "DELETE":
        api.delete(route.name, errorHandler(route.controller, route.public));
        break;
    }
  }
  return api;
};
