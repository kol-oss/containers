import fastify from "fastify";
import productsRoutes from "./routes/products";

const PORT = 8080;

const server = fastify({
  logger: true
});

server.register(productsRoutes, {
  prefix: "/products"
});

server.listen({
  port: PORT
}, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server is running on ${address}`);
});