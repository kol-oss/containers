import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

function getAllProducts(instance: FastifyInstance) {
  return async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      return reply.code(200).send(
        "Hello world!!!"
      );
    } catch(error: any) {
      return reply.code(500).send({
        error: {
          message: error.message,
          errorCode: error.errorCode
        }
      });
    }
  };
}

export default getAllProducts;