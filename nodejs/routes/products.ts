import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { getAllProductsOpts } from "../options/products";
import getAllProducts from "../controllers/products/getAllProducts";

function productsRoutes(instance: FastifyInstance, options: FastifyPluginOptions, done: () => void) {
  instance.get("/", getAllProductsOpts, getAllProducts(instance));

  done();
}

export default productsRoutes;