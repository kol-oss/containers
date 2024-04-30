import { RouteShorthandOptions } from "fastify";
import { errorInfoObject } from "./globals";

export const getAllProductsOpts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: "string"
      },
      400: errorInfoObject,
      500: errorInfoObject
    }
  }
};